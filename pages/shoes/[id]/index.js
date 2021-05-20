import axios from 'axios'
import Link from 'next/link'

const Shoe = ({ shoe }) => {
    return (
        <div className="flex px-40 mx-auto w-screen py-20">
            <div className="w-2/5">
                <img 
                    src={shoe.image} 
                    alt={`${shoe.Brand} ${shoe.Model}`} 
                    className="w-full"
                />
            </div>
            <div className="ml-40 w-2/5">
                <h2 className="font-bold text-4xl text-gray-700 w-full">{shoe.Brand} {shoe.Model}</h2>
                <p className="mt-6 font-light">{shoe.Description}</p>
                {shoe.countInStock < 5 ? (
                    <div className="flex items-center mt-6">
                        <div className="bg-red-700 rounded full h-2 w-2"></div>
                        <p className="ml-3 text-red-700">Low In Stock</p>
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center mt-6">
                            <div className="bg-green-700 rounded full h-2 w-2"></div>
                            <p className="ml-3 text-green-700">In Stock</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shoe

export const getServerSideProps = async(context) => {
    const res = await axios.get(`http://localhost:1337/running-shoes/${context.params.id}`);
    const shoe = await res.data

    return {
        props: {
            shoe
        }
    }
}
