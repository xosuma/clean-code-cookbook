class PhoneCall:
    _origin = ''
    _destination = ''
    _durationInSeconds = 0

    def __init__(self, origin, destination, durationInSeconds):

        if destination == origin:
            raise ValueError("Destination cannot be the same as origin")
            # 단일 지점 제어입니다.
            # 오직 유효한 전화 통화만 생성할 수 있습니다.
            # 변이할 수 없으므로 유효하게 유지됩니다.

        self._origin = origin
        self._destination = destination
        self._durationInSeconds = durationInSeconds

        # 세터가 필요 없습니다.

        def durationInSeconds(self):
            return self._durationInSeconds

        def durationInMilliSeconds(self):
            return self._durationInSeconds * 1000
