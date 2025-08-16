"use client"
import { handleSubmit } from "@/action/formSubmit";
import { useRef } from "react";



export default function Home() {

// or inline (NOT RECOMMENDED)

  // const handleSubmit = async (e) => {
  //   "use server"
  //    console.log(e.get("name"))

  //    await fs.writeFile('hello.txt', `hello, ${e.get("name")} how are u`)

  //    const data = await fs.readFile('hello.txt', 'utf8');
  //    console.log(data);
  // }


  let ref = useRef()

  return (

    <div>
      <form ref={ref} action={e =>{ handleSubmit(e);
                                    ref.current.reset()}}>

        <label>Name</label>
        <input name="name" id="name" type="text" />

        <button type="submit">Submit</button>

      </form>

    </div>

  );
}
