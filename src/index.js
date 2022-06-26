import { getNotes } from "./notes";
import masai_logo from "./assets/Images/msai_logo.png";
import "./styles/index.css";

const root = getElementById("root");

let image = document.getElementById("logo");
image.className = "msai_logo";
image.src = masai_logo;

getNotes();
