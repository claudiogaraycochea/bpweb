export function getUserAdapter(response) {
  const items = response.data.Items.map((user, index)=> {
    return {
      id: index,
      email: user.email,
      pass: user.password
    }
  })
  return items;
}