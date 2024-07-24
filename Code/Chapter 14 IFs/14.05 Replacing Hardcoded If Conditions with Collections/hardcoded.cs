private string FindCountryName (string internetCode)
{
  if (internetCode == "de")
    return "Germany";
  else if(internetCode == "fr") 
    return "France";
  else if(internetCode == "ar")
    return "Argentina";
    // 많은 else 문 존재
  else
    return "유효하지 않은 코드입니다.";
}
