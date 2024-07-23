async fetchLongTask() { }
async fetchAnotherLongTask() { }

async fetchAll() {
  let result1 = await this.fetchLongTask(); 
  let result2 = await this.fetchAnotherLongTask();
  // 하지만 병렬로 실행할 수 있습니다.
}                                 