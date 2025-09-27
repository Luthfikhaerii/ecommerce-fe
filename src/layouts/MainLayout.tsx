import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useState } from "react";


export default function MainLayout() {
    const [cartActive, setCartArctive] = useState(false);

    const toggleCart = () => {
        setCartArctive(value=>!value);
    }

    return (
        <>
            <Header toggleCart={toggleCart} />
            <div className="w-full bg-gray-50">
                <div className={`max-w-screen-2xl w-full mx-auto pt-16 min-h-[80vh] overflow-hidden ${cartActive?'overflow-hidden':''}`}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}