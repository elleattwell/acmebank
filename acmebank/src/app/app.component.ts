import { Component, OnInit } from '@angular/core';
import { AcmeAccount } from './interfaces/account';
import { AccountsService } from './services/accounts.service';
import { AccountType, AccountLimit } from './constants/constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'acmebank';

  accounts: AcmeAccount[] = [];

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

  onWithdraw(): void {

    /*     We could take it further and do some error handling and checking here if we pass a parameter for balance and account type,
        but since we're already enabling/disabling button based on a condition, we don't need to but it would be best practice to do so. */

    alert('Success');
  }

  onApplyClasses(accountType: string, balance: number) {

    // We could have all of these conditions in the app.component.html file [ngClass], but it would be messy to read

    return {
      btn: true,
      'btn-success': (balance > 0) || balance >= AccountLimit.ChequeAccountLimit && accountType === AccountType.Cheque,
      'btn-secondary disabled': (balance == AccountLimit.SavingAccountLimit && accountType === AccountType.Savings) || balance <= AccountLimit.ChequeAccountLimit && accountType === AccountType.Cheque
    };
  }
}
