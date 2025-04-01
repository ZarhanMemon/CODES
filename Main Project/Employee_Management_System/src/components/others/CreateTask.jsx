import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [userData, setUserData] = useContext(AuthContext);

    const onSubmit = (data) => {
        const newTask = {
            ...data,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        };

        const employeeList = [...userData.employees];

        const existingEmployeeIndex = employeeList.findIndex(emp => emp.name === data.assign_to);

        if (existingEmployeeIndex !== -1) {

            const existingEmployee = employeeList[existingEmployeeIndex];

            existingEmployee.tasks.push(newTask);
            existingEmployee.taskCount.newTask += 1;
 
            employeeList[existingEmployeeIndex] = existingEmployee;
        } else {
            employeeList.push({
                name: data.assign_to,
                email: `${data.assign_to}@example.com`,
                taskDescription: data.taskDescription,
                taskName: data.taskName,
                taskDate: data.taskDate,
                taskCategory: data.taskCategory,
                id: employeeList.length + 1,
                tasks: [newTask],
                taskCount: {
                    active: 0,
                    newTask: 1,
                    completed: 0,
                    failed: 0
                }
            });
        }

         setUserData((prevData) => ({ ...prevData, employees: employeeList }));
        localStorage.setItem("employees", JSON.stringify(employeeList));

 
        reset({
            taskName: "",
            taskDescription: "",
            taskDate: "",
            assign_to: "",
            taskCategory: ""
        });
    };

    return (
        <div className='p-5 mt-5 rounded bg-[#1c1c1c]'>
            <form className='flex flex-wrap justify-between w-full items-start' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-white mb-0.5'>Task Title:</h3>
                        <input
                            className='placeholder:text-[#d3d3d3] text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-teal-600 w-4/5 mb-4'
                            placeholder='Make a UI design'
                            {...register("taskName", { required: "Task Title is required" })}
                            type='text'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-white mb-0.5'>Date:</h3>
                        <input
                            className='text-[#d3d3d3] text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-teal-600 w-4/5 mb-4'
                            {...register("taskDate", { required: "Date is required" })}
                            type='date'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-white mb-0.5'>Assign To:</h3>
                        <input
                            className='placeholder:text-[#d3d3d3] text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-teal-600 w-4/5 mb-4'
                            placeholder='Employee name'
                            {...register("assign_to", { required: "Assign To is required" })}
                            type='text'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-white mb-0.5'>Category:</h3>
                        <input
                            className='placeholder:text-[#d3d3d3] text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-teal-600 w-4/5 mb-4'
                            placeholder='Dev, Design, etc'
                            {...register("taskCategory", { required: "Category is required" })}
                            type='text'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-white mb-0.5'>Description:</h3>
                    <textarea
                        className='placeholder:text-[#d3d3d3] w-full text-white h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-teal-600'
                        cols="30"
                        rows="10"
                        placeholder='Detailed Description of Task (max words 500)'
                        {...register("taskDescription", { required: "Description is required", maxLength: 500 })}
                    ></textarea>

                    <input
                        className='  text-white text-xl border-none outline-none bg-teal-600 hover:bg-teal-700 hover:text-black py-3 px-5 rounded mt-4 w-full'
                        disabled={isSubmitting}
                        type="submit"
                        value="Create Task"
                    />
                </div>
            </form>
        </div>
    );
}

export default CreateTask;
