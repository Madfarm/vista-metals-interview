import Link from "next/link";
import { homePageService } from "./home.service";
import styles from './home.module.css'

export default async function Home() {
  const { openOrdersCount } = await homePageService();

  return (
    <main className={styles.container}>
      <h1>Orders currently open: </h1>
      <h2>{openOrdersCount}</h2>

      <Link href='/orders/new'>Add an Order</Link>
    </main>
  );
}
