import { IShape } from "./ishape";

export class Rectangle implements IShape {
    draw(ctx:any): any {return ctx.strokeRect(275, 325, 250, 100);}
}
