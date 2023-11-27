let isOver18 = true;
let hasCriminalBlacklist = true;

let isAllow = isOver18 && hasCriminalBlacklist;

isAllow = !isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
