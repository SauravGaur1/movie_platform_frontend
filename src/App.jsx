import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './store/user/user-slice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.user;
  })
  
  console.log(user);

  return (
    <>
      <div>
        <p> {user.username} : {user.age} </p>
      </div>
      <div className="card">
        <button onClick={() => dispatch(setUserData({
          username: "Kanishka",
          age: 6
        }))}>
          Change name {user.username}
        </button>
      </div>
    </>
  )
}

export default App
