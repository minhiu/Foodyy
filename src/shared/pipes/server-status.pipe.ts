import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'serverStatus'})
export class ServerStatusPipe implements PipeTransform {
    private statusString;
    transform(statusNumber: number): string {
        if (statusNumber === 200) {
            this.statusString = "Up";
        } else if (statusNumber === 400) {
            this.statusString = "Down";
        } else {
            this.statusString = "NaN";
        }

        return this.statusString;
    }
}