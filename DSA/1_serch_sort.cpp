#include <iostream>
#include <cstring>

using namespace std;

struct Student{
    int id;
    char name[30];
    float marks;
};


void Linear(Student arr[] , int n , int target){
    for(int i=0 ;i<n ; i++){
        if (arr[i].id == target){
            cout<<"\n Student found at "<< i<<" as "<<arr[i].name;
            return;
        }
    }
     cout<<"Not founded\n";
       
}


void Binary(Student arr[], int n , int target){
    int l = 0;
    int r = n-1;

    while(l<=r){

        int mid = (l+r)/2;

        if (arr[mid].id == target){
            cout<<"\n Student found at "<< mid <<" as "<<arr[mid].name;
            return;
        }
        else if (arr[mid].id > target){
            r = mid-1;
        }
        else if(arr[mid].id < target){
            l = mid+1;
        }
        else{
            cout<<"Not founded\n";
        }

    }
}


void BubbleName(Student arr[],int n){
    for (int i=0 ;i<n;i++){
        for(int j=0 ;j<n-1-i;j++)
          
          if(strcmp(arr[j].name,arr[j+1].name)>0){
            swap(arr[j],arr[j+1]);
          }
    
    }

    cout << "\n-- Students Sorted by Name --\n";
    for (int i = 0; i < n; i++) {
    cout << arr[i].id << " " << arr[i].name << " " << arr[i].marks << "\n";
     }
}


void InsertName(Student arr[] , int n){
    for (int i=0 ;i <n ;i++){

        Student key = arr[i];
        int j=i-1;

        for(;j>=0 && strcmp(arr[j].name,key.name)>0 ;j++){
            arr[j+1] = arr[j];
        }
        arr[j+1] = key;
    }
 cout << "\n-- Students Sorted by Name --\n";
    for (int i = 0; i < n; i++) {
    cout << arr[i].id << " " << arr[i].name << " " << arr[i].marks << "\n";
     }
}







void DES_InsertName(Student arr[] , int n){
    for (int i=0 ;i <n ;i++){

        Student key = arr[i];
        int j=i-1;

        for(;j>=0 && strcmp(arr[j].name,key.name)<0 ;j++){
            arr[j+1] = arr[j];
        }
        arr[j+1] = key;
    }
 cout << "\n-- Students Sorted by Name --\n";
    for (int i = 0; i < n; i++) {
    cout << arr[i].id << " " << arr[i].name << " " << arr[i].marks << "\n";
     }
}








void BubbleMark(Student arr[],int n){
    for (int i=0 ;i<n;i++){
        for(int j=0 ;j<n-1-i;j++)
          
          if(arr[j].marks>arr[j+1].marks){
            swap(arr[j],arr[j+1]);
          }
    
    }

    cout << "\n-- Students Sorted by Name --\n";
    for (int i = 0; i < n; i++) {
    cout << arr[i].id << " " << arr[i].name << " " << arr[i].marks << "\n";
     }
}

int main(){
    
    int n;
    cout<<"Enter the no of student:";
    cin>> n;

    Student *arr = new Student[n];

    cout<<"\n---ENter dats---\n";
    for(int i=0;i<n;i++){
        cout<<"\n Student :"<<i+1<<"\n";

        cout<<"ID:";
        cin>>arr[i].id;
        cout<<"name:";
        cin>>arr[i].name;
        cout<<"mark:";
        cin>>arr[i].marks;

    }


    cout<<"\n-- Display Data --\n";
    for(int i=0 ; i<n;i++){
        cout<<"Student is "<<arr[i].id <<arr[i].name<<arr[i].marks<<"\n";
    }


    //linear search
    int target_id ;
    cout<<"Enter id to find:";
    cin>>target_id;
    Linear(arr,n,target_id);


    //Bubble sort by name
    BubbleName(arr,n);

    //Insertion sort by name
    InsertName(arr,n);

    return 0;
}