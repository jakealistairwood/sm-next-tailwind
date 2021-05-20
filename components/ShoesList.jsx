// import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid';

const ShoesList = ({ shoes }) => {
    return (
        <div className="w-screen">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-center text-5xl font-BarlowCondensed font-bold text-gray-700 mt-20 mb-10 uppercase">Our Latest Products</h2>
                <div className="h-1 w-20 bg-yellow-200"></div>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-20 mb-10 mx-40">
                {shoes.map((shoe) => (
                    <Link href="/shoes/[id]" as={`/shoes/${shoe.id}`}>
                        <a className="cursor-pointer">
                            <div className="flex flex-col p-6 bg-white">
                                <div className="">
                                    {/* <Image src={shoe.image} height={220} width={320} className="object-contain" layout='fixed' /> */}
                                    <img 
                                        className="flex h-40 w-full"
                                        src={shoe.image} 
                                    />
                                </div>
                                <h3 className="mt-6 text-xl whitespace-nowrap overflow-hidden font-BarlowCondensed font-bold">{shoe.Brand} {shoe.Model}</h3>
                                <div className="flex items-center justify-between mt-6">
                                    <p>£{shoe.Price}</p>
                                    <button className="flex items-center bg-gray-700 rounded-full py-2">
                                        <span className="text-white text-xs ml-4">View More</span>
                                        <ChevronRightIcon className="h-4 text-white mr-4" />
                                    </button>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ShoesList;
