export const getUsers = () => ([
  {
    id: "id1",
    name: "Aida",
    lastname: "Albarrán"
  },
  {
    id: "id2",
    name: "Daniela",
    lastname: "Pérez"
  },
]);

export interface User {
  id: string;
  name: string;
  lastname: string;
}

export const getUser = (users: Array<User>, token: string): User => users.find((user) => user.id === token);