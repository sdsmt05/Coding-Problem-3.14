export class Stack{
    private values: number[] = [];
    private maxValue: number = 0;

    push(item: number){
        if(this.values.length === 0){
            this.maxValue = item;
            this.values.push(item);
        } else {
            if(item <= this.maxValue){
                this.values.push(item);
            } else {
                this.values.push((2*item)-this.maxValue);
                this.maxValue = item;
            }
        }
    }

    pop(){
        if(this.values.length === 0){
            throw new Error("No values currently in stack...")
        }
        let top = this.values[this.values.length - 1];
        
        if(top > this.maxValue){
            this.maxValue = (2*this.maxValue)-top;
            return this.values.pop();
        } else {
            return this.values.pop();
        }
    }

    max(){
        if(this.values.length === 0){
            throw new Error("No values currently in stack...")
        }
        return this.maxValue; 
    }
}