function solution(arr) {
  let answer = [];
  let i = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

solution([4, 4, 4, 3, 3]);
