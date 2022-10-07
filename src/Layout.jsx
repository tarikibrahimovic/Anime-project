import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Footer,
} from "@mantine/core";
import Logo from "./img/fuji-logo.png";

import Sidebar from "./components/Navbar/Navbar";
import FooterReal from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Anime from "./pages/AnimePage/Anime";
import Manga from "./pages/MangaPage/Manga";
import About from "./pages/AboutPage/About";

// padding-bottom: calc(var(--mantine-footer-height, 0px) + 16px);
// padding-right: calc(var(--mantine-aside-width, 0px) + 16px);
export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          // paddingTop: calc(var(--mantine-header-height, 0px) + 16px),
          // paddingLeft: "calc(var(--mantine-navbar-width, 0px) + 16px)",
              
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 150, lg: 150 }}
        >
          <Sidebar />
        </Navbar>
      }
      footer={
        <Footer className="h-fit">
          <FooterReal />
        </Footer>
      }
      header={
        <Header height={70}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
            className="bg-dark"
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <img src={Logo} alt="" className="w-9 h-9 lg:ml-3 sm:ml-5" />
            <h1 className="text-white text-3xl font-bold pl-3">Fuji</h1>
          </div>
        </Header>
      }
    >
      {/* <Text>Resize app to see responsive navbar in action</Text> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="anime" element={<Anime />} />
        <Route path="manga" element={<Manga />} />
        <Route path="about" element={<About />} />
      </Routes>
    </AppShell>
  );
}
