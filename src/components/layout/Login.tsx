export default function Login({ toggleLogin }: { toggleLogin: () => void }) {
    return (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black" onClick={toggleLogin}>
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">Login</h2>
        <p className="text-sm text-gray-600 mb-6">Masuk ke akunmu untuk melanjutkan belanja.</p>

        {/* Form */}
        <form className="space-y-4">
          <input type="email" placeholder="Email kamu" className="w-full border rounded-lg px-3 py-2" required />
          <input type="password" placeholder="Kata sandi" className="w-full border rounded-lg px-3 py-2" required />

          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-sm text-center">
          Belum punya akun?{" "}
          <a href="#" className="text-blue-600 font-medium">
            Daftar
          </a>
        </p>
      </div>
    </div>
    )
}