final class Address {
 void print() {
   System.out.println(this.street);
   System.out.println(this.city);
   System.out.println(this.zipCode);   
 } 
 
 bool isInCounty(Country country) {
  return this.country == country;
}

class Job {
 void printAddress() {

   System.out.println("현재 위치 주소입니다.");

   this.address().print());
   
   if (this.address().isInCountry(this.country()) {
        System.out.println("현지 일자리입니다.");
   } 
 } 
}

class Candidate {
  void printJobAddress(Job job) {
    job.printAddress();
  }
}