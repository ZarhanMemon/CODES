// 📌 Queue Implementation using Array in C++
// 👨‍💻 All operations: push (enqueue), pop (dequeue), front, and print
// 📖 A Queue is a linear data structure that follows FIFO (First In First Out)
//      👉 First element inserted is the first to come out
//      👉 Like people standing in a line: first person served first

#include <iostream>
using namespace std;

// 🔸 QueueArray class manages the queue operations using an array
class QueueArray
{
    int *arr;     // 🔢 Pointer to the array for queue elements
    int frontIdx; // 🟢 Points to the front element of the queue
    int rearIdx;  // 🔴 Points to the last (rear) element of the queue
    int size;     // 📏 Size of the queue (max capacity)

public:
    // 🚀 Constructor to initialize the queue
    QueueArray(int capacity)
    {
        arr = new int[capacity]; // 🛠️ Allocate memory for queue
        frontIdx = -1;           // ❌ Queue initially empty
        rearIdx = -1;
        size = capacity;
    }

    // ✅ Enqueue operation: adds element at the rear
    void push(int data)
    {
        if (rearIdx == size - 1)
        { // ⚠️ Queue is full
            cout << "Queue is full!\n";
            return;
        }

        if (frontIdx == -1 && rearIdx == -1)
        {
            frontIdx = rearIdx = 0; // 🔰 First element
        }
        else
        {
            rearIdx++; // ➕ Move rear forward
        }

        arr[rearIdx] = data; // 🎯 Insert element
        cout << data << " is added\n";
    }

    // ❌ Dequeue operation: removes element from the front
    void pop()
    {
        if (frontIdx == -1 || frontIdx > rearIdx)
        {
            cout << "The queue is empty\n";
            return;
        }

        cout << arr[frontIdx] << " is popped\n";
        frontIdx++; // ➖ Move front forward

        if (frontIdx > rearIdx)
        {
            // 🧹 Reset after last element is removed
            frontIdx = rearIdx = -1;

            /*
                 🔍 Why we reset frontIdx & rearIdx to -1 when frontIdx > rearIdx?

                  📦 Initial Queue state:
                      [10, 20, 30]
                      frontIdx = 0
                      rearIdx  = 2

                     🧹 After popping all 3 elements:
                         1st pop → frontIdx = 1
                         2nd pop → frontIdx = 2
                         3rd pop → frontIdx = 3

                     Now: frontIdx > rearIdx → means queue is EMPTY ✅

                     🛑 But old data still exists in array — we just ignore it from logic of print to user.

                     🔁 So, we reset:
                         frontIdx = -1
                         rearIdx  = -1
                     To mark the queue as completely empty and ready for reuse.
*/
        }
    }

    // 🔍 View the front element of the queue
    void front()
    {
        if (frontIdx == -1 || frontIdx > rearIdx)
        {
            cout << "The front is null\n";
            return;
        }

        cout << arr[frontIdx] << " is front elm\n";
    }

    // 🖨️ Print all elements from front to rear
    void print()
    {
        if (frontIdx == -1 || frontIdx > rearIdx)
        {
            cout << "Queue is empty\n";
            return;
        }

        cout << "\nFRONT -> ";
        for (int i = frontIdx; i <= rearIdx; i++)
        {
            cout << "[ " << arr[i] << " ]";
        }
        cout << " <- REAR\n\n";
    }

    // 🧹 Destructor to clean up memory
    ~QueueArray()
    {
        delete[] arr;
    }
};

// 🧪 Driver code to test all operations
int main()
{
    QueueArray queue(5); // Max capacity of queue is 5

    queue.push(10); // queue:  front -> 10 <- Rear
    queue.push(20); // queue: front -> 10 -> 20 <- Rear
    queue.push(30); // queue: front -> 10 -> 20 -> 30 <- Rear
    queue.print();

    queue.pop();   // 10 removed
    queue.print(); // queue: front -> 20 -> 30 <- Rear

    queue.front(); // front -> 20

    return 0;
}
