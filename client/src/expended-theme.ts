// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
//numbers in theme.ts that defines colors does not exist in type of material UI so we need to expand this theme
//when we click on palette color and we see that we need to add key number string and when we click on palette we see that we miss tertiary so we need to add it
