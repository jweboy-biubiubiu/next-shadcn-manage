import { redirect } from "next/navigation";

function Home() {
  redirect("/dashboard/product");
}

export default Home;
