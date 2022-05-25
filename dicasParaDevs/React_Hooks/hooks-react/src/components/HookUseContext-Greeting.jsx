import { useContext } from "react";

import { ThemeContext } from "./HookUseContext-theme-context"

const Greeting = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>
      <div
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: theme == 'light' ? '#eee' : '#333',
          color: theme == 'dark' ? '#eee': '#333',
          marginTop: 20,
        }}
      >
        <h1>Hello World</h1>
      </div>
    </>
  );
}
 
export default Greeting;