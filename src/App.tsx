import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServerCards from "./components/ServerCards";
import WhySection from "./components/WhySection";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import { useAdminAuth } from "./hooks/useAdminAuth";

export default function App() {
  const isAdmin = window.location.pathname.startsWith("/admin");
  const { isAuthed, login } = useAdminAuth();

  if (isAdmin) {
    return isAuthed ? <AdminDashboard /> : <AdminLogin onLogin={login} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#120F0D" }}>
      <Navbar />
      <Hero />
      <ServerCards />
      <WhySection />
      <Footer />
    </div>
  );
}