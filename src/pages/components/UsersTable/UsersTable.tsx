import React, { useEffect } from "react";
import { Table, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { getUsers, setFilter } from "../../../features/users/usersSlice";
import {
  selectFilters,
  selectLoading,
  selectFilteredUsers,
} from "../../../selectors";

export const UsersTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const filteredUsers = useSelector(selectFilteredUsers);
  const loading = useSelector(selectLoading);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof filters
  ) => {
    dispatch(setFilter({ [key]: e.target.value }));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filterDropdown: () => (
        <Input
          placeholder="Search name"
          value={filters.name}
          onChange={(e) => handleFilterChange(e, "name")}
        />
      ),
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
      filterDropdown: () => (
        <Input
          placeholder="Search user name"
          value={filters.username}
          onChange={(e) => handleFilterChange(e, "username")}
        />
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filterDropdown: () => (
        <Input
          placeholder="Search email"
          value={filters.email}
          onChange={(e) => handleFilterChange(e, "email")}
        />
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      filterDropdown: () => (
        <Input
          placeholder="Search phone"
          value={filters.phone}
          onChange={(e) => handleFilterChange(e, "phone")}
        />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={filteredUsers}
      rowKey="id"
      loading={loading}
    />
  );
};
