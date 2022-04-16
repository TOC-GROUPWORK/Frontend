import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = ({ children }: { children: React.ReactElement}) => (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
);

export default MainLayout;