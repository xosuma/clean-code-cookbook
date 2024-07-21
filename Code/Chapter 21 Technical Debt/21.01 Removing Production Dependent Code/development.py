class ProductionEnvironment:
	FROM_EMAIL = "Bob Builder <bob@builder.com>"

class DevelopmentEnvironment:
	FROM_EMAIL = "Bob Builder Development <bob@builder.com>"

# 환경을 단위 테스트하고 다양한 전송 메커니즘을 구현할 수도 있습니다.

def send_welcome_email(email_address, environment):
	print("Sending welcome email to {email_address} "
            "from {environment.FROM_EMAIL}")
# 모의 발신자(그리고 가능한 로거(logger))에 위임하고 단위 테스트할 수 있습니다.

send_welcome_email("john@doe.com", DevelopmentEnvironment())
# john@doe.com에 환영 이메일을 보냅니다.
# Bob Builder Development <bob@builder.com> 전달

send_welcome_email("john@doe.com", ProductionEnvironment())
# john@doe.com에 환영 이메일을 보냅니다.
# Bob Builder <bob@builder.com> 전달
