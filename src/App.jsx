import React from "react";
import Header from "./pages/Header";
import RecipesContent from "./pages/RecipesContent";
import RecipesProvider from "./context/RecipesProvider";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <RecipesProvider>
      <Header />
      <RecipesContent />
      <Footer />
    </RecipesProvider>
  );
}

export default App;
