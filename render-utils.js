// consider: what data type is game here? where will you need to pass it this data type in your app?

export function renderPastSurvey(pastSurvey) {
    const container = document.createElement('div');
    const myInquryEl = document.createElement('p');
    const myLabelAEl = document.createElement('p');
    const myLabelBEl = document.createElement('p');
    const myTallyAEl = document.createElement('p');
    const myTallyBEl = document.createElement('p');

    container.classList.add('past-survey');
    myInquryEl.textContent = pastSurvey.inqury;
    myLabelAEl.textContent = pastSurvey.choiceALabel;
    myLabelBEl.textContent = pastSurvey.choiceBLabel;
    myTallyAEl.textContent = pastSurvey.choiceATally;
    myTallyBEl.textContent = pastSurvey.choiceBTally;

    container.append(myInquryEl, myLabelAEl, myLabelBEl, myTallyAEl, myTallyBEl);

    return container;
}