/**
 * ### Factory Method Pattern
 * **두 종류의 추상화 존재**
 * - 어떤 종류의 객체를 생성할 것인지
 * - 어떤 동작을 하는 객체를 관리할 것인지
 *
 * **factory 객체는 두 가지 기능을 하나의 추상화로 처리한다.**
 * - 객체 동작 실행 (planDelivery())
 *   1. 객체 생성 (abstract createTransport())
 *   2. 객체 동작 실행 (transport.deliver())
 *
 * **이로인해 얻을 수 있는 이점**
 * - 객체 생성과 기능의 역할을 분리할 수 있다.
 * - 생성과 기능의 변경이 용이해진다.
 */
abstract class Logistics {
  planDelivery(): void {
    const transport = this.createTransport();
    transport.deliver();
  }

  abstract createTransport(): Transport;
}

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

interface Transport {
  deliver(): void;
}

class Truck implements Transport {
  deliver(): void {
    console.log("상자에 담아 육로로 배달.");
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("컨테이너에 담아 해상으로 배달.");
  }
}
