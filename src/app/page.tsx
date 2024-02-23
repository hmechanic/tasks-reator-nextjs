import axios from 'axios'
import {prisma} from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'

async function loadTasksHTTP() {
  const res = await axios.get('http://localhost:3000/tasks')
}

async function loadTasksPRISMA() {
  const tasks = await prisma.task.findMany()
  return tasks
}

async function HomePage() {
  const tasks = await loadTasksPRISMA()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-5' >
      {tasks.map(task => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  )
}

export default HomePage;