import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/portfolio/Layout';
import Home from '@/pages/Home';
import AboutOliTechs from '@/pages/AboutOliTechs';
import ServicesOverview from '@/pages/ServicesOverview';
import Blog from '@/pages/Blog';
import Faq from '@/pages/Faq';
import PricingPlans from '@/pages/PricingPlans';
import ContactPage from '@/pages/Contact';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import OAuthConsent from '@/pages/OAuthConsent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutOliTechs />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pricing" element={<PricingPlans />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/oauth-consent" element={<OAuthConsent />} />
      </Routes>
    </BrowserRouter>
  );
}
