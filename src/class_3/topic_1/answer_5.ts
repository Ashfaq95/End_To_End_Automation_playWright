type Transaction = {
  id: number;
  amount: number;
  status: string;
};

const transactionsList: Transaction[] = [
  { id: 1, amount: 100, status: "successful" },
  { id: 2, amount: 50, status: "failed" },
  { id: 3, amount: 200, status: "successful" },
  { id: 4, amount: 150, status: "successful" },
  { id: 5, amount: 75, status: "failed" }
];

function getTotalSuccessfulTransactionAmount(transactions: Transaction[]): number {
  return transactions
    .filter(transaction => transaction.status === "successful") //filter: Excludes transactions that are marked as "failed".
    .reduce((total, transaction) => total + transaction.amount, 0); //reduce: Sums up the amount of each successful transaction directly, starting with an initial total of 0.
}

const totalAmount = getTotalSuccessfulTransactionAmount(transactionsList);
console.log(totalAmount); // This will print 450
