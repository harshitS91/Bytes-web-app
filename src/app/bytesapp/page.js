'use client'
import { useState } from "react";
import BytesappLogin from "../_components/bytesappLogin";
import BytesappSignup from "../_components/bytesappSignup";
import BytesappHeader from "../_components/bytesappHeader";

const bytesapp = () => {
    const [login, setlogin] = useState(true)
    return (
        <>
            <div className="container">
                <BytesappHeader />
                <h1>Restaurant Login/Signup Page</h1>
                {
                    login ? <BytesappLogin /> : <BytesappSignup />
                }

                <div>
                    <button className="button-link" onClick={() => setlogin(!login)}>
                        {login ? "Do not have an account? Signup" : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default bytesapp;