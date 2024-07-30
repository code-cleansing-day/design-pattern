// import

export abstract class StudentLearningContentScoring {
  //   protected _noteService = new WorksheetProblemNoteService();
  // 템플릿 클래스에서 채점 제출 알고리즘 골격 작성
  async submitAnswers(studentLearningContentId: string, loggingParams: any) {
    //     try {
    //       modalService.showLoader();
    //       modalService.closeModal();
    //       this.uploadNotes(+studentLearningContentId);
    //       window.freshpaint?.track("필기 제출", { ...loggingParams });
    //       this.submitStudentLearningContentProblems(studentLearningContentId);
    //     } catch (error) {
    //       if (error instanceof Error) {
    //         this.handleError(error);
    //       }
    //     } finally {
    //       modalService.hideLoader();
    //     }
  }
  // 공통으로 사용할 수 있는 메서드는 미리 구현
  protected _removeScoringDataFromLocalStorage(scoringIdList: number[]) {
    //     for (const scoringId of scoringIdList) {
    //       localStorageService.removeScoringData({ scoringId });
    //     }
  }
  // scoring setting 관련 메서드는 추상 메서드로 선언 -> 학습지, 시험지, 교재 등에서 모두 다른 비즈니스 로직을 기반으로 구현
  abstract loadStudentLearningContentScoring(
    studentLearningContentId: string
  ): void;
  // 필기 서버에 업로드 로직
  abstract uploadNotes(studentLearningContentId: number): void;
  // 학습지 문제 채점 제출 로직
  abstract submitStudentLearningContentProblems(
    studentLearningContentId: string
  ): void;
  // 각 도메인마다 에러 처리가 다를 수 있으므로 인터페이스 선언만
  abstract handleError(error: unknown): void;
}

// 템플릿 클래스 기반으로 학습지 채점 로직 구현
export class StudentWorksheetScoring extends StudentLearningContentScoring {
  // `학습지` 도메인과 밀접하게 관련된 데이터
  //   private _worksheet?: WorksheetEntity.CustomWorksheet;
  //   private _studentWorksheet?: StudentWorksheetEntity.StudentWorksheet;
  //   private _problemScoringColl?: ProblemScoringColl<"WORKSHEET">;
  //   private _problemScoringViewOption?: ProblemScoringViewOption<"NOT_학습모듈">;

  //   get worksheet() {
  //     return this._worksheet;
  //   }

  //   get studentWorksheet() {
  //     return this._studentWorksheet;
  //   }

  //   get problemScoringList() {
  //     return this._problemScoringColl?.toScoredArr ?? [];
  //   }

  //   get problemScoringColl() {
  //     return this._problemScoringColl;
  //   }

  //   get problemScoringViewOption() {
  //     return this._problemScoringViewOption;
  //   }

  constructor() {
    super();
    // makeObservable(...)
  }

  override handleError(error: unknown): void {
    //     if (error instanceof Error) {
    //       switch (error.message) {
    //         // CASE: 학습지가 삭제되거나 수정된 경우
    //         case "WORKSHEET_ALREADY_DELETED":
    //         case "STUDENT_WORKSHEET_NOT_FOUND":
    //           alertWorksheetExceptionErrorModal();
    //           break;
    //         // CASE: 학습지에 대한 접근 권한이 없을 때
    //         case "WORKSHEET_PERMISSION_DENIED":
    //         default:
    //           openUnavailableAlertMessageModal();
    //           break;
    //       }
    //     }
  }

