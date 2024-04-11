import Link from "next/link";


export const metadata = {
  title: "Frontpage",
  description: "Description",
}
export default function Home() {

  return (
    <main>
      <h1>Hello World</h1>
      <Link href={"/henry"} prefetch={false} >
      Henry
      </Link>
    </main>
  );
}

