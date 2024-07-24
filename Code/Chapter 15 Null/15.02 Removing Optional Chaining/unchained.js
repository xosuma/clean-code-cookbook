function login() {}

const user = {
  name: 'Hacker',
  credentials: { expired: false }
};

if (!user.credentials.expired) {
  login();
}

// 간결합니다.
// user는 실제 사용자 또는 다형성 NullUser입니다.
// credential은 항상 정의되어 있습니다.
// InvalidCredentials의 인스턴스일 수 있습니다.

if (user.functionDefinedOrNot !== undefined) {  
    functionDefinedOrNot();
}

// 이것도 잘못되었습니다.
// 명시적 undefined 검사도 비슷한 문제입니다.
