import { styledTheme } from "../src/styled/StyledTheme";

declare module "styled-components" {
  type StyledTheme = typeof styledTheme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends StyledTheme {}
}
