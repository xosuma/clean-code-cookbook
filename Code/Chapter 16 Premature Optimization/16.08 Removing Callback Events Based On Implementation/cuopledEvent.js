const Item = ({name, handlePageChange)} =>
  <li onClick={handlePageChange}>
    {name}
  </li>

// handlePageChange는 실제로 일어난 일 대신 사용자가 결정한 작업과 결합됩니다.
// 이러한 종류의 콜백은 재사용할 수 없습니다.
