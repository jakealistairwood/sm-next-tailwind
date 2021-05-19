// import Image from 'next/image';
import Link from 'next/link';

const ShoesList = ({ shoes }) => {
    return (
        <div className="w-screen">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-center text-5xl font-BarlowCondensed font-bold text-gray-700 mt-20 mb-10 uppercase">Our Latest Products</h2>
                <div className="h-1 w-20 bg-yellow-200"></div>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-20">
        
                {shoes.map((shoe) => (
                    <Link href="">
                        <div clasName="flex flex-col">
                            <div className="">
                                {/* <Image src={shoe.image} height={220} width={320} className="object-contain" layout='fixed' /> */}
                                <img 
                                    className="flex h-40"
                                    src={shoe.image} 
                                />
                            </div>
                            <h3>{shoe.Brand} {shoe.Model}</h3>
                            <div className="flex items-center justify-between">
                                <p>£{shoe.Price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ShoesList;
