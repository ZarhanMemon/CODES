
// Binary Tree implementation using Linked List



// It uses the concept of a doubly linked list to represent a binary tree nodes.

// Use:
// Flexible size (dynamic memory).
// Easy to insert/delete nodes.
// Common in real-world tree operations.

// NODE structure:
//  For any node:
//   -Data 
//   -Left child node ptr
//   -Right child node ptr

#include <iostream>
using namespace std;

// Tree Node structure
struct Node
{
    int data;
    Node *leftNode;
    Node *rightNode;

    Node(int val)
    {
        data = val;
        leftNode = nullptr;
        rightNode = nullptr;
    }
};

int main()
{

    Node *root = new Node(1);         //  1
    root->leftNode = new Node(2);   //  / |
    root->rightNode = new Node(3);  // 2   3

     cout << "Root: " << root->data 
         << ", Left Child: " << root->leftNode->data
         << ", Right Child: " << root->rightNode->data << endl;
}


