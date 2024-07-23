class VerySpecificAndSmallObjectDealingWithPersistency { 
   constructor(retrieveStrategy) {   
    this.retrieveStrategy = retrieveStrategy;
  }
  retrieveData() {
    this.retrieveStrategy.retrieveData();        
  }
}
// 다향성 전략을 사용해 if 조건을 제거합니다.
