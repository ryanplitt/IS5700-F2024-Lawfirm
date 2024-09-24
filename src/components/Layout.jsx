import Header, { HeaderButton } from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="" "">
      <Header>
        <HeaderButton href="/">Home</HeaderButton>
        <HeaderButton href="/mcmullinboy15">Mcmullinboy15</HeaderButton>
        <HeaderButton href="/JorgenGear">JorgenGear</HeaderButton>
      </Header>

      {children}

      <Footer />
    </div>
  );
}
