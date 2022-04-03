import { IShape } from "./ishape";

export class Square implements IShape {
    draw(ctx:any): any {return ctx.strokeRect(350, 225, 100, 100);}
}
