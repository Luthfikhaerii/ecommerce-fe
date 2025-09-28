import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ toggleCart }: any) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="w-full px-8 py-4 shadow-sm bg-white fixed z-30">
            <div className="max-w-screen-2xl w-full mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-extrabold tracking-wide">MORAEL</div>

                {/* Menu Tengah - hidden di mobile */}
                <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase">
                    <Link to="/" className="hover:text-gray-600 text-xs">
                        Home
                    </Link>
                    <Link to="/product" className="hover:text-gray-600 text-xs">
                        Product
                    </Link>
                    <Link to="/category" className="hover:text-gray-600 text-xs">
                        Category
                    </Link>
                    <Link to="/about" className="hover:text-gray-600 text-xs">
                        About
                    </Link>
                </nav>

                {/* Icon Kanan */}
                <div className="flex items-center gap-6">
                    <button className="hover:text-gray-600 text-xs" onClick={() => { setCartOpen(true); toggleCart(); }}>
                        <ShoppingBag size={20} />
                    </button>
                    <button className="hover:text-gray-600 text-xs" onClick={() => navigate('/order')}>
                        <User size={20} />
                    </button>

                    {/* Hamburger hanya di mobile */}
                    <button
                        className="md:hidden hover:text-gray-600 text-xs"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Dropdown Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
                        <Link to="/" className="hover:text-gray-600 text-xs">
                            Home
                        </Link>
                        <Link to="/product" className="hover:text-gray-600 text-xs">
                            Product
                        </Link>
                        <Link to="/category" className="hover:text-gray-600 text-xs">
                            Category
                        </Link>
                        <Link to="/about" className="hover:text-gray-600 text-xs">
                            About
                        </Link>
                    </div>
                )}
            </div>
            {
                cartOpen && (
                    <div className="absolute top-0 left-0 bg-black/40 w-full h-screen z-20 flex justify-end" onClick={() => { setCartOpen(false); toggleCart(); }}>
                        <div className="w-96 bg-white" onClick={(e) => e.stopPropagation()}>
                                {/* Header */}
                                <div className="flex justify-between items-center border-b p-4 mb-6">
                                    <h2 className="text-lg font-semibold">Keranjang Saya</h2>
                                    <button onClick={() => { setCartOpen(false); toggleCart(); }}
                                        className="text-xl text-gray-500 hover:text-black"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Empty State */}
                                <div className="flex flex-col items-center justify-center text-center py-12">
                                    <h3 className="font-medium mb-2">Keranjang Kosong</h3>
                                    <p className="text-gray-500 mb-6 px-4">
                                        Tambah produk atau masuk untuk melanjutkan belanja
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex gap-3">
                                        <button className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-gray-50">
                                            Lanjutkan berbelanja
                                        </button>
                                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
                                            Login
                                        </button>
                                    </div>
                                </div>
            
                        </div>
                    </div>
                )
            }
        </header>
    );
}
