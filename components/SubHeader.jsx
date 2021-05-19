import Link from 'next/link';

const Subheader = () => {
    return (
        <div className="flex items-center justify-center bg-[#1f1f1f] text-white py-3 shadow-md">
            <ul className="flex items-center space-x-10">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/">Products</Link>
                </li>
                <li>
                    <Link href="/">Articles</Link>
                </li>
                <li>
                    <Link href="/">Reviews</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Subheader;
