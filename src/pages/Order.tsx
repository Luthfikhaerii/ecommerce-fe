import { useState } from "react";
import Login from "../components/layout/Login";
import Register from "../components/layout/Register";

export default function Order() {
  const [auth, setAuth] = useState(false);
  const [onLogin, setOnLogin] = useState(false);
  const [onRegister, setOnRegister] = useState(false);

  const toggleLogin = () => {
    setOnLogin(value => !value);
  }

  const toggleRegister = () => {
    setOnRegister(value => !value);
  }


  return (
    <>

    { onLogin ? <Login toggleLogin={toggleLogin}/>:''}
    { onRegister ? <Register toggleRegister={toggleRegister} />:''}
    <section className="px-8 max-w-6xl mx-auto min-h-screen mt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Hai upi khaeri</h1>
        {
          auth ? <button className="border rounded-lg px-4 py-1 hover:bg-gray-50">
            Pengaturan
          </button> : <div className="flex gap-4">
            <button className="border rounded-lg bg-gray-200 px-4 py-1 hover:bg-gray-300" onClick={toggleLogin}>
              Login
            </button>
            <button className="border rounded-lg bg-gray-200 px-4 py-1 hover:bg-gray-300" onClick={toggleRegister}>
              Register
            </button>
          </div>
        }

      </div>

      {/* Orders Section */}
      <div className="bg-white rounded-lg border p-6">
        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button className="flex-1 text-center py-2 border-b-2 border-black font-medium">
            Pesanan
          </button>
        </div>

        {/* Orders Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="font-medium">Order Saya (0)</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Temukan Order Kamu</span>
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>Semua status</option>
            </select>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center text-center text-gray-600 py-12">
          <div className="text-5xl mb-4">📦</div>
          <h3 className="font-medium">Tidak ada pesanan</h3>
          <p className="text-sm">Silakan buat pesanan untuk melihatnya disini.</p>
        </div>
      </div>
    </section>
    </>
  );
}
