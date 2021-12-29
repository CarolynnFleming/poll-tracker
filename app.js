import { renderPastSurvey } from './render-utils.js';

const choiceAButton = document.querySelector('#choice-a-add');
const choiceBButton = document.querySelector('#choice-b-add');

const choiceARescind = document.querySelector('#choice-a-rescind');
const choiceBRescind = document.querySelector('#choice-b-rescind');

const form = document.querySelector('form');
const closeSurveyButton = document.querySelector('#close-survey');
const inquryEl = document.querySelector('#survey-question');
const choiceALabelEl = document.querySelector('#choice-a-label');
const choiceBLabelEl = document.querySelector('#choice-b-label');
const choiceATallyEl = document.querySelector('#choice-a-tally');
const choiceBTallyEl = document.querySelector('#choice-b-tally');
const pastSurveysEl = document.querySelector('.past-surveys');

let inqury = '';
let choiceALabel = '';
let choiceBLabel = '';
let choiceATally = 0;
let choiceBTally = 0;

const pastSurveysArray = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    inqury = data.get('the-question');
    choiceALabel = data.get('the-choice-a');
    choiceBLabel = data.get('the-choice-b');
    form.reset();

    displayCurrentSurvey();
});

choiceAButton.addEventListener('click', () => {
    choiceATally++;

    choiceATallyEl.textContent = choiceATally;
});

choiceBButton.addEventListener('click', () => {
    choiceBTally++;
    
    choiceBTallyEl.textContent = choiceBTally;
});

choiceARescind.addEventListener('click', () => {
    choiceATally--;
    
    choiceATallyEl.textContent = choiceATally;
});

choiceBRescind.addEventListener('click', () => {
    choiceBTally--;
    
    choiceBTallyEl.textContent = choiceBTally;
});
    
closeSurveyButton.addEventListener('click', () => {
    form.reset();

    const survey = makeSurvey();

    pastSurveysArray.push(survey);

    resetState();

    displayCurrentSurvey();

    displayList();
});

function makeSurvey() {
    return {
        inqury: inqury,
        choiceALabel: choiceALabel,
        choiceBLabel: choiceBLabel,
        choiceATally: choiceATally,
        choiceBTally: choiceBTally,
    };
}

function resetState() {
    inqury = '';
    choiceALabel = '';
    choiceBLabel = '';
    choiceATally = 0;
    choiceBTally = 0;
}
function displayCurrentSurvey() {
    inquryEl.textContent = inqury;
    choiceALabelEl.textContent = choiceALabel;
    choiceBLabelEl.textContent = choiceBLabel;
    choiceATallyEl.textContent = choiceATally;
    choiceBTallyEl.textContent = choiceBTally;
}  

function displayList() {
    pastSurveysEl.textContent = '';

    for (let pastSurvey of pastSurveysArray) {
        const container = renderPastSurvey(pastSurvey);

        pastSurveysEl.append(container);
    }
}