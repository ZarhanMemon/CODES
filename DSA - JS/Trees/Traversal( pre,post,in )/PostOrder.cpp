#include <iostream>
using namespace std;

/*
    POSTORDER Traversal in Binary Tree
    ---------------------------------
    Traversal order:  Left Subtree -> Right Subtree -> Root 

    Steps:
    1.  Recursively traverse the left subtree.
    2.  Recursively traverse the right subtree.
    3.  Visit the root node.

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

// Function to perform Postorder Traversal
void postOrder(TreeNode *root) {
    // Base case: If the current node is NULL, return
    if (root != nullptr) {

         // Step 1: Traverse the left subtree
        postOrder(root->leftNode);

        // Step 2: Traverse the right subtree
        postOrder(root->rightNode);

        // Step 3: Visit the root node
        cout << root->data << ",";
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

    // Step 4: Perform POSTORDER traversal
    cout << "Postorder Traversal: ";
    postOrder(root);  // Expected Output: [ [4],[5],2 ] ,[ 3 ], 1
}
