import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './store/user/user-slice'

function App() {

  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.user;
  })
  
  console.log(user);

  return (
    <>
      <div className="bg-[var(--primary-color)] w-100 h-100 flex-col align-middle justify-center">
        <div>
          <p> {user.username} : {user.age} </p>
        </div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className="card">
          <button onClick={() => dispatch(setUserData({
            username: "Kanishka",
            age: 6
          }))}>
            Change name {user.username}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
