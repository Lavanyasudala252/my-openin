import { createContext, useContext } from "react";
import { useState } from "react";

const menuHandleContext = createContext({});

export function useMenuHandle() {
  return useContext(menuHandleContext);
}

export function MenuHandleProvider({ children }) {
  const [isMenuClicked, setMenuClicked] = useState(false);

  function menuOpen() {
    setMenuClicked(true);
  }
  function menuClose() {
    setMenuClicked(false);
  }

  return (
    <menuHandleContext.Provider value={{ menuOpen, menuClose, isMenuClicked }}>
      {children}
    </menuHandleContext.Provider>
  );
}
