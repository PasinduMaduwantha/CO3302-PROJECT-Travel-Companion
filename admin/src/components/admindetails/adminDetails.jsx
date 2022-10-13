const getCurrentUser = async function () {
  const currentUser = await Parse.User.current();
  console.log("currentUser", currentUser);
  return currentUser;
};