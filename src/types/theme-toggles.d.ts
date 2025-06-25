declare module "@theme-toggles/react" {
  import * as React from "react";

  export interface ThemeToggleProps extends React.HTMLAttributes<HTMLElement> {
    toggled: boolean;
    toggle: () => void;
    duration?: number;
    color?: string;
  }

  export const DarkSide: React.FC<ThemeToggleProps>;
}
