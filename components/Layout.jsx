import Header from './Header';
import SubHeader from './SubHeader';
import LoginModal from './LoginModal';
import Backdrop from './Backdrop';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <SubHeader />
            {/* <LoginModal />
            <Backdrop /> */}
            <div className="container">
                <main className="main">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;
