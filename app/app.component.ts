import { Component } from '@angular/core';

@Component({
  selector: 'my-app', //CSS selector for an HTML element
  template: '<h1>My First Angular App</h1>'
})

export class AppComponent {}

// importing gives the component access to Angular's
// core @Component decorator function ( Marks a class as an Angular
// component and collects component configuration metadata that determines
// how the component should be processed, instantiated and used at runtime)
