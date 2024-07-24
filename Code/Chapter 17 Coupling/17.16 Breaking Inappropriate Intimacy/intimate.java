class Candidate {

 void printJobAddress(Job job) {

   System.out.println("현재 위치 주소입니다.");

   System.out.println(job.address().street());
   System.out.println(job.address().city());
   System.out.println(job.address().zipCode());
   
   if (job.address().country() == job.country()) {
        System.out.println("현지 일자리입니다.");
   } 
}