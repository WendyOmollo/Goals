import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef){}
  @HostListener('click') onClicks(){
    this.Deco ('line-through')
  }
  @HostListener('dblclick') onDoubleClicks(){
    this.Deco ('None')
  }
private Deco(action:string){
    this.elem.nativeElement.style.textDecoration = action;
  }
}
