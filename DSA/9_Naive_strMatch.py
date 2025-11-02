 


text = "abcdabbabb"
pattern = "abb"

n = len(text)
m =  len(pattern)

for s in range(0,n-m+1):
    match = 1
    for j in range(0,m):
        if text[s+j] != pattern[j]:
         match = 0
         break
    
    if match :
        print("pattern fount at",s)
    