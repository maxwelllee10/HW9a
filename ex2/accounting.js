class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  credit(amount) {
    this.balance += amount;
  }

  describe() {
    return `Account owner: ${this.owner}, Account balance: ${this.balance}`;
  }
}

module.exports = Account;