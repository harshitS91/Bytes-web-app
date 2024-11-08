const BytesappLogin = () => {
    return (
        <>
            <h3>Login component</h3>
            <div className="signLoginDiv">
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter email id" className="input-wrapper" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter password" className="input-wrapper" />
                </div >
                <button className="buttonLogin">Login</button>
            </div>
        </>
    )
}


export default BytesappLogin