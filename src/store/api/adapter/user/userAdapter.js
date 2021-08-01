export function getUsersAdapter(response) {
  const items = response.data.Items.map((user, index)=> {
    const { email, password } = user;
    return {
      id: index,
      email,
      password
    }
  })
  return items;
}

export function getUserAdapter(response) {
  const { email, password } = response.data.Item;
  const data = {
    id: 0,
    email,
    password
  }
  return data;
}