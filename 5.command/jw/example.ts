/**
 * - 선생님앱 > 학습지 만들기 > 2단계 상세 편집
 * - 문제 편집에 정말 다양한 기능이 있음
 * - 이 기능들이 단순하면 문제 없지만, 가뜩이나 많고 복잡한 기능을 가지는 경우도 있음
 * - 여기에 커맨드 패턴을 적용하면, 기능을 구현하는 비즈니스 로직을 캡슐화해서 따로 관리할 수 있음
 */
interface Command {
  execute(): void;
}

class GoToNextStep implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class GoToPreviousStep implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class DeleteSelectedProblem implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class TwinSimilarProblem implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class SortProblems implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class BookmarkProblem implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class AddProblemToCollection implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class AddAllProblemToCollection implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class ScrollToRelatedProblem implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class ReportError implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}

class ReloadProblems implements Command {
  execute(): void {
    throw new Error("Method not implemented.");
  }
}
