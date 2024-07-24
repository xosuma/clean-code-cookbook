// 1. 모든 if 조건에 대해 다형성 계층 구조 만들기
// (아직 존재하지 않는 경우)
class MovieRate {
  // 언어가 허용하는 경우 추상적으로 선언해야 합니다.
}

class PG13MovieRate extends MovieRate {
  //2. Move every *IF Body* to the former abstraction
  warnIfNotAllowed(age) {
    if (age < 13) throw new Error("이 영화를 시청할 수 없습니다.");
  }
}

class AdultsOnlyMovieRate extends MovieRate {
  // 2. 모든 if 본문을 이전 추상화로 이동하세요.
  warnIfNotAllowed(age) {
    if (age < 18) throw new Error("이 영화를 시청할 수 없습니다.");
  }
}

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
    // 3. If 문을 다형성 메서드 호출로 대체하기
    movie.rate.warnIfNotAllowed(this.age);
    // 영화 시청
  }
}

let theExorcist = new Movie(new AdultsOnlyMovieRate());
let gremlins = new Movie(new PG13MovieRate());

let jane = new Moviegoer(12);

// jane.watchMovie(theExorcist);
// 제인은 12살이어서 영화 <엑소시트스>를 시청할 수 없습니다.
// jane.watchMovie(gremlins);
// 제인은 12살이어서 영화 <그렘린>을 시청할 수 없습니다.

let joe = new Moviegoer(16);

// joe.watchMovie(theExorcist);
// 조는 16살이어서 영화 <엑소시트스>를 시청할 수 없습니다.
joe.watchMovie(gremlins);
// 조는 16살이어서 영화 <그렘린>을 시청할 수 있습니다.
