type SelfLearningType = "LEVEL_UP" | "WRONG_CONCEPT";
type LearningContentStatus = "INCOMPLETE" | "COMPLETE" | "PROGRESS";

export interface StudentWorksheetList {
  id: number;
  getRoute(): string;
  checkIsHomework(): boolean;
  checkIsExam(): boolean;
  getStatus(): LearningContentStatus;
  //   getSelfLearning(): StudentSelfLearningWorksheetGroupList[] | null;
  getAssignDatetime(): Date;
  getIconName(): string;
  getLabels(): ("숙제" | "비공개" | "자동채점")[];
  getTitle(): string;
  getFormattedAssignDatetime(): string;
  getProblemCount(): number;
  getScore(): number;
  getWrongCount(): number;
  getCorrectCount(): number;
  checkIsSelfLearningCtaVisible(): {
    checkIsCtaDisabled: (selfLearningType: SelfLearningType) => boolean;
    isWrongTypeSelfLearningCompleted: boolean;
    isLevelUpTypeSelfLearningCompleted: boolean;
  } | null;
}

class StudentExamWorksheet implements StudentWorksheetList {
  id: number;
  getRoute(): string {
    throw new Error("Method not implemented.");
  }
  checkIsHomework(): boolean {
    throw new Error("Method not implemented.");
  }
  checkIsExam(): boolean {
    throw new Error("Method not implemented.");
  }
  getStatus(): LearningContentStatus {
    throw new Error("Method not implemented.");
  }
  getAssignDatetime(): Date {
    throw new Error("Method not implemented.");
  }
  getIconName(): string {
    throw new Error("Method not implemented.");
  }
  getLabels(): ("숙제" | "비공개" | "자동채점")[] {
    throw new Error("Method not implemented.");
  }
  getTitle(): string {
    throw new Error("Method not implemented.");
  }
  getFormattedAssignDatetime(): string {
    throw new Error("Method not implemented.");
  }
  getProblemCount(): number {
    throw new Error("Method not implemented.");
  }
  getScore(): number {
    throw new Error("Method not implemented.");
  }
  getWrongCount(): number {
    throw new Error("Method not implemented.");
  }
  getCorrectCount(): number {
    throw new Error("Method not implemented.");
  }
  checkIsSelfLearningCtaVisible(): {
    checkIsCtaDisabled: (selfLearningType: SelfLearningType) => boolean;
    isWrongTypeSelfLearningCompleted: boolean;
    isLevelUpTypeSelfLearningCompleted: boolean;
  } | null {
    throw new Error("Method not implemented.");
  }
}

class StudentMaatWorksheet {
  specialType: "MAAT";
  specialTypeLabel: string;
  specialProcess1(): void;
  specialProcess2(): void;
}

class MaatAdapter extends StudentExamWorksheet {
  private maatWorksheet: StudentMaatWorksheet;

  constructor(maat: StudentMaatWorksheet) {
    super();
    this.maatWorksheet = maat;
  }

  checkIsExam(): boolean {
    return this.maatWorksheet.specialType === "MAAT";
  }
}

// 외부 API 패치
fetch("https://api.example.com/worksheets/maat").then((res) => {
  res.json().then((data: StudentMaatWorksheet[]) => {
    const maatWorksheetList = data.map((maat) => new MaatAdapter(maat)); // 인터페이스를 공유하기 때문에 문제 없음
  });
});
