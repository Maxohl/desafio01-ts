export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Você depositou R$${amount}. Saldo atual: R$${this.balance}.`);
      } else {
        console.log('Valor para depósito deve ser maior que zero.');
      }
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0 && this.getCurrentBalance() >= amount) {
        this.addToBalance(-amount); // Retira o valor do saldo
        console.log(`Você sacou R$${amount}. Saldo atual: R$${this.getCurrentBalance()}.`);
      } else if (amount <= 0) {
        console.log('O valor para saque deve ser maior que zero.');
      } else {
        console.log('Não é possível realizar o saque devido a fundos insuficientes.');
      }
    }
  };
  

  getBalance = (): void => {
    console.log(`Saldo atual: R$${this.balance}`);
  };

  // Métodos protegidos para subclasses
  protected addToBalance = (amount: number): void => {
    this.balance += amount;
  };

  protected subtractFromBalance = (amount: number): void => {
    this.balance -= amount;
  };

  protected getCurrentBalance = (): number => {
    return this.balance;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return true;
    }

    throw new Error('Conta inválida.');
  };
}
