class VerySpecificAndSmallObjectDealingWithPersistency {
    retrieveData() {
        if (GlobalSettingsSingleton.getInstance()
            .valueAt('RetrievDataDirectly')) {
              // 'RetrievDataDirectly'에 잘 보이지 않는 오타가 있습니다.
              this.retrieveDataThisWay();
            }
        else {
            this.retrieveDataThisOtherWay();
        }
    }
}