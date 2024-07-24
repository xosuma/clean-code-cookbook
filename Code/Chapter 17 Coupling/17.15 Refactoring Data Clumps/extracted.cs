public class TimeInterval
{
    public TimeInterval(DateTime from, DateTime to)
    {
        if (from >= to)
        {
            throw new ArgumentException
                ("잘못된 시간 간격:" + 
                 " ’from’은 ’to’보다 빨라야 합니다.");
        }
        From = from;
        To = to;
    }
}

public DinnerTable(Person guest, DateTime from, DateTime to)
{    
    Guest = guest;
    Interval = new TimeInterval(from, to);
}

// 더 짧은 버전은..

public DinnerTable(Person guest, Interval reservationTime)
{    
    Guest = guest;
    Interval = reservationTime;
}
