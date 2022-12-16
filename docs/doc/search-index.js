var searchIndex = JSON.parse('{\
"fun_collections":{"doc":"“Functional” collections that provide memory-efficient …","t":[3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,14,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["FunMap","FunStack","borrow","borrow","borrow_mut","borrow_mut","clear","clone","clone","clone_into","clone_into","cmp","contains","contains","default","default","diff","diff_with","drop","entry","eq","extend","extend","first_key_value","fmap","fmt","fmt","for_each_mut","from","from","from","from","from_iter","from_iter","get","get_mut","insert","intersect","intersect_with","into","into","into_iter","is_empty","is_empty","iter","iter","iter_mut","join","join_with","last_key_value","len","len","new","new","partial_cmp","pop","push","remove","remove","split","split_off","split_off","sym_diff","sym_diff_with","to_owned","to_owned","top","top_mut","try_from","try_from","try_into","try_into","type_id","type_id","union","union_with"],"q":["fun_collections","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","Implements a stack with constant time <code>push</code>, <code>pop</code>, and <code>clone</code> …","","","","","Removes all elements from the stack.","","","","","","","Tests if the element x occurs in the stack.","","","Builds a map with entries from the LHS map with keys that …","Removes entries with keys from the other map.","","","","","Pushes elements from an iterator onto the stack.","Returns the key-value pair for the least key in the map","Creates a FunMap from a list of tuples.","","Prints the <code>FunStack</code> to the supplied <code>Formatter</code>.","Applies a function to every key-value pair in the map.","Returns the argument unchanged.","","","Returns the argument unchanged.","","","Returns a reference to the value associated with k.","Returns a mutable reference to the value associated with k.","Inserts a key-value pair in the map.","Creates a map with entries from the LHS that have keys in …","Discard entries that do not have a key from the other map.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Converts the <code>FunStack&lt;T&gt;</code> into an <code>Iterator&lt;T&gt;</code>.","","Tests if there are any elements in the stack.","","Creates an iterator from the top to the bottom elements of …","Returns an iterator with mutable references.","Build a new map by joining two maps around a pivot key …","Join the RHS into this map.","Returns the key-value pair for the greatest key in the map","","Returns the number of elements in the stack.","","Creates an empty stack.","","Returns the top of the stack or <code>None</code> if empty.","Pushes an element on top of the stack.","Removes a key from a map and returns the unmapped value.","Removes and returns the element at the given index.","Splits a map on a key returning one map with entries less …","Moves all elements greater than a key into a new map …","Splits the stack at the given index, retaining the bottom …","Builds a map with entries from the LHS and RHS maps that …","Removes entries with keys from the other map and adds …","","","Returns a reference to the top of the stack, or <code>None</code> if …","Returns a mutable ref to the top of the stack or <code>None</code> if …","","","","","","","Builds a map with entries from both maps, with entries …","Adds the entries from other that don’t have keys in this …"],"i":[0,0,3,2,3,2,2,3,2,3,2,2,3,2,3,2,3,3,2,3,2,3,2,3,0,3,2,3,3,3,2,2,3,2,3,3,3,3,3,3,2,2,3,2,3,2,2,3,3,3,3,2,3,2,2,2,2,3,2,3,3,2,3,3,3,2,2,2,3,2,3,2,3,2,3,3],"f":[0,0,[[]],[[]],[[]],[[]],[[[2,[1]]]],[[[3,[1,1]]],[[3,[1,1]]]],[[[2,[1]]],[[2,[1]]]],[[]],[[]],[[[2,[[0,[1,4]]]],[2,[[0,[1,4]]]]],5],[[[3,[[0,[1,4]],1]]],6],[[[2,[1]]],6],[[],[[3,[[0,[1,4]],1]]]],[[],[[2,[1]]]],[[[3,[[0,[1,4]],1]],[3,[[0,[1,4]],1]]],[[3,[[0,[1,4]],1]]]],[[[3,[[0,[1,4]],1]],[3,[[0,[1,4]],1]]]],[2],[[[3,[[0,[1,4]],1]],[0,[1,4]]],[[0,[[0,[1,4]],1]]]],[[[2,[[0,[1,7]]]],[2,[[0,[1,7]]]]],6],[[[3,[[0,[1,4]],1]],8]],[[[2,[1]],8]],[[[3,[[0,[1,4]],1]]],9],0,[[[3,[[0,[1,10]],[0,[1,10]]]],11],12],[[[2,[[0,[1,10]]]],11],[[14,[13]]]],[[[3,[[0,[1,4]],1]],15]],[[]],[[],3],[[[16,[1]]],[[2,[1]]]],[[]],[8,[[3,[[0,[1,4]],1]]]],[8,[[2,[1]]]],[[[3,[[0,[1,4]],1]]],9],[[[3,[[0,[1,4]],1]]],9],[[[3,[[0,[1,4]],1]],[0,[1,4]],1],[[9,[1]]]],[[[3,[[0,[1,4]],1]],[3,[[0,[1,4]],1]]],[[3,[[0,[1,4]],1]]]],[[[3,[[0,[1,4]],1]],[3,[[0,[1,4]],1]]]],[[]],[[]],[[[2,[1]]]],[[[3,[[0,[1,4]],1]]],6],[[[2,[1]]],6],[[[3,[[0,[1,4]],1]]],[[0,[[0,[1,4]],1]]]],[[[2,[1]]],[[0,[1]]]],[[[2,[1]]],[[0,[1]]]],[[[3,[[0,[1,4]],1]],[0,[1,4]],1,[3,[[0,[1,4]],1]]],[[3,[[0,[1,4]],1]]]],[[[3,[[0,[1,4]],1]],[0,[1,4]],1,[3,[[0,[1,4]],1]]]],[[[3,[[0,[1,4]],1]]],9],[[[3,[[0,[1,4]],1]]],17],[[[2,[1]]],17],[[],[[3,[[0,[1,4]],1]]]],[[],[[2,[1]]]],[[[2,[[0,[1,18]]]],[2,[[0,[1,18]]]]],[[9,[5]]]],[[[2,[1]]],[[9,[1]]]],[[[2,[1]],1]],[[[3,[[0,[1,4]],1]]],[[9,[1]]]],[[[2,[1]],17],1],[[[3,[[0,[1,4]],1]]]],[[[3,[[0,[1,4]],1]]]],[[[2,[1]],17],[[2,[1]]]],[[[3,[[0,[1,4]],1]],[3,[[0,[1,4]],1]]],[[3,[[0,[1,4]],1]]]],[[[3,[[0,[1,4]],1]],[3,[[0,[1,4]],1]]]],[[]],[[]],[[[2,[1]]],9],[[[2,[1]]],9],[[],14],[[],14],[[],14],[[],14],[[],19],[[],19],[[[3,[[0,[1,4]],1]],[3,[[0,[1,4]],1]]],[[3,[[0,[1,4]],1]]]],[[[3,[[0,[1,4]],1]],[3,[[0,[1,4]],1]]]]],"p":[[8,"Clone"],[3,"FunStack"],[3,"FunMap"],[8,"Ord"],[4,"Ordering"],[15,"bool"],[8,"PartialEq"],[8,"IntoIterator"],[4,"Option"],[8,"Debug"],[3,"Formatter"],[6,"Result"],[3,"Error"],[4,"Result"],[8,"FnMut"],[3,"Vec"],[15,"usize"],[8,"PartialOrd"],[3,"TypeId"]]},\
"lazy_clone_collections":{"doc":"“Functional” collections that provide memory-efficient …","t":[3,3,6,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["AvlMap","AvlSet","BTreeMap","Stack","bitand","bitor","bitxor","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clear","clear","clear","clone","clone","clone","clone_into","clone_into","clone_into","cmp","cmp","contains","contains","contains","default","default","default","diff","diff_with","difference","drop","entry","eq","eq","extend","extend","extend","first","first_key_value","fmt","fmt","for_each","for_each_mut","from","from","from","from","from","from_iter","from_iter","from_iter","get","get","get_mut","hash","index","insert","insert","intersect","intersect_with","intersection","into","into","into","into_iter","is_disjoint","is_empty","is_empty","is_empty","is_subset","is_superset","iter","iter","iter","iter_mut","iter_mut","join","join_with","keys","last","last_key_value","len","len","len","new","new","new","new_diff","new_intersection","new_sym_diff","new_union","partial_cmp","partial_cmp","pop","push","remove","remove","remove","replace","retain","split_off","split_off","split_off","sub","sym_diff","sym_diff_with","symmetric_difference","take","to_owned","to_owned","to_owned","top","top_mut","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","union","union","union_with","values","values_mut"],"q":["lazy_clone_collections","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A map from keys to values sorted by key.","A sorted set of values.","","Implements a stack with constant time <code>push</code>, <code>pop</code>, and <code>clone</code> …","","","","","","","","","","Removes all elements from the stack.","Drops all elements from the map.","Removes all the entries from self.","","","","","","","","","Tests if the element x occurs in the stack.","Tests if self contains an entry for the given key.","Tests if self contains the given value.","","","","Builds a map with entries from the LHS map with keys that …","Removes entries with keys from the other map.","Returns an iterator over elements in self and not in other","","Returns an Entry that simplifies some update operations.","","","Pushes elements from an iterator onto the stack.","","","Returns the least value in the set.","Returns the key-value pair for the least key in the map","Prints the <code>Stack</code> to the supplied <code>Formatter</code>.","","Applies f to each entry of the map in order of the keys.","Applies a function to every key-value pair in the map.","","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","","","","Returns a reference to the value associated with k.","Returns a reference to the element matching value, if it …","Returns a mutable reference to the value associated with k.","","","Inserts a key-value pair in the map.","Inserts the given value and returns true if self did not …","Creates a map with entries from the LHS that have keys in …","Discard entries that do not have a key from the other map.","Returns an iterator of the values that are in both self …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Converts the <code>Stack&lt;T&gt;</code> into an <code>Iterator&lt;T&gt;</code>.","Returns true if self and other have no common values and …","Tests if there are any elements in the stack.","Returns true if self contains no entries, false otherwise.","Returns true if self is the empty set, false otherwise.","Tests if self is a subset of other.","tests if self is a superset of other.","Creates an iterator from the top to the bottom elements of …","Creates an iterator over the map entries, sorted by key.","Returns an iterator over self’s values in sorted order.","Returns an iterator with mutable references.","Returns iterator of the map’s entries, sorted by key, …","Build a new map by joining two maps around a pivot key …","Join the RHS into this map.","Produces an iterator over the keys of the map, in sorted …","Returns the greatest value in self.","Returns the key-value pair for the greatest key in the map","Returns the number of elements in the stack.","Returns the number of entries in self.","Returns the number of elements in self.","Creates an empty stack.","Creates a new, empty map.","Returns a new, empty set.","Creates a new set with the elements of lhs that are not in …","Creates a new set with the elements of lhs that are also …","Creates a new set with the elements that are in lhs or rhs …","Creates a new set with the elements of both lhs and rhs.","","","Returns the top of the stack or <code>None</code> if empty.","Pushes an element on top of the stack.","Removes and returns the element at the given index.","Removes a key from a map and returns the unmapped value.","Removes the given value from self returning true if the …","Replace and return the matching value in the map.","Retain values for which f returns true and discard others","Splits the stack at the given index, retaining the bottom …","Moves all elements greater than or equal to the provided …","Removes all elements greater or equal to key and returns …","","Builds a map with entries from the LHS and RHS maps that …","Removes entries with keys from the other map and adds …","Returns an iterator over elements in self or other but not …","Removes and returns the set member that matches value.","","","","Returns a reference to the top of the stack, or <code>None</code> if …","Returns a mutable ref to the top of the stack or <code>None</code> if …","","","","","","","","","","Builds a map with entries from both maps, with entries …","Returns an iterator over the elements of self and other, …","Adds the entries from other that don’t have keys in this …","Produces an iterator over the values of the map, ordered …","Returns an iterator of mutable references to the map’s …"],"i":[0,0,0,0,1,1,1,3,4,1,3,4,1,3,4,1,3,4,1,3,4,1,3,4,3,4,1,3,4,1,4,4,1,3,4,3,4,3,4,1,1,4,3,4,4,4,3,3,4,4,1,3,4,1,4,1,4,4,4,4,1,4,4,1,3,4,1,3,1,3,4,1,1,1,3,4,1,3,4,4,4,4,1,4,3,4,1,3,4,1,1,1,1,1,3,4,3,3,3,4,1,1,1,3,4,1,1,4,4,1,1,3,4,1,3,3,3,4,1,3,4,1,3,4,1,4,1,4,4,4],"f":[0,0,0,0,[[1,1]],[[1,1]],[[1,1]],[[]],[[]],[[]],[[]],[[]],[[]],[[[3,[2]]]],[4],[1],[[[3,[2]]],[[3,[2]]]],[[[4,[2,2]]],[[4,[2,2]]]],[[[1,[2]]],[[1,[2]]]],[[]],[[]],[[]],[[[3,[[0,[2,5]]]],[3,[[0,[2,5]]]]],6],[[4,4],6],[[[3,[2]]],7],[4,7],[1,7],[[],[[3,[2]]]],[[],[[4,[8,8]]]],[[],[[1,[8]]]],[[4,4],4],[[4,4]],0,[3],0,[[[3,[[0,[2,9]]]],[3,[[0,[2,9]]]]],7],[[4,4],7],[[[3,[2]],10]],[[[4,[[0,[2,5]],2]],10]],[[[1,[[0,[2,5]]]],10]],[1,11],[4,11],[[[3,[[0,[2,12]]]],13],[[15,[14]]]],[[[4,[[0,[2,12]],[0,[2,12]]]],13],16],[[4,17]],[[4,17]],[[[18,[2]]],[[3,[2]]]],[[]],[[]],[[],4],[[]],[10,[[3,[2]]]],[10,[[4,[[0,[2,5]],2]]]],[10,[[1,[[0,[2,5]]]]]],[4,11],[1,11],[4,11],[4],[4],[4,11],[1,7],[[4,4],4],[[4,4]],0,[[]],[[]],[[]],[[[3,[2]]]],[[1,1],7],[[[3,[2]]],7],[4,7],[1,7],[[1,1],7],[[1,1],7],[[[3,[2]]],[[0,[2]]]],0,[1,19],[[[3,[2]]],[[0,[2]]]],0,[[4,4],4],[[4,4]],[4,19],[1,11],[4,11],[[[3,[2]]],20],[4,20],[1,20],[[],[[3,[2]]]],[[],4],[[],1],[[1,1],1],[[1,1],1],[[1,1],1],[[1,1],1],[[[3,[[0,[2,21]]]],[3,[[0,[2,21]]]]],[[11,[6]]]],[[4,4],[[11,[6]]]],[[[3,[2]]],[[11,[2]]]],[[[3,[2]],2]],[[[3,[2]],20],2],[4,11],[1,7],[1,11],[1],[[[3,[2]],20],[[3,[2]]]],[4,4],[1,1],[[1,1]],[[4,4],4],[[4,4]],0,[1,11],[[]],[[]],[[]],[[[3,[2]]],11],[[[3,[2]]],11],[[],15],[[],15],[[],15],[[],15],[[],15],[[],15],[[],22],[[],22],[[],22],[[4,4],4],0,[[4,4]],[4,19],[4,19]],"p":[[3,"AvlSet"],[8,"Clone"],[3,"Stack"],[3,"AvlMap"],[8,"Ord"],[4,"Ordering"],[15,"bool"],[8,"Default"],[8,"PartialEq"],[8,"IntoIterator"],[4,"Option"],[8,"Debug"],[3,"Formatter"],[3,"Error"],[4,"Result"],[6,"Result"],[8,"FnMut"],[3,"Vec"],[8,"Iterator"],[15,"usize"],[8,"PartialOrd"],[3,"TypeId"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
