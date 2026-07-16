import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToHash } from "./components/routing/ScrollToHash";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicyPage } from "./pages/legal/PrivacyPolicyPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
