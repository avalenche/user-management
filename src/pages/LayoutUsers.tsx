import { Layout, Menu, theme } from "antd";
import { UserOutlined, InfoOutlined } from "@ant-design/icons";
import { UsersTable } from "./components/UsersTable";
import styles from "./LayoutUsers.module.scss";

const { Content, Footer, Sider } = Layout;
const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Users",
  },
  {
    key: "2",
    icon: <InfoOutlined />,
    label: "Information",
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
          defaultSelectedKeys={["1"]}
          items={items}
        />
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
          <UsersTable />
        </Content>
        <Footer className={styles.footer}>
          Design ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
