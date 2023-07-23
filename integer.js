let arr1 = ["1234567890234567890234567890"];
let arr2 = ["987654321198765432119876543211"];
parseInt(arr1);
parseInt(arr2);

function check(arr1, arr2) {
  if (arr1 || arr2 >= 1000000000000000000000000) {
    console.log("ok");
  } else {
    console.log("no");
  }
}
 function sum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i] + arr2[i];
    }
    return sum;
  }
    console.log(sum(arr1, arr2));

 function multiply (arr1, arr2) {
    let multiply = 0;
    for (let i = 0; i < arr1.length; i++) {
      multiply += arr1[i] + arr2[i];
    }
    return multiply;
  }
    console.log(multiply(arr1, arr2));














