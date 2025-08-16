// Binary Tree implementation using Array

// It uses a simple array to represent a binary tree.
// Complete binary trees(nodes have only 2 nodes only) are  maded using this method.

// Use:
// Best for complete binary trees (no gaps).
// Fast access via index.
// Wastes space if tree is sparse.

// NODE structure:
// Root element is at index 0 , i=0
//       For any node at index i: 
//         Left child index = 2*i + 1
//         Right child index = 2*i + 2

#include <iostream>
using namespace std;

int main(){

    int tree[] = {1, 2, 3, 4, 5}; 
    int n = 5;

    int i = 1;  // index of root elm = 0 ; always

    cout << "Root elm:" <<tree[i] << ", "; // Print root

    // Left child index = 2*i + 1
    cout << "Left Child of Root: " << tree[2 * i + 1] << " "; 
    
    // Right child index = 2*i + 2
    cout << "Right Child of Root: " << tree[2 * i + 2] << endl; 
}