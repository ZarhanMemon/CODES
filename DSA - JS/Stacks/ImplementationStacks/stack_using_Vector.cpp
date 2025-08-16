// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

#include <vector>    //it is a dynamic array, which can grow and shrink in size



// 📚 Stack Using Vector (C++)


// A stack is a LIFO (Last In First Out) data structure.
// This implementation uses a C++ STL vector to store stack elements dynamically.


// 🔹 How Each Operation Works:


//   - PUSH (push):
//       • Adds a new element to the end of the vector (top of stack).


//   - POP (pop):
//       • If the vector is empty, stack is empty.
//       • Otherwise, removes the last element from the vector (top of stack).


//   - TOP (top):
//       • If the vector is empty, stack is empty.
//       • Otherwise, the last element in the vector is the top element.


//   - isEmpty:
//       • Checks if the vector is empty (stack is empty).

//   - print:
//       • Traverses the vector from end to start, printing each element (top to bottom).


// 🔹 Time Complexity:
//   - All main operations (push, pop, top, isEmpty) are O(1).
//   - Printing is O(n), where n is the number of elements.

// -------------------------------------------
// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

#include <vector>    //it is a dynamic array, which can grow and shrink in size



// 📚 Stack Using Vector (C++)


// A stack is a LIFO (Last In First Out) data structure.
// This implementation uses a C++ STL vector to store stack elements dynamically.


// 🔹 How Each Operation Works:


//   - PUSH (push):
//       • Adds a new element to the end of the vector (top of stack).


//   - POP (pop):
//       • If the vector is empty, stack is empty.
//       • Otherwise, removes the last element from the vector (top of stack).


//   - TOP (top):
//       • If the vector is empty, stack is empty.
//       • Otherwise, the last element in the vector is the top element.


//   - isEmpty:
//       • Checks if the vector is empty (stack is empty).

//   - print:
//       • Traverses the vector from end to start, printing each element (top to bottom).


// 🔹 Time Complexity:
//   - All main operations (push, pop, top, isEmpty) are O(1).
//   - Printing is O(n), where n is the number of elements.

// -------------------------------------------

class Stack
{

    vector <int> v;  // vector of int is used to implement stack

public:

    void push(int data)
    {
        v.push_back(data);  //O(1)
        cout << data << " is pushed" << endl;
    }

    void pop()
    {
        cout << v[v.size() - 1] << " is popped" << endl; //O(1)
        if (v.size() == 0){
            cout << "Stack is empty, cannot pop" << endl;
            return;
        }
        v.pop_back();
    }


    void top()     // O(1)
    {
        if (!v.size())
        {
            cout << "Stack top is null" << endl;
            return;
        }
        cout << v[v.size() - 1] << " is top elm" << endl;
    }

    bool isEmpty(){   // O(1)
        if (v.size() == 0)
        {
            cout << "Stack is empty" << endl;
            return true;
        }
        else
        {
            cout << "Stack is not empty" << endl;
            return false;
        }
    }

    void print() // O(n)
    {
        cout << "__" << endl;
        for (int i = v.size() - 1; i >= 0; i--)
        {
            cout << v[i] << endl;
        }
        cout << "__ \n"
             << endl;
    }
};


int main() {
    Stack s;

    s.push(10);  // Stack: 10
    s.push(20);  // Stack: 10, 20
    s.push(30);  // Stack: 10, 20, 30 (Top)

    s.print();   // Shows 30 at top

    s.pop();     // Removes 30
    s.pop();     // Removes 20
    s.pop();     // Removes 10
    s.print();   // Now empty

    s.top();     // Should show stack is null
    s.isEmpty(); // Should show stack is empty
}

// OUTPUT:
// 10 is pushed
// 20 is pushed
// 30 is pushed
// __
// 30
// 20
// 10
// __

// 30 is popped
// 20 is popped
// 10 is popped
// __
// __

// Stack top is null
// Stack is empty
 
  