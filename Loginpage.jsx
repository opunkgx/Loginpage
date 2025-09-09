import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          )}

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 font-medium hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
