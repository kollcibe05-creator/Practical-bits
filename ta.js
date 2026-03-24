function StringChallenge(strArr) {
  // 1. Convert all times to minutes from midnight
  let minutesList = strArr.map(time => {
    // Match hours, minutes, and am/pm using Regex for accuracy
    let matches = time.match(/(\d+):(\d+)(am|pm)/);
    let hours = parseInt(matches[1]);
    let mins = parseInt(matches[2]);
    let ampm = matches[3];

    if (ampm === "pm" && hours !== 12) hours += 12;
    if (ampm === "am" && hours === 12) hours = 0;

    return (hours * 60) + mins;
  });

  // 2. Sort the list
  minutesList.sort((a, b) => a - b);

  // 3. Find minimum difference between adjacent times
  let minDiff = Infinity;
  for (let i = 0; i < minutesList.length - 1; i++) {
    let diff = minutesList[i+1] - minutesList[i];
    if (diff < minDiff) minDiff = diff;
  }

  // 4. Handle the "wrap-around" (e.g., 11:50pm to 12:10am)
  let wrapAroundDiff = (1440 - minutesList[minutesList.length - 1]) + minutesList[0];
  if (wrapAroundDiff < minDiff) minDiff = wrapAroundDiff;

  return minDiff;
}


function StringChallenge(strArr) {
  let minutesList = [];

  for (let time of strArr) {
    // 1. Separate the "12:30" from the "pm"
    let ampm = time.slice(-2);            // "am" or "pm"
    let clockTime = time.slice(0, -2);    // "12:30"
    
    // 2. Split hours and minutes
    let parts = clockTime.split(":");
    let hours = parseInt(parts[0]);
    let mins = parseInt(parts[1]);

    // 3. Convert to 24-hour logic
    if (ampm === "pm" && hours !== 12) hours += 12;
    if (ampm === "am" && hours === 12) hours = 0;

    minutesList.push((hours * 60) + mins);
  }

  // 4. Sort numbers (Required for easy comparison!)
  minutesList.sort((a, b) => a - b);

  // 5. Find the smallest gap
  let minDiff = 1440; // Max possible minutes in a day
  
  for (let i = 0; i < minutesList.length - 1; i++) {
    let diff = minutesList[i + 1] - minutesList[i];
    if (diff < minDiff) minDiff = diff;
  }

  // 6. The "Midnight Gap" (Last time vs First time)
  let midnightGap = (1440 - minutesList[minutesList.length - 1]) + minutesList[0];
  
  return Math.min(minDiff, midnightGap);
}











function StringChallenge(strArr) {
  // 1. Convert everything to minutes (Simple split method)
  let times = strArr.map(t => {
    let ampm = t.slice(-2);
    let [h, m] = t.slice(0, -2).split(":").map(Number);
    
    if (ampm === "pm" && h !== 12) h += 12;
    if (ampm === "am" && h === 12) h = 0;
    return (h * 60) + m;
  });

  // 2. Sort them
  times.sort((a, b) => a - b);

  // 3. Start with the "Midnight Wrap" as your first guess
  // This is the distance from the last time of today to the first time of tomorrow
  let minDiff = (1440 - times[times.length - 1]) + times[0];

  // 4. Compare neighbors
  for (let i = 0; i < times.length - 1; i++) {
    let diff = times[i + 1] - times[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}



















let theTimes = strArr.map(time => {
  let ampm = time.slice(-2);
  let [h, m] = time.slice(0, -2).split(":").map(Number);
  
  // Fix 12:am to be 0 and 12:pm to stay 12
  if (ampm === "pm" && h !== 12) h += 12;
  if (ampm === "am" && h === 12) h = 0;

  return (h * 60) + m;
});

theTimes.sort((a, b) => a - b);

// Use the midnight wrap-around as the starting minimum difference
let minuteDifference = (1440 - theTimes[theTimes.length - 1]) + theTimes[0];

for (let i = 0; i < theTimes.length - 1; i++) {
  let difference = theTimes[i + 1] - theTimes[i];
  if (difference < minuteDifference) {
    minuteDifference = difference;
  }
}

return minuteDifference;




function StringChallenge(str) {
  const targetX = 4, targetY = 4;
  
  function solve(index, x, y, visited) {
    // 1. Boundary check: Stay inside the 5x5 grid
    if (x < 0 || x > 4 || y < 0 || y > 4) return null;
    
    // 2. Avoid crossing your own path
    const pos = `${x},${y}`;
    if (visited.has(pos)) return null;
    
    // 3. Success condition: Reached the end of the string
    if (index === str.length) {
      return (x === targetX && y === targetY) ? "" : null;
    }

    visited.add(pos);
    const char = str[index];
    // Possible moves mapping
    const moves = { 'r': [1, 0], 'l': [-1, 0], 'u': [0, -1], 'd': [0, 1] };
    
    // 4. If current char is a known move, just go that way
    if (char !== '?') {
      const [dx, dy] = moves[char];
      const result = solve(index + 1, x + dx, y + dy, visited);
      visited.delete(pos); // Backtrack
      return result !== null ? char + result : null;
    }

    // 5. If it's a '?', try all directions until one works
    for (let move in moves) {
      const [dx, dy] = moves[move];
      const result = solve(index + 1, x + dx, y + dy, visited);
      if (result !== null) {
        visited.delete(pos); // Backtrack
        return move + result;
      }
    }

    visited.delete(pos); // Backtrack
    return null;
  }

  // Start at (0,0)
  const fullPath = solve(0, 0, 0, new Set());
  
  // The challenge only wants the '?' replaced, so we extract those parts
  let finalResult = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '?') finalResult += fullPath[i];
  }
  return finalResult;
}



