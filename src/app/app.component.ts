import { Component } from '@angular/core';

export interface Person {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';
  person: Person = {name:''};

  constructor() {
    this.printName(this.person, 'John')
  }

  printName = (person: Person, name: string) => {
    person.name = name
    console.log('Hey: ', person);
  }
}
