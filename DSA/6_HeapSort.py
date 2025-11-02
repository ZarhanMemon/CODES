
# Heap Sort Implementation in Python (Descending Order)



# MAX HEAPIFY FUNCTION
def heapify_max(arr, n, i):
    largest = i          # Assume current node is largest
    left = 2 * i + 1     # Left child index
    right = 2 * i + 2    # Right child index

    # If left child exists and is greater than root
    if left < n and arr[left] > arr[largest]:
        largest = left

    # If right child exists and is greater than largest so far
    if right < n and arr[right] > arr[largest]:
        largest = right

    # If root is not the largest, swap and continue heapifying
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # Swap
        heapify_max(arr, n, largest)  # Recursively heapify the affected subtree



# HEAP SORT FUNCTION
def heap_sort(arr):
    n = len(arr)

    # Step 1: Build a max heap AT ONCE
    for i in range(n // 2 - 1, -1, -1):
        heapify_max(arr, n, i)

    # Step 2: Extract elements one by one to place them in correct position
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # Swap
        heapify_max(arr, i, 0)               # Heapify root element again





# Example
arr = [25, 12, 7, 20, 15, 8]
print("Original array:", arr)

heapify_max(arr, len(arr), 1)  # Just to show heapify in action
print("maxHeapified array:", arr)

heap_sort(arr)

print("Sorted array:", arr[::-1])   # Reverse to show descending order
print("Sorted array:", arr)   # Ascending order


print("Max:" , arr[len(arr)-1]) 
print("Min:" , arr[0]) 






# =======================================================================


# 🌟 Heap Sort in Python (Ascending Order)

# MIN HEAPIFY FUNCTION
def heapify_min(arr, n, i):
    smallest = i              # Assume root is smallest
    left = 2 * i + 1         # Left child index
    right = 2 * i + 2        # Right child index

    # 🔹 Check if left child exists and is smaller than root
    if left < n and arr[left] < arr[smallest]:
        smallest = left

    # 🔹 Check if right child exists and is smaller than current smallest
    if right < n and arr[right] < arr[smallest]:
        smallest = right
    
    # 🔹 If smallest is not root, swap and continue heapifying
    if smallest != i:
        arr[i], arr[smallest] = arr[smallest], arr[i]   # swap
        heapify_min(arr, n, smallest)  # Recursively heapify affected subtree




def heap_sort(arr):
    pass         # same as above but with smallest instead of largest
