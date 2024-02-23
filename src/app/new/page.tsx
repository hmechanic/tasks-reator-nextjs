"use client"
import {useForm} from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function NewPage({params}: {params: {id: string}}) {

  const {handleSubmit, register, setValue} = useForm()
  const router = useRouter()
  useEffect(() => {
    if (params.id){
      axios.get(`http://localhost:3000/api/tasks/${params.id}`).then(res=> {
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      })
    }
}, [])

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    }
    else{
      await axios.post('/api/tasks', data);
    }
    
    router.push('/')
    router.refresh()
  })


  return (
    <section className="h-screen flex items-center justify-center ">
      
        <form onSubmit={onSubmit}>
          <label htmlFor="title"
          className="font-bold text-sm "
          >
            Write your title
          </label>
          <input type="text" placeholder="write a title"
          className="px-3 py-1 border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-1 focus:rinng-sky-300 focus:border-sky-300 
          text-black block mb-2"
          {...register('title')}
          />
          <label htmlFor="description"
          className="font-bold text-sm "
          >
            Write your description
          </label>
          <textarea placeholder="Write a description" 
          className="px-3 py-1 border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-1 focus:rinng-sky-300 focus:border-sky-300 
          text-black block w-full"
          {...register('description')}
          ></textarea>

          <div className="flex justify-between ">
            <button
            type="submit"
            className="bg-sky-500 px-3 py-2 rounded-md text-white mt-2 "
            >
              {params.id ? "Update": "Create" }
            </button>

            <button
            type="button"
            className="bg-red-500 px-3 py-2 rounded-md text-white mt-2 "
            onClick={()=>{
              if(params.id){
                if(confirm('are you sure? ')) {
                  axios.delete(`/api/tasks/${params.id}`)
                }
              }
              router.push("/")
              router.refresh()
              
            }}
            >
              {params.id ? "Delete": "Cancel" }
            </button>
          </div>

        </form>
    </section>
  )
}
