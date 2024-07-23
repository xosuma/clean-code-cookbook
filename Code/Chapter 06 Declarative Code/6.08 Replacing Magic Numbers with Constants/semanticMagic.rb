#  단위 없이 크기를 지정하는 것은 또 다른 코드 스멜입니다.
class PhysicsConstants
   LIGHT_SPEED = 299792458.freeze
end

def energy(mass)
    mass * PhysicsConstants::LIGHT_SPEED ** 2
end
