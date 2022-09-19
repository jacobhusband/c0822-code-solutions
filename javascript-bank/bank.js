/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  var account;
  if (balance > 0 && Number.isInteger(balance)) {
    account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var account = null;
  this.accounts.forEach(acc => {
    if (acc.number === number) {
      account = acc;

    }
  });
  return account;
};

Bank.prototype.getTotalAssets = function () {
  var sum = 0;
  if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      sum += this.accounts[i].getBalance();
    }
    return sum;
  } else {
    return 0;
  }
};
