import { Welcome } from "./content-left/Welcome";
import { Cat } from "./content-right/Cat";
import { Header } from "./header/header";
import "./header/header.css";
import "./home.css";

export function Homepage() {
  return (
    <>
      <Header />
      <Welcome />
      <Cat />
    </>
  );
}
