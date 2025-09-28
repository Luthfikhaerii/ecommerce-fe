export default function Register({toggleRegister}: {toggleRegister: ()=>void}) {
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                {/* Close Button */}
                <button className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black" onClick={toggleRegister}>
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">Daftar</h2>
                <p className="text-sm text-gray-600 mb-6">
                    Buat akun untuk mendapatkan poin, voucher gratis, dan update terbaru.
                </p>

                {/* Form */}
                <form className="space-y-4">
                    <input type="text" placeholder="Nama Lengkap Kamu*" className="w-full border rounded-lg px-3 py-2" required />
                    <input type="email" placeholder="Email kamu" className="w-full border rounded-lg px-3 py-2" required />
                    <input type="password" placeholder="Kata sandi" className="w-full border rounded-lg px-3 py-2" required />

                    {/* Birthday */}
                    <div>
                        <label className="text-sm text-gray-600">Ulang Tahun Saya (opsional)</label>
                        <div className="flex gap-2 mt-1">
                            <select className="flex-1 border rounded-lg px-2 py-2">
                                <option>Tanggal</option>
                            </select>
                            <select className="flex-1 border rounded-lg px-2 py-2">
                                <option>Bulan</option>
                            </select>
                            <select className="flex-1 border rounded-lg px-2 py-2">
                                <option>Tahun</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-black text-white py-2 rounded-lg">
                        Buat akun baru
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-4 text-sm text-center">
                    Sudah punya akun?{" "}
                    <a href="#" className="text-blue-600 font-medium">
                        Login di sini
                    </a>
                </p>
            </div>
        </div>
    )
}