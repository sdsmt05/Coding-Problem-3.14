export class ListNode{
    private value!: number;
    private next!: ListNode;
    private hasBeenVisited!: boolean;

    constructor(val: number){
        this.value = val;
        this.hasBeenVisited = false;
    }

    setValue(val: number){
        this.value = val;
    }
    setNext(node: ListNode){
        this.next = node;
    }
    setVisited(flag: boolean){
        this.hasBeenVisited = flag;
    }

    getValue(){
        return this.value;
    }
    getNext(){
        return this.next;
    }
    getVisited(){
        return this.hasBeenVisited;
    }
}