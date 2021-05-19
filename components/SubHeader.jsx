import Link from 'next/link';

const Subheader = () => {
    return (
        <div className="flex items-center justify-center">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default Subheader;
