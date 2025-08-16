#include <iostream>
using namespace std;

// 📚 Stack Using Linked List (C++)


// A stack is a LIFO (Last In First Out) data structure.
// This implementation uses a singly linked list, where the head node represents the top of the stack.


// 🔹 How Each Operation Works:


//   - PUSH (pushAtHead):
//       • Create a new node.
//       • Set its next pointer to the current head.
//       • Update head to this new node (new top of stack).


//   - POP (popAtHead):
//       • If head is null, stack is empty.
//       • Otherwise, remove the head node and update head to the next node.


//   - TOP (top):
//       • If head is null, stack is empty.
//       • Otherwise, the data at head is the top element.


//   - isEmpty:
//       • Checks if head is null (stack is empty).

//   - print:
//       • Traverses from head to null, printing each node's data (top to bottom).


// 🔹 Time Complexity:
//   - All main operations (push, pop, top, isEmpty) are O(1).
//   - Printing is O(n), where n is the number of elements.


// -------------------------------------------

// 🔗 Node structure for Linked List
struct Node {
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

// 📦 Stack implemented using Linked List
class StackinLL {
    Node* head;  // 🟢 Head is the "Top" of Stack
    Node* tail;  // (Optional, not used in logic)

public:
    StackinLL() {
        head = tail = nullptr;
    }

    // ➕ PUSH operation (Insert at head)
    void pushAtHead(int data) {
        Node* newNode = new Node(data); // 🆕 Create new node
        cout << newNode->data << " is added" << endl;

        if (head == nullptr) {          // ✅ If stack is empty
            head = tail = newNode;      // Make newNode both head & tail
            return;
        }

        newNode->next = head;           // 🔗 Link newNode to old head
        head = newNode;                 // ⬆️ Move head to newNode (new top)
    }

    // ➖ POP operation (Remove from head)
    void popAtHead() {
        if (head == nullptr) {
            cout << "The stack is empty" << endl;
            return;
        }

        Node* newHeadNode = head->next; // 🔁 Save next node
        head->next = nullptr;           // 🔌 Disconnect old head
        cout << head->data << " is popped" << endl;
        delete head;                    // ❌ Free memory
        head = newHeadNode;             // ⬆️ Move head to next node
    }

    // 👆 TOP operation (Peek top element)
    void top() {
        if (head == nullptr) {
            cout << "The top is null" << endl;
            return;
        }

        Node* topNode = head;           // 📍 Top is at head
        cout << topNode->data << " is top elm" << endl;
    }

    // ❓ Check if stack is empty
    void isEmpty() {
        if (head == nullptr)
            cout << "The stack is empty" << endl;
        else
            cout << "The stack is not empty" << endl;
    }

    // 📤 Print entire stack from top to bottom
    void print() {
        Node* temp = head;
        cout << "--" << endl;
        while (temp != nullptr) {
            cout << temp->data << endl;
            temp = temp->next;
        }
        cout << "--" << endl;
    }
};

// 🚀 Main function to test stack operations
int main() {
    StackinLL stack;

    stack.pushAtHead(10);   // Stack: 10
    stack.pushAtHead(20);   // Stack: 20 -> 10
    stack.pushAtHead(30);   // Stack: 30 -> 20 -> 10

    stack.popAtHead();      // Removes 30

    stack.top();            // Shows 20 as top
    stack.isEmpty();        // Not empty
    stack.print();          // Print full stack

    return 0;
}



//OUTPUT:
    // 30 is added
    // 20 is added
    // 10 is added
    // 30 is popped
    // 20 is top elm
    // The stack is not empty
    // --
    // 20
    // 10
    // --