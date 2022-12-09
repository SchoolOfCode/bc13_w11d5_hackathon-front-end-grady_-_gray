import { Themecontext } from "../Contexts/Themecontext";
import { useContext } from "react";

export default function Togglebutton() {
  const { themes, setTheme, theme } = useContext(Themecontext);

  return (
    <button
      onClick={() => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
      }}
    >
      Toggle Light/Dark Mode
    </button>
  );
}
