import logging

logger = logging.getLogger()
try:
    send_email()
except ConnectionError as exception:
    logger.error(f"이메일 발송 실패 {exception}")
