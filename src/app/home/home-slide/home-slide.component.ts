import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.css'],
  animations: [
    trigger("slider", [
      transition(
        ":increment",
        group([
          query(":enter", [
            style({
              left: "100%"
            }),
            animate("0.5s ease-out", style("*")) //I also tried changing the time and nothing changed
          ]),
          query(":leave", [
            animate(
              "0.5s ease-out",
              style({
                left: "-100%"
              })
            )
          ])
        ])
      ),
      transition(
        ":decrement",
        group([
          query(":enter", [
            style({
              left: "-100%"
            }),
            animate("0.5s ease-out", style("*"))
          ]),
          query(":leave", [
            animate(
              "0.5s ease-out",
              style({
                left: "100%"
              })
            )
          ])
        ])
      )
    ])
  ],
})
export class HomeSlideComponent implements OnInit {
  faLongArrowAltLeft = faLongArrowAltLeft;
  faLongArrowAltRight = faLongArrowAltRight;
  recImage:any

  private _images: string[] = [];
  selectedIndex: number = 0;

  MainImage: any;

  constructor() { }

  ngOnInit(): void {
    this._images = ["../../../assets/images/banner1.jpg", "../../../assets/images/banner2.jpg", "../../../assets/images/banner3.jpg"];
  }
  ngAfterViewInit(){
    setInterval(() => {
      this.next()
    }, 3000);
  }
  get images() {
    return [this._images[this.selectedIndex]];
  }

  previous() {
    this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
  }

  next() {
    if(this.selectedIndex == this._images.length - 1){
      this.selectedIndex = 0
    }
    this.selectedIndex = Math.min(
      this.selectedIndex + 1,
      this._images.length - 1
    );
  }


}
