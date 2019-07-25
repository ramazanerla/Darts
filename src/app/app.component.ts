import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{

  text1 = "";
  text2 = "";
  text3 = "";
  text4 = "";

  player1: number[] = [];
  player2: number[] = [];
  player3: number[] = [];
  player4: number[] = [];

  summa1 = 0;
  summa2 = 0;
  summa3 = 0;
  summa4 = 0;
  ball1 = 0;
  ball2 = 0;
  ball3 = 0;
  ball4 = 0;

  message = "";
  message1 = "";


  max1 = 0;
  max2 = 0;
  max3 = 0;
  max4 = 0;





  knopka(){

    this.summa1 = 0;
    this.summa2 = 0;
    this.summa3 = 0;
    this.summa4 = 0;


    this.player1 = this.text1.split("\n").map(function(item)
    {
      return parseInt(item, 10);
    });

    this.player2 = this.text2.split("\n").map(function(item)
    {
      return parseInt(item, 10);
    });

    this.player3 = this.text3.split("\n").map(function(item)
    {
      return parseInt(item, 10);
    });

    this.player4 = this.text4.split("\n").map(function(item)
    {
      return parseInt(item, 10);
    });





    this.player1.forEach((i)=>
    {
      this.summa1 = this.summa1 + i;
    })


    this.player2.forEach((i)=>
    {
      this.summa2 = this.summa2 + i;
    })


    this.player3.forEach((i)=>
    {
      this.summa3 = this.summa3 + i;
    })


    this.player4.forEach((i)=>
    {
      this.summa4 = this.summa4 + i;
    })





    this.ball1 = this.summa1 / this.player1.length;

    this.ball2 = this.summa2 / this.player2.length;

    this.ball3 = this.summa3 / this.player3.length;

    this.ball4 = this.summa4 / this.player4.length;





    this.player1.forEach ((i) =>
    {
      if(i > this.max1)
        this.max1 = i;
    });

    console.log(this.max1);


    this.player2.forEach ((i) =>
    {
      if(i > this.max2)
        this.max2 = i;
    });

    console.log(this.max2);


    this.player3.forEach ((i) =>
    {
      if(i > this.max3)
        this.max3 = i;
    });

    console.log(this.max3);


    this.player4.forEach ((i) =>
    {
      if(i > this.max4)
        this.max4 = i;
    });

    console.log(this.max4);


    if ((this.max1) > this.max2 && (this.max1) > this.max3 && (this.max1) > this.max4)
    {
      this.message1 = this.max1.toString() + ' ' + 'ERLAN';
    }

    if ((this.max2) > this.max1 && (this.max2) > this.max3 && (this.max2) > this.max4)
    {
      this.message1 = this.max2.toString() + ' ' + 'Ильяс';
    }

    if ((this.max3) > this.max2 && (this.max3) > this.max1 && (this.max3) > this.max4)
    {
      this.message1 = this.max3.toString() + ' ' + 'Тимка';
    }

    if ((this.max4) > this.max1 && (this.max4) > this.max2 && (this.max4) > this.max3)
    {
      this.message1 = this.max4.toString() + ' ' + 'Димон';
    }


















    if ((this.summa1) > this.summa2 && (this.summa1) > this.summa3&& (this.summa1) > this.summa4)
    {
      this.message = "Ерлан Чемпион"
    }

    if ((this.summa2) > this.summa1 && (this.summa2) > this.summa3&& (this.summa2) > this.summa4)
    {
      this.message = "Ильяс чемпион"
    }

    if ((this.summa3) > this.summa1 && (this.summa3) > this.summa2 && (this.summa3) > this.summa4)
    {
      this.message = "Тимохенти чемпион"
    }


    if ((this.summa4) > this.summa1 && (this.summa4) > this.summa2&& (this.summa4) > this.summa3)
    {
      this.message = "Димон чемпион"
    }














  }



}




