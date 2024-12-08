import { useRef } from "react";
import { Link } from "react-router-dom";
import HttpService from "../service/httpService";

const Signup = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const mobileRef = useRef(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            role: 0,
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            mobile: mobileRef.current.value,
        };

        try {
            const response = await HttpService.post({
                path: "auth/signup",
                body: formData,
                query: "",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
        } catch (err) {
            console.log("signin error: ", err.message);
        }
    };
    return (
        <div>
            <p className="justify-self-center">Create Account</p>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                    className="p-2 m-1"
                    type="text"
                    ref={nameRef}
                    placeholder="Name"
                />
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
                />
                <input
                    className="p-2 m-1"
                    type="number"
                    size="10"
                    ref={mobileRef}
                    placeholder="Mobile"
                />
                <button type="submit">Signup</button>
                <button>
                    <Link className="block text-inherit " to="/login">
                        login
                    </Link>
                </button>
            </form>
        </div>
    );
};

export default Signup;
