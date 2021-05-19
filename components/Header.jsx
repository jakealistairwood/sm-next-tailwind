import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
const Header = () => {
    return (
        <header className="flex justify-between items-center w-screen px-40 py-2">
            <Image 
                src="/img/sm-logo.png" 
                height={70} 
                width={70} 
            />
            <div className="flex items-center space-x-8">
                <div className="flex items-center bg-gray-100 rounded-full p-2">
                    <SearchIcon className="icon" />
                    <input 
                        className="bg-transparent outline-none ml-2 placeholder-gray-500 flex-shrink" 
                        type="text" 
                    />
                </div>
                <HeartIcon className="icon" />
                <ShoppingCartIcon className="icon" />
            </div>
        </header>
    )
}
 
export default Header;
