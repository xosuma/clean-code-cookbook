class Movie {
  constructor(rate) {
    this._rate = rate; // 등급(rate)이 비공개(private)로 설정됩니다
  }
  warnIfNotAllowed(age) {
    this._rate.warnIfNotAllowed(age);
  }
}

class Moviegoer {
  constructor(age) {
    this.age = age;
  }
  watchMovie(movie) {
    movie.warnIfNotAllowed(this.age);
    // 영화 시청
  }
}
