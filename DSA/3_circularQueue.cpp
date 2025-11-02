#include <iostream>
using namespace std;

// Zarhan Memon
// SE - IT03
// DSA - Assignment 3

class CircularQueue
{

    int *arr;
    int front, rear;
    int totalSize;
    int currSize;

public:
    CircularQueue(int size)
    {
        arr = new int[size];
        front = 0;
        rear = -1;
        totalSize = size;
        currSize = 0;
    }

    void enqueAtRear(int data)
    {
        if (currSize == totalSize)
        {
            cout << "Queue is fulled\n";
            return;
        }

        cout << "The " << data << " is added\n";
        rear = (rear + 1) % totalSize;
        arr[rear] = data;

        currSize++;
    }

    void dequeAtFront()
    {
        if (currSize == 0)
        {
            cout << "Queue is empty\n";
            return;
        }

        cout << "The " << arr[front] << " is popped\n";
        arr[front] = -1345;
        front = (front + 1) % totalSize;

        currSize--;
    }

    void display()
    {
        cout << "Front->";
        for (int i = front; i <= rear; i += (i+1 % totalSize))
        {
            cout << arr[i] << "->";
        }
        cout << "Rear \n";
    }
};

int main()
{

    CircularQueue q(4);

    q.enqueAtRear(1);
    q.enqueAtRear(2);
    q.enqueAtRear(1);
    q.enqueAtRear(2);
    q.display();


    q.dequeAtFront();
    q.dequeAtFront();
    q.dequeAtFront();
    q.dequeAtFront();
    q.display();
}