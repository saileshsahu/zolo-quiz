import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Highcharts;

@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.css']
})
export class QuizTestComponent implements OnInit {

  rippleColor: any = "rgba(255, 215, 64, .5)";
  showQuestion1: Boolean = true;
  showQuestion2: Boolean = false;
  showQuestion3: Boolean = false;

  selectedAns1: any = '';
  selectedAns2: any = '';
  selectedAns3: any = '';

  count1: number = 0;
  count2: number = 0;
  count3: number = 0;

  checkAnswerKey1: any = [];
  checkAnswerKey2: any = [];
  checkAnswerKey3: any = [];

  showQuizResult: Boolean = false;
  myChart1: any;
  noOfIncorrectAnswers: number = 0;
  noOfCorrectAnswers: number = 0;

  distance: any;
  countDownDate: any;
  minutes: any = 3;
  seconds: any = 0;
  x: any;

  progressValue: number = 0;

  constructor() { }

  ngOnInit() {
    // Set the date we're counting down to
    this.countDownDate = new Date();
    this.countDownDate.setMinutes(this.countDownDate.getMinutes() + 3);

    console.log(this.countDownDate);

    // Update the count down every 1 second
    this.x = setInterval(() => {

      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      this.distance = this.countDownDate - now;

      // Time calculations for minutes and seconds
      this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      console.log(this.minutes + "m " + this.seconds + "s ");

      // count down over 
      if (this.distance < 0) {
        clearInterval(this.x);
        console.log("expired");
        alert("Time Expired");
        setTimeout(() => {
          this.evaluateQuiz();
        }, 1000);
      }
    }, 1000);
  }

  proceedToNextQuestion(i) {
    switch (i) {
      case 1: {
        $("#question1").removeClass("zolo-card-entry-anim").addClass("zolo-card-exit-anim zolo-opacity-0");
        setTimeout(() => {
          this.showQuestion1 = false;
          this.showQuestion2 = true;
          this.showQuestion3 = false;
        }, 1400);
        this.progressValue = 33;
        break;
      }
      case 2: {
        $("#question2").removeClass("zolo-card-entry-anim").addClass("zolo-card-exit-anim zolo-opacity-0");
        setTimeout(() => {
          this.showQuestion1 = false;
          this.showQuestion2 = false;
          this.showQuestion3 = true;
        }, 1400);
        this.progressValue = 66;
        break;
      }
      case 3: {
        $("#question3").removeClass("zolo-card-entry-anim").addClass("zolo-card-exit-anim zolo-opacity-0");
        setTimeout(() => {
          this.showQuestion1 = true;
          this.showQuestion2 = false;
          this.showQuestion3 = false;
        }, 1400);
        this.progressValue = 100;
        break;
      }
      default:
    }
  }

  goBack(i) {
    switch (i) {
      case 1: {
        this.showQuestion1 = true;
        this.showQuestion2 = false;
        this.showQuestion3 = false;
        setTimeout(() => {
          $("#question1").removeClass("zolo-card-exit-anim").addClass("zolo-card-entry-anim zolo-opacity-0");
        }, 100);
        break;
      }
      case 2: {
        this.showQuestion1 = false;
        this.showQuestion2 = true;
        this.showQuestion3 = false;
        setTimeout(() => {
          $("#question2").removeClass("zolo-card-exit-anim").addClass("zolo-card-entry-anim zolo-opacity-0");
        }, 100);
        break;
      }
      default:
    }
  }

  checkAnswer(i, j) {
    switch (i) {
      case 1: {
        if (this.count1 === 0) {
          this.count1++;
          this.progressValue = 33;
          switch (j) {
            case 1: {
              this.selectedAns1 = "Uranium";
              this.checkAnswerKey1[0] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
            case 2: {
              this.selectedAns1 = "Plutonium";
              this.checkAnswerKey1[1] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
            case 3: {
              this.selectedAns1 = "Uranus";
              this.checkAnswerKey1[2] = true;
              this.noOfCorrectAnswers++;
              break;
            }
            case 4: {
              this.selectedAns1 = "U-567";
              this.checkAnswerKey1[3] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
          }
        }
        break;
      }

      case 2: {
        if (this.count2 === 0) {
          this.count2++;
          this.progressValue = 66;
          switch (j) {
            case 1: {
              this.selectedAns2 = "Penguin";
              this.checkAnswerKey2[0] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
            case 2: {
              this.selectedAns2 = "Dragon Fly";
              this.checkAnswerKey2[1] = true;
              this.noOfCorrectAnswers++;
              break;
            }
            case 3: {
              this.selectedAns2 = "Kiwi";
              this.checkAnswerKey2[2] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
            case 4: {
              this.selectedAns2 = "Cassowary";
              this.checkAnswerKey2[3] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
          }
        }
        break;
      }

      case 3: {
        if (this.count3 === 0) {
          this.count3++;
          this.progressValue = 100;
          switch (j) {
            case 1: {
              this.selectedAns3 = "Snake";
              this.checkAnswerKey3[0] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
            case 2: {
              this.selectedAns3 = "Dog";
              this.checkAnswerKey3[1] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
            case 3: {
              this.selectedAns3 = "Elephant";
              this.checkAnswerKey3[2] = false;
              this.noOfIncorrectAnswers++;
              break;
            }
            case 4: {
              this.selectedAns3 = "Me";
              this.checkAnswerKey3[3] = true;
              this.noOfCorrectAnswers++;
              break;
            }
          }
        }
        break;
      }

      default:

    }

    console.log(this.selectedAns1, this.selectedAns2, this.selectedAns3);
  }

  evaluateQuiz() {
    if ((this.selectedAns1 === '') || (this.selectedAns2 === '') || (this.selectedAns3 === '')) {
      this.noOfIncorrectAnswers++;
    }
    this.showQuizResult = true;
    clearInterval(this.x);
    this.plotGraph();
  }

  plotGraph() {
    $(() => {
      this.myChart1 = Highcharts.chart('chartContainer', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Your Results'
        },
        tooltip: {
          pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                },
                style: {
                  fontWeight: 'bold',
                  fontSize: "12px"
              }
            }
        }
        },
        series: [{
          colorByPoint: true,
          data: [{
            name: 'Incorrect Answers',
            y: this.noOfIncorrectAnswers,
            sliced: true,
            selected: true,
            color: '#F44336'
          }, {
            name: 'Correct Answers',
            y: this.noOfCorrectAnswers,
            color: '#4CAF50'
          }]
        }]
      });
    });
  }

}
