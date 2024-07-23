class ExcelSheet {
  FileProperties fileProperties;
  SecurityProperties securityProperties;
  DocumentDatingProperties datingProperties;
  RevisionProperties revisionProperties;
  LanguageProperties languageProperties;
  DocumentContent content;  
}

// 객체의 속성이 줄었습니다.
// 테스트 가능성을 위해 그룹화한 것이 아닙니다.
// 새 객채는 더 응집력 있고 테스트 가능하며, 충돌이 적고 재사용성이 증가합니다.
// FileProperties, SecurityProperties는 다른 곳에서도 재사용이 가능합니다.
// fileProperties의 규칙과 전제 조건은 해당 객체로 이동되어
// ExcelSheet 생성자가 더 깔끔해집니다.
