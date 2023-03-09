import React from "react";
import Pass from "../View/home/homePass";
import Download from "../View/download/download";
import Footer from "../View/footer/footer";

function App() {
  const dimensiones = {
    width: "100%",
    height: "100vh",
  };

  return (
    <main style={dimensiones}>
      <Pass />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
