

# Merge Sort


def mergeSort(arr):

    if len(arr)<=1: 
        return arr
    
    mid = len(arr)//2  # for mid element

    l_arr = arr[ :mid]  # divide arr in l and r by mid
    r_arr = arr[mid: ]

    l_arr = mergeSort(l_arr)  # recursive of l and r
    r_arr = mergeSort(r_arr)

    return merge(l_arr , r_arr)  # use merge(l,r)


def merge(left , right):

    new_arr = []
    i = j = 0

    # for adding smallest btw left and right in new_arr
    while i<len(left) and j<len(right):
        if left[i] <right[j]:
           new_arr.append(left[i])
           i+=1
        else:
           new_arr.append(right[j])
           j+=1
    
    new_arr.extend(left[i: ])     # append all remaining non iterated keys in new_arr
    new_arr.extend(right[j: ])
   
    return new_arr                # give sorted arr


print("Enter order no:")
n = int(input())

order = []
for i in range(0,n):
    print("Enter ", i+1 ,":")

    a = int(input())
    order.append(a)


print("Sort ans :",mergeSort(order))