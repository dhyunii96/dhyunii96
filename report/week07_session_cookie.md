
# 세션과 쿠키 기반 인증 흐름 이해

---

## 📌 1. 상태 유지 전략 (Session vs Cookie)

### ✅ HTTP의 특징
- HTTP는 **무상태(Stateless)** 프로토콜
- 즉, 클라이언트와 서버는 **요청 간 상태를 유지하지 않음**
- 로그인 상태 유지 등 사용자별 상태 정보를 저장하기 위한 전략 필요

---

## ✅ 쿠키(Cookie)

- **정의**: 클라이언트(브라우저)에 저장되는 작은 데이터 조각 (key-value 형태)
- 서버가 Set-Cookie 응답 헤더를 통해 저장 지시
- 이후 요청마다 자동으로 서버에 전송됨

### 📌 특징
- 클라이언트에 저장 (브라우저가 보관)
- 용량 제한 (~4KB)
- 도메인 및 경로 기준으로 전송 제어 가능
- 보안 취약 (조작 및 탈취 가능성 → Secure/HttpOnly 설정 필요)

---

## ✅ 세션(Session)

- **정의**: 서버에 사용자 상태 정보를 저장하고, 클라이언트는 세션 ID를 쿠키 등으로 전달
- 서버 메모리나 DB에 세션 상태 관리

### 📌 특징
- 서버에 저장되므로 보안성이 높음
- 클라이언트에는 세션 ID만 전달
- 서버 리소스를 사용 (메모리, DB 등)
- 일반적으로 **쿠키와 함께 사용됨**

---

## 📌 2. 로그인 인증 흐름

### ✅ 1) 쿠키 기반 인증 흐름

1. 사용자가 로그인 폼 제출
2. 서버가 사용자 정보 확인 후, **JWT 또는 사용자 식별 정보**를 쿠키에 담아 응답
3. 브라우저가 쿠키를 저장
4. 이후 요청마다 자동으로 쿠키 전송
5. 서버는 쿠키 값으로 사용자 식별

```http
Set-Cookie: token=abc123; HttpOnly; Secure;
```

- 장점: 서버 상태 저장 불필요
- 단점: 토큰 탈취 시 위험, 클라이언트 보안 설정 필요

---

### ✅ 2) 세션 기반 인증 흐름

1. 사용자가 로그인 요청
2. 서버가 사용자 인증 후, **세션 생성 및 세션 ID 발급**
3. 세션 ID를 쿠키에 담아 클라이언트에 전달
4. 이후 요청 시 쿠키 내 세션 ID 전송
5. 서버는 세션 저장소에서 ID 매칭하여 사용자 상태 유지

- 장점: 민감한 데이터는 서버에만 저장
- 단점: 서버 리소스 소비, 세션 클러스터링 필요할 수 있음

---

## 📌 3. 쿠키 vs 세션 비교 요약

| 항목            | 쿠키 기반 인증          | 세션 기반 인증           |
|-----------------|--------------------------|---------------------------|
| 저장 위치       | 클라이언트(브라우저)     | 서버                      |
| 보안성          | 낮음 (설정 필요)         | 상대적으로 높음          |
| 서버 리소스 사용 | 없음                    | 있음                      |
| 용량 제한       | 약 4KB                   | 제약 없음 (서버에 따름)  |
| 확장성          | 높음 (분산 구조에 유리)   | 낮음 (클러스터링 필요)   |
| 사용 예시       | JWT 인증, SSO            | 로그인 상태 유지         |

---

## 📌 4. 실무 적용 예시

### 예: 세션 기반 로그인 구조 (Spring MVC 등)

```java
@PostMapping("/login")
public String login(HttpSession session, User user) {
    if (userService.isValid(user)) {
        session.setAttribute("user", user);
        return "redirect:/dashboard";
    }
    return "login";
}
```

### 예: 쿠키에 JWT 저장 (Express.js)

```javascript
res.cookie("token", jwtToken, {
    httpOnly: true,
    secure: true,
    maxAge: 3600000
});
```

---

## 🔐 보안 팁

- **HttpOnly**: JavaScript에서 접근 차단
- **Secure**: HTTPS 통신에서만 전송
- **SameSite**: CSRF 방지

---

## 🔗 참고 링크

- [MDN - HTTP Cookies](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
- [OWASP - Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
