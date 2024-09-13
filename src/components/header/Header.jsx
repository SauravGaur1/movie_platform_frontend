import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../store/user/user-slice'
import { getUser } from '../../store/user/user-controller';


const Header = () => {
    const dispatch = useDispatch();

    const user = useSelector((store) => {
      return store.user;
    })

    console.log(user);  
  
    return (
        <>
            <div className="bg-[var(--primary-color)] w-100 h-100 flex-col align-middle justify-center">
                <div>
                    <p>
                        {" "}
                        {user.username} : {user.age}{" "}
                    </p>
                </div>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <div className="card">
                    <button
                        onClick={() =>
                            dispatch(
                                setUserData({
                                    username: "Kanishka",
                                    age: 6,
                                })
                            )
                        }
                    >
                        Change name {user.username}
                    </button>

                    <button onClick={getUser}>getUser check in console</button>
                </div>
            </div>
        </>
    );
};

export default Header;
