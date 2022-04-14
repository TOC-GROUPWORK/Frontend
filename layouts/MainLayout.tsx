import NavBar from "../components/Navbar"

const MainLayout = ({ children }: { children: React.ReactElement}) => (
    <div>
        <NavBar/>
        {children}
        {/* Footer */}
    </div>
);

export default MainLayout;