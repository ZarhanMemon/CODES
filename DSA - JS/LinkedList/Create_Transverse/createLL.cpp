


#include <iostream>
using namespace std;




// ✅ Node structure
struct Node {
    int data;           // stores the value of the node
    Node* nextNode;     // pointer to the next node


    // ✅ Constructor to initialize node
    Node(int val) {
        data = val;             // assign the value to the data field
        nextNode = nullptr;     // initially, the node doesn’t point to any other node
    }
};



int main() {


    // ✅ Step 1: Create the first node manually
    Node* first = new Node(1);      // creates [1 | null]


    // ✅ Step 2: Create second node and link it
    Node* sec = new Node(2);        // creates [2 | null]
    first->nextNode = sec;          // link: first → second


    // ✅ Step 3: Create third node and link it
    Node* third = new Node(3);      // creates [3 | null]
    sec->nextNode = third;          // link: second → third


    // ✅ Step 4: Traverse and print the linked list
    Node* temp = first;             // start from the head node

    while (temp != nullptr) {       // loop till end of list (nullptr)
        if (temp->data) {           // if data exists (non-zero), print it
            cout << temp->data << "->";
        }
        temp = temp->nextNode;      // move to the next node
    }

    
    // ✅ Print NULL to indicate end of list
    cout << "Null\n" << endl;

    return 0;
}
