import React from "react";
import Pass from "../View/home/homePass";
import Download from "../View/download/download";
import Footer from "../View/footer/footer";
import store from '../Redux/store';
import { Provider } from "react-redux";


function App() {
  const dimensiones = {
    width: "100%",
    height: "100vh",
  };
  
  
  
  return (
    <Provider store={store}>
    <main style={dimensiones}>
      <Pass />
      <Download />
      <Footer />
    </main>
    </Provider>
  );
}

export default App;
