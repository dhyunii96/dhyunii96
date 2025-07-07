
# 데이터 교환 포맷 및 시리얼라이징 이해 & HTTPS와 SSL 인증서 기초

---

## 📌 1. 시리얼라이징(Serialization)이란?

- **정의**: 데이터(객체, 구조체 등)를 저장 또는 전송 가능한 형식(텍스트 또는 바이너리)으로 변환하는 과정.
- **사용 예**:
  - 네트워크 전송 시 JSON/XML로 직렬화하여 송수신
  - 파일로 저장할 때 객체를 직렬화하여 저장

---

## 📌 2. 대표적인 데이터 포맷 비교

| 항목             | JSON                            | XML                                 | YAML                          |
|------------------|----------------------------------|--------------------------------------|-------------------------------|
| 구조             | 키-값 쌍                        | 태그 기반 구조                       | 들여쓰기 기반 구조             |
| 가독성           | 보통                             | 낮음                                 | 매우 좋음                     |
| 데이터 타입 지원 | 문자열, 숫자, 배열, 객체 등      | 유연 (모든 타입 가능, 속성 사용)     | JSON보다 다양 (날짜, 참조 등)  |
| 사용 분야        | API, 웹, 자바스크립트            | 레거시 시스템, SOAP, 문서 중심 시스템 | 설정 파일, DevOps             |
| 확장성           | 낮음                             | 높음                                 | 낮음                          |
| 주석 지원        | ❌ (표준 JSON은 주석 미지원)     | ⭕                                    | ⭕                            |
| 파싱 속도        | 빠름                             | 느림                                 | 보통                          |

---

## 📌 3. 포맷 예시 비교

### ✅ JSON
```json
{
  "name": "Alice",
  "age": 30,
  "skills": ["Python", "SQL"]
}
```

### ✅ XML
```xml
<person>
  <name>Alice</name>
  <age>30</age>
  <skills>
    <skill>Python</skill>
    <skill>SQL</skill>
  </skills>
</person>
```

### ✅ YAML
```yaml
name: Alice
age: 30
skills:
  - Python
  - SQL
```

---

## 📌 4. 선택 가이드

- **JSON**: REST API, 웹 클라이언트, 경량 통신
- **XML**: 고정된 구조의 메시지, 스키마 검증이 중요한 경우
- **YAML**: 설정 파일 (Kubernetes, Docker Compose 등), 읽기 쉬운 포맷이 필요한 경우

---

# 🔒 HTTPS와 SSL 인증서 기초

---

## 📌 1. HTTPS란?

- **HTTP Secure**의 약자
- **HTTP + SSL/TLS**로 구성됨
- **보안된 통신**을 위한 프로토콜

---

## 📌 2. SSL / TLS 개념

- **SSL (Secure Socket Layer)**: 현재는 사용되지 않고 대부분 **TLS**로 대체됨
- **TLS (Transport Layer Security)**: 애플리케이션과 네트워크 사이를 **암호화**하여 중간자 공격(MITM) 방지
- **주요 기능**:
  - 데이터 암호화 (Privacy)
  - 데이터 무결성 (Integrity)
  - 서버 인증 (Authentication)

---

## 📌 3. SSL 인증서란?

- **디지털 인증서**로, 서버의 신원을 확인하고 클라이언트가 신뢰할 수 있도록 보장
- **인증기관(CA)**가 발급
- 구성:
  - 공개키 (Public Key)
  - 도메인 정보
  - CA의 서명

---

## 📌 4. HTTPS 통신 과정 (간략 요약)

1. 클라이언트가 HTTPS 요청
2. 서버가 SSL 인증서 전송
3. 클라이언트가 인증서 검증 (CA 신뢰 확인)
4. **대칭키를 교환하기 위한 비대칭키 암호화 수행**
5. 세션 키 생성 후 안전한 통신 시작

---

## 📌 5. 인증서 유형

| 인증서 종류       | 설명                            | 사용 예시                   |
|------------------|----------------------------------|-----------------------------|
| DV (Domain Validated) | 도메인 소유 여부만 검증             | 개인 사이트, 블로그         |
| OV (Organization Validated) | 기업 실체 + 도메인 검증            | 일반 기업 사이트            |
| EV (Extended Validation) | 기업 상세 정보까지 엄격 검증        | 금융권, 쇼핑몰, 보안 사이트  |
| Wildcard 인증서     | 하위 도메인 전체 커버               | `*.example.com`             |
| SAN 인증서         | 여러 도메인/서브도메인 포함 가능      | 멀티도메인 서비스           |

---

## 📌 6. HTTPS가 중요한 이유

- 로그인/결제 정보 보호
- Google SEO에 HTTPS 필수화
- 브라우저에서 HTTP 접속 시 “안전하지 않음” 경고 표시

---

## 🔗 참고 링크

- [MDN Web Docs - HTTPS 소개](https://developer.mozilla.org/ko/docs/Web/HTTP/Overview)
- [Let's Encrypt - 무료 SSL 인증서](https://letsencrypt.org/ko/)
- [JSON vs YAML vs XML 비교](https://www.educative.io/answers/json-vs-xml-vs-yaml)
