val from = LocalDate.of(2018, 12, 9)
val to = LocalDate.of(2022, 12, 22)

val elapsed = elapsedDays(from, to)
    
fun elapsedDays(fromDate: LocalDate, toDate: LocalDate): Long {
    return ChronoUnit.DAYS.between(fromDate, toDate)
}

// 이 짧은 함수 또는 인라인 버전을 코드에 여러 번 적용해야 합니다.
// 시작 날짜(fromDate)가 종료 날짜(toDate)보다 작다는 검증을 하지 않습니다.
// 계산된 숫자가 음숫값일 수 있습니다.