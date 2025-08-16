// ✅ JavaScript Manual Linked List Creation & Traversal

// ✅ Step 1: Create Node class
class Node {
    constructor(data) {
        this.data = data;     // store the value
        this.next = null;     // pointer to the next node (null at start)
    }
}

// ✅ Step 2: Manually create nodes
const first = new Node(1);        // creates [1 | null]

const second = new Node(2);       // creates [2 | null]
first.next = second;              // link: first → second

const third = new Node(3);        // creates [3 | null]
second.next = third;              // link: second → third

// ✅ Step 3: Traverse and print the list
let temp = first;                 // start from the head node
let output = "";

while (temp !== null) {           // loop till we reach end (null)
    if (temp.data) {
        output += temp.data + "->";  // append current node data
    }
    temp = temp.next;             // move to next node
}

output += "Null";                 // mark end of list
console.log(output);              // ✅ Final Output: 1->2->3->Null
