
function extractConditionAndComment(check) {
    let container = null;
    let index = check.indexOf(" ");  // Gets the first index where a space occours
    let condition = check.substr(0, index); // Gets the first part
    let comment = check.substr(index + 1);

    container = {
        condition,
        comment
    }

    return container;
}

module.exports = {
    extractConditionAndComment,
}