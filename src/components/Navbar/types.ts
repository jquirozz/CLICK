import type { JSX } from "react";

export interface LinkProps {
  to: string;
  active_icon: JSX.Element;
  default_icon: JSX.Element;
  label: string;
}