  // 학습지 및 학습지 문제 데이터 로드 -> 채점 클래스에 주입
  override async loadStudentLearningContentScoring(studentWorksheetId: string) {
    //     const [{ worksheet, studentWorksheet }, studentWorksheetProblems] =
    //       await Promise.all([
    //         studentWorksheetApi.getAssignedStudentWorksheetById(
    //           +studentWorksheetId
    //         ),
    //         studentWorksheetApi.getAssignedStudentWorksheetWithProblems(
    //           +studentWorksheetId
    //         ),
    //       ]);
    //     runInAction(() => {
    //       this._worksheet = new WorksheetEntity.CustomWorksheet(worksheet);
    //       this._studentWorksheet = new StudentWorksheetEntity.StudentWorksheet(
    //         studentWorksheet
    //       );
    //       this._problemScoringColl = new ProblemScoringColl<"WORKSHEET">(
    //         studentWorksheetProblems.map(
    //           (
    //             { problem, worksheetProblemId, scoring, handwrittenNoteUrl },
    //             index
    //           ) =>
    //             new ProblemScoring<"WORKSHEET">(
    //               {
    //                 scoring:
    //                   new StudentWorksheetScoringEntity.StudentWorksheetScoring({
    //                     scoring: { ...scoring, worksheetProblemId },
    //                     problem: {
    //                       ...problem,
    //                       answerUnits: problem.answerUnits,
    //                       keypadTypes: problem.keypadTypes,
    //                     },
    //                     worksheet: {
    //                       autoScorable: worksheet?.autoScorable ?? false,
    //                       label: `${index + 1}번`, // label을 밖에서 주입해줘야 하는 경우에는 받을 수 있도록 (ex. 1번 유사문제)}
    //                     },
    //                   }),
    //               },
    //               worksheetProblemId,
    //               handwrittenNoteUrl
    //             )
    //         )
    //       );
    //       this._problemScoringViewOption = new ProblemScoringViewOption({
    //         content: {
    //           status: studentWorksheet.status,
    //           autoScored: worksheet.autoScorable,
    //           kind: "WORKSHEET",
    //           type: worksheet.type,
    //           worksheetId: worksheet.id,
    //         },
    //         studentAppSetting: commonRepo.studentAppSetting!,
    //       });
    //     });
    //   }
  }

  override async uploadNotes(studentWorksheetId: number) {
    //     const problemIds = this.problemScoringList.map((item) => item.id);
    //     await this._noteService.uploadNotes(
    //       Number(studentWorksheetId),
    //       problemIds,
    //       HandwrittenNoteType.STUDENT_WORKSHEET_SCORING
    //     );
  }

  override async submitStudentLearningContentProblems(
    studentWorksheetId: string
  ) {
    //     const problemScoringList = this.problemScoringList;
    //     if (problemScoringList.length) {
    //       try {
    //         if (
    //           problemScoringList[0].localUserInput instanceof
    //           RequestScoring.자동채점
    //         ) {
    //           await studentWorksheetApi.patchAutoScoringAssignedStudentWorksheet(
    //             studentWorksheetId,
    //             problemScoringList.map(({ localUserInput }) =>
    //               RequestScoring.자동채점.toRequestParams<"WORKSHEET", "일반">(
    //                 localUserInput as RequestScoring.자동채점
    //               )
    //             )
    //           );
    //         } else {
    //           await studentWorksheetApi.patchScoringAssignedStudentWorksheet(
    //             studentWorksheetId,
    //             problemScoringList.map(({ localUserInput }) =>
    //               RequestScoring.일반채점.toRequestParams<"WORKSHEET", "일반">(
    //                 localUserInput as RequestScoring.일반채점
    //               )
    //             )
    //           );
    //         }
    //         const scoringIdList = problemScoringList.map((item) => item.id);
    //         this._removeScoringDataFromLocalStorage(scoringIdList);
    //         await this.loadStudentLearningContentScoring(studentWorksheetId);
    //         return scoringIdList;
    //       } catch (error: any) {
    //         console.error(error);
    //         if (
    //           error?.response?.data?.code ===
    //           "STUDENT_WORKSHEET_PROBLEM_DUPLICATE_SUBMIT"
    //         ) {
    //           toastService.error("이미 제출한 답안은 수정할 수 없습니다.", {
    //             allowMultipleToast: true,
    //           });
    //         }
    //       }
    //     }
  }
}

// 템플릿 클래스 기반으로 시험지 채점 로직 구현
export class StudentExamScoring extends StudentLearningContentScoring {
  //   private _exam?: WorksheetEntity.ExamWorksheet;
  //   private _studentExamWorksheet?: StudentWorksheetEntity.StudentWorksheet;
  //   private _problemScoringColl?: ProblemScoringColl<"WORKSHEET">;
  //   private _problemScoringViewOption?: ProblemScoringViewOption<"NOT_학습모듈">;

  //   get exam() {
  //     return this._exam;
  //   }

  //   get studentExamWorksheet() {
  //     return this._studentExamWorksheet;
  //   }

