import { RootState } from "./store";

export const selectUsers = (state: RootState) => state.users.users;
export const selectLoading = (state: RootState) => state.users.loading;
export const selectFilters = (state: RootState) => state.users.filters;

export const selectFilteredUsers = (state: RootState) => {
  const { users, filters } = state.users;

  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toString().includes(filters.phone)
    );
  });
};
