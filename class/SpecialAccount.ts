import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        const bonus = 10;
        const totalDeposit = amount + bonus;
        this.addToBalance(totalDeposit);
        console.log(
          `Você depositou R$${amount} (bônus de R$${bonus} incluído). Saldo atual: R$${this.getCurrentBalance()}.`
        );
      } else {
        console.log('Valor para depósito deve ser maior que zero.');
      }
    }
  };
}
