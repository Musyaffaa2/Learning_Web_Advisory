import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/layout/Navbar";
import PageHome from "./pages/PageHome";
import PageInformasi from "./pages/PageInformasi";
import PageVisualisasi from "./pages/PageVisualisasi";
import PageKuesioner from "./pages/PageKuesioner";

const PAGES = {
  home:         PageHome,
  informasi:    PageInformasi,
  visualisasi:  PageVisualisasi,
  kuesioner:    PageKuesioner,
};

export default function App() {
  const [page, setPage] = useState("home");
  const CurrentPage = PAGES[page];

  return (
    <>
      <style>{GlobalStyles}</style>
      <div style={{ minHeight: "100vh", background: "#f8f9fc", fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar page={page} setPage={setPage} />
        <main>
          <CurrentPage setPage={setPage} />
        </main>
      </div>
    </>
  );
}
