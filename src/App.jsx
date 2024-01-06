import Abogados from "./pages/Abogados";
import Casos from "./pages/Casos";

import { Login } from "./pages/Login";
import { Link, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";

function App() {
  const { Header } = Layout;
  return (
    <>
      <Header
        style={{
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          marginBottom: "60px",
        }}
      >
        <div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Login</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/Casos">Casos</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/Abogados">Abogados</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/abogados" element={<Abogados />} />
      </Routes>
    </>
  );
}

export default App;
