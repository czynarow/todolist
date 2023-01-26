import React, { useState } from 'react'
import Todoitem from './item/todoitem'
import CreateTodoField from './CreateTodoField/CreateTodoField'

const data = [
 {
  _id: 'wewfw23',
  title: 'Finish the essay collaboration',
  isCompleted: false,
 },
 {
  _id: 'wefw23232',
  title: 'Read next chapter of the book',
  isCompleted: false,
 },
 {
  _id: 'wewfw323424',
  title: 'Send the finished assigment',
  isCompleted: false,
 },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = id =>
    setTodos([...todos].filter(t => t._id !== id))
  
  return (
    <div className=' text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
      {todos.map(todo => (
        <Todoitem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home