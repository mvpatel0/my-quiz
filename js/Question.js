class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("").attribute("placeholder","Enter the number...")
    this.input2.position(width/2,height/2+30)

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.greeting = createElement("h2");
    this.greeting1 = createElement("h3");





    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
     var question = `
     Question:- What starts and ends with the letter 'E', but has only one letter?
     </br>1:Everyone
     </br>2:Envelope
     </br>3:Estimate
     </br>4:Example`
     this.greeting1.html(question)
     this.greeting1.position(width/2-350,height/2-150)


    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.input1.hide();
    this.input2.hide();
    var message = `
    Thank You ${this.input1.value()}
    </br>Your Answer Has Been Submitted`
    this.greeting.html(message)
    this.greeting.position(width/2,height/2+100)
    })


  }
}
