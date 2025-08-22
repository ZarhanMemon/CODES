#include <iostream>
using namespace std;

/*
    INORDER Traversal in Binary Tree
    ---------------------------------
    Traversal order:  Left Subtree -> Root -> Right Subtree 

    Steps:
    1. Recursively traverse the left subtree.
    2. Visit the root node.
    3. Recursively traverse the right subtree.

    This implementation uses recursion.
*/

// Tree Node structure
struct TreeNode
{
    int data;              // Value stored in the node
    TreeNode *leftNode;    // Pointer to left child
    TreeNode *rightNode;   // Pointer to right child

    // Constructor to initialize node
    TreeNode(int val)
    {
        data = val;
        leftNode = nullptr;
        rightNode = nullptr;
    }
};

// Function to perform inorder Traversal
void inOrder(TreeNode *root) {
    // Base case: If the current node is NULL, return
    if (root != nullptr) {

         // Step 1: Traverse the left subtree
        inOrder(root->leftNode);

        // Step 2: Visit the root node
        cout << root->data << ",";

        // Step 3: Traverse the right subtree
        inOrder(root->rightNode);
    }
}

int main()
{
    /*
        Creating the binary tree:

                1
               / \
              2   3
             / \
            4   5
    */

    // Step 1: Create root node
    TreeNode *root = new TreeNode(1);

    // Step 2: Create left subtree
    root->leftNode = new TreeNode(2);
    root->leftNode->leftNode = new TreeNode(4);
    root->leftNode->rightNode = new TreeNode(5);

    // Step 3: Create right subtree
    root->rightNode = new TreeNode(3);

    // Step 4: Perform inORDER traversal
    cout << "Inorder Traversal: ";
    inOrder(root);  // Expected Output: [ [4],2,[5] ] ,1 ,[ 3 ]
}
