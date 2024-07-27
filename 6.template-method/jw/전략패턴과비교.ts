/**
 * **템플릿 메서드 패턴**
 *
 * 템플릿 메서드 패턴은 알고리즘의 구조를 정의하고,
 * 하위 클래스에서 구체적인 단계들을 구현하게 하는 패턴입니다.
 * 이 패턴을 사용하면 알고리즘의 골격은 변경하지 않고,
 * 세부적인 부분만 변경하여 다양한 구현을 할 수 있습니다.
 *
 * 아래 예제에서 DataProcessor 클래스는 process 메서드에 알고리즘의 틀을 정의하고 있습니다.
 * CSVDataProcessor와 JSONDataProcessor는 DataProcessor를 상속받아
 * readData, processData, saveData 메서드를 구체적으로 구현합니다.
 */
abstract class DataProcessor {
  // 템플릿 메서드
  public process(): void {
    this.readData();
    this.processData();
    this.saveData();
  }

  protected abstract readData(): void;
  protected abstract processData(): void;
  protected abstract saveData(): void;
}

class CSVDataProcessor extends DataProcessor {
  protected readData(): void {
    console.log("Reading data from CSV file");
  }

  protected processData(): void {
    console.log("Processing CSV data");
  }

  protected saveData(): void {
    console.log("Saving processed data to CSV file");
  }
}

class JSONDataProcessor extends DataProcessor {
  protected readData(): void {
    console.log("Reading data from JSON file");
  }

  protected processData(): void {
    console.log("Processing JSON data");
  }

  protected saveData(): void {
    console.log("Saving processed data to JSON file");
  }
}

const csvProcessor = new CSVDataProcessor();
csvProcessor.process();

const jsonProcessor = new JSONDataProcessor();
jsonProcessor.process();

/**
 * **전략 패턴**
 *
 * 전략 패턴은 행동을 정의하는 인터페이스를 만들고,
 * 여러 가지 행동을 정의하여 상황에 맞게 전략을 선택하는 패턴입니다.
 * 클라이언트는 실행 시점에 전략을 선택하고 사용할 수 있습니다.
 */

interface SortStrategy {
  sort(data: number[]): number[];
}

class BubbleSortStrategy implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Sorting using bubble sort");
    // 버블 정렬 알고리즘 구현
    return data; // 정렬된 데이터 반환 (단순화)
  }
}

class QuickSortStrategy implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Sorting using quick sort");
    // 퀵 정렬 알고리즘 구현
    return data; // 정렬된 데이터 반환 (단순화)
  }
}

class Sorter {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: SortStrategy): void {
    this.strategy = strategy;
  }

  public sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

const sorter = new Sorter(new BubbleSortStrategy());
sorter.sort([3, 1, 2]);

sorter.setStrategy(new QuickSortStrategy());
sorter.sort([3, 1, 2]);

/**
 * 이 예제에서 SortStrategy 인터페이스는 sort 메서드를 정의하고,
 * BubbleSortStrategy와 QuickSortStrategy 클래스는 각각의 정렬 방법을 구현합니다.
 * Sorter 클래스는 클라이언트에게 전략을 선택할 수 있는 방법을 제공합니다.
 */

/**
 * 비교
 * - 템플릿 메서드 패턴: 알고리즘의 구조(골격)를 슈퍼클래스에서 정의하고, 하위 클래스가 세부 구현을 제공합니다. 상속을 통해 알고리즘의 일부를 변경합니다.
 * - 전략 패턴: 행동(전략)을 캡슐화하여 다양한 방식으로 구현할 수 있습니다. 객체 조립을 통해 실행 시점에 행동을 선택합니다.
 *
 * 이 두 패턴은 서로 다른 문제에 적합하며,
 * 적절한 상황에서 사용되어야 합니다.
 */
