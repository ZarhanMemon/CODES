
import './App.css'
import { useForm } from "react-hook-form";


function App() {

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting } } = useForm({
      defaultValues: {
        email: '',
        password: '',
      }
    }
    );


  const loader = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000 * time);
    })
  }


  const onSubmit = async (data) => {
    // await loader(3)



    let a = await fetch("http://localhost:3000/", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)
    })
    let res = await a.text()

    console.log("response :", res)
    console.log("date", data)


    // if (data.username === "zarhan" && data.password === "12345678") {
    //   console.log(data)
    //   console.log("Log In successfully")
    // } else {
    //   setError("myAccount", { message: "Please Enter correct username and password" })
    // zarhan
  }

  return (
    <>
      <div className="container">
        <form method='get' onSubmit={handleSubmit(onSubmit)}>

          <input type="text" {...register("username",
            {
              required: { value: true, message: "This is required" },
              maxLength: { value: 8, message: "max is 8" }
            })} />

          {errors.username && <div>{errors.username.message}</div>}


          <br />


          <input type="password" {...register("password",
            {
              required: { value: true, message: "This is required" },
              minLength: { value: 8, message: "min is 8" }
            })} />

          {errors.password && <div>{errors.password.message}</div>}

          <br />

          <input disabled={isSubmitting} type="submit" value="submit" />
          {isSubmitting ? <><h2>Loading...</h2></> : null}



        </form>

      </div>
    </>
  )
}

export default App
