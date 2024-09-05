import Link from "next/link";
import { homePageService } from "./home.service";

export default async function Home() {
  const { openOrdersCount } = await homePageService();

  return (
    <main>
      <h1>Orders currently open: </h1>
      <h2>{openOrdersCount}</h2>

      <Link href='/orders/new'>Add an Order</Link>
    </main>
  );
}
