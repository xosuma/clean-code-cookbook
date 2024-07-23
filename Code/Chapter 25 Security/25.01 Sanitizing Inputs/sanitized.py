import re
def sanitize(string):
    # 문자나 숫자가 아닌 경우 모두 제거합니다.
    sanitized_string = re.sub(r'[^a-zA-Z0-9]', '', string)

    return sanitized_string

user_input = "abc123!@#"
print(sanitize(user_input))  # 결과: "abc123"
