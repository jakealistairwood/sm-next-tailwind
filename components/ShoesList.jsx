import Image from 'next/image';

const ShoesList = ({ shoes }) => {
    return (
        <div className="shoesList">
            {shoes.map((shoe) => (
                <div>
                    <div className="">
                        <Image src={shoe.image} height={220} width={320} className="object-contain" layout='fixed' />
                    </div>
                    <h3>{shoe.Brand} {shoe.Model}</h3>
                    <p>{shoe.Description}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default ShoesList;
