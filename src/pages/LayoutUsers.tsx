import { Layout } from "antd";
import { UsersTable } from "./components/UsersTable";
import styles from "./LayoutUsers.module.scss";
const { Header, Content } = Layout;

export const LayoutUsers = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h1>Users Managment Table</h1>
      </Header>
      <Content>
        <UsersTable />
      </Content>
    </Layout>
  );
};
