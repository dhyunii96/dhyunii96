class BankAccount {
    #balance: number = 0;

    deposit(amount: number) {
        this.#balance += amount;
        // this.#balance = this.#balance + amount; // 같은 의미
    }
    
    
    getBalance() {
        console.log(this.#balance);
    }

    setBalance(amount: number) {
        amount =amount *1.1;
        this.#balance = amount;
    }
}

let account = new BankAccount();
// account.#balance = 1000; // 에러: private 필드에 접근할 수 없음
account.setBalance(1000);
account.getBalance(); // 1100
