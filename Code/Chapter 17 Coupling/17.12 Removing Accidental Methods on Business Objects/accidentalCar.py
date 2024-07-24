class car:

    def __init__(self, company, color, engine):
        self._company = company
        self._color = color 
        self._engine = engine
    
    def goTo(self, coordinate):        
        self.move()
        
    def startEngine(self):
        # 엔진 시동을 시작하는 코드
        self.engine.start()
    
    def display(self):
        # 표시는 우발적입니다.
        print('이는 ', self._color, self.company)
        
    def toJSon(self):
        # 직렬화는 우발적입니다.
        return "json"
        
    def updateOnDatabase(self):
        # 지속성은 우발적입니다.
        this.database.update(this)
        
    def getId(self):
        # 식별자는 우발적입니다.
        return id;
        
    def fromRow(self, row):
        # 지속성은 우발적입니다.
        this.database.convertFromRow(row, this);
        
    def forkCar(self):
        # 동시성은 우발적입니다.
        ConcurrencySemaphoreSingleton.getInstance().forkCar(this)
