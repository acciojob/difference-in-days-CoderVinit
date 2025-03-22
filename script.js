var dateDiffInDays = function (date1, date2) {
  //   write your code here
	 let d1 = new Date(date1);
    let d2 = new Date(date2);

    // Calculate the difference in milliseconds
    let diffTime = d2 - d1;

    // Convert milliseconds to days
    let diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
