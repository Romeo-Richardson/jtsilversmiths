import { login } from "../utils/handleLogin";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        action={login}
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow"
      >
        <h1 className="mb-6 text-2xl font-bold">Login</h1>

        <label className="mb-2 block text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mb-4 w-full rounded border px-3 py-2"
          placeholder="you@example.com"
        />

        <label className="mb-2 block text-sm font-medium">Password</label>
        <input
          name="password"
          type="password"
          required
          className="mb-6 w-full rounded border px-3 py-2"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="btn btn-primary w-full rounded px-4 py-2 font-medium text-white"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