  //   get problemScoringViewOption() {
  //     const currentProblemScoringViewOption = this._problemScoringViewOption;

  //     if (
  //       currentProblemScoringViewOption?.content &&
  //       currentProblemScoringViewOption?.studentAppSetting &&
  //       currentProblemScoringViewOption.content.worksheetId
  //     ) {
  //       return new ProblemScoringViewOption<"NOT_학습모듈">({
  //         content: {
  //           worksheetId: currentProblemScoringViewOption.content.worksheetId,
  //           autoScored: currentProblemScoringViewOption.content.autoScored,
  //           status: currentProblemScoringViewOption.content.status,
  //           kind: "WORKSHEET",
  //           type:
  //             currentProblemScoringViewOption.content.type === "MAAT"
  //               ? "MAAT"
  //               : "EXAM",
  //         },
  //         studentAppSetting: currentProblemScoringViewOption.studentAppSetting,
  //         문제같이보기: currentProblemScoringViewOption?.문제같이보기,
  //         안푼문제만보기: currentProblemScoringViewOption?.안푼문제만보기,
  //         오답_모르는문제만보기:
  //           currentProblemScoringViewOption?.오답_모르는문제만보기,
  //       });
  //     }

  //     return currentProblemScoringViewOption;
  //   }

  //   get problemScoringColl() {
  //     return new ProblemScoringColl(this._problemScoringColl?.toArr ?? []);
  //   }

  constructor() {
    super();
    //     makeObservable(...)
  }

