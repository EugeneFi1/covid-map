import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mult'
})
export class MultiplePipe implements PipeTransform {
    transform(num: number, num2: number = 2): number {
        return num * num2;
    }

}
