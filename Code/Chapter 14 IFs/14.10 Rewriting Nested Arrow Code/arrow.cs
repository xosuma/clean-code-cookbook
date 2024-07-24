if (actualIndex < totalItems)
    {
      if (product[actualIndex].Name.Contains("arrow"))
      {
        do
        {
          if (product[actualIndex].price == null)
          {
            // 가격이 없는 경우 대응
          }
          else
          {
            if (!(product[actualIndex].priceIsCurrent()))
            {
              // 가격 추가
            }
            else
            {
              if (!hasDiscount)
              {
                // 할인 대응
              }
              else
              {
                // 그 외
              }
            }
          }
          actualIndex++;
        }
        while (actualIndex < totalCount && totalPrice < wallet.money);
      }
      else
        actualIndex++;
    }
    return actualIndex;
  }  