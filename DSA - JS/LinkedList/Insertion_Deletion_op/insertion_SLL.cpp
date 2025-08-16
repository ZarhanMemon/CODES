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

// 📦 Linked List Class (Insertion Operations Only)
class LinkedList
{
public:
    Node *head;
    Node *tail;

    LinkedList()
    {
        head = tail = nullptr;
    }

    // 📌 1. Add Element at the Start of Linked List
    // Logic: newNode points to current head; then update head to newNode

    void addElm(int data)
    {
        Node *newNode = new Node(data);
        if (head == nullptr)
        {
            head = tail = newNode; // if list is empty, head and tail both point to newNode
            return;
        }
        newNode->next = head; // newNode now points to the current head
        head = newNode;       // head is updated to newNode
    }

    // 📌 2. Add Element at the End of Linked List
    // Logic: tail's next points to newNode; then update tail to newNode

    void addBackElm(int data)
    {
        Node *newNode = new Node(data);
        if (tail == nullptr)
        {
            head = tail = newNode; // if list is empty, set both head and tail
        }
        else
        {
            tail->next = newNode; // current tail points to newNode
            tail = newNode;       // update tail to newNode
        }
    }

    // 📌 3. Add Element Before a Specific Node (by value)
    // Logic: newNode should point to curr; and prev's next should point to newNode

    void addAtElmBeforeThis(int data)
    {
        int inp;
        cout << "Enter the data of new Node: ";
        cin >> inp;
        Node *newNode = new Node(inp);

        Node *prev = nullptr;
        Node *curr = head;

        while (curr != nullptr && curr->data != data)
        {
            prev = curr;
            curr = curr->next;
        }

        if (curr == head)
        {
            newNode->next = head; // newNode points to current head
            head = newNode;       // update head to newNode
        }
        else
        {
            prev->next = newNode; // prev now points to newNode
            newNode->next = curr; // newNode points to curr
        }

        cout << newNode->data << " added\n";
    }

    // 📌 4. Add Element After a Specific Node (by value)
    // Logic: newNode should point to curr->next; then curr->next should point to newNode

    void addAtElmAfterThis(int data)
    {
        int inp;
        cout << "Enter the data of new Node: ";
        cin >> inp;
        Node *newNode = new Node(inp);

        Node *curr = head;
        while (curr != nullptr && curr->data != data)
        {
            curr = curr->next;
        }

        if (curr == nullptr)
            return; // if value not found, do nothing

        newNode->next = curr->next; // newNode points to the node after curr
        curr->next = newNode;       // curr points to newNode
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

// 🧪 Main function to test Insertion operations
int main()
{
    LinkedList list;

    list.addElm(4);
    list.addElm(3);
    list.addElm(2);
    list.addElm(1);
    list.print();

    // list.addBackElm(5);
    list.print();

    // list.addAtElmBeforeThis(3);
    list.print();
    
    // list.addAtElmAfterThis(2);
    list.print();

    return 0;
}