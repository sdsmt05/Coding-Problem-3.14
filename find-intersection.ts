import { ListNode } from "./linked-list";

export function findIntersect(list1: ListNode, list2: ListNode){
    let pointer: ListNode = list1;

    while(pointer !== undefined){
        pointer.setVisited(true);
        pointer = pointer.getNext();
    }

    pointer = list2;

    while(pointer.getVisited() === false && pointer.getNext() !== undefined){
        pointer = pointer.getNext();
    }

    if(pointer.getVisited() === true){
        console.log("Intersection found at:");
        console.log(pointer);
    } else {
        console.log("No intersection found...")
    }
}