private string[] country_names = {"Germany", "France", "Argentina"} 
// 더 많음
private string[] Internet_code_suffixes= {"de", "fr", "ar" } // 더 많음
 
private Dictionary<string, string> Internet_codes = 
   new Dictionary<string, string>();

// 컬렉션 반복을 위한 더 효율적인 방법이 있습니다.
// 해당 의사코드는 오직 보여주기 위해 사용합니다.
int currentIndex = 0; 
foreach (var suffix in Internet_code_suffixes) {
  Internet_codes.Add(suffix, Internet_codes[currentIndex]);
  currentIndex++;
}

private string FindCountryName(string internetCode) {
  return Internet_codes[internetCode];
}