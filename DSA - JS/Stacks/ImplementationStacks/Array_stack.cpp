#include <iostream>
using namespace std;


// 📚 Stack Using Array (C++)



// A stack is a LIFO (Last In First Out) data structure.
// This implementation uses an array and a variable called `topIndx` to track the stack's top.


// 🔹 How `topIndx` Works:
//   - `topIndx` always points to the next empty index in the array.
//   - When pushing: store data at arr[topIndx], then increment topIndx.
//   - When popping: decrement topIndx first, then remove the element at arr[topIndx].
//   - The actual top element is at arr[topIndx - 1].


// 🔹 Time Complexity:
//   - All main operations (push, pop, top) are O(1).


// 🔹 Example:
//   Push: 10 → 20 → 30
//   arr[0] = 10    (topIndx = 1)
//   arr[1] = 20    (topIndx = 2)
//   arr[2] = 30    (topIndx = 3)
//   Top element = arr[topIndx - 1] = arr[2] = 30
//   Next push would go to arr[3] (out of bounds if size is 3).
// -------------------------------------------




class Stack {
    int length;      // 🧮 Size of array (capacity of stack)
    int topIndx;     // 🔝 Index for next insertion (points to top + 1)
    int* arr;        // 📦 Dynamic array to store stack elements

public:
    // 📦 Constructor
    Stack(int n) {
        arr = new int[n];   // create array of size n
        topIndx = 0;        // stack is empty initially
        length = n;
    }

    // 📥 Push element at the top of the stack
    void push(int data) {
        if (topIndx < length) {
            arr[topIndx] = data;   // insert at topIndx
            topIndx++;             // move top to next
            cout << data << " is added" << endl;
        } else {
            cout << "Limit exedd of array" << endl;
        }
    }

    // 📤 Pop element from the top of the stack
    void pop() {
        if (topIndx > 0) {
            topIndx--;                 // move top down
            cout << arr[topIndx] << " is popped" << endl;
            arr[topIndx] = 0;          // clear the value (optional)
        } else {
            cout << "There is nothing to pop" << endl;
        }
    }

    // 🔍 Show the top element of the stack
    void top() {
        if (topIndx > 0) {
            topIndx--;                        // go back to top
            cout << arr[topIndx] << " is top elm" << endl;
            topIndx++;                        // restore index
        } else {
            cout << "The top elm is null" << endl;
        }
    }

    // ❓ Check if stack is empty
    void isEmpty() {
        if (arr[topIndx - 1]) {   // check last inserted value
            cout << "The stack is not empty" << endl;
        } else {
            cout << "The stack is empty" << endl;
        }
    }

    // 🖨️ Print all stack elements (top to bottom)
    void print() {
        cout << "--" << endl;
        for (int i = length - 1; i >= 0; i--) {
            if (arr[i] != 0) {
                cout << arr[i] << endl;
            }
        }
        cout << "--" << endl;
    }
};

int main() {
    Stack s(3);            // create stack with size 3

    s.push(10);            // push 10
    s.push(20);            // push 20
    s.push(30);            // push 30

    s.pop();               // pop top (30)
    s.top();               // see top (20)
    s.isEmpty();           // check if stack is empty
    s.print();             // print elements

    return 0;
}
