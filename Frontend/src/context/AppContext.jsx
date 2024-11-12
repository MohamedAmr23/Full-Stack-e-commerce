import { createContext, useState } from "react";

export let AppContext = createContext(0);

export default function AppContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={{ count, setCount }}>
      {children}
    </AppContext.Provider>
  );
}
