abstract class Location {
    abstract fun calculateDistance(other: Location): Double
    abstract fun ifKnownOrElse(knownAction: (Location) -> Unit,
        unknownAction: () -> Unit)
}

class EarthLocation(val latitude: Double, val longitude: Double): 
  Location() {
    override fun calculateDistance(other: Location): Double {
        val earthRadius = 6371.0
        val latDistance = Math.toRadians(
            latitude - (other as EarthLocation).latitude)
        val lngDistance = Math.toRadians(
            longitude - other.longitude)
        val a = sin(latDistance / 2) * sin(latDistance / 2) +
          cos(Math.toRadians(latitude)) * 
          cos(Math.toRadians(other.latitude)) *
          sin(lngDistance / 2) * sin(lngDistance / 2)
        val c = 2 * atan2(sqrt(a), sqrt(1 - a))
        return earthRadius * c
}
    
    override fun ifKnownOrElse(knownAction: 
      (Location) -> Unit, unknownAction: () -> Unit) {
        knownAction(this)
    }
}

class UnknownLocation : Location() {
    override fun calculateDistance(other: Location): Double {
        throw IllegalArgumentException(
            "알 수 없는 위치에서 거리를 계산할 수 없습니다.")
    }

    override fun ifKnownOrElse(knownAction:
        (Location) -> Unit, unknownAction: () -> Unit) {
            unknownAction()
    }
}

class Person(val name: String, val location: Location)

fun main() {
    val people = listOf(
        Person("Alice", EarthLocation(40.7128, -74.0060)), // 뉴욕
        Person("Bob", EarthLocation(51.5074, -0.1278)), // 런던
        Person("Charlie", EarthLocation(48.8566, 2.3522)), // 파리
        Person("Tony", UnknownLocation()) // 알 수 없는 위치
    )
    val rio = EarthLocation(-22.9068, -43.1729)
    // 리우데자네이루 지리 좌표

    for (person in people) {
        person.location.ifKnownOrElse(
            { location -> println(person.name"은/는 " +
                person.location.calculateDistance(rio) +
                    " 킬로미터 떨어져 있습니다. { println("${person.name} " 
                        + " - 알 수 없는 위치에 있습니다") }
       )
    }
}