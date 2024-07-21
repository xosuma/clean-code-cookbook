import os
import pickle  # Python's serialization module

def process_serialized_data(serialized_data):
    try:
        obj = pickle.loads(serialized_data)  
        # 객제 역직렬화
        # 역직렬화된 객체 처리
        # ...
    except Exception as e:
        raise e


# User-submitted serialized data
user_data = (
    b"\x80\x04\x95\x13\x00\x00\x00\x00\x00\x00\x00\x8c\x08os\n"
    b"system\n\x8c\x06uptime\n\x86\x94."
)
# 해당 코드는 다음을 무단으로 실행하고자 합니다: os.system("uptime")

process_serialized_data(user_data)
