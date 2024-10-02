import { render } from "preact";
import { subscribeToTheme } from "../theme";
import { App } from "./app";
import "./index.css";

//The difference between this file and main.tsx is that this tells the app to render as the compound game.
//This makes the difficulty select itself. We can also remove the functionality for changing difficulty from compound game.

render(<App game="Compound" />, document.getElementById("app") as HTMLElement);

subscribeToTheme((theme) => {
  for (const className of document.body.classList.values()) {
    if (className.startsWith("theme-"))
      document.body.classList.remove(className);
  }
  document.body.classList.add(`theme-${theme}`);
});
