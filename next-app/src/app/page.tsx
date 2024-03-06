"use client";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import { Layout } from "./Layout/page";
import { Main } from "./components/Main";
import Card from "./components/Card";

export default function HomePage() {
  return (
    <main>
      <Layout>
        <Main/>
        <section>
          <Card/>
        </section>
      </Layout>
    </main>

  );
}
