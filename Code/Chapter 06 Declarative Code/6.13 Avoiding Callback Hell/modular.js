function asyncFunc1() {
  return new Promise((resolve, reject) => {
    // 비동기 작업
    // ...
    // 성공하는 경우
    resolve(result1);
    // 오류가 있는 경우
    reject(error);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    // 비동기 작업
    // ...
    // 성공하는 경우
    resolve(result2);
    // 오류가 있는 경우
    reject(error);
  });
}

async function performAsyncOperations() {
  try {
    const result1 = await asyncFunc1();
    const result2 = await asyncFunc2();
    const result3 = await asyncFunc3();
    // 그 외 다른 작업으로 계속 진행
  } catch (error) {
    console.log(error);
  }
}

performAsyncOperations();
