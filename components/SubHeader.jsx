import Link from 'next/link';

const Subheader = () => {
    return (
        <div className="flex items-center justify-center bg-[#1f1f1f] text-white py-3 shadow-md w-screen">
            <ul className="flex items-center space-x-10">
                <li>
                    <Link href="/">
                        <a className="navLink">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="navLink">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shoes">
                        <a className="navLink">Shoes</a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles">
                        <a className="navLink">Articles</a>
                    </Link>
                </li>
                <li>
                    <Link href="/reviews">
                        <a className="navLink">Reviews</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className="navLink">Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Subheader;
