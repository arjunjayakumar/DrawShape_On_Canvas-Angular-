import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Circle } from '../circle'
import { Rectangle } from '../rectangle'
import { Square } from '../square'

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit,AfterViewInit{
  ctx:any
  shape:string=''

  constructor() {}

  ngAfterViewInit(): void {console.log('Inside ngAfterViewInIt...') }
  ngOnInit(): void {}

  @ViewChild('canvas')
  canvas!: ElementRef;

  DrawRec(){
    this.ctx=this.canvas.nativeElement.getContext('2d')
    let r=new Rectangle()
    return r.draw(this.ctx)}

  DrawCic(){
    this.ctx=this.canvas.nativeElement.getContext('2d')
    let c=new Circle()
    return c.draw(this.ctx)}

  DrawSqr(){
    this.ctx=this.canvas.nativeElement.getContext('2d')
    let s=new Square()
    return s.draw(this.ctx)}

  Paint(event:any){
    this.shape=(event.target as HTMLInputElement).value
    if(this.shape=='Rectangle'){this.DrawRec()}
    else if(this.shape=='Square'){this.DrawSqr()}
    else if(this.shape=='Circle'){this.DrawCic()} }

  Clear(){
    this.ctx=this.canvas.nativeElement.getContext('2d')
    return this.ctx.clearRect(0, 0, 800, 500)}
}
