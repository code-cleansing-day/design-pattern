interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(data: any): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}

class ConcreteObserver implements Observer {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  update(data: any): void {
    console.log(`Observer ${this.id} received data:`, data);
  }
}

// 주제 인스턴스를 생성합니다.
const subject = new Subject();

// 옵저버 인스턴스를 생성합니다.
const observer1 = new ConcreteObserver(1);
const observer2 = new ConcreteObserver(2);

// 주제에 옵저버를 등록합니다.
subject.addObserver(observer1);
subject.addObserver(observer2);

// 상태 변경이 발생했을 때 옵저버들에게 알립니다.
subject.notifyObservers({ message: "Hello, Observers!" });

// 옵저버를 제거할 수도 있습니다.
subject.removeObserver(observer1);

// 다시 상태 변경을 통지합니다.
subject.notifyObservers({ message: "Another update!" });
