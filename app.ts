import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
console.log(companyAccount)
companyAccount.getLoan(150)
console.log(companyAccount)
companyAccount.getLoan(-500)
console.log(companyAccount)
companyAccount.withdraw(1000)
console.log(companyAccount)

const specialAccount = new SpecialAccount("Max", 67890);
specialAccount.deposit(1000);
console.log(specialAccount);
specialAccount.getBalance();
console.log(specialAccount)
specialAccount.withdraw(500);
console.log(specialAccount);

