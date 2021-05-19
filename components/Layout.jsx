import Header from './Header';
import SubHeader from './SubHeader';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <SubHeader />
            <div className="container">
                <main className="main">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;
