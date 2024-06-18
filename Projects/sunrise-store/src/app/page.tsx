import { HomeContainer } from "@/containers/store/Home";
import { NavbarLayout } from "@/layouts/store/Navbar"

export default function Home() {
  return (
    <NavbarLayout>
      <div className="relative">
        <HomeContainer />
      </div>
    </NavbarLayout>
  );
}
