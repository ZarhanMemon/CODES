#include <iostream>
#include <cstring>

using namespace std;

struct Student{
    int id;
    char name[50];
    float mark;
};


void Linear(Student arr[] ,int n , int id){
  for (int i=0;i<n ;i++){
      if (arr[i].id == id){
        cout<<"founded student"<<arr[i].name<<"\n";
        return;
       }}
}

void BubbleName(Student arr[] ,int n , bool asc){
  for (int i=0;i<n;i++){
     for (int j=0 ;j<n-i-1;j++){
       if (asc && strcmp(arr[j].name,arr[j+i].name)>0){
          swap(arr[j],arr[j+1]);
       }
       else if(!asc && strcmp(arr[j].name,arr[j+i].name)<0){
           swap(arr[j],arr[j+1]);
           }}}
}

void InsertName(Student arr[] ,int n , bool asc){
  for(int i=1;i<n;i++){
    Student key = arr[i];
    
    int j = i-1;
    if (asc){
    for (;j>=0 && strcmp(arr[j].name,key.name)>0;j--){
       arr[j+1] = arr[j];
    }}
    else{
      for (;j>=0 && strcmp(arr[j].name,key.name)<0;j--){
       arr[j+1] = arr[j];
      }
    }
 
    arr[j+1] = key;
    }
}


void Binary(Student arr[],int n , int id){
  int l = 0;
  int r = n-1;
  while(l<=r){
    int mid = (l+r)/2;
    if(arr[mid].id==id){
        cout<<"founded student"<<arr[mid].name<<"\n";
        break;
     }
     else if(arr[mid].id > id){
        r = mid -1;
     }
     else if(arr[mid].id<id){
       l = mid+1;
     }
     else{
       cout<<"not founded\n";
     }}
}

void BubbleId(Student arr[] ,int n , bool asc){
  for (int i=0;i<n;i++){
     for (int j=0 ;j<n-i-1;j++){
       if (asc && arr[j].id>arr[j+1].id){
          swap(arr[j],arr[j+1]);
       }
       else if(!asc && arr[j].id<arr[j+i].id){
           swap(arr[j],arr[j+1]);
           }}}
}
 
void BubbleMarks(Student arr[] ,int n , bool asc){
  for (int i=0;i<n;i++){
     for (int j=0 ;j<n-i-1;j++){
       if (asc && arr[j].mark>arr[j+1].mark){
          swap(arr[j],arr[j+1]);
       }
       else if(!asc && arr[j].mark<arr[j+i].mark){
           swap(arr[j],arr[j+1]);
           }}}
}


void InsertMarks(Student arr[] ,int n , bool asc){
  for(int i=1;i<n;i++){
    Student key = arr[i];
    
    int j = i-1;
    if (asc){
    for (;j>=0 &&  arr[j].mark>arr[j+i].mark;j--){
       arr[j+1] = arr[j];
    }}
    else{
      for (;j>=0 &&  arr[j].mark<arr[j+i].mark;j--){
       arr[j+1] = arr[j];
      }
    } 
 
    arr[j+1] = key;
}}


int main(){

    int n;
    cout<<"Enter the no of student u want to add:";
    cin>>n;

    Student *arr = new Student[n];

    cout<<"\nEnter the data student\n";
    for(int i=0;i<n;i++){
       cout<<"Student no:"<<i+1<<"\n";
       cout<<"ID:";
       cin>>arr[i].id;
        cout<<"Name:";
       cin>>arr[i].name;
        cout<<"Marks:";
       cin>>arr[i].mark;

    }


    cout<<"\nShow the data\n";
    for(int i=0;i<n;i++){
        cout<<"Student is "<<arr[i].name << arr[i].id << arr[i].mark <<"\n";
    }

    int conti = 1;

    while(conti){
    int choice;
    cout<<"\nEnter \n 1. linear  \n  2. BubleName \n 3. BubbleMarks \n 4. InsertName \n 5. InsertMarks \n 6. Binary \n 7. Exit \n";
    cin>>choice;

     if(choice==1){
        int id;
        cout<<"Enter the id to find:";
        cin>>id;
        Linear(arr,n,id);
     }
     else  if(choice==2){
        bool asc = true;
        //bool asc = false;
        BubbleName(arr,n,asc);
     }
     else  if(choice==3){
        bool asc = true;
        //bool asc = false;
        BubbleMarks(arr,n,asc);
     }
     else  if(choice==4){
        bool asc = true;
        //bool asc = false;
        InsertName(arr,n,asc);
     }
     else  if(choice==5){
        bool asc = true;
        //bool asc = false;
        InsertMarks(arr,n,asc);
     }
     else  if(choice==6){
        int id;
        cout<<"Enter the id to find:";
        cin>>id;
        BubbleId(arr,n,true);
        Binary(arr,n,id);
     }
     else if(choice == 7){
        conti = 0;
     }

    cout<<"\nShow the data\n";
    for(int i=0;i<n;i++){
        cout<<"Student is "<<arr[i].name << arr[i].id << arr[i].mark <<"\n";
    }
    }

    return 0;
}        