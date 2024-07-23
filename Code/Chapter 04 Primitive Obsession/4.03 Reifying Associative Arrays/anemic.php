<?

final class GeographicCoordinate {

    function __construct($latitudeInDegrees, $longitudeInDegrees) {
        $this->longitude = $longitudeInDegress;
        $this->latitude = $latitudeInDegress;
    }
}

$coordinate = new GeographicCoordinate(1000, 2000);
// 이 값은 지구상에 존재하지 않으므로 오류를 발생시켜야 합니다.
