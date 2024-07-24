class Person(val name: String, val latitude: Double, val longitude: Double)

fun main() {
    val people = listOf(
        Person("Alice", 40.7128, -74.0060), // 뉴욕
        Person("Bob", 51.5074, -0.1278), // 런던
        Person("Charlie", 48.8566, 2.3522), // 파리
        Person("Tony Hoare", 0.0, 0.0) // 널 아일랜드
    )
    
    for (person in people) {
        if (person.latitude == 0.0 && person.longitude == 0.0) {
            println("${person.name}은/는 널 아일랜드에 거주합니다!")
        } else {
            println("${person.name}은/는 다음 위치에 거주합니다:  " +
                    "(${person.latitude}, ${person.longitude}).")
        }
    }
}
