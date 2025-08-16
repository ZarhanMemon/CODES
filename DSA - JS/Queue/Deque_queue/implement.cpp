// 📌 DEQueue (Double Ended Queue) using Linked List in C++

// 📖 DEQueue allows insertion and deletion from both FRONT and REAR ends.
//     👉 It works like a line where people can enter/exit from either side.

//  HEAD in LL = Front of the deque
//  TAIL in LL = Rear of the deque

/*
--------------------------------------------------
Theory:
- A DEQueue (Double Ended Queue) is a data structure in which insertion and
  deletion can be performed from both the front and the rear.
- It can be implemented using arrays or linked lists.
- Using a linked list avoids the need for shifting elements during insertion or deletion.

Pointers:
- front → points to the first node
- rear  → points to the last node

Key Operations & Pseudocode:
1. push_front(value):
   - Create new node
   - If empty: front = rear = newNode
   - Else: newNode->next = front, front = newNode

2. push_rear(value):
   - Create new node
   - If empty: front = rear = newNode
   - Else: rear->next = newNode, rear = newNode

3. pop_front():
   - If empty: print "empty"
   - If only one element: delete front, set front=rear=nullptr
   - Else: temp = front->next, delete front, front = temp

4. pop_rear():
   - If empty: print "empty"
   - If only one element: delete rear, set front=rear=nullptr
   - Else: traverse to second-last node, delete rear, update rear

5. frontNode():
   - If not empty: print front->data
   - Else: print "empty"

6. rearNode():
   - If not empty: print rear->data
   - Else: print "empty"

Advantages:
- No shifting of elements (linked list based)
- Allows insertion/deletion at both ends efficiently
--------------------------------------------------
*/

#include <iostream>
using namespace std;

// 🔹 Node structure representing each element in the deque
struct Node
{
    int data;
    Node *next;

    Node(int value)
    {
        data = value;
        next = nullptr;
    }
};

// 🔸 DEQue class manages all operations
class DEQue
{

private:
    Node *front; // 🟢 Points to the front node
    Node *rear;  // 🔴 Points to the rear node

public:
    // 🚀 Constructor: initializes empty deque
    DEQue()
    {
        front = rear = nullptr;
    }

    // ✅ Insert element at front
    void push_front(int value)
    {
        Node *newNode = new Node(value); // 🆕 Create new node
        cout << "\nPushing to front: " << value << endl;

        if (front == nullptr)
        {
            // ⛔ Deque is empty
            front = rear = newNode;
            return;
        }

        newNode->next = front; // 🔗 Link new node to old front
        front = newNode;       // 🏁 Move front to new node
    }

    // ✅ Insert element at rear
    void push_rear(int value)
    {
        Node *newNode = new Node(value); // 🆕 Create new node
        cout << "\nPushing to rear: " << value << endl;

        if (rear == nullptr)
        {
            // ⛔ Deque is empty
            front = rear = newNode;
            return;
        }

        rear->next = newNode; // 🔗 Link current rear to new node
        rear = newNode;       // 🔄 Update rear pointer
    }

    // ❌ Remove element from front
    void pop_front()
    {
        if (front == nullptr)
        {
            cout << "\nDeque is empty. Cannot pop from front." << endl;
            return;
        }

        cout << "\nPopping from front: " << front->data << endl;

        if (front == rear)
        {
            // 🧍 Only one element
            delete front;
            front = rear = nullptr;
            return;
        }

        Node *nextFrontNode = front->next; // 👉 Store next node
        front->next = nullptr;             // 🔌 Disconnect old front
        delete front;                      // 🗑️ Free memory
        front = nextFrontNode;             // 🔁 Move front ahead
    }

    // ❌ Remove element from rear
    void pop_rear()
    {
        if (rear == nullptr)
        {
            cout << "\nDeque is empty. Cannot pop from rear." << endl;
            return;
        }

        cout << "\nPopping from rear: " << rear->data << endl;

        if (front == rear)
        {
            // 🧍 Only one element
            delete rear;
            front = rear = nullptr;
            return;
        }

        Node *temp = front;

        // 🔁 Traverse to second last node
        while (temp->next != rear)
        {
            temp = temp->next;
        }

        Node *prevRearNode = temp;    // ⏪ Second last node
        prevRearNode->next = nullptr; // 🔌 Disconnect last node
        delete rear;                  // 🗑️ Delete current rear
        rear = prevRearNode;          // 🔄 Update rear pointer
    }

    // 🔍 Show front element
    void frontNode()
    {
        if (front != nullptr)
            cout << "\nFront element: " << front->data << endl;
        else
            cout << "\nDeque is empty." << endl;
    }

    // 🔍 Show rear element
    void rearNode()
    {
        if (rear != nullptr)
            cout << "Rear element: " << rear->data << endl;
        else
            cout << "Deque is empty." << endl;
    }

    // 🖨️ Print the full deque
    void print()
    {
        if (front == nullptr)
        {
            cout << "\nFront -> nullptr <- Rear" << endl;
            return;
        }

        Node *temp = front;

        cout << "\nFRONT-> ";
        while (temp != nullptr)
        {
            cout << "[" << temp->data << "]";
            if (temp->next != nullptr)
                cout << " -> ";
            temp = temp->next;
        }
        cout << " <-REAR\n";
    }
};

int main()
{
    DEQue deque;

    // ---------------------------------------------
    // Operation: push_front(10)
    // Deque: FRONT -> [10] <- REAR
    deque.push_front(10);

    // ---------------------------------------------
    // Operation: push_front(5)
    // Deque: FRONT -> [5] -> [10] <- REAR
    deque.push_front(5);

    deque.print();

    // ---------------------------------------------
    // Operation: push_rear(15)
    // Deque: FRONT -> [5] -> [10] -> [15] <- REAR
    deque.push_rear(15);

    // ---------------------------------------------
    // Operation: push_rear(20)
    // Deque: FRONT -> [5] -> [10] -> [15] -> [20] <- REAR
    deque.push_rear(20);

    deque.print();

    // ---------------------------------------------
    // Front element: 5
    deque.frontNode();

    // Rear element: 20
    deque.rearNode();

    // ---------------------------------------------
    // Operation: pop_front()
    // Removing 5
    // Deque becomes: FRONT -> [10] -> [15] -> [20] <- REAR
    deque.pop_front();

    // ---------------------------------------------
    // Operation: pop_rear()
    // Removing 20
    // Deque becomes: FRONT -> [10] -> [15] <- REAR
    deque.pop_rear();

    // ---------------------------------------------
    // Operation: pop_front()
    // Removing 10
    // Deque becomes: FRONT -> [15] <- REAR
    deque.pop_front();

    // ---------------------------------------------
    // Operation: pop_rear()
    // Removing 15
    // Deque becomes EMPTY: FRONT -> nullptr, REAR -> nullptr
    deque.pop_rear();

    deque.print(); // prints: Deque is empty.

    return 0;
}
