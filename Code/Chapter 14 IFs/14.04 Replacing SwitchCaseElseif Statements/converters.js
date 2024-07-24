class Mp3Converter {
  convertToMp3(source, mimeType) {
    if(mimeType.equals("audio/mpeg")) {
        this.convertMpegToMp3(source)
    } else if(mimeType.equals("audio/wav")) {
        this.convertWavToMp3(source)
    } else if(mimeType.equals("audio/ogg")) {
        this.convertOggToMp3(source)
    } else if(...) {
        // 아주 많은 else 문이 존재함
}