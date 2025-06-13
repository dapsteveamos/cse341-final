const {
  validateSemesterYear,
  validateSemesterSeason,
  validateSemesterStart,
  validateSemesterEnd
} = require('../helpers/semesterValidation');

describe('Semester Validation Functions', () => {

  test('validateSemesterYear - valid year', () => {
    expect(validateSemesterYear("2025")).toBe(true);
  });

  test('validateSemesterYear - invalid year', () => {
    expect(validateSemesterYear("25")).toBe("Year is invalid");
  });

  test('validateSemesterSeason - valid season', () => {
    expect(validateSemesterSeason("Fall")).toBe(true);
  });

  test('validateSemesterSeason - invalid season', () => {
    expect(validateSemesterSeason("Autumn")).toBe("Semester season is invalid");
  });

  test('validateSemesterStart - valid date', () => {
    expect(validateSemesterStart("2025-09-01")).toBe(true);
  });

  test('validateSemesterStart - invalid date', () => {
    expect(validateSemesterStart("bad-date")).toBe("Semester start date is invalid");
  });

  test('validateSemesterEnd - valid date', () => {
    expect(validateSemesterEnd("2025-12-15")).toBe(true);
  });

  test('validateSemesterEnd - invalid date', () => {
    expect(validateSemesterEnd("bad-end")).toBe("Semester end date is invalid");
  });

});