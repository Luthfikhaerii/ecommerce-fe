import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


export default function MainLayout() {
    return (
        <>
            <Header />
            <div className="w-full bg-gray-50">
                <div className="max-w-screen-2xl w-full mx-auto pt-16 min-h-[80vh]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}