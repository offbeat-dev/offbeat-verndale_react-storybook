// YourTheme.js

import { create } from "@storybook/theming/create";
import logo from "./paulocodes.png";

export default create({
  base: "light",
  brandTitle: "paulo.codes",
  brandUrl: "https://paulo.codes/",
  brandImage: logo,
});
