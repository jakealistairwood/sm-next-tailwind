const LoginModal = () => {
    return (
        <form className="fixed flex flex-col z-1000 p-6 bg-white">
            <h3 className="text-center">Login</h3>
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
    )
}

export default LoginModal;
