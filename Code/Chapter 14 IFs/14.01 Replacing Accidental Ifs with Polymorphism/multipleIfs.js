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
    // !!!!!!!!!!!!!!!!! if 문이 오염되어 있습니다!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (this.age < 18 && movie.rate == "성인 전용")
      throw new Error("이 영화를 시청할 수 없습니다.");
    else if (this.age < 13 && movie.rate == "13세 전용")
      throw new Error("이 영화를 시청할 수 없습니다.");
    // !!!!!!!!!!!!!!!!! if 문이 오염되어 있습니다!!!!!!!!!!!!!!!!!!!!!!!!!!

    // 영화를 시청하세요
  }
}

let theExorcist = new Movie("성인 전용");
let gremlins = new Movie("13세 전용");

let jane = new Moviegoer(12);

jane.watchMovie(theExorcist);
// 제인은 12살이어서 영화 <엑소시트스>를 시청할 수 없습니다.
jane.watchMovie(gremlins);
// 제인은 12살이어서 영화 <그렘린>을 시청할 수 없습니다.

let joe = new Moviegoer(16);

joe.watchMovie(theExorcist);
// 조는 16살이어서 영화 <엑소시트스>를 시청할 수 없습니다.
joe.watchMovie(gremlins);
// 조는 16살이어서 영화 <그렘린>을 시청할 수 있습니다.
