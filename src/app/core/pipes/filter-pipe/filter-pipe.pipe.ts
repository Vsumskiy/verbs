import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

    transform(values: string[], targetWord: string): string[] {
        if (!targetWord) {
            return values;
        }
        return values.filter(value => value.toLowerCase().includes(targetWord.toLowerCase()));
    }
}
