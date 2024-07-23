// Interval에 대한 개념을 구체화하셔야 합니다.

data class Interval(val fromDate: LocalDate, val toDate: LocalDate) {
    init {
        if (fromDate >= toDate) {
            throw IllegalArgumentException(
                "시작 날짜는 종료 날짜보다 이전이어야 합니다")
        }
        // 물론 구간(Interval)은 불변이어야 합니다.
        // 'data' 키워드를 사용하세요
    }

    fun elapsedDays(): Long {
        return ChronoUnit.DAYS.between(fromDate, toDate)
    }
}

val from = LocalDate.of(2018, 12, 9)
val to = LocalDate.of(2002, 12, 22)

val interval = Interval(from, to) // 유효하지 않습니다.
