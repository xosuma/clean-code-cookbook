class Job {

 void printAddress() {  
    System.out.println("귀하의 위치 주소입니다.");
    System.out.println(this.address().street());
    System.out.println(this.address().city());
    System.out.println(this.address().ZipCode());  
    // 이 책임을 주소로 직접 옮길 수도 있습니다!
    // 일부 주소 정보는 패키지 추적 작업과 관련됩니다.
 } 
}

class Candidate {
  void printJobAddress(Job job) {
    job.printAddress();
  }
}