  override async loadStudentLearningContentScoring(
    studentExamWorksheetId: string
  ) {
    //     const { data: studentExamScoring } = await studentExamApi.getStudentExam(
    //       studentExamWorksheetId
    //     );
    //     const {
    //       studentWorksheet,
    //       exam,
    //     }: {
    //       studentWorksheet: {
    //         id: number;
    //         assignDatetime: string;
    //         openDatetime: string;
    //         score: number;
    //         scoreDatetime: string;
    //         status: ValueOf<typeof CONTENT_STATUS>;
    //         correctCount: number | null;
    //         wrongCount: number | null;
    //       };
    //       exam: WorksheetEntity.ExamWorksheet | WorksheetEntity.MAATWorksheet;
    //     } = {
    //       exam: {
    //         id: studentExamScoring.id,
    //         title: "",
    //         type: studentExamScoring.examType === "MAAT" ? "MAAT" : "EXAM",
    //         level: 1,
    //         grade: 1,
    //         problemCount: 0,
    //         accessModifierToStudent: "PUBLIC",
    //         autoScorable: true,
    //         chapter: "1",
    //         school: "ELEMENTARY",
    //         tag: "BASIC",
    //         titleTag: "BASIC",
    //       },
    //       studentWorksheet: {
    //         id: studentExamScoring.id,
    //         assignDatetime: studentExamScoring.assignDatetime,
    //         openDatetime: new Date().toISOString(),
    //         scoreDatetime: new Date().toISOString(),
    //         score: studentExamScoring.score || 0,
    //         status: studentExamScoring.status,
    //         correctCount: 0,
    //         wrongCount: 0,
    //       },
    //     };
    //     const { data: studentExamProblems } =
    //       await studentExamApi.getStudentExamWithProblems(
    //         studentExamScoring.examId.toString()
    //       );
    //     const customizer = (
    //       problem: StudentExamApi.Response.ExamProblem,
    //       scoring: StudentExamApi.Response.ExamScoring
    //     ) => ({
    //       ...problem,
    //       ...scoring,
    //     });
    //     const mergedExamProblemWithScoring = zipWith(
    //       studentExamProblems,
    //       studentExamScoring.scoringList,
    //       customizer
    //     ).map((problemScoring) => ({
    //       problem: problemScoring.problem,
    //       worksheetProblemId: problemScoring.examProblemId,
    //       scoring: {
    //         id: problemScoring.id,
    //         userAnswer: problemScoring.userAnswer,
    //         result: problemScoring.result,
    //         handwrittenNoteUrl: problemScoring.handwrittenNoteUrl,
    //         updateDatetime: problemScoring.scoreDatetime,
    //       },
    //     }));
    //     const examProblemScoringList = mergedExamProblemWithScoring.map(
    //       ({ problem, worksheetProblemId, scoring }, index) =>
    //         new ProblemScoring<"WORKSHEET">(
    //           {
    //             scoring:
    //               new StudentWorksheetScoringEntity.StudentWorksheetScoring<"시험지">(
    //                 {
    //                   scoring: {
    //                     ...scoring,
    //                     updateDatetime: scoring.updateDatetime ?? undefined,
    //                     examProblemId: scoring.id,
    //                   },
    //                   problem: {
    //                     ...problem,
    //                     answerUnits: problem.answerUnits,
    //                     keypadTypes: problem.keypadTypes,
    //                   },
    //                   worksheet: {
    //                     autoScorable: exam.autoScorable ?? false,
    //                     label: `${index + 1}번`,
    //                   },
    //                 }
    //               ),
    //           },
    //           worksheetProblemId,
    //           scoring.handwrittenNoteUrl
    //         )
    //     );
    //     const problemScoringViewOptionSettings: ProblemScoringViewOptionParams<"NOT_학습모듈"> =
    //       {
    //         content: {
    //           worksheetId: exam.id,
    //           autoScored: exam.autoScorable,
    //           status: studentWorksheet.status,
    //           kind: "WORKSHEET",
    //           type: studentExamScoring.examType === "MAAT" ? "MAAT" : "EXAM",
    //         },
    //         studentAppSetting: {
    //           일반채점_채점전정답공개:
    //             !!commonRepo.studentAppSetting?.일반채점_채점전정답공개,
    //           채점후정답해설공개:
    //             !!commonRepo.studentAppSetting?.채점후정답해설공개,
    //           일반채점_채점전문풀동공개:
    //             !!commonRepo.studentAppSetting?.일반채점_채점전문풀동공개,
    //           채점후문풀동공개: !!commonRepo.studentAppSetting?.채점후문풀동공개,
    //         },
    //       };
    //     runInAction(() => {
    //       this._problemScoringColl = new ProblemScoringColl<"WORKSHEET">(
    //         examProblemScoringList
    //       );
    //       this._exam = new WorksheetEntity.ExamWorksheet(exam);
    //       this._studentExamWorksheet = new StudentWorksheetEntity.StudentWorksheet(
    //         studentWorksheet
    //       );
    //       this._problemScoringViewOption =
    //         new ProblemScoringViewOption<"NOT_학습모듈">(
    //           problemScoringViewOptionSettings
    //         );
    //     });
  }
  override async uploadNotes(studentExamWorksheetId: number): Promise<void> {
    // const examProblemIds = this._problemScoringColl?.toScoredArr.map(
    //   (item) => item.id
    // );
    //     await this._noteService.uploadNotes(
    //       studentExamWorksheetId,
    //       examProblemIds,
    //       HandwrittenNoteType.STUDENT_EXAM_SCORING
    //     );
  }

  override async submitStudentLearningContentProblems(
    studentExamWorksheetId: string
  ) {
    //     try {
    //       const payload = this._problemScoringColl?.toScoredArr;
    //       // 시험지는 자동채점만 가능
    //       if (
    //         payload &&
    //         payload.length &&
    //         payload[0].localUserInput instanceof RequestScoring.자동채점
    //       ) {
    //         await studentExamApi.patchStudentExamAutoScoringById(
    //           studentExamWorksheetId,
    //           payload.map(({ localUserInput }) =>
    //             RequestScoring.자동채점.toRequestParams<"WORKSHEET", "시험지">(
    //               localUserInput as RequestScoring.자동채점
    //             )
    //           )
    //         );
    //         this._removeScoringDataFromLocalStorage(payload.map((item) => item.id));
    //       }
    //     } catch (error: any) {
    //       if (
    //         error?.response?.data?.code === "STUDENT_EXAM_PROBLEM_DUPLICATE_SUBMIT"
    //       ) {
    //         toastService.error("이미 제출한 답안은 수정할 수 없습니다.", {
    //           allowMultipleToast: true,
    //         });
    //       }
    //       console.error(error);
    //     }
  }
  override handleError(error: unknown): void {
    //     errorHandlerService.handle(error, {
    //       message: TOAST_STRING.saveHandwrittenNoteFailed,
    //       useRemoteLogging: true,
    //     });
  }
}
