import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  let name = "kim";
  return (
    <div>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub"> by.jinhyeon {name}</p>
    </div>
  );
}
