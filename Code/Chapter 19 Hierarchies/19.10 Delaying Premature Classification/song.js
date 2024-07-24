class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }

    play() {
        console.log(
          `듣고 있습니다, 노래제목: ${this.title} 작곡가:${this.artist}`
        );
    }
}