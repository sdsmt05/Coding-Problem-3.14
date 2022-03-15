import { findIntersect } from "./find-intersection";
import { ListNode } from "./linked-list";
import { Stack } from "./stack";

// **Problem 1 (Intersection)**

const node1 = new ListNode(3);
const node2 = new ListNode(7);
const node3 = new ListNode(12);
const node4 = new ListNode(23);
const node5 = new ListNode(28);
const node6 = new ListNode(10);
const node7 = new ListNode(33);
const node8 = new ListNode(99);

// Test List 1
node1.setNext(node2);
node2.setNext(node3);
node3.setNext(node4);
node4.setNext(node7);
node7.setNext(node8);

// Test List 2
node5.setNext(node6);
node6.setNext(node7);

findIntersect(node1, node5);


// **Problem 2 (Stack)

const myTestStack: Stack = new Stack();

myTestStack.push(4);
myTestStack.push(8);
myTestStack.push(3);
console.log("Maximum value currently in stack: ", myTestStack.max());
myTestStack.push(10);
myTestStack.push(20);
console.log("Maximum value currently in stack: ", myTestStack.max());
myTestStack.pop();
console.log("Maximum value currently in stack: ", myTestStack.max());
myTestStack.pop();
myTestStack.pop();
myTestStack.pop();
myTestStack.pop();
try {
    myTestStack.pop();
} catch (error) {
    console.log(error);
}
try {
    myTestStack.max();
} catch (error) {
    console.log(error);
}