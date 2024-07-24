<?

interface ElectronicDevice { }

interface PhoneCommunication { }

final class IPad implements ElectronicDevice {
    private $operatingSystem; // 속성이 중복됩니다.
    private $battery; 
    // 중복된 동작이 너무 많으면 이를 분리해야 합니다.

    public function __construct(Battery $battery, OperatingSystem $ios) {
        $this->operatingSystem = $ios;
        $this->battery = $battery;
    }
}

final class IPhone implements ElectronicDevice, PhoneCommunication {
    private $phoneModule;
    private $operatingSystem;
    private $battery;

    public function __construct(
        Battery $battery, 
        OperatingSystem $ios,
        PhoneModule $phoneModule) {
        $this->phoneModule = $phoneModule;
        $this->operatingSystem = $ios;
        $this->battery = $battery;
    }
}

final class Iphone implements ElectronicDevice, PhoneCommunication {

    private $phoneModule;
    private $operatingSystem;
    private $battery;

    public function __construct(
        Battery $battery, 
        OperatingSystem $ios,
        PhoneModule $phoneModule) {
        $this->phoneModule = $phoneModule;
        $this->operatingSystem = $ios;
        $this->battery = $battery;
    }
}