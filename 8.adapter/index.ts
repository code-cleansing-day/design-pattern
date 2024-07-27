/**
 * The Target defines the domain-specific interface used by the client code.
 * `타깃`은 클라이언트 코드에서 사용되는 도메인별 인터페이스를 정의합니다.
 */
class Target {
  request() {
    return "Target: The default target's behavior.";
  }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 * `어댑티`는 유용한 동작을 포함하지만 인터페이스가 기존 클라이언트 코드와 호환되지 않습니다.
 * 클라이언트 코드가 사용할 수 있도록 하기 전에 어댑티가 일부 적응이 필요합니다.
 */
class Adaptee {
  specificRequest() {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 * `어댑터`는 어댑티의 인터페이스를 타깃의 인터페이스와 호환되도록 만듭니다.
 */
class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

export const clientCode = (target: Target) => {
  console.log(target.request());
};

console.log("Client: I can work just fine with the Target objects:");
const target = new Target();
clientCode(target);

console.log("");

const adaptee = new Adaptee();
console.log(
  "Client: The Adaptee class has a weird interface. See, I don't understand it:"
);
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log("");

console.log("Client: But I can work with it via the Adapter:");
const adapter = new Adapter(adaptee);
clientCode(adapter);
