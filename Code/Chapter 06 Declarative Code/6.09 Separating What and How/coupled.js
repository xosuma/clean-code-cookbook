class Workflow {
  moveToNextTransition() {
    // 비즈니스 규칙이 우발적인 구현과 결합되어 있습니다
    if (this.stepWork.hasPendingTasks()) {
      throw new Error("전제 조건 충족되지 않음..");
    } else {
      this.moveToNextStep();
    }
  }
}
