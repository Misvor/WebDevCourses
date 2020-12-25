import { Component } from '@angular/core';
import { release } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  a = true;
  b = false;
  c = false;
  d = false;
  check: number = 0;

  NotThere() {
    this.check = this.check + 1;
    if (this.check < 1) {
      return alert("Нет такого функционала");

    }
    if (this.check == 2) {
      this.d = true;
      return alert("Здесь ничего нет");

    }
    if (this.check == 3) {
      return alert("Ладно, что-то здесь точно есть, осталось найти");
    }

  }
  Secret() {

  }
  Choose(value: string) {
    switch (value) {
      case "a": this.c = false;
        this.b = false;
        this.a = true;
        break;
      case "b":
        this.c = false;
        this.b = true;
        this.a = false;
        break;
      case "c":
        this.NotThere();
        this.b = false;
        this.a = false;
        this.c = true;
        break;
    }

  }

}
