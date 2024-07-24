class Candidate {

 void printJobAddress(Job job) {
   System.out.println("귀하의 위치 주소입니다.");
   System.out.println(job.address().street());
   System.out.println(job.address().city());
   System.out.println(job.address().ZipCode());
 } 
}