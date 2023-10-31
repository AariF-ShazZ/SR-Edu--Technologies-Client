import React, { useEffect } from 'react'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../Redux/todosRedux/actions'

const TaskList = () => {
  const tasks = useSelector((store) => store.tasks.tasks) || []

  const dispatch = useDispatch()
  useEffect(() => {
    if(tasks.length === 0){
      dispatch(getTasks())
    }
  }, [tasks])

  return (
    <>
      <Task tasks={tasks}/>
    </>
  )
}

export default TaskList