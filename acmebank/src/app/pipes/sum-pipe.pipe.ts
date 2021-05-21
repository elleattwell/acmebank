import { Pipe, PipeTransform } from '@angular/core';
import { AcmeAccount } from '../interfaces/account';

@Pipe({
  name: 'sumPipe'
})
export class SumPipePipe implements PipeTransform {

  transform(arr: AcmeAccount[]): any {
    return arr.reduce((a, current) => a + Number(current.balance), 0);
  }
}
