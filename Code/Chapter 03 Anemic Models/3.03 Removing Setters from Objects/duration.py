class PhoneCall:
	_origin = ''
	_destination = ''
	_duration = 0

	def set_duration(self, duration_in_seconds):
		self._duration = duration_in_seconds

	def get_duration(self):
		return self._duration
  
# 지속 시간(duration)은 초 단위로 노출되며 이는 파급효과를 나타냅니다.
# 이는 정보 숨김 원칙에 위배되며 이에 대한 표현을 변경할 수 없게끔 만듭니다.
