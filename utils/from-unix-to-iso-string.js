const kMsPerMin = 60 * 1000;
const kSecPerDay = 24 * 60 * 60;
const kMsPerDay = kSecPerDay * 1000;

const kMsPerHour = 60 * 60 * 1000;

const kDaysIn4Years = 4 * 365 + 1;
const kDaysIn100Years = 25 * kDaysIn4Years - 1;
const kDaysIn400Years = 4 * kDaysIn100Years + 1;
const kDays1970to2000 = 30 * 365 + 7;
const kDaysOffset = 1000 * kDaysIn400Years + 5 * kDaysIn400Years - kDays1970to2000;
const kYearsOffset = 400000;
const kDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const pad = n => (n < 10 ? `0${n}` : n);
const padMs = n => (n >= 100 ? n : n >= 10 ? `0${n}` : `00${n}`);

function getYearMonthDayFromDays(days) {
  days += kDaysOffset;
  let year = 400 * ~~(days / kDaysIn400Years) - kYearsOffset;
  days %= kDaysIn400Years;

  days--;
  let yd1 = ~~(days / kDaysIn100Years);
  days %= kDaysIn100Years;
  year += 100 * yd1;

  days++;
  let yd2 = ~~(days / kDaysIn4Years);
  days %= kDaysIn4Years;
  year += 4 * yd2;

  days--;
  let yd3 = ~~(days / 365);
  days %= 365;
  year += yd3;

  const is_leap = (!yd1 || yd2) && !yd3;

  days = days + is_leap;

  let month = 0;
  let day = 0;

  // Check if the date is after February.
  if (days >= 31 + 28 + (is_leap ? 1 : 0)) {
    days -= 31 + 28 + (is_leap ? 1 : 0);
    // Find the date starting from March.
    for (let i = 2; i < 12; i++) {
      if (days < kDaysInMonths[i]) {
        month = i;
        day = days + 1;
        break;
      }
      days -= kDaysInMonths[i];
    }
  } else {
    // Check January and February.
    if (days < 31) {
      month = 0;
      day = days + 1;
    } else {
      month = 1;
      day = days - 31 + 1;
    }
  }

  return `${ year }-${ pad(month + 1) }-${ pad(day) }`;
}

function fromUnixToISOString(unix) {
  const days = unix < 0 ? unix - kMsPerDay - 1 : ~~(unix / kMsPerDay);
  const timeInDayMs = unix - days * kMsPerDay;

  const hour = ~~(timeInDayMs / kMsPerHour);
  const min = ~~((timeInDayMs / kMsPerMin) % 60);
  const sec = ~~((timeInDayMs / 1000) % 60);
  const ms = ~~(timeInDayMs % 1000);

  const datePart = getYearMonthDayFromDays(days);

  return `${datePart}T${pad(hour)}:${pad(min)}:${pad(sec)}.${padMs(ms)}Z`;
}

module.exports = {
  fromUnixToISOString, 
};
