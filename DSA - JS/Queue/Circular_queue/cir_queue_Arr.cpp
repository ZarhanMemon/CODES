
/*
--------------------------------------------------
📌 Circular Queue
--------------------------------------------------
📖 Theory:
- A Circular Queue is a linear data structure that follows FIFO (First In First Out) principle.
- Unlike a normal queue, the last position is connected back to the first, forming a circle.
- This structure efficiently uses memory because freed slots (after dequeue) can be reused.
- Implemented using:
    - Fixed-size array
    - Two pointers:
        front → points to first element
        rear  → points to last element
- Positions are updated using modulo (%) to wrap around.


--> Constructor:
   Instart while initializing the queue, set:
    front = 0
    rear = -1
    currSize = 0
    totalSize = size (capacity of the queue)

--------------------------------------------------
💡 Key Operations:
1️⃣ Enqueue (pushAtRear) – Insert element at rear
   - Check if full:  (currSize == totalSize)
   - Update rear to forward :    rear = (rear + 1) % totalSize
   - Place element   arr[rear] = data
   - Increase currSize++

2️⃣ Dequeue (popAtFront) – Remove element from front
   - Check if empty: (currSize == 0)
   - Remove element at 'front'  : arr[front] = -1 (optional)
   - Update front to forward :   front = (front + 1) % totalSize
   - Decrease currSize--

3️⃣ Display (printCIRCULARQueue)
   - Traverse from front → rear using:
       index = (front + i) % totalSize

✅ Advantages:
- Avoids wasted space (like linear queue).
- Useful for fixed-size buffer situations (e.g., streaming data, CPU scheduling).
*/

#include <iostream>
using namespace std;

// 🔸 Class representing Circular Queue
class CircularQueue
{
    int *arr;      // Array to store elements
    int front;     // Points to first element
    int rear;      // Points to last element
    int currSize;  // Current number of elements
    int totalSize; // Maximum capacity

public:
    // 🚀 Constructor
    CircularQueue(int size)
    {
        arr = new int[size];
        rear = -1;
        front = 0;
        totalSize = size;
        currSize = 0;
    }

    // 1️⃣ Enqueue operation
    void pushAtRear(int data)
    {
        // Check if queue is full
        if (currSize == totalSize)
        {
            cout << "\nQueue is FULL. Cannot insert " << data << endl;
            return;
        }

        // Move rear forward circularly
        rear = (rear + 1) % totalSize;
        arr[rear] = data;
        currSize++;

        cout << "Inserted " << data << " at REAR (rear index = " << rear << ")" << endl;
    }

    // 2️⃣ Dequeue operation
    void popAtFront()
    {
        // Check if queue is empty
        if (currSize == 0)
        {
            cout << "\nQueue is EMPTY. Cannot dequeue." << endl;
            return;
        }

        cout << "Removed " << arr[front] << " from FRONT (front index = " << front << ")" << endl;

        // Optional: Clear element for visualization
        arr[front] = -1;

        // Move front forward circularly
        front = (front + 1) % totalSize;
        currSize--;
    }

    // 3️⃣ Show front and rear elements
    void front_rear_Elm()
    {
        if (currSize == 0)
        {
            cout << "Queue is EMPTY. No front/rear element." << endl;
            return;
        }
        cout << "FRONT element: " << arr[front] << endl;
        cout << "REAR element : " << arr[rear] << endl;
    }

    // 🔍 Print physical array (not circular order)
    void printArr()
    {
        cout << "\n[Physical Array View]: ";
        for (int i = 0; i < totalSize; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }

    // 🔍 Print queue in circular order
    void printCIRCULARQueue()
    {
        if (currSize == 0)
        {
            cout << "\nQueue is EMPTY." << endl;
            return;
        }

        cout << "\n[Circular Queue View]: FRONT -> ";
        for (int i = 0; i < currSize; i++)
        {
            cout << arr[(front + i) % totalSize] << " -> ";
        }
        cout << "FRONT" << endl;
    }
};

int main()
{
    CircularQueue cq(3);

    // ---------------------------------------------
    // Operation 1: Insert 2
    // Queue: FRONT -> [2] <- REAR
    cq.pushAtRear(2);

    // Operation 2: Insert 4
    // Queue: FRONT -> [2] -> [4] <- REAR
    cq.pushAtRear(4);

    // Operation 3: Insert 6
    // Queue: FRONT -> [2] -> [4] -> [6] <- REAR
    cq.pushAtRear(6);

    cq.front_rear_Elm(); // Show current front & rear

    // Try inserting into a FULL queue
    cq.pushAtRear(8); // Should display "Queue is FULL"

    // ---------------------------------------------
    // Operation 4: Remove from FRONT
    // Removes 2
    // Queue: FRONT -> [4] -> [6] <- REAR
    cq.popAtFront();

    cq.printArr();           // Physical array layout
    cq.printCIRCULARQueue(); // Logical circular queue

    return 0;
}
