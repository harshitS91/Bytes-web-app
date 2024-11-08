import Link from 'next/link'
const BytesappHeader = () => {
    return (
        <div>
            <div className="logo">
                <img style={{ width: 100 }} src="https://www.bytefoods.co/wp-content/uploads/2017/05/Byte-Foods-Logo-GREEN.png" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login/SignUp</Link>
                </li>
                <li>
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default BytesappHeader;