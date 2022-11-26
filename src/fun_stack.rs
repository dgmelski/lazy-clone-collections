use std::rc::Rc;

struct List<T> {
    val: T,
    next: Option<Rc<List<T>>>,
}

type OptList<T> = Option<Rc<List<T>>>;

#[derive(Clone)]
pub struct FunStack<T> {
    sz: usize,
    list: OptList<T>,
}

// We could implement the iterator to clone the Rc links and the iterated items.
// This would allow the iterator to outlive the iterated stack or for the stack
// to be updated during iteration.  However, you can achieve the same effect
// by iterating a clone of the stack.  We use references because it should be
// more efficient than cloning Rc's.
pub struct FunStackIter<'a, T> {
    next: &'a OptList<T>,
}

impl<'a, T> Iterator for FunStackIter<'a, T>
where
    T: 'a,
{
    type Item = &'a T;

    fn next(&mut self) -> Option<Self::Item> {
        match &self.next {
            Some(rc) => {
                let ret = &rc.val;
                self.next = &rc.next;
                Some(ret)
            }
            None => None,
        }
    }
}

// TODO: Can we get rid of Copy?
impl<T: Copy> FunStack<T> {
    pub fn new() -> Self {
        FunStack { sz: 0, list: None }
    }

    pub fn iter<'a>(&'a self) -> FunStackIter<'a, T> {
        FunStackIter { next: &self.list }
    }

    pub fn push(&mut self, val: T) -> () {
        self.list = Some(Rc::new(List {
            val,
            next: self.list.take(),
        }));
        self.sz += 1;
    }

    pub fn top(&self) -> Option<&T> {
        self.list.as_ref().map(|n| &n.val)
    }

    pub fn pop(&mut self) -> Option<T> {
        match self.list.as_mut().take() {
            Some(rc) => {
                self.sz -= 1;

                // attempt to avoid unnecessary Rc updates
                match Rc::get_mut(rc) {
                    Some(hd) => {
                        let ret = Some(hd.val);
                        self.list = hd.next.take();
                        ret
                    }

                    None => {
                        let ret = Some(rc.val);
                        self.list = rc.next.clone();
                        ret
                    }
                }
            }

            None => None,
        }
    }

    pub fn len(&self) -> usize {
        self.sz
    }
}

#[cfg(test)]
mod tests {
    extern crate quickcheck;
    use quickcheck::quickcheck;
    use std::cmp::Ordering::*;
    use super::*;

    #[test]
    fn diff_hd_shared_tl() {
        let mut s = FunStack::new();
        s.push(1);
        s.push(2);

        let mut s2 = s.clone();
        s.push(3);
        s2.push(4);

        assert_eq!(s.pop(), Some(3));
        assert_eq!(s.pop(), Some(2));
        assert_eq!(s.pop(), Some(1));
        assert_eq!(s2.pop(), Some(4));
        assert_eq!(s2.pop(), Some(2));
        assert_eq!(s2.pop(), Some(1));
    }

    #[test]
    fn iter_test() {
        let mut s = FunStack::new();
        s.push('a');
        s.push('b');
        s.push('c');
        for (&c, d) in s.iter().zip(vec!['c', 'b', 'a']) {
            assert_eq!(c, d);
        }
    }

    #[test]
    fn len_test() {
        let mut s = FunStack::new();
        assert_eq!(s.len(), 0);
        s.push(&"abc");
        assert_eq!(s.len(), 1);
        assert_eq!(s.pop(), Some(&"abc"));
        assert_eq!(s.len(), 0);
    }

    quickcheck! {
        fn qc_cmp_with_vec(xs: Vec<i32>) -> bool {
            let mut fun_stk = FunStack::new();
            let mut vec_stk = Vec::new();

            for &i in xs.iter() {
                if i < 0 {
                    assert_eq!(fun_stk.pop(), vec_stk.pop());
                } else {
                    fun_stk.push(i);
                    vec_stk.push(i);
                }
                assert_eq!(fun_stk.len(), vec_stk.len());
            }

            match fun_stk.iter().cmp(vec_stk.iter().rev()) {
                Equal => true,
                _ => false,
            }
        }
    }
}
