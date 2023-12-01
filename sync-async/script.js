console.log("helloworld");

setTimeout(() => {
  console.log("merhaba");
}, 2000);
setTimeout(() => {
  console.log("dunya");
}, 2000);

console.log("bakalim");

count = 0;

const upgrade = setInterval(() => {
  console.log(++count);
  if (count > 9) {
    clearInterval(upgrade);
    console.log("finish");
  }
}, 1000);

