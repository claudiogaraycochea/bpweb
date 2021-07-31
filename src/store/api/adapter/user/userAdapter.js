export const getUserAdapter = (response) => {
  console.log('getUserAdapter: ', response);
  const items = response.data.Items.map((user, index)=> {
    return {
      id: index,
      email: user.email,
      pass: user.password
    }
  })
  console.log('getUserAdapter: items:', items);
  return response.data.Items;
}