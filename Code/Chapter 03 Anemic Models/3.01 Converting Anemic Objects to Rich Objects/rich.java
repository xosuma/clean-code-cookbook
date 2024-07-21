public class Song {
   private String name;
   private Artist author; // 기본 데이터 유형 대신
   private Album album; // 풍성한 객체를 참조함

   public String albumName() {
     return album.name() ;
}