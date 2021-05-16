export interface Transaction {
  id: number;
  source?: string; // dont allow optional (?) if these must be present for a transaction to be valid
  target?: string;
  amount?: number;
  description?: string;
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 *
 * This is how a transaction looks like.
 *
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 *
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *
 *
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
export function findDuplicateTransactions(
  transactions: Transaction[]
): Transaction[] | undefined {
  if (!Array.isArray(transactions)) {
    handleError();
  }

  // todo: sanitize the data if needed
  try {
    return transactions.filter((transaction: Transaction) => {
      // remove the transaction which does not have a duplicate
      return !!transactions.find((transactionToCompare: Transaction) => {
        if (
          transaction.id !== transactionToCompare.id &&
          transaction.source?.toLowerCase() ===
            transactionToCompare.source?.toLowerCase() && // dont do toLowerCase if case comparision is required
          transaction.target?.toLowerCase() ===
            transactionToCompare.target?.toLowerCase() &&
          transaction.description?.toLowerCase() ===
            transactionToCompare.description?.toLowerCase() &&
          transaction.amount === transactionToCompare.amount
        ) {
          return true;
        }
      });
    });
  } catch (e) {
    handleError(e);
  }
}

/**
 *
 * @param e optional error objecr
 * @throws {Error} custom error
 * @returns {Transaction[]} or send empty data back to consumer
 */
function handleError(e?: Error) {
  // fail silently/ return [] or throw custom error based on contract with the consumer
  if (e) {
    console.log("e:", e); // todo: log error to analytics sytem based on Environment/configs rather at Console.log. Use e.g. Winston
    // see my blog for more: https://ajayrc.medium.com/application-insights-using-azure-and-vuejs-error-handling-and-event-logging-in-front-end-to-40874d76f152    
    throw "Illtyped Data";
  } else {
    throw "Invalid Data";
  }
}
