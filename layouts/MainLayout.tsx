import navBar from "../components/navBar";

const MainLayout = ({ children }: { children: React.ReactElement}) => (
    <div>
        <navBar/>
        {children}
        {/* Footer */}
    </div>
);

export default MainLayout;