import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.addToBalance(amount); // Usando o método protegido para adicionar ao saldo
        console.log(
          `Você pegou um empréstimo de R$${amount}. Saldo atual: R$${this.getCurrentBalance()}.`
        );
      } else {
        console.log('O valor do empréstimo deve ser maior que zero.');
      }
    }
  };
}
