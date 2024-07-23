asyncFunc1(function (error, result1) {
  if (error) {
    console.log(error);
  } else {
    asyncFunc2(function (error, result2) {
      if (error) {
        console.log(error);
      } else {
        asyncFunc3(function (error, result3) {
          if (error) {
            console.log(error);
          } else {
            // 중첩 콜백은 계속 이루어집니다...
          }
        });
      }
    });
  }
});
