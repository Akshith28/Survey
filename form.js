class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3', "Q1. Do you think we need to a cafeteria in our school?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount  every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. If yes how much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.radio2.option('200/-');
        this.radio2.option('500/-');
        this.radio2.option('800/-');
    }


    display() {
        this.input.position(670, 255)
        this.email.position(670, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(550, 5)
        this.question1.position(500, 360)
        this.radio.position(600, 420)
        this.question2.position(500, 450)
        this.radio1.position(600, 510)
        this.question3.position(500, 540)
        this.radio2.position(600, 600)

        this.button.mousePressed(() => {
            user.input = this.input.value();
            user.email = this.email.value();
            peopleCount += 1;
            user.index = peopleCount;
            user.update();
            user.updateCount(peopleCount);
        });

    }
}