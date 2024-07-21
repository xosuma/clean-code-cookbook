def send_welcome_email(email_address, environment):
    if environment == "production":
        print(f"{email_address}에 환영 이메일을 보냅니다.",
              "Bob Builder <bob@builder.com> 전달")
    else:
        print("이메일은 오직 프로덕션에서만 보내집니다.")

    
send_welcome_email("john@doe.com", "development")
# 아무 일도 일어나지 않습니다. 이메일은 프로덕션 환경에서만 전송됩니다.

send_welcome_email("john@doe.com", "production")
# john@doe.com에 환영 이메일을 보냅니다.
# Bob Builder <bob@builder.com> 전달
