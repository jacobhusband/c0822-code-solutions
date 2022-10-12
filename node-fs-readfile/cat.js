const fs = require('fs');
const fileNames = process.argv.slice(2);

fs.readFile(fileNames[0], 'utf8', (err, data) => {
  if (err) throw err;
  let output = data;
  const ind = 1;
  if (ind < fileNames.length) {
    fs.readFile(fileNames[ind], 'utf8', (err, data) => {
      if (err) throw err;
      output += data;
      const ind = 2;
      if (ind < fileNames.length) {
        fs.readFile(fileNames[ind], 'utf8', (err, data) => {
          if (err) throw err;
          output += data;
          const ind = 3;
          if (ind < fileNames.length) {
            fs.readFile(fileNames[ind], 'utf8', (err, data) => {
              if (err) throw err;
              output += data;
              console.log(output);
            });
          } else {
            console.log(output);
          }
        });
      } else {
        console.log(output);
      }
    });
  } else {
    console.log(output);
  }
});
