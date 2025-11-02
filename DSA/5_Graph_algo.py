import heapq;




class Graph:
    
    def __init__(self):
        
        self.V = 0        # Number of buildings = total node in graphs
        
        self.indexTO_node = {}                        # index -> building name   
       # self.nodes = {0: "Library", 1: "CSE Dept", 2: "Hostel"}
       # Example: 0 = Library, 1 = CSE Dept, 2 = Hostel

        
        self.nodeTO_index = {}           # building name -> index eg: "A" -> 0 , "B" -> 1
        #self.nodeTO_index = {"Library": 0, "CSE Dept": 1, "Hostel": 2}
             
 
        self.graph = []              # 📌 Edge list: stores all roads (u, v, distance) → used in Kruskal ; where u,v = are index of 2 nodes/build
       # self.graph = [
       # [0, 1, 10],   # Library - CSE Dept (10m)
       # [1, 2, 15],   # CSE Dept - Hostel (15m)
       # [0, 2, 20]    # Library - Hostel (20m)
       # ]
       # Edge list = [u, v, weight]

        
        self.adj_list = {}          # Adjacency list: stores neighbors of each building → for representation of PRIMS 
       # self.adj_list = {
       #     0: [(1, 10), (2, 20)],   # Library → CSE Dept(10), Hostel(20)
       #     1: [(0, 10), (2, 15)],   # CSE Dept → Library(10), Hostel(15)
       #     2: [(1, 15), (0, 20)]    # Hostel → CSE Dept(15), Library(20)
       # }

    
    def addBuilding(self , nodeName ):
        
        if nodeName in self.nodeTO_index:                    # Check if building already exists
            print(f"Building {nodeName} already exists.")
            return
         
        self.indexTO_node[self.V] = nodeName ;         # Map index to building name
        self.nodeTO_index[nodeName] = self.V;        # Map building name to index
        
        self.adj_list[self.V] = []         # Initialize adjacency list for the new building
        
        self.V += 1                        # Increment building count
        print(f"Building {nodeName} added.")   


    
    def addEdges(self , node1 ,  node2 , distance):
        
        # Check if both buildings exist in the graph before adding a road
        if node1 not in self.nodeTO_index or node2 not in self.nodeTO_index:                    # Check if building already exists
            print(f"One or both buildings not found")
            return
        
        index1 = self.nodeTO_index[node1];      # eg: 0 = nodeTO_index["A"] -> 0
        index2 = self.nodeTO_index[node2];      # eg: 1 = nodeTO_index["B"] -> 1
        
        # Add a single undirected edge to edge list for Kruskal
        self.graph.append([index1, index2, distance])    # Add edge A -- B => [0, 1, 5]
        
        
        # Add to adjacency list A-> (B with distance) and B-> (A with distance)
        self.adj_list[index1].append((index2 , distance))   # A -> (B, 5)
        self.adj_list[index2].append((index1 , distance))   # B -> (A, 5)

        print(f"Road added between {node1} and {node2} with distance {distance}m.")
        
        
    def display_graph(self):
        print("\n--- Campus Map ---")
         
        # FROM- A  to->
        for node_idx in self.indexTO_node:             # u (node_idx) = index of current building
    
         building = self.indexTO_node[node_idx];          # Get building name from index - eg: 0 -> "A"
         print(f"{building} is connected to:")
            
         # -> B with distance 10m , etc ...
         for linkNode_isx , distance in self.adj_list[node_idx]:                   # v (linkNode_idx) = index of neighbor building , 
            neighbor_building = self.indexTO_node[linkNode_isx]                    # w (distance) = distance from that building(u) in adj_list
            print(f"  - {neighbor_building} with distance {distance}m")
        
        print("------------------")
    
# ------------------------------------------------------------------------

    def find(self , parent , i):
        if parent[i] != i:
            parent[i] = self.find(parent , parent[i]);
        return parent[i];
          
    
    def kruskal_mst(self):
     result = []              # To store the resultant MST
     i = 0                    # Index for sorted edges
     e = 0                    # Count of edges in MST
     total_weight = 0         # Total weight of MST

    # Step 1: Sort all edges by weight
     self.graph.sort(key=lambda x: x[2])

    # Step 2: Initialize parent and rank for Union-Find
     parent = [i for i in range(self.V)]
     rank = [0] * self.V

    # Step 3: Pick edges one by one
     while e < self.V - 1 and i < len(self.graph):
         
        node1, node2, weight = self.graph[i]
        
        i += 1

        x = self.find(parent, node1)
        y = self.find(parent, node2)
        

        # If adding this edge does NOT form a cycle
        if x != y:
            
            result.append([node1, node2, weight])

            # Union operation
            if rank[x] < rank[y]:
                parent[x] = y
            elif rank[x] > rank[y]:
                parent[y] = x
            else:
                parent[y] = x
                rank[x] += 1


            total_weight += weight
            e += 1


    # Step 4: Print MST
     print("\nMinimum Spanning Tree (Kruskal's Algorithm):")
     
     for node1, node2, weight in result:
         
        building1 = self.indexTO_node[node1]      
        building2 = self.indexTO_node[node2]
        print(f"{building1} -- {building2} with distance {weight}m")

     print(f"Total distance of MST: {total_weight}m")


# ------------------------------------------------------------------------

    def prims_mst(self , start_nodeIndx= 0):
        visited = set()
        # Heap entries are (weight, node, parent)
        min_heap = [(0, start_nodeIndx, -1)]

        result = []
        total_weight = 0

        while min_heap:
            weight, node2, node1 = heapq.heappop(min_heap)

            if node2 in visited:
                continue

            visited.add(node2)

            if node1 != -1:
                result.append((node1, node2, weight))
                total_weight += weight


            for neighbor, weight in self.adj_list[node2]:
                if neighbor not in visited:
                    heapq.heappush(min_heap, (weight, neighbor, node2))
        
        print("\nMinimum Spanning Tree (Prim's Algorithm):")
        for node1 , node2 , weight in result:

            building1 = self.indexTO_node[node1]
            building2 = self.indexTO_node[node2]
            print(f"{building1} -- {building2} with distance {weight}m")
        
        print(f"Total distance of MST: {total_weight}m")


# Main function

graph = Graph()

graph.addBuilding("A")
graph.addBuilding("B")

graph.addEdges("A", "B", 10)

# graph = [ (A, B, 10)  , (B, A, 10) ]
# adj_list = { A: [(B, 10)] , B: [(A, 10)] }
 
graph.display_graph()
# A is connected to:
#   - B with distance 10m , etc ...

graph.kruskal_mst()
# Minimum Spanning Tree (Kruskal's Algorithm):

graph.prims_mst()   # start_nodeIndx=0 default
graph.prims_mst(1);  # start_nodeIndx=1
# Minimum Spanning Tree (Prim's Algorithm):