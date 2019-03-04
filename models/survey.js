class Surveys {
    constructor() {
        this.surveys = [];
    }

    create(data) {
        const newSurvey = {
            name: data.name,
            questions: data.questions
        }
        this.surveys.push(newSurvey);
        return newSurvey;
    }

    findOne(name) {
        return this.surveys.filter((s) => s.name === name)[0];
    }

    findAll() {
        return this.surveys;
    }

    update(name, data) {
        const survey = this.findOne(name);
        const index = this.surveys.indexOf(survey);
        this.surveys[index].name = data.name || survey.name;
        this.surveys[index].questions = data.questions || survey.questions;
        return this.surveys[index];
    }
}

exports.module = new Surveys();