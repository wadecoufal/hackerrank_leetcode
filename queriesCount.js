
// q = [[1,1]]


function freqQuery(queries) {
    const queryCounts = {}; // {5: 1, 6: 1, 10: 1}
    const counts = {}; // {1: 3}
    const results = []; //

    queries.forEach( query => { // [1,5]
      const val = query[1]; // 5
      // const queryCount = queryCounts[val]; //

      switch (query[0]) { // 1
        case 1:
          queryCounts[val] ? queryCounts[val] += 1 : queryCounts[val] = 1;

          if (counts[queryCounts[val]]) {
            counts[queryCounts[val]] += 1;
            counts[queryCounts[val] - 1] -= 1;
          } else {
            counts[1] = 1;
          }

          break;
        case 2:
          queryCounts[val] ? queryCounts[val] -= 1 : null;
          counts[queryCounts[val]] ? counts[queryCounts[val]] -= 1 : null;

          if (counts[queryCounts[val]]) {
            counts[queryCounts[val]] -= 1;
            counts[queryCounts[val] - 1] += 1
          }
          break;
        case 3:
          counts[val] ? results.push(1) : results.push(0);
          break;
      }
    })

    return results;
}


const queries = [
  [1,5],
  [1,6],
  [3,2],
  [1,10],
  [1,10],
  [1,6],
  [2,5],
  [3,2]
];

console.log(freqQuery(queries)); // [0,1]
