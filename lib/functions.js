// Global Variables
const monthNames = [
  { fullName: "January", shortName: "Jan", monthNum: "1" },
  { fullName: "February", shortName: "Feb", monthNum: "2" },
  { fullName: "March", shortName: "Mar", monthNum: "3" },
  { fullName: "April", shortName: "Apr", monthNum: "4" },
  { fullName: "May", shortName: "May", monthNum: "5" },
  { fullName: "June", shortName: "Jun", monthNum: "6" },
  { fullName: "July", shortName: "Jul", monthNum: "7" },
  { fullName: "August", shortName: "Aug", monthNum: "8" },
  { fullName: "September", shortName: "Sep", monthNum: "9" },
  { fullName: "October", shortName: "Oct", monthNum: "10" },
  { fullName: "November", shortName: "Nov", monthNum: "11" },
  { fullName: "December", shortName: "Dec", monthNum: "12" },
];

// General
export function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Validation
export function checkOnlyWhiteSpace(value) {
  if (value.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}

// Dates
export function nextTwelveMonths() {
  const monthsInOrder = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  for (let i = currentMonth + 1; i < 12; i++) {
    monthsInOrder.push({
      month: monthNames[i],
      year: currentDate.getFullYear(),
    });
  }
  for (let i = 0; i < currentMonth + 1; i++) {
    monthsInOrder.push({
      month: monthNames[i],
      year: currentDate.getFullYear() + 1,
    });
  }
  return monthsInOrder;
}

export function getYear() {
  return new Date().getFullYear();
}

export function getDay() {
  return new Date().getDate();
}

export function getMonth() {
  return monthNames[new Date().getMonth()];
}
