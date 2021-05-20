import LoginModal from './LoginModal';

const Backdrop = ({ active, setActive }) => {

    const backdropActive = active ? 'fixed' : 'hidden';

    const styles = {divClass: 'top-0 left-0 h-screen w-full bg-black bg-opacity-70 z-900'}

    return (
        <div className={`${styles.divClass} ${backdropActive}`}>
            <LoginModal />
        </div>
    )
}

export default Backdrop;
