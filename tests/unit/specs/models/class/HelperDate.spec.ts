import HelperDate from '@/models/class/HelperDate';

describe('HelperDate', () => {
  const helperDate: HelperDate = new HelperDate();
  const testDate = new Date(2020, 0, 1);
  const tomorrowTestDate = new Date(
    new Date(testDate).setDate(testDate.getDate() + 1),
  );

  it('[HelperDate] Should format date correctly', async () => {
    expect(helperDate.getDateFormat(testDate)).toBe('January 1, 2020');
    expect(helperDate.getDateFormat(tomorrowTestDate)).toBe('January 2, 2020');
  });

  it('[HelperDate] Should match equal days', async () => {
    expect(helperDate.sameDay(testDate, testDate)).toBeTruthy();
  });

  it('[HelperDate] Should not match different days', async () => {
    expect(helperDate.sameDay(testDate, tomorrowTestDate)).toBeFalsy();
  });
});
