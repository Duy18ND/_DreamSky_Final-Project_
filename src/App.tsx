import './App.css';
import Header from './components/Duy/Header';
import Section from './components/Duy/Section';
import Aside from './components/Tien/Aside';
import Footer from './components/Tien/Footer';
import ScrollToTopButton from './components/Tien/ScrollToTopButton';
import { useRef, useState } from "react";

function App() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 🔥 State điều khiển ẩn/hiện Section
  const [hideSection, setHideSection] = useState(false);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onClickHeader={scrollToSection} />

      {/* 🔥 Khi Footer xuất hiện → hideSection = true → Section biến mất */}
      {!hideSection && <Section ref={sectionRef} />}

      <Aside />

      <Footer
        onVisibleChange={(isVisible) => setHideSection(isVisible)}
      />

      <ScrollToTopButton />
    </>
  );
}

export default App;
