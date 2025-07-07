
# 웹 요청과 응답의 본질 이해하기

---

## 📌 1. HTTP의 Request/Response 구조

### ✅ HTTP란?
- **HyperText Transfer Protocol**의 약자로, 클라이언트와 서버 간의 요청/응답 기반 통신 프로토콜
- 웹 브라우저(클라이언트)가 서버에 요청(request)을 보내고, 서버는 이에 대한 응답(response)을 반환

---

### ✅ 요청(Request)의 구성 요소

| 구성 요소 | 설명 |
|-----------|------|
| Request Line | 요청 메서드(GET, POST 등), URL, HTTP 버전 |
| Headers | 요청 정보 (User-Agent, Cookie, Accept 등) |
| Body | POST나 PUT 요청 시 포함되는 데이터 (폼 입력, JSON 등) |

---

### ✅ 응답(Response)의 구성 요소

| 구성 요소 | 설명 |
|-----------|------|
| Status Line | HTTP 버전, 상태 코드(200, 404, 500 등), 메시지 |
| Headers | 응답 정보 (Content-Type, Set-Cookie 등) |
| Body | 클라이언트가 볼 실제 콘텐츠 (HTML, JSON, 이미지 등) |

---

### ✅ 상태 코드 예시

| 코드 | 의미 | 설명 |
|------|------|------|
| 200 | OK | 요청 성공 |
| 301 | Moved Permanently | 영구적인 리다이렉트 |
| 302 | Found | 임시 리다이렉트 |
| 400 | Bad Request | 잘못된 요청 |
| 401 | Unauthorized | 인증 필요 |
| 403 | Forbidden | 접근 금지 |
| 404 | Not Found | 페이지 없음 |
| 500 | Internal Server Error | 서버 오류 |

---

## 📌 2. Ajax, Forward, Redirect 차이

---

### ✅ 1) Ajax (Asynchronous JavaScript and XML)

- **정의**: 전체 페이지를 새로 고치지 않고, **백그라운드에서 서버와 비동기 통신**을 수행하는 기술
- **특징**:
  - 페이지 리로드 없이 일부 데이터만 갱신
  - 자바스크립트를 통한 요청/응답 처리
  - JSON이 주로 사용됨
- **사용 예**: 실시간 검색, 무한 스크롤, 좋아요 버튼 등

---

### ✅ 2) Forward (서버 내부 이동)

- **정의**: 서버 내부에서 **다른 자원으로 요청을 넘기는 방법**
- **특징**:
  - URL이 변경되지 않음
  - 클라이언트는 이동 사실을 모름
  - 요청과 응답이 유지됨
- **사용 예**: 로그인 후 대시보드 처리, form 처리 후 결과 페이지

```java
RequestDispatcher rd = request.getRequestDispatcher("result.jsp");
rd.forward(request, response);
```

---

### ✅ 3) Redirect (클라이언트에게 재요청 유도)

- **정의**: 서버가 클라이언트에게 **다른 URL로 다시 요청하도록 지시**
- **특징**:
  - URL이 변경됨
  - 새로운 요청/응답 사이클 시작
  - 세션 외 데이터는 유지되지 않음
- **사용 예**: 회원가입 후 로그인 페이지로 이동

```java
response.sendRedirect("login.jsp");
```

---

## 📌 3. 차이점 요약

| 항목 | Ajax | Forward | Redirect |
|------|------|---------|----------|
| 통신 방식 | 비동기 요청 | 서버 내부 이동 | 클라이언트 재요청 |
| 브라우저 주소(URL) | 변경 없음 | 변경 없음 | 변경됨 |
| 페이지 새로고침 | 없음 | 있음 | 있음 |
| 데이터 전달 | JSON, XML 등 | request 객체 유지 | 새로운 요청 |
| 사용 예 | 댓글 등록, 무한스크롤 | 내부 결과 처리 | 로그인 후 메인 이동 |

---

## 🔗 참고 링크

- [MDN - HTTP 개요](https://developer.mozilla.org/ko/docs/Web/HTTP/Overview)
- [W3Schools - AJAX](https://www.w3schools.com/xml/ajax_intro.asp)
