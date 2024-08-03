// jewishCalendarUtils.js

export const getJewishMonthNames = () => [
  'ניסן', 'אייר', 'סיוון', 'תמוז', 'אב', 'אלול',
  'תשרי', 'חשוון', 'כסלו', 'טבת', 'שבט', 'אדר'
];

export const getJewishDaysInMonth = (year, month) => {
  // פשוט דוגמה: מספר הימים בחודש לפי עקרון ירחי
  return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][month];
};

export const getFirstDayOfJewishMonth = (year, month) => {
  // פונקציה דוגמה: מניחה יום ראשון כהתחלה
  return 0; 
};
