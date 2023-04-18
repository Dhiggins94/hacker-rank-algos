// the problem  04/17

// Given a pointer to the head of a linked list and a specific position, determine the data value at that position. Count backwards from the tail node. The tail is at postion 0, its parent is at 1 and so on


function getNode(llist, positionFromTail) {
  // Write your code here
  // the list is the head of the linked list and we set it as the "current" value
let current = llist 
// we set variables for the "previous value" and the "next"value so we can define them later.
let prev
let next
// we use a while loop which says. while the current of the head exist, we define the next variable as the current.next(value), set the current.next as the "previous" value,  define the "previous" value as the "current"(value), then define the current(value) as the next(value).
// this defines positions on the linked list and as the head counts down the value will always change to define which is the previous and the next values on the list and to move accordingly.
while(current){
  next = current.next
  current.next = prev
  prev = current;
  current = next;
}
// lastly we loop throught the "position from taill and define the previous as "previous next" so we can actually count backwards and move from the next previous node/value and then return that node using prev.data (.data is how we get our info back on a linked list)
for(let i = 0; i< positionFromTail; i++){
  prev = prev.next;
}
return prev.data
}