# 세터가 있으므로 유효하지 않은 조합을 생성할 수 있습니다.

janePhoneCall = PhoneCall()
janePhoneCall.set_origin('555-5555')
janePhoneCall.set_destination('555-5555')
janePhoneCall.set_duration(60) 

# 통화 중에는 수신자를 변경할 수 없습니다.
# 세터로 인해 적용되지 않습니다.

# 수신자와 발신자는 동일할 수 없습니다.


def set_destination(self, destinationNumber):
	if destinationNumber == self._origin:
		raise ValueError("Destination cannot be the same as origin")
	self._destination = destinationNumber
    

def set_origin(self, originNumber):
	if originNumber == self._destination:
		raise ValueError("Destination cannot be the same as origin")
		# repeated code
	self._origin = originNumber
