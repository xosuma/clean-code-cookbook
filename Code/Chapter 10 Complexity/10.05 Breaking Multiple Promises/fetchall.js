async fetchLongTask() { }
async fetchAnotherLongTask() { }

async fetchAll() {
  let [result1, result2] = 
      await Promise.all(
        [this.fetchLongTask(), this.fetchAnotherLongTask()]);
      // 모든 작업이 완료될 때까지 기다립니다.
}