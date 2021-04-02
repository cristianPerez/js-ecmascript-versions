function* countDown(startCount) {
  let countStub = startCount;
  while (countStub > 0) {
    yield countStub;
    countStub--;
  }
}

const iterator = countDown(100);

console.log(iterator.next().value);
// expected output: 100

console.log(iterator.next().value);
// expected output: 99

console.log(iterator.next().value);
// expected output: 98

function* textGen() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World.';
  }
}

const textGenStub = textGen();

console.log(textGenStub.next().value);
console.log(textGenStub.next().value);
console.log(textGenStub.next().value);