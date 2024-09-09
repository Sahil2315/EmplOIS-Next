import { Test } from "./utils/database";
import Login from "./pages/Login"
export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Login/>
    </main>
  );
}
