function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    const answer = numbers[n - 1] * numbers[n - 2]
    return answer;
}