"use client"
import { Task } from "@prisma/client"
import { useRouter } from "next/navigation"
import { motion } from 'framer-motion'

interface Props {
    task: Task
}

function TaskCard({task}: Props) {

    const router = useRouter()

    return (
    <div className='bg-gray-900 pd-3 hover:bg-slate-800 hover:cursor-pointer ' 
        onClick={() => {
            router.push(`/task/edit/${task.id}`)
        }}
    >
        <motion.div 
        className='bg-gray-900 p-3 rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105 hover:bg-slate-800' 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
            <h3 className='font-bold text-xl text-white'>{task.title}</h3>
            <p className='text-slate-300 mt-2'>{task.description}</p>
        </motion.div>
    </div>
    )
}

export default TaskCard