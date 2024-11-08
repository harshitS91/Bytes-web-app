import Link from 'next/link'
const BytesappHeader = () => {
    return (
        <div className='headerContainer'>
            <div className="logo">
                <img style={{ width: 50 }} src="https://www.bytefoods.co/wp-content/uploads/2017/05/Byte-Foods-Logo-GREEN.png" />
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link className='headerItem' href="/">Login/SignUp</Link>
                <Link href="/">Profile</Link>
            </div>

        </div>
    )
}

export default BytesappHeader;