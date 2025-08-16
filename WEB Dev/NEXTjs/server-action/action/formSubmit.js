"use server"
import fs from "fs/promises"


export const handleSubmit = async (e) => {

    const name = e.get("name")

     console.log(name)

     await fs.writeFile('hello.txt', `hello, ${name} how are u`)

     const data = await fs.readFile('hello.txt', 'utf8');

     console.log(data);
  }