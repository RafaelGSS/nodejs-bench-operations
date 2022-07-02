function compare(total) {
  const arrayPush = performance.now();
  var array = [];
  for (var i = 0; i < total; i++) {
    array.push(i);
  }
  const arrayPushTotal = performance.now() - arrayPush;

  const preAlloc = performance.now();
  var array2 = new Array(total);
  for (var i = 0; i < total; i++) {
    array2[i] = i;
  }
  const preAllocToal = performance.now() - preAlloc;

  console.log(
    " " +
      `
    ${new Intl.NumberFormat().format(total)} numbers:
           array.push: ${new Intl.NumberFormat().format(arrayPushTotal)}ms ${
        arrayPushTotal < preAllocToal ? "(faster)" : ""
      }
    new Array(length): ${new Intl.NumberFormat().format(preAllocToal)}ms ${
        preAllocToal < arrayPushTotal ? "(faster)" : ""
      }
  `.trim() +
      "\n"
  );
}
console.log('```')
compare(10);
compare(100);
compare(1000);
compare(10000);
compare(1000000);
compare(100000000);

function compareStrings(total) {
  const arrayPush = performance.now();
  var array = [];
  for (var i = 0; i < total; i++) {
    array.push('test');
  }
  const arrayPushTotal = performance.now() - arrayPush;

  const preAlloc = performance.now();
  var array2 = new Array(total);
  for (var i = 0; i < total; i++) {
    array2[i] = 'test'
  }
  const preAllocToal = performance.now() - preAlloc;

  console.log(
    ' ' +
      `
    ${new Intl.NumberFormat().format(total)} strings:
           array.push: ${new Intl.NumberFormat().format(arrayPushTotal)}ms ${
        arrayPushTotal < preAllocToal ? '(faster)' : ''
      }
    new Array(length): ${new Intl.NumberFormat().format(preAllocToal)}ms ${
        preAllocToal < arrayPushTotal ? '(faster)' : ''
      }
  `.trim() +
      '\n'
  );
}
console.log("");
console.log("----");
console.log("");
console.log("");
compareStrings(10);
compareStrings(100);
compareStrings(1000);
compareStrings(10000);
compareStrings(1000000);
compareStrings(100000000);
console.log('```')
