#include <iostream>
#include <vector>
using namespace std;

// 📦 Queue implementation using vector
class QueueVector

{
    vector<int> q; // Internal container to store queue elements

public:


    // ✅ Enqueue: Insert element at the end
    void push(int data)
    {
        q.push_back(data); // Add element to the back
        cout << data << " is added\n";
    }



    // ❌ Dequeue: Remove element from the front
    void pop()
    {
        if (q.empty())
        {
            cout << "Queue is empty\n";
            return;
        }

        cout << q.front() << " is popped\n";
        q.erase(q.begin()); // Remove first element
    }



    // 🔍 Front: See front element
    void front()
    {
        if (q.empty())
        {
            cout << "Front is null\n";
            return;
        }

        cout << q.front() << " is front element\n";
    }



    // 🖨️ Print all elements from front to rear
    void print()
    {
        cout << "\nFRONT -> ";
        for (int i = 0; i < q.size(); i++)
        {
            cout << "[ " << q[i] << " ]";
        }
        cout << " <- REAR\n\n";
    }
};
  

// 🚀 Main function to test the queue
int main()
{
    QueueVector q;

    q.push(10); // front -> 10 <- rear
    q.push(20); // front -> 10 -> 20 <- rear
    q.push(30); // front -> 10 -> 20 -> 30 <- rear
    q.print();

    q.pop();   // removes 10
    q.print(); // front -> 20 -> 30

    q.front(); // should show 20

    return 0;
}
