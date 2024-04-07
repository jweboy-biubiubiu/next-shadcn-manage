import { redirect } from "next/navigation";

function Home() {
  redirect("/dashboard/platform");
}

export default Home;
