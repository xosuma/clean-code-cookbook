int main(void)
{    
    int id;
    id = get_value();
    if (id < 0) 
    { 
        printf("오류: 값을 얻지 못함\n");
        return EXIT_FAILURE;
    }  
    return id;
}  

int get_value() 
{
  // 나쁜 일이 발생했습니다.
  return -1; // 음숫값을 반환해 오류를 표시합니다.
}
