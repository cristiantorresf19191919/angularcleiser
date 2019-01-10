import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Cleisser";
  audio = new Audio("assets/video.mp3");

  decisio: boolean = false;

  constructor() {
    if (this.decisio === false) {
      this.audio.play();
      this.decisio = true;
    } else {
      this.audio.pause();
    }
    
  }
}
