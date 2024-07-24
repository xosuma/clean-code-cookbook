#define INVALID_VALUE 999

int main(void)
{    
    int id = get_value();
    if (id == INVALID_VALUE)
    { 
        return EXIT_FAILURE;  
        // id는 플래그이며 유효한 도메인 값이기도 합니다.
    }
    return id;
}

int get_value() 
{
  // 나쁜 일이 발생했습니다.
  return INVALID_VALUE;
}

// 결과: EXIT_FAILURE (1)
