class Workflow {
  moveToNextTransition() {
    if (this.canWeMoveOn()) {
      this.moveToNextStep();
    } else {
      throw new Error("전제 조건 충족되지 않음...");
    }
  }

  canMoveOn() {
    // '무엇'이 움직일 수 있는지(canMoveOn)를 통해
    // '어떻게' 확인하는지(hasPendingTasks())에 대한 우발적인 구현을 숨깁니다.
    return !this.stepWork.hasPendingTasks();
  }
}
