
# 프로그래밍 아키텍처 패턴 비교

---

## 📌 1. 공통 개요

- **아키텍처 패턴**은 사용자 인터페이스(UI)와 로직, 데이터 처리를 명확히 분리하여 **유지보수**, **테스트**, **협업**을 용이하게 하기 위한 설계 방식이다.
- 대표적인 UI 아키텍처 패턴으로는 **MVC, MVP, MVVM**이 있다.

---

## 📌 2. MVC (Model-View-Controller)

### ✅ 구조

```
사용자 ↔ View ↔ Controller ↔ Model
                  ↕        ↖
               View 업데이트
```

- **Model**: 데이터 및 비즈니스 로직을 담당
- **View**: 사용자 인터페이스, 사용자에게 보여지는 부분
- **Controller**: 사용자의 입력을 받아 로직 처리 및 Model과 View 제어

### ✅ 특징

- View와 Model이 직접 연결 가능
- Controller가 중개 역할
- 웹 프레임워크(Spring MVC, Django 등)에서 널리 사용

---

## 📌 3. MVP (Model-View-Presenter)

### ✅ 구조

```
사용자 ↔ View ↔ Presenter ↔ Model
                  ↕
               View 업데이트
```

- **Model**: 데이터 및 로직
- **View**: UI 요소를 정의, 인터페이스로 추상화됨
- **Presenter**: 로직 처리 담당, View 인터페이스를 통해 결과 전달

### ✅ 특징

- View는 로직 없이 UI 처리만 담당
- 테스트 용이: Presenter를 단독으로 테스트 가능
- Android 초기 구조에 자주 사용

---

## 📌 4. MVVM (Model-View-ViewModel)

### ✅ 구조

```
사용자 ↔ View ⇄ ViewModel ⇄ Model
         (데이터 바인딩)
```

- **Model**: 데이터 및 비즈니스 로직
- **View**: UI 요소
- **ViewModel**: UI 상태와 로직을 포함하며 View와 자동 바인딩

### ✅ 특징

- View와 ViewModel 간 자동 바인딩 (주로 데이터 바인딩 라이브러리 사용)
- View는 ViewModel의 상태를 구독만 함
- WPF, SwiftUI, Android Jetpack 등에서 활용

---

## 📌 5. 차이점 요약

| 항목         | MVC                        | MVP                          | MVVM                          |
|--------------|-----------------------------|-------------------------------|-------------------------------|
| 중간 계층     | Controller                  | Presenter                     | ViewModel                     |
| View와 로직 분리 | 중간 정도                   | 명확히 분리                   | 매우 명확 (바인딩 기반)       |
| 테스트 용이성 | 보통                        | 높음                          | 높음                          |
| 데이터 바인딩 | 수동                        | 수동                          | 자동                          |
| 사용 환경     | 웹 (Spring, Django 등)       | Android (구형 구조)           | Android (Jetpack), WPF 등     |

---

## 🔗 참고 링크

- [Martin Fowler - GUI Architectures](https://martinfowler.com/eaaDev/uiArchs.html)
- [MVVM 패턴 설명 (MS Docs)](https://learn.microsoft.com/ko-kr/archive/msdn-magazine/2009-february/mvvm-design-pattern)
