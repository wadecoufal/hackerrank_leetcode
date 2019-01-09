

// works, but not optimal. The Object.values method and for loop within case 3 of the switch
// statement is costly.
function freqQuery(queries) {
    const counts = {}; // { 1 => 2}
    const results = []; // [0, 1]

    queries.forEach(query => { // [3,2]
        const val = query[1]; //
        switch (query[0]) { //
            case 1:
                counts[val] ? counts[val] += 1 : counts[val] = 1;
                break;
            case 2:
                counts[val] ? counts[val] -= 1 : null;
                break;
            case 3:
                const vals = Object.values(counts); // [2]
                let countFound = false;
                for (let i = 0; i < vals.length; i++) {
                    if (vals[i] === val) { // 2 === 2
                        results.push(1);
                        countFound = true;
                        break;
                    }
                }
                if (!countFound) {
                    results.push(0);
                }
                break;
        }
    })

    return results;

}


// more optimal solution (not yet working)

function freqQuery2(queries) {
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
