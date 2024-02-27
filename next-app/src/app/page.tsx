"use client";
import { useRouter } from "next/navigation";
import { Header } from "../app/components/Header";
import Footer from "./components/Footer";
import { Main } from "./components/Main";
import styles from "./page.module.css";
import { Layout } from "./Layout/page";


export default function Home() {
  const router = useRouter(); //useRouter hook
  return (
    <main className={styles.main}>
      <Layout>
  
      <Main />
     
      </Layout>
    </main>
  );
}
