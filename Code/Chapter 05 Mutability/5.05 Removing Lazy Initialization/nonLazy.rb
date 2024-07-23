class Employee
  attr_reader :emails, :voice_mails

  def initialize
    @emails = []
    @voice_mails = []
  end
end
# 음성 메일(voice_mails)을 외부에서 처리하는 디자인 패턴을 삽입해
# 테스트에서 이를 모의할 수 있습니다.
