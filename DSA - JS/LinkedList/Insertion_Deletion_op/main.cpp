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

// 📦 Linked List Class
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
    // Logic: newNode->next points to head, then head = newNode
    void addElm(int data)
    {
        Node *newNode = new Node(data);
        if (head == nullptr)
        {
            head = tail = newNode;
            return;
        }
        newNode->next = head; // newNode points to old head
        head = newNode;       // head now becomes newNode
    }

    // 📌 2. Add Element at the End of Linked List
    // Logic: tail->next = newNode; tail = newNode
    void addBackElm(int data)
    {
        Node *newNode = new Node(data);
        if (tail == nullptr)
        {
            head = tail = newNode;
        }
        else
        {
            tail->next = newNode; // old tail points to newNode
            tail = newNode;       // newNode becomes new tail
        }
    }

    // 📌 3. Add Element Before a Specific Node (by value)
    // Logic: prev->next = newNode; newNode->next = curr
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
            newNode->next = head; // newNode points to old head
            head = newNode;       // head becomes newNode
        }
        else
        {
            prev->next = newNode; // prev points to newNode
            newNode->next = curr; // newNode points to current
        }

        cout << newNode->data << " added\n";
    }

    // 📌 4. Add Element After a Specific Node (by value)
    // Logic: newNode->next = curr->next; curr->next = newNode
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
            return;

        newNode->next = curr->next; // newNode points to node after curr
        curr->next = newNode;       // curr points to newNode
    }

    // 🗑️ 5. Pop Element from the Front (Start)
    // Logic: head = head->next; delete old head
    void popFrontElm()
    {
        if (head == nullptr)
        {
            cout << "LL is empty\n";
            return;
        }
        Node *temp = head;
        head = head->next; // move head to next node
        temp->next = nullptr;
        cout << temp->data << " is popped from front\n";
        delete temp; // delete the old head
    }

    // 🗑️ 6. Pop Element from the End (Tail)
    // Logic: find 2nd last node, delete tail, make 2nd last tail
    void popBackElm()
    {
        if (tail == nullptr)
        {
            cout << "List is empty\n";
            return;
        }

        if (head == tail)
        {
            cout << tail->data << " is popped from back\n";
            delete tail;
            head = tail = nullptr;
            return;
        }

        Node *temp = head;
        while (temp->next != tail)
        {
            temp = temp->next; // find node before tail
        }

        cout << tail->data << " is popped from back\n";
        delete tail;          // delete last node
        tail = temp;          // update tail to previous node
        tail->next = nullptr; // new tail has no next
    }

    // 🗑️ 7. Pop Node Before a Given Node (by value)
    // Logic: find node before target, unlink & delete it
    void popAtElmBeforeThis(int data)
    {
        Node *prev1 = nullptr;
        Node *curr = head;

        while (curr != nullptr && curr->data != data)
        {
            prev1 = curr;
            curr = curr->next;
        }

        Node *prev2 = head;
        while (prev2 != nullptr && prev2->next != prev1)
        {
            prev2 = prev2->next;
        }

        prev2->next = curr; // skip over prev1
        prev1->next = nullptr;
        delete prev1; // delete the skipped node
    }

    // 🗑️ 8. Pop Node After a Given Node (by value)
    // Logic: curr->next = next->next; delete next
    void popElmAfterThis(int data)
    {
        Node *curr = head;

        while (curr != nullptr && curr->data != data)
        {
            curr = curr->next;
        }

        if (curr == nullptr || curr->next == nullptr)
            return;

        Node *nextelm = curr->next;

        if (nextelm == tail)
        {
            popBackElm(); // use already written tail pop
        }
        else
        {
            curr->next = nextelm->next; // skip over nextelm
            nextelm->next = nullptr;
            delete nextelm; // delete skipped node
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

// 🧪 Main function to test the Linked List
int main()
{
    LinkedList list;

    list.addElm(4);
    list.addElm(3);
    list.addElm(2);
    list.addElm(1);
    list.print();

    // list.popFrontElm();
    // list.addBackElm(5);
    // list.popBackElm();
    // list.addAtElmBeforeThis(3);
    // list.popAtElmBeforeThis(3);
    // list.addAtElmAfterThis(2);
    // list.popElmAfterThis(1);

    return 0;
    
}
