const Item = ({name, onItemSelected)} =>
  <li onClick={onItemSelected}>
    {name}
  </li>

// onItemSelected는 항목이 선택되었을 때만 호출됩니다.
// 부모는 무엇을 할지 결정할 수 있습니다(또는 아무것도 하지 않을 수 있습니다).
// 해당 결정을 위임(defer)합니다.
