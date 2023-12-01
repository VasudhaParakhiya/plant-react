const checkLogin = () => {
  const login = localStorage.getItem("user");
  const loginData = JSON.parse(login);
  const isLogin = loginData.login;

  return isLogin;
};

const isLogin = checkLogin();

export default isLogin;
