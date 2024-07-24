class Movie {

  constructor(rate) {
    this.rate = rate;
  }
}

class Moviegoer {
  constructor(age) {
    this.age = age;
  }
  watchMovie(movie) {
    if (this.age < 18 && movie.rate == "성인 전용")
      throw new Error("이 영화를 시청할 수 없습니다.");

    // 영화를 시청하세요.
  }
}

let jane = new Moviegoer(12);
let theExorcist = new Movie("성인 전용");

jane.watchMovie(theExorcist);
// 제인은 12살이어서 영화 <엑소시트스>를 시청할 수 없습니다.
