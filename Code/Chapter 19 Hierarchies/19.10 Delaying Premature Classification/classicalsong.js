class ClassicalSong extends Song {
    constructor(title, artist, composer) {
        super(title, artist);
        this.composer = composer;
    }

    listenCarefully() {
        console.log(
          `노래 제목: ${this.title} 작곡가:${this.composer} 를 듣고 있습니다.`
        );
    }
}

const goldberg = new ClassicalSong
    ("The Goldberg Variations", "Glenn Gould", "Bach");