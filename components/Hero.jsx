import autoprefixer from 'autoprefixer';
import HeroImg from '../public/img/sm-hero.jpeg';
import { ChevronRightIcon } from '@heroicons/react/solid';

const Hero = () => {
    return (
        <div
            className="flex flex-col justify-center pl-40 w-screen" 
            style={{
                backgroundImage: "url(" + `${HeroImg}` + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "0 -500px",
                height: "80vh",
                margin: "0 auto"
            }}
        >    
            <h1 className="text-4xl text-white uppercase font-bold">Our Top 10 Running Shoes of 2021</h1>
            <p className="w-1/3 mt-5 text-gray-300 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam sit amet consectetur pariatur accusantium totam dolorum placeat ipsa aut.</p>
            <button className="flex items-center bg-gray-800 w-40 py-4 mt-6 rounded-full hover:bg-gray-700">
                <span className="text-white font-semibold ml-5">Take A Look</span>
                <ChevronRightIcon className="h-6 ml-2 text-white" />
            </button>
        </div>
    )
}

export default Hero;
