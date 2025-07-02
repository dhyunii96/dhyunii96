// 1. 타입에 맞는 값만 허용
 function printAge(age: number) {
    if (typeof age !== "number") {
        throw new Error("숫자만 허용됨");
    }
    console.log(`${age}살`);
 }

 printAge(25);

// 2. 커스텀 타입 검사 함수 만들기
type UserInput = string | number;
function isString(input: UserInput): input is string {
    return typeof input === "string";
}

// 3. 반환 타입 유효성 검사
function getStatus(code: number): "success" | "error" {
    if (code === 200)  return "success";
    return "error";
}

// 4. 매개변수가 string인 경우에만 실행
function shoewLength(input: string | number) {
    if (typeof input === "string") {
        console.log(`길이: ${input.length}`);
    } else {
        console.log("문자열이 아닙니다");
    }
}

// 1. 문자열 변수 선언
let name2: string = "Alice";

// 2. 숫자와 boolean 타입
let age: number = 30;
let isActive: boolean = true;

// 3. 함수 매개변수와 반환 타입
function add(x: number, y: number): number {
    return x + y;
}

// 4. 배열 타입
let scores: number[] = [90, 85, 78];

// 5. 객체 타입 정의
let person: { name: string; age: number } = {
    name: "Bob",
    age: 25
};

// 6. 유니언 타입
let id: number | string = "user123";