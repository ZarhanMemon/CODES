

// 📘 Circular Linked List in C++

// A Circular Linked List is a variation of a linked list
// where the last node points back to the head instead of null.
// This creates a circular loop, allowing traversal to continue infinitely.
// Useful in applications like round-robin scheduling or playlists.

 #include <iostream>
using namespace std;

// 🧱 Node structure for Circular Linked List
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


// 📦 Linked List class to perform circular linked list operations
class LinkedList
{
public:
    Node *head;
    Node *tail;

    LinkedList()
    {
        head = tail = nullptr;
    }

    // 🔁 Connect tail->next to head to make it circular
    void intoCircularLL()
    {
        if (head != nullptr)
        {
            tail->next = head;
        }
    }

    // ➕ Insert node at the END of the circular list
    void addNodeAtEND(int data)
    {
        Node *newNode = new Node(data);

        if (head == nullptr)
        {
            head = tail = newNode;
            tail->next = head; // Make it circular
        }
        else
        {
            tail->next = newNode; // Current tail points to new node
            tail = newNode;       // New node becomes new tail
            tail->next = head;    // Maintain circular link
        }
    }


    // ➕ Insert node at the HEAD of the circular list
    void addNodeAtHead(int data)
    {
        Node *newNode = new Node(data);

        if (head == nullptr)
        {
            head = tail = newNode;
            tail->next = head; // Make it circular
        }
        else
        {
            newNode->next = head; // New node points to old head
            head = newNode;       // New node becomes new head
            tail->next = head;    // Tail must point to new head
        }
    }



    // ❌ Delete node from HEAD
    void popNodeAtHead()
    {
        if (head != nullptr)
        {
            cout << head->data << " is popped from head\n"; // Output: 322 is popped from head

            Node *temp = head;    // Store old head temporarily
            head = head->next;    // Move head to next node
            tail->next = head;    // Update circular link
            temp->next = nullptr; // Break old head link
            delete temp;          // Delete old head node
        }
    }


    // ❌ Delete node from TAIL
    void popNodeAtTail()
    {
        if (tail != nullptr)
        {
            cout << tail->data << " is popped from tail\n"; // Output: 22 is popped from tail

            Node *temp = head;

            while (temp->next != tail)
            {
                temp = temp->next; // Find second last node
            }

            temp->next = head; // Make new tail's next point to head

            delete tail; // Delete old tail node
            tail = temp; // Update tail to second last node
        }
    }

    // 📤 Print circular linked list
    void print()
    {
        if (head == nullptr)
        {
            cout << "List is empty";
            return;
        }
        else
        {
            Node *temp = head;
            do
            {
                cout << temp->data << "->"; // Print current node data till tail
                temp = temp->next;
            } while (temp != head);

            cout << "(back to " << head->data << ")\n"; // Shows circularity by pointing back to head
        }
    }
};

int main()
{
    LinkedList list;

    list.intoCircularLL(); // 🔁 No output here (sets tail->next = head)

    list.addNodeAtEND(1);  // List: 1
    list.addNodeAtEND(2);  // List: 1->2
    list.addNodeAtEND(22); // List: 1->2->22

    list.addNodeAtHead(32);  // List: 32->1->2->22
    list.addNodeAtHead(322); // List: 322->32->1->2->22

    list.popNodeAtHead(); // Output: 322 is popped from head
                          // List: 32->1->2->22

    list.popNodeAtTail(); // Output: 22 is popped from tail
                          // List: 32->1->2

    list.print(); // Output: 32->1->2->(back to 32)

    return 0;
}


// IN sertion / deletion at specific positions can be added similarly
// This implementation provides basic operations for a circular linked list.