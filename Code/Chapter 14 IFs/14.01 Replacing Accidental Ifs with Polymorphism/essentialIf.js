class Moviegoer {
  constructor(age) {
    this.age = age;
  }
  watchXRatedMovie() {
    if (this.age < 18)
      throw new Error("이 영화를 시청할 수 없습니다.");
    else
      this.watchMovie();
  }
  watchMovie() {
    // ..
  }
}

let jane = new Moviegoer(12);

jane.watchXRatedMovie();
// 제인이 너무 어려서 영화를 볼 수 없으므로 예외를 던집니다.
