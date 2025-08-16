"use client"
import styles from "@/style/Home.module.css"


export default function Home() {
  return (<>

    {/* By css Module */}
    <div className={styles.container}>
      <h2 className="box1">Hey I am good boy</h2>
      <p>AND good coder</p>
    </div>

    {/* By style jsx - local we can only apply it where we declared it inside the div */}
    <div className="box">
      <h2>Hey I am good boy</h2>
      <p>AND good coder</p>

      <style jsx>{`
        .box{
           color:red;
           background-color:blue
        }
        `}
      </style>
    </div>

    {/* By style jsx - global we can apply that css anywhere */}
    <div>
      <h2>Hey I am good boy</h2>
      <p className="box1">AND good coder</p>

      <style jsx global>{`        
        .box1{
           color:red;
           background-color:blue
        }
        `}
      </style>
    </div>

  </>
  );
}
