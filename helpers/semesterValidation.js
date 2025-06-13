function validateSemesterYear(year) {
    return /^\d{4}$/.test(year) ? true : "Year is invalid";
}

function validateSemesterSeason(semesterSeason) {
    const validSeasons = ["Fall", "Winter", "Spring", "Summer"];
    return validSeasons.includes(semesterSeason) ? true : "Semester season is invalid";
}

function validateSemesterStart(semesterStart) {
    return isValidDate(semesterStart) ? true : "Semester start date is invalid";
}

function validateSemesterEnd(semesterEnd) {
    return isValidDate(semesterEnd) ? true : "Semester end date is invalid";
}

function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

module.exports = {
    validateSemesterYear,
    validateSemesterSeason,
    validateSemesterStart,
    validateSemesterEnd
};