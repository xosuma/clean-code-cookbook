class Webpage {
  renderHTML() {
    this.renderDocType();
    this.renderTitle();
    new RSSFeed().render();
  }
  // HTML 렌더링이 변경될 수 있습니다.
}

class RSSFeed {
  render() {
    this.renderDescription();
    this.renderTitle();
    this.renderPubDate();
    // ...
  }
  // RSS 형식이 변경될 수 있습니다.
  // 단일 테스트 등이 있을 수 있습니다.
}
