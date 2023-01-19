import { Route, Routes} from "react-router-dom";

import Layout from "./components/Layout.js";
import MainPage from "./pages/MainPage.js";
import ReasonsPage from "./pages/ReasonsPage.js";
import AboutUsPage from "./pages/AboutUsPage.js";

function App() {
  return (
    <Layout>
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reasons" element={<ReasonsPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;