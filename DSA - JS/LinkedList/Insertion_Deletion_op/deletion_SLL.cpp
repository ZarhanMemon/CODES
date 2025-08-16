#include <iostream>
using namespace std;

// 🧱 Node Structure
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

// 📦 Linked List Class (Deletion Operations Only)
class LinkedList
{
public:
    Node *head;
    Node *tail;

    LinkedList()
    {
        head = tail = nullptr;
    }

    // 📌 1. Delete the First Node
    // Logic: Move head to the next node and delete the old head

    void deleteFront()
    {
        if (head == nullptr)
            return; // list is empty

        Node *temp = head; // store current head
        head = head->next; // move head to next node
        delete temp;       // delete old head
    }

    // 📌 2. Delete the Last Node
    // Logic: Traverse to second-last node, update its next to null, delete last node

    void deleteBack()
    {
        if (head == nullptr)
            return; // empty list

        if (head->next == nullptr)
        {
            delete head;
            head = tail = nullptr;
            return;
        }

        Node *curr = head;
        while (curr->next->next != nullptr)
        {
            curr = curr->next;
        }

        delete curr->next;    // delete last node
        curr->next = nullptr; // update second-last node's next to null
        tail = curr;          // update tail to second-last node
    }

    // 📌 3. Delete a Node by Value
    // Logic: Change prev's next to skip the node to delete, then delete that node

    void deleteThisElm(int data)
    {
        if (head == nullptr)
            return;

        Node *prev = nullptr;
        Node *curr = head;

        while (curr != nullptr && curr->data != data)
        {
            prev = curr;
            curr = curr->next;
        }

        if (curr == nullptr)
            return; // not found

        if (curr == head)
        {
            head = head->next; // move head if first element is to be deleted
            delete curr;
        }
        else
        {
            prev->next = curr->next; // skip curr node
            delete curr;
        }
    }

    // 📤 Print the Linked List
    void print()
    {
        Node *temp = head;
        while (temp != nullptr)
        {
            cout << temp->data << "->";
            temp = temp->next;
        }
        cout << "Null\n";
    }
};

// 🧪 Main function to test Deletion operations
int main()
{
    LinkedList list;

    list.head = new Node(1);
    list.head->next = new Node(2);
    list.head->next->next = new Node(3);
    list.head->next->next->next = new Node(4);
    list.tail = list.head->next->next->next;

    // 1->2->3->4->Null

    list.print();

    // list.deleteFront();
    list.print();

    // list.deleteBack();
    list.print();

    // list.deleteThisElm(3);
    list.print();

    return 0;
}
