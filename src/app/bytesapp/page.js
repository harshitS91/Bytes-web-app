'use client'
import { useState } from "react";
import BytesappLogin from "../_components/bytesappLogin";
import BytesappSignup from "../_components/bytesappSignup";
import BytesappHeader from "../_components/BytesappHeader";
import BytesappFooter from "../_components/BytesappFooter";

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
                <BytesappFooter />
            </div>
        </>
    )
}

export default bytesapp;