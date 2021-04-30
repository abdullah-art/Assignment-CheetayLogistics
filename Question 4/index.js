const maxMeetings = (S, F, N) => {
  if (N === 0) return 0;

  let fcopy = F.map((value, index) => ({
    start: S[index],
    end: value,
  }));

  fcopy.sort((a, b) => a.end - b.end);

  let count = 1;
  let limit = fcopy[0].end;
  for (let i = 1; i < N; i++) {
    if (fcopy[i].start > limit) {
      count++;
      limit = fcopy[i].end;
    }
  }

  return count;
};

console.log(
  maxMeetings(
    [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924],
    [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252],
    8
  )
);
