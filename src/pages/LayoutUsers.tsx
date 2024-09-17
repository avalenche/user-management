import { Layout, Menu, theme } from "antd";
import { UserOutlined, InfoOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import styles from "./LayoutUsers.module.scss";

const { Content, Footer, Sider } = Layout;
const items = [
  {
    key: "users",
    icon: <UserOutlined />,
    label: <Link to={"/"}>Users</Link>,
  },
  {
    key: "information",
    icon: <InfoOutlined />,
    label: <Link to={"/information"}>Information</Link>,
  },
];

export const LayoutUsers = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className={styles.wraper}>
      <Sider className={styles.sider} breakpoint="lg" collapsedWidth="0">
        <Menu
          className={styles.menu}
          defaultSelectedKeys={["users"]}
          items={items}
        ></Menu>
      </Sider>
      <Layout className={styles.layout}>
        <Content
          style={{
            margin: "24px 16px 0",
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <h1 className={styles.h1}>User management table</h1>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>
          Design ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
