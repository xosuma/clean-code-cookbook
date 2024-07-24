const user = {
  name: 'Hacker'
};

if (user?.credentials?.notExpired) {
  user.login();
}

user.functionDefinedOrNot?.();

// 간결해 보이지만 정석적이지 않고 잠재적인 null과 정의되지 않은 항목이 많습니다.
