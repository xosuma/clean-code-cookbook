import json

def process_serialized_data(serialized_data):
    try:
        obj = json.loads(serialized_data)  
        # JSON 객체를 역직렬화합니다
        # 코드를 실행하지 않습니다.
        # ...
    except Exception as e:
        raise e

user_data = '{"key": "value"}'

process_serialized_data(user_data)
