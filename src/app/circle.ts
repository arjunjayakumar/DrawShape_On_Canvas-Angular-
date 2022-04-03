import { IShape } from "./ishape";

export class Circle implements IShape{
    draw(ctx:any): any {
        ctx.beginPath();
        ctx.arc(400, 184, 40, 0, 2 * Math.PI);
        return ctx.stroke()
    }
}