import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './store/user/user-slice'
import { getUser } from './store/user/user-controller';
import { Link, NavLink, Outlet } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.user;
  })
  

  return (
    <>
      <header className="h-12 text-stone-950 flex w-300">
        <nav className="ml-20 w-full space-x-40 mt-2.5">
          <Link to="/home">Home</Link>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <div className="bg-[var(--primary-color)] w-100 h-100 flex-col align-middle justify-center">
        <div>
          <p>
            {' '}
            {user.username} : {user.age}{' '}
          </p>
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="card">
          <button
            onClick={() =>
              dispatch(
                setUserData({
                  username: 'Kanishka',
                  age: 6,
                }),
              )
            }
          >
            Change name {user.username}
          </button>

          <button onClick={getUser}>getUser check in console</button>
        </div>
      </div>
      <div className='bg-black text-slate-50 '>
        <Outlet />
      </div>
    </>
  );
}

export default App
