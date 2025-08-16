"use client"
// but client me ye wasie print nahi hote hai

export default function Home() {

  //Server component - par env var show aur print hote hai
  //kyuki bas server component ke liye env usable hai

  //but agar apko client ke liye bhi use karna hai to NEXT_PUBLIC_[any] use karo 

  // .env.local 
  console.log("This is my id:", process.env.NEXT_PUBLIC_NAME) //printed


  // .env  
  console.log("This is my id:", process.env.NEXT_PUBLIC_ID) //printed



  console.log("This is my secret:", process.env.SECRET || "no access")   //not printed


  return (
    <div>
      
      <h1>Client Side</h1>

      Hey, hi there i am {process.env.NEXT_PUBLIC_NAME} and this is my id :{process.env.NEXT_PUBLIC_ID} and secret:{process.env.SECRET || "no access"}
      
      </div>
  );
}
