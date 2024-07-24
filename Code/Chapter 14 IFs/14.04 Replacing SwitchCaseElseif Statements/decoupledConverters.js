class Mp3Converter {
  convertToMp3(source, mimeType) {
    const foundConverter = this.registeredConverters.find((converter) =>
      converter.handles(mimeType)
    );
    // 메타프로그래밍을 사용해 변환기를 찾고 반복하는 것은
    // 또 다른 문제가 될 수 있으므로 사용하지마세요.
    if (!foundConverter) {
      throw new Error("해당 유형을 위한 변화기 찾기 실패:" + mimeType);
    }
    foundConverter.convertToMp3(source);
  }
}