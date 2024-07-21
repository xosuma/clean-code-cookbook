def send_email():
    print("이메일 발송")
    raise ConnectionError("실수")


try:
    send_email()
except:
    # 지양하세요
    pass
