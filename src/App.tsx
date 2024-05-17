import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ComunityPage from "./pages/comunidad/ComunityPage";
import VivaMarket from "./pages/viva-market/VivaMarket";
import GalleryPage from "./pages/gallery/GalleryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/nosotras" element={<AboutPage />} />
          <Route path="/comunidad-femme" element={<ComunityPage />} />
          <Route path="/viva-market" element={<VivaMarket />} />
          <Route path="/galeria" element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
