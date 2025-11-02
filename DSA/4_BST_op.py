

class BST:
    
    def __init__(self , val):
        self.data = val
        self.left = None
        self.right = None

# Insert  
def insert(root , nodeData):
    if root is None:
        return BST(nodeData)
        
    if nodeData < root.data:
        root.left =  insert(root.left , nodeData)
    else:
        root.right = insert(root.right , nodeData)
        
    return root


# Search 
def search(root,target):
    if root.data == target:
        return root
    
    if target<root.data:
        return search(root.left,target)
    elif target<root.data:
        return search(root.right,target)
    else:
        return "Not Found"


# Traversal
def traverseInOrder(root):
    if root is not None:
        traverseInOrder(root.left)
        print(root.data , end = " ")
        traverseInOrder(root.right)


# BFS(Level Order Traversal)
def BFS(root):
    
    if root is None:
        return "Tree is empty"
    
    queue = []
    queue.append(root)
    
    while len(queue):
        
        currNode = queue.pop(0)
        print(currNode.data , end = " ")
        
        if currNode.left is not None:
            queue.append(currNode.left)
            
        if currNode.right is not None:
            queue.append(currNode.right) 
    

# DELETE
def FindMin(rightnode):# Find the minimum value in the right subtree(leftmost node)
    if rightnode.left is not None:
        tempnode = rightnode.left
        return tempnode
        
def delete(root , target):
    
    if root is None:
        return "Tree is empty"
    
    if root.data > target:
        root.left = delete(root.left,target)
    
    elif root.data < target:
        root.right = delete(root.right,target)
        
    elif root.data == target:
        
        #Case 1: No child
        if root.left is None and root.right is None:
            return None 
        
        #Case 2: One child
        elif root.left is None or root.right is None:
            if root.left is not None:
                return root.left
            else:
                return root.right
          
        #Case 3: Two child
        elif root.left is not None and root.right is not None:
            rightKAMostminimum = FindMin(root.right)
            root.data = rightKAMostminimum.data  #swapping data from target node to right subtree's leftmost node
            root.right = delete(root.right , rightKAMostminimum.data)
          
    return root      
          
      
#Depth / Height
def height(root):
    if root is None:    # 🌳 If tree is empty, height = 0
        return 0
    else:
        leftHeight = height(root.left)   # 🔁 Height of left subtree
        rightHeight = height(root.right)  # 🔁 Height of left subtree
        
        if leftHeight > rightHeight:   # Compare left and right subtree height
            return leftHeight + 1      # 🌳 Add 1 for the largest hieght in left/right  
        else:
            return rightHeight + 1    
          
        
#Mirror Image
def mirror(root):
    if root is None:
        return
    
    # Swap left and right children of the current root node
    root.left, root.right = root.right, root.left
    
    # Recursively call mirror on left and right subtrees
    mirror(root.left)
    mirror(root.right)
    
    return root
 
        
#Copy of Tree       
def copyTree(root):
    if root is None:
        return None
    
    root_copy = BST(root.data)  # Create a new root_copy node with the same data as the root
    
    root_copy.left = copyTree(root.left)   # Recursively copy the left subtree in root_copy
    root_copy.right = copyTree(root.right)  # Recursively copy the right subtree in root_copy
    
    return root_copy       
          
  
#Display all parent nodes with their child nodes
def display_ParentChild(root):
    if root is None:   # 🌳 Empty tree
        return
    
    if root.left:                                          # 👈 If left child exists
        print(f"{root.data} -> Left : {root.left.data}")
    
    if root.right:                                          # 👉 If right child exists 
        print(f"{root.data} -> Right : {root.right.data}")
    
    # 🔁 Repeat for left/right children as root too
    display_ParentChild(root.left)
    display_ParentChild(root.right)

  
# Display Leaf Nodes
def display_leaf_nodes(root):
    if root is None:   # 🌳 Empty tree
        return
    
    if root.left is None and root.right is None:  # 🍂 Leaf node found - left null && right null
        print(root.data )
    
    # 🔁 Repeat for left/right children as root too
    display_leaf_nodes(root.left)
    display_leaf_nodes(root.right)
  
      
      
      
          
#    main function

root = None
root = insert(root, 50)  # root ->50
root = insert(root, 30)  
root = insert(root, 70)
root = insert(root, 20) #
root = insert(root, 40)


print()
traverseInOrder(root) #o/p : 20 30 40 50 70
print()


res = search(root, 20)
print(res.data , "is founded")  # Output: 20


BFS(root)  #o/p : 50 30 70 20 40


delete(root , 20) # Delete node with value 20

height_of_tree = height(root)
print("\n\nHeight of tree is : ", height_of_tree) #o/p : Height of tree is : 3


mirror_root = mirror(root)
# og_root = mirror(mirror_root) # again mirroring to get original tree back
print("\nMirror Image of tree is : ")
traverseInOrder(mirror_root) #o/p : 70 50 40 30  -> no 20 it deleted


copy_root = copyTree(root)
print("\n\nCopy of tree is : ")
traverseInOrder(copy_root) #o/p : 70 50 40 30


print("\n\nParent and Child nodes are : ")
display_ParentChild(root) #o/p : root -> left/right child nodes


print("\nLeaf nodes are : ")
display_leaf_nodes(root) #o/p : 40 70