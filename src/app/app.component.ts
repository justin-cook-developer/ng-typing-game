import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "typing game";

  private _randomText = lorem.sentence().slice(0, -1);
  private _text = "";

  public get randomText(): string {
    return this._randomText;
  }

  public get text(): string {
    return this._text;
  }

  public set text(t: string) {
    this._text = t;
  }

  public showSuccess(): boolean {
    return (
      this.text.length === this.randomText.length &&
      this.text === this.randomText
    );
  }
}
