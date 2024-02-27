import * as React from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
