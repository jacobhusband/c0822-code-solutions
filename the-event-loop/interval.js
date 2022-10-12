let count = 3;
const id = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(id);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
