import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import HttpService from "../service/httpService";
import Cookies from "js-cookie";

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [responseData, setResponseData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            role: 0,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        try {
            const response = await HttpService.post({
                path: "auth/login",
                query: "",
                body: formData,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
            if (response?.data?.data) {
                setResponseData(response?.data?.data);
            }
            // const getUser = await HttpService.get({
            //     path: "user/getUserById",
            //     headers: { withCredentials: true },
            // });
            // console.log(getUser);
        } catch (err) {
            console.log("error logging in: " + err.message);
        }
    };
    return (
        <div className="m-2 p-2">
            <p className="justify-self-center"> Login page</p>
            <form className="flex flex-col " onSubmit={handleSubmit}>
                <input
                    className="p-2 m-1"
                    type="email"
                    ref={emailRef}
                    placeholder="Email"
                />
                <input
                    className="p-2 m-1"
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    minLength={8}
                />
                {!responseData?.isExist && (
                    <p className="p-2 self-center">
                        {responseData?.message}
                    </p>
                )}
                <button type="submit">Login</button>
                <button>
                    <Link
                        to="/signup"
                        className="inline-block text-inherit w-full h-full "
                    >
                        Create Account
                    </Link>
                </button>
            </form>
        </div>
    );
};
export default Login;
