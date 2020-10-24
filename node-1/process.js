// console.log(process.pid);
// console.log(process.versions.node);

// console.log(process.argv);

const grabValue = (flag) => {
  let idxAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[idxAfterFlag];
}

const fname = grabValue("-f");
const lname = grabValue("-l");

console.log("Your name is", fname, lname + ".");