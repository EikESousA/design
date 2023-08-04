import { ReactNode } from "react";
import { Footerbar, Mainbar, Sidebar } from "./components";
import { Container } from "./styles";

interface IProps {
  children?: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <Container>
      <Sidebar />
      <Mainbar>{children}</Mainbar>
      <Footerbar />
    </Container>
  );
}

// TODO
// Sidebar Fold SubMenus
// Sidebar Sem Espaco
// Footerbar Mobile - Sidebar
