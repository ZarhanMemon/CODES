import pandas as pd

print(pd.__version__)  # dunder -> __abc__


#=======================================================


# Series - A Pandas 1-Dimensional labeled array that can hold any data-type
#          Think of it like single column in spreedsheet (1-Dimensional)


list = [100 ,101 ,102]           #-> type(int64)
list1 = [100.3 ,101.4 ,102.5]    #-> type(float64)
list2 = ["a" , "b" ,"c"]         #-> type(object)
list3 = [True , False , True]    #-> type(bool)

series = pd.Series(list3)  # Series -> Contructor 

print(series)

#-------------------------------

data = [10 ,20 ,13]

index_col = ["a" ,"b" , "c"]

series = pd.Series(data , index = index_col)
# series = pd.Series(data , index = [-1 ,-2 ,-3])

print(series)

#------------------------------------------

# Location (indexing by label_col ) :-

series.loc["a"] = 10    # series["a"] too use
series.loc["b"] = 20    
series.loc["c"] = 13

print( series.loc["a"],     #-> 10 value at index a
       series.loc["b"],     #-> 20
       series.loc["c"],     #-> 13

#        series.loc["d"],   #-> invalid KeyError: d (no such index)
)

#-----------------------------------------------

# Int Location ( iloc ) : indexing from integer valu i.e [0 -> 1st value]

print(
        series.iloc[0],   # index "a" return -> 10 value
        series.iloc[1],   # index "b" return -> 20 value
        series.iloc[2],   # index "c" return -> 13 value

#       Negative indexing:-
        series.iloc[-3],   # index "a" return -> 10 value
        series.iloc[-2],   # index "b" return -> 20 value
        series.iloc[-1],   # index "c" return -> 13 value
)

 
# -------------------------------------------------

# Series Flitering 

data = [ 10 ,23 ,54 ,26 ,19]

series = pd.Series(data , index = [1 ,2, 3, 4 ,5])

print(
        series[ series >= 23 ],    #table -> 23 ,54 ,26 with resp. index
        series[ series < 23 ],    #table -> 10 ,19 with resp. index
)

# --------------------------------------

# Series by DictPY { }

calories = { "Day1":1203 , "Day2" : 2304 , "Day3":2133}

series = pd.Series(calories) # for dict the key-> index col for series

print(series)

#Cheat day eat cookie on DAY 2
series.loc["Day2"] += 400
print(series)

# find the days where cal > 2000 ==> day 2 , 3
print( series[ series > 2000 ])


# ----------------------------------------

# Hw -  table of pokeamon start with indx =1

pokeamons = ["Bulbasaur" ,"Ivysaur" ,"Venasaur" ,"Charmendar" ,"Charmeleon" ,"Charlizard"]

series = pd.Series(pokeamons , index =[1,2,3,4,5,6] )

# Series by Range Indexing:-
# series = pd.Series(pokeamons , index = range(1 , len(pokeamons) + 1) )

print(series)


# ==================================================================


# DataFrames = A tabular data structure with rows AND column. ( 2 Dimensional)
#              Similar like EXCEL spreadsheet

data = { "Name" : ["A" , "B" ,"C"],
        "Age" : [ 10 ,12 ,32]
        }

dataframe = pd.DataFrame(data , index = [ "Employee1" ,  "Employee2" , "Employee3"])

print( dataframe )  # table 

# print( dataframe.loc["Employee1"] )  # give the row of that table
# print( dataframe.iloc[2] )


# ------------------------------------

# ADDING a new column -> no of row should match

dataframe["Job"] = [ "Cook" , "Waiter" , "Manager"]
print( dataframe )

# ------------------------------------

# ADDING a new row -> no of col value should match

new_row = pd.DataFrame( [ {"Name":"D" , "Age": 43 , "Job":"Designer" } ]
                        #( [{ col1  , col2 , col3 } , { .. }] , index=[4,5,6,..] ) ->  multiple rows
                       , index = ["Employee4"]
                       )

dataframe = pd.concat( [ dataframe , new_row ])
#         = pd.append()

print( dataframe )

# ------------------------------------

# ADDING a new rows ->  

new_rows = pd.DataFrame( [ {"Name":"E" , "Age": 46 , "Job":"N/A"},
                           {"Name":"F" , "Age": 3 , "Job":"Writer"},
                           {"Name":"G" , "Age": 4 , "Job":"Sales man"} 
                        ]
                        , index = ["Employee5" , "Employee6" ,"Employee7"]
                       )

dataframe = pd.concat( [ dataframe , new_rows ])

print(dataframe)

# -----------------------------------------------

#HW - CREATE A TABLE FOR STUDENT DATA

student_data = {
    "Name": ["Aaryan Raj", "Aditya Singh", "Divya Sharma", "Anjali Nair", "Rishabh Jain"],
    "Branch": ["CSE", "ECE", "IT", "Mechanical", "Civil"],
    "Year": ["FE", "SE", "TE", "BE", "SE"]
}

student_df = pd.DataFrame( student_data , index = range(1 , len(student_data["Name"])+1 ) )  #indx = [ 1 ,2, 3,4,5 ]

#add col rank
student_df["Rank"] = [ "1st" , " 3rd" , "2nd" , "4th" , "5th"]

#add new student data
new_std_row = pd.DataFrame( [{"Name" : "Abc" , "Branch" : "IT" , "Year":"SE" , "Rank":"N/A"}]
                           , index = [6])

student_df = pd.concat( [ student_df , new_std_row])

print( student_df )


# ========================================================================

# Importing DATA :-

# we can import the data from 2 type  of file:-
   
   # CSV = Comma-Seperated-Values
   # JSON = Javascript-Object-Notation


df_csv = pd.read_csv('data.csv')

df_json = pd.read_json('data1.json')

# if dataframe is huge - shows the truncated version of it on terminal
print(df_csv)  
print(df_json)

# Full dataframe 
print( df_csv.to_string() )   # same for json -> df_json.to_string()
 

# ==============================================================================


# Selection :-  returning specific row or column from the dataframe

 
df = pd.read_csv('data.csv')


# BY COLUMN -> gives the column of that table print dataframe column by name
print(df["Name"])       # df["Name"].to_string() -> full column
print( df["Height"])

print( df[["Name" , "Height" , "Weight"]])  # multiple column

# BY ROW -> 
print( df.loc[0] )   # first row / default index start with 0

# Setting the index col -> custome
df_index_name = pd.read_csv('data.csv' ,  index_col = "Name")

print( df_index_name.loc["Charizard"] )  # now we can access the row by name of that index col

print( df_index_name.loc["Charizard" , ["Height" , "Weight" , "Type1"]] )  # access only specifc col_value of that entire row

print( df_index_name.loc["Charizard":"Blastoise"  ,[ "Height" , "Weight" , "Type1"]] )  # range selection - data of row from charizard to blastoise with specific col value

print( df.loc[0:11] )   # range selection by default index (0 to 11) -> gives the row from 0 to 11

print( df.iloc[ 0:12:3  , 0:4] )  # range selection with step -> row from 0 to 12 with step 3 and col from 0 to 4


#-----------------------------------------------
# Ceate a search of pokeamon by name 

pokeamon = input("Enter the name of pokeamon : ")

pok_data = df_index_name.loc[pokeamon]
if(pok_data.empty):
    print("Pokeamon not found in the database.")
else:
    print(pok_data)


#====================================================================

