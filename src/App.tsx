import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Leistungen from "./pages/Leistungen";
import Bueroreinigung from "./pages/Bueroreinigung";
import Unterhaltsreinigung from "./pages/Unterhaltsreinigung";
import Gebaeudereinigung from "./pages/Gebaeudereinigung";
import BranchenBuero from "./pages/BranchenBuero";
import BranchenPraxis from "./pages/BranchenPraxis";
import UeberUns from "./pages/UeberUns";
import Qualitaet from "./pages/Qualitaet";
import Zertifikate from "./pages/Zertifikate";
import Referenzen from "./pages/Referenzen";
import Preise from "./pages/Preise";
import FAQ from "./pages/FAQ";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/leistungen" element={<Layout><Leistungen /></Layout>} />
            <Route path="/bueroreinigung-berlin" element={<Layout><Bueroreinigung /></Layout>} />
            <Route path="/unterhaltsreinigung-berlin" element={<Layout><Unterhaltsreinigung /></Layout>} />
            <Route path="/gebaeudereinigung-berlin" element={<Layout><Gebaeudereinigung /></Layout>} />
            <Route path="/branchen/buero" element={<Layout><BranchenBuero /></Layout>} />
            <Route path="/branchen/praxis" element={<Layout><BranchenPraxis /></Layout>} />
            <Route path="/ueber-uns" element={<Layout><UeberUns /></Layout>} />
            <Route path="/qualitaet-prozesse" element={<Layout><Qualitaet /></Layout>} />
            <Route path="/zertifikate-sicherheit" element={<Layout><Zertifikate /></Layout>} />
            <Route path="/referenzen" element={<Layout><Referenzen /></Layout>} />
            <Route path="/preise" element={<Layout><Preise /></Layout>} />
            <Route path="/faq" element={<Layout><FAQ /></Layout>} />
            <Route path="/kontakt" element={<Layout><Kontakt /></Layout>} />
            <Route path="/impressum" element={<Layout><Impressum /></Layout>} />
            <Route path="/datenschutz" element={<Layout><Datenschutz /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
