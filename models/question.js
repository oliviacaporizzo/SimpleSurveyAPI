// import uuid from 'uuid';

class Question {

    constructor (text) {
        // this.id = uuid.v4();
        this.text = text;
        this.answers = [];
    }

    addAnswer(a)  {
        this.answers.push(a);
    }

}

export default Question;