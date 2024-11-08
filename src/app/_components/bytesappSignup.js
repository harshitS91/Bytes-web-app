const BytesappSignup = () => {
    return (
        <>
            <h3>Signup component</h3>
            <div className="signUpDiv">
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter email id" className="input-wrapper" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter password" className="input-wrapper" />
                </div >
                <div className="input-wrapper">
                    <input type="password" placeholder="Confirm password" className="input-wrapper" />
                </div >
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter restaurent name" className="input-wrapper" />
                </div >
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter city" className="input-wrapper" />
                </div >
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter full address" className="input-wrapper" />
                </div ><div className="input-wrapper">
                    <input type="password" placeholder="Enter contact number" className="input-wrapper" />
                </div >
                <button className="buttonSignup">Sign up</button>
            </div>
        </>
    )
}


export default BytesappSignup