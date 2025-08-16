

//  Doubly Linked List (DLL)



// A Doubly Linked List is a linear data structure where each node has:
//     🔹 A data part
//     🔹 A pointer to the next node
//     🔹 A pointer to the previous node


//     NULL <- [3] <=> [2] <=> [1] <=> [0] -> NULL
//     (Each node connects in both forward and backward directions)

#include <iostream>
using namespace std;

// 🧱 Node structure for DLL
struct Node
{
    int data;
    Node *next;
    Node *prev;

    Node(int val)
    { // ✅ Constructor: creates a new node with data
        data = val;
        next = prev = nullptr; // ✨ Both pointers set to NULL
    }
};

// 🧵 Doubly Linked List class
class LinkedList
{
public:
    Node *head;
    Node *tail;

    LinkedList()
    { // ✅ Constructor initializes an empty list
        head = tail = nullptr;
    }

    // 🔼 Insertion at Head
    void addNodeAtHead(int data)
    {
        Node *newNode = new Node(data); // ✅ Create a new node with given data
        cout << newNode->data << " is added at head\n";

        if (head == nullptr)
        {                          // 🟡 If list is empty
            head = tail = newNode; // 🔗 New node becomes both head & tail
            return;
        }

        head->prev = newNode; // 🔗 Link old head's prev to new node
        newNode->next = head; // 🔗 Link new node's next to old head
        head = newNode;       // 🎯 Update head to new node
    }

    // 🔽 Insertion at Tail
    void addNodeAtTail(int data)
    {
        Node *newNode = new Node(data); // ✅ Create a new node
        cout << newNode->data << " is added at tail\n";

        if (tail == nullptr)
        {                          // 🟡 If list is empty
            head = tail = newNode; // 🔗 New node becomes both head & tail
        }
        else
        {
            tail->next = newNode; // 🔗 Link old tail to new node
            newNode->prev = tail; // 🔗 New node points back to old tail
            tail = newNode;       // 🎯 Update tail
        }
    }

    // ❌ Deletion at Head
    void popNodeAtHead()
    {
        if (head == nullptr)
        {
            cout << "List is empty\n";
            return;
        }

        Node *newHead = head->next; // 🧠 Store next node
        cout << head->data << " is poped from head\n";

        if (newHead != nullptr)
            newHead->prev = nullptr; // 🔗 Remove link to deleted head

        delete head;    // 🗑️ Delete current head
        head = newHead; // 🎯 Update head

        if (head == nullptr)
            tail = nullptr; // 🚫 List is now empty
    }

    // ❌ Deletion at Tail
    void popNodeAtTail()
    {
        if (tail == nullptr)
        {
            cout << "The List is empty\n";
            return;
        }

        Node *newTail = tail->prev; // 🧠 Store previous node
        cout << tail->data << " is popped from tail\n";

        if (newTail != nullptr)
            newTail->next = nullptr; // 🔗 Remove link to deleted tail

        delete tail;    // 🗑️ Delete current tail
        tail = newTail; // 🎯 Update tail

        if (tail == nullptr)
            head = nullptr; // 🚫 List is now empty
    }

    // 🖨️ Print the list
    void print()
    {
        if (head == nullptr)
        {
            cout << "The list is empty\n";
            return;
        }

        Node *temp = head;
        cout << "\n";
        while (temp != nullptr)
        {
            cout << temp->data << " <=> "; // 🔁 Print each node
            temp = temp->next;
        }
        cout << "Null\n";
    }
};

int main()
{
    LinkedList list;

    list.addNodeAtHead(1); // 🧪 Insert at beginning
    list.addNodeAtHead(2);
    list.addNodeAtHead(3);

    list.addNodeAtTail(0); // 🧪 Insert at end

    list.popNodeAtHead(); // 🧪 Delete from beginning
    list.popNodeAtTail(); // 🧪 Delete from end

    list.print(); // 🖨️ Print the list

    return 0;
}



// 📝 Quick Note: Convert DLL to Circular DLL?
// -------------------------------------------
// 🔄 Just connect the head and tail:
//     ✅ tail->next = head;
//     ✅ head->prev = tail;

// 📌 New Diagram:
//     [1] <=> [2] <=> [3]
//     ^                ^
//     |===============|
