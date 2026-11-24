export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">MenuFlow 🍽️</h1>

      <p className="mb-6">Digital QR Menu System for Restaurants</p>
      <p className="mb-6">
        Turn your restaurant menu into a QR code in minutes No apps. No
        printing. Update instantly.
      </p>

      <a href="/admin/login" className="bg-black text-white px-4 py-2 rounded">
        Get Started
      </a>
      <br />

      <a href="/admin/menu" className="bg-black text-white px-4 py-2 rounded">
        View Menu
      </a>
    </div>
  );
}
