//YOUR CODE HERE
class Box {
    constructor(color, capacity) {
        this.color = color;
        this.capacity = capacity;
        this.contents = [];
    }

    pack(color, capacity) {
        if (this.contents.length === capacity) {
            throw new Error('capacity met');
        } else {    
            const packedBox = new Box(color, capacity);
            this.contents.push(packedBox);
        }
        
    }
}

module.exports = { Box };
