import { XIcon } from '@heroicons/react/solid';

const LoginModal = () => {
    return (
        <div className="relative h-screen w-screen">
            <form className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 flex-col z-999 p-6 bg-white rounded-md">
                <div className="flex items-center justify-between">
                    <h3 className="text-3xl">Login</h3>
                    <button>
                        <XIcon className="h-6 text-gray-700" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Email Address</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <button>Login</button>
                <button>Login with Google</button>
            </form>
        </div>
    )
}

export default LoginModal;
