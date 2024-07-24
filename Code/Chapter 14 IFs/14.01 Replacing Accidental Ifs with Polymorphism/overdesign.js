class Age {
}

class AgeLessThan13 extends Age {
  assertCanWatchPG13Movie() {
    throw new Error("이 영화를 시청할 수 없습니다.");
  }
  assertCanWatchAdultMovie() {
    throw new Error("이 영화를 시청할 수 없습니다.");
  }
}

class AgeBetween13And18 extends Age {
  assertCanWatchPG13Movie() {
    // 문제 없음
  }
  assertCanWatchAdultMovie() {
    throw new Error("이 영화를 시청할 수 없습니다.");
  }
}

class MovieRate {
  // 언어가 허용하는 경우 abstract로 선언하세요.
  // abstract assertCanWatch();
}

class PG13MovieRate extends MovieRate {
  // 모든 if 본문을 이전 추상화로 이동하세요.
  assertCanWatch(age) {
    age.assertCanWatchPG13Movie();
  }
}

class AdultsOnlyMovieRate extends MovieRate {
  // 모든 if 본문을 이전 추상화로 이동하세요.
  assertCanWatch(age) {
    age.assertCanWatchAdultMovie();
  }
}

class Movie {
  constructor(rate) {
    this._rate = rate; // 등급이 비공개로 설정됩니다.
  }
  watchByMe(moviegoer) {
    this._rate.assertCanWatch(moviegoer.age);
  }
}

class Moviegoer {
  constructor(age) {
    this.age = age;
  }
  watchMovie(movie) { 
    movie.watchByMe(this);  
  }
}

let theExorcist = new Movie(new AdultsOnlyMovieRate());
let gremlins = new Movie(new PG13MovieRate());

let jane = new Moviegoer(new AgeLessThan13());

// jane.watchMovie(theExorcist);
// 제인은 12살이어서 영화 <엑소시트스>를 시청할 수 없습니다.
// jane.watchMovie(gremlins);
// 제인은 12살이어서 영화 <그렘린>을 시청할 수 없습니다.

let joe = new Moviegoer(new AgeBetween13And18());

// joe.watchMovie(theExorcist);
// 조는 16살이어서 영화 <엑소시트스>를 시청할 수 없습니다.
joe.watchMovie(gremlins);
// 조는 16살이어서 영화 <그렘린>을 시청할 수 없습니다.
