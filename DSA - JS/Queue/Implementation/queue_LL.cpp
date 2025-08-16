// 📌 Queue Implementation using Linked List in C++

// 📖 A Queue is a linear data structure that follows the FIFO (First In First Out) principle.
//      👉 The element inserted first is the one to be removed first.
//      👉 Think of it like people standing in line: the first person in line is served first.

/*
📌 Applications of Queue:

- Printer job scheduling → Prints documents in arrival order (FIFO)
- Call center waiting lines → Serves customers in the order they call
- Ticket booking systems → Processes booking requests sequentially
- CPU & disk scheduling → Allocates tasks in a fair time order
- BFS in graphs/trees → Traverses level by level
- Data buffering → Smooths data flow in IO or streaming
- Message queues in networking → Stores and processes messages in order
*/

/*  👨‍💻 All operations: push (enqueue),
                       pop (dequeue),
                       front ( head elm),
                       print
*/

#include <iostream>
using namespace std;

// 🔹 Node structure representing each element in the queue
struct Node
{
    int data;
    Node *next;

    Node(int val)
    {
        data = val;
        next = nullptr;
    }
};

// 🔸 QueueLL class managing the queue operations
class QueueLL
{
    Node *head; // 🟢 Head points to the front of the queue
    Node *tail; // 🔴 Tail points to the rear of the queue

public:
    // 🚀 Constructor initializes an empty queue
    QueueLL()
    {
        head = tail = nullptr;
    }

    // ✅ Enqueue operation: adds element at the rear
    void push(int data)
    {
        Node *newNode = new Node(data); // 🆕 Create new node with data
        cout << newNode->data << " is added" << endl;

        if (tail == nullptr)
        {                          // ⛔ Queue is empty
            head = tail = newNode; // Set both head and tail to new node
            return;
        }

        tail->next = newNode; // 🔗 Link current tail to new node
        tail = newNode;       // 🔄 Update tail to the new node
    }

    // ❌ Dequeue operation: removes element from the front
    void pop()
    {
        if (head == nullptr)
        { // ⚠️ Queue is empty
            cout << "The queue is empty" << endl;
            return;
        }

        Node *newHeadNode = head->next; // 👉 Store next node
        head->next = nullptr;           // 🔌 Disconnect current head

        cout << head->data << " is popped" << endl;
        delete head; // 🗑️ Free memory of old head

        head = newHeadNode; // ✅ Move head forward

        if (head == nullptr)
        {                   // ⚠️ Queue became empty
            tail = nullptr; // Reset tail also
        }
    }

    // 🔍 View the front element of the queue
    void front()
    {
        if (head == nullptr)
        {
            cout << "The front is null" << endl;
            return;
        }

        Node *frontNode = head; // 📍 front is at head
        cout << frontNode->data << " is front elm" << endl;
    }

    // 🖨️ Print all elements of the queue from front to rear
    void print()
    {
        Node *temp = head;
        cout << "\nFRONT -> ";

        while (temp != nullptr)
        {
            cout << "[ " << temp->data << " ]";
            temp = temp->next;
        }

        cout << " <- REAR\n\n";
    }
};

// 🧪 Driver code to test all operations
int main()
{
    QueueLL queue;

    queue.push(10); // queue:  front -> 10 <- Rear
    queue.push(20); // queue: front -> 10 -> 20 <- Rear
    queue.push(30); // queue: front -> 10 -> 20 -> 30 <- Rear
    queue.print();

    queue.pop();   // 10 removed
    queue.print(); // queue: front -> 20 -> 30 <- Rear

    queue.front(); // front -> 20

    return 0;
}

// Built in Package FOR QUEUE:

// #include <iostream>
//  #include <queue>
//  using namespace std;

// // 🔍 Helper function to visualize the queue
// void printQueue(queue<int> q) {
//     cout << "\nFRONT -> ";
//     while (!q.empty()) {
//         cout << "[ " << q.front() << " ]";
//         q.pop();
//         if (!q.empty()) cout << " --> ";
//     }
//     cout << " <- REAR\n";
// }

// int main() {
//     queue<int> q;

//     q.push(10);   // queue: front -> 10 <- Rear
//     q.push(20);   // queue: front -> 10 -> 20 <- Rear
//     q.push(30);   // queue: front -> 10 -> 20 -> 30 <- Rear

//     printQueue(q); // 🖨️ Show current queue

//     q.pop(); // Remove 10
//     printQueue(q); // 🖨️ Show queue after pop

//     cout << "\nCurrent front element: " << q.front() << "\n"; // Output: 20

//     return 0;
// }
