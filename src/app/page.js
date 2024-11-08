import Image from "next/image";
import styles from "./page.module.css";
import BytesappHeader from "./_components/BytesappHeader";
import BytesappFooter from "./_components/BytesappFooter";

export default function Home() {
  return (
    <main >
      <BytesappHeader />
      <h1>Food Delivery App</h1>
      <BytesappFooter />
    </main>
  );
}
