# 어댑터패턴

## 요약 및 키워드

`서로 다른` 인터페이스의 `호환`

#### 자유로운 의견교환
[실무에서 어떻게 쓰이고 있을까]
- api response를 가공해야할 때 주로 쓰는 것 같다.

[~ 과거의 경험에 빗대어 ~]
- 다량의 코드 수정이 있었는데, 그때 마침 어댑터를 쓰고있었어서 어댑터만 수정해도 되어서 괜찮았다.

[라이브러리를 쓰기 위해 단순히 중간 레이어를 두는 것도 어댑터인가?]
Q. axios가 어댑터인가?
A. fetch를 쓰기위한 어댑터인 것 같다.
A. 어댑터패턴의 예시 사진 자동차가 레일을 달릴 수 있게끔 하는 것처럼 우리가 fetch를 직접적으로 쓰지 않고 axios의 인터페이스를 쓰고 있으니 어댑터가 맞는것 같다.
A. 주로 매핑작업에서 어탭터패턴을 쓰는 것과 동일한 선상에서 어댑터라고 볼 수 있을 것 같다.

[데코레이터와의 차이?]
- 동일한 결과를 위해 기능이 추가되고 인터페이스를 맞추면 어댑터, 
확장된 기능을 위해 인터페이스를 맞추는 작업이 동반되면 데코레이터인 것 같다.
- 행동을 어디에 포커스를 맞추냐에 따라서 어댑터일지, 데코레이터일지 나뉘는 것 같다.