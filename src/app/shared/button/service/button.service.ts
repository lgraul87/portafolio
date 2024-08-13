import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor(private router: Router) { }
  action(buttonClass: any) {
    if (buttonClass === "first-button-card") {
      this.router.navigate(["project-examples"])
    }
  }
}
