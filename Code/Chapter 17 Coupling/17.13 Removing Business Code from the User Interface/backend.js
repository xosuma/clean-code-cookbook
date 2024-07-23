<script type="text/javascript">

  // 백엔드 호출하기
  // 백엔드에 도메인 규칙이 있음
  // 백엔드에는 테스트 커버리지와 풍부한 모델이 있습니다.
  // 백엔드에 코드를 삽입하는 것은 더 어렵습니다.
  // 유효성 검사는 백엔드에서 발전합니다.
  // 비즈니스 규칙과 유효성 검사는 모든 사용자와 공유됩니다.
  // UI/REST/테스트/마이크로서비스 등...
  // 중복된 코드 없음
  function checkForm(form)
  {
    const url = "https://<hostname/login";
    const data = {
    };

    const other_params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : data,
        method : "POST",
        mode : "cors"
    };

    fetch(url, other_params)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("API를 연결할 수 없습니다: " +
                    response.statusText);
            }
        }).then(function(data) {
            document.getElementById("message").innerHTML = data.encoded;
        }).catch(function(error) {
            document.getElementById("message").innerHTML = error.message;
        });
    return true;
  }

</script>