import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode , setThememode] = useState("light");

  const lightTheme= ()=>{
    setThememode("light")
  }
  const darkTheme= ()=>{
    setThememode("dark")
  }

  //Actual change in theme

  useEffect(()=>{
    let mainPage = document.querySelector('html').classList 
    mainPage.remove("light" , "dark");
    mainPage.add(themeMode);
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>
      <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
             <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
             <Card/>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