function StringChallenge(str) {
  const moves = { r: [1, 0], l: [-1, 0], u: [0, -1], d: [0, 1] };

  function find(index, x, y, path, visited) {
    // 1. Check if out of bounds or already visited
    if (x < 0 || x > 4 || y < 0 || y > 4 || visited.has(`${x},${y}`)) return null;

    // 2. Base Case: Reached the end of the string
    if (index === str.length) {
      return (x === 4 && y === 4) ? path : null;
    }

    visited.add(`${x},${y}`);
    const char = str[index];

    // 3. Try directions (either the fixed char or all 4 if it's '?')
    for (let m in moves) {
      if (char !== '?' && char !== m) continue;
      
      const res = find(index + 1, x + moves[m][0], y + moves[m][1], path + m, visited);
      if (res) return res;
    }

    visited.delete(`${x},${y}`); // Backtrack
    return null;
  }

  // Get the full path, then return only the characters that replaced '?'
  const fullPath = find(0, 0, 0, "", new Set());
  return [...str].map((c, i) => c === '?' ? fullPath[i] : "").join("");
}





function StringChallenge(str) {
  // Use a simple 2D array for the grid (0 = unvisited, 1 = visited)
  var grid = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ];

  var result = "";

  function walk(index, x, y) {
    // 1. Basic boundary checks
    if (x < 0 || x > 4 || y < 0 || y > 4) return false;
    if (grid[y][x] === 1) return false;

    // 2. If we reached the end of the input string
    if (index === str.length) {
      return (x === 4 && y === 4);
    }

    // Mark this spot as visited
    grid[y][x] = 1;

    var char = str[index];
    // List moves manually
    var directions = ["r", "l", "u", "d"];
    var dx = [1, -1, 0, 0];
    var dy = [0, 0, -1, 1];

    for (var i = 0; i < 4; i++) {
      var move = directions[i];
      
      // If the char is NOT '?' it MUST match the direction
      if (char !== "?" && char !== move) continue;

      // Try moving
      if (walk(index + 1, x + dx[i], y + dy[i])) {
        if (char === "?") result = move + result;
        return true;
      }
    }

    // Undo the visit (backtrack)
    grid[y][x] = 0;
    return false;
  }

  walk(0, 0, 0);
  return result;
}






function StringChallenge(str) {
  // 1. Create a basic 5x5 grid tracker
  let grid = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  let finalPath = "";

  function walk(index, x, y, currentPath) {
    // 2. Boundary and collision checks
    if (x < 0 || x > 4 || y < 0 || y > 4 || grid[y][x] === 1) {
      return false;
    }

    // 3. Success condition: reached the end of the string at the target (4,4)
    if (index === str.length) {
      if (x === 4 && y === 4) {
        finalPath = currentPath;
        return true;
      }
      return false;
    }

    // Mark current cell as visited
    grid[y][x] = 1;

    let char = str[index];
    let dirs = ["r", "l", "u", "d"];
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    // 4. Try moves
    for (let i = 0; i < 4; i++) {
      // If char is fixed (not '?'), it must match the direction we're trying
      if (char !== "?" && char !== dirs[i]) continue;

      if (walk(index + 1, x + dx[i], y + dy[i], currentPath + dirs[i])) {
        return true;
      }
    }

    // 5. Backtrack: reset the cell so other paths can use it
    grid[y][x] = 0;
    return false;
  }

  walk(0, 0, 0, "");

  // 6. Return only the moves that replaced the '?'
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") result += finalPath[i];
  }
  return result;
}








function StringChallenge(str) {
  let grid = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  function walk(index, x, y) {
    // 1. Boundary and collision checks
    if (x < 0 || x > 4 || y < 0 || y > 4 || grid[y][x] === 1) return null;

    // 2. If we reach the end of the string, check if we are at (4,4)
    if (index === str.length) {
      return (x === 4 && y === 4) ? "" : null;
    }

    grid[y][x] = 1; // Mark visited
    let char = str[index];
    let dirs = ["r", "l", "u", "d"];
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      let move = dirs[i];
      // If it's not a '?', it must match the specific direction
      if (char !== "?" && char !== move) continue;

      let pathFound = walk(index + 1, x + dx[i], y + dy[i]);
      
      if (pathFound !== null) {
        grid[y][x] = 0; // Clean up before returning
        return move + pathFound;
      }
    }

    grid[y][x] = 0; // Backtrack: unmark visited
    return null;
  }

  // 3. Get the full path string
  let fullPath = walk(0, 0, 0);

  // 4. Extract only the characters that replaced '?'
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
      result += fullPath[i];
    }
  }
  return result;
}
