import { findDuplicateTransactions, Transaction } from "./find-duplicates";

describe("FindDuplicateTransactions::", () => {
  test("Find duplicate transactions - valid data", () => {
    const transactions: Transaction[] = [
      {
        id: 1,
        source: "A",
        target: "B",
        amount: 300,
        description: "tikkie",
      },
      {
        id: 2,
        source: "B",
        target: "C",
        amount: 1000,
        description: "rent",
      },
      {
        id: 4,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 6,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 3,
        source: "A",
        target: "B",
        amount: 300,
        description: "tikkie",
      },
      {
        id: 5,
        source: "A",
        target: "C",
        amount: 250,
        description: "other",
      },
      {
        id: 66,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 22,
        source: "B",
        target: "C",
        amount: 1000,
        description: "rent",
      },
    ];

    expect(findDuplicateTransactions(transactions)).toEqual([
      {
        id: 1,
        source: "A",
        target: "B",
        amount: 300,
        description: "tikkie",
      },
      {
        id: 2,
        source: "B",
        target: "C",
        amount: 1000,
        description: "rent",
      },
      {
        id: 4,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 6,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 3,
        source: "A",
        target: "B",
        amount: 300,
        description: "tikkie",
      },
      {
        id: 66,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 22,
        source: "B",
        target: "C",
        amount: 1000,
        description: "rent",
      },
    ]);
  });

  test("Find duplicate transactions - partial data", () => {
    const transactions: Transaction[] = [
      {
        id: 1,
        source: "A",
        target: "B",
        amount: 29.34,
        description: "tikkie",
      },
      {
        id: 4,
      },
      {
        id: 6,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 3,
        source: "a",
        target: "b",
        amount: 29.34,
        description: "tiKKie",
      },
      {
        id: 5,
        source: "A",
        target: "C",
        amount: 250,
      },
      {
        id: 66,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 55,
        source: "A",
        amount: 250,
      },
      {
        id: 22,
        source: "A",
        target: "D",
        amount: 100,
      },
      {
        id: 23,
        source: "A",
        target: "D",
        amount: 100,
      },
    ];

    expect(findDuplicateTransactions(transactions)).toEqual([
      {
        id: 1,
        source: "A",
        target: "B",
        amount: 29.34,
        description: "tikkie",
      },
      {
        id: 6,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 3,
        source: "a",
        target: "b",
        amount: 29.34,
        description: "tiKKie",
      },
      {
        id: 66,
        source: "A",
        target: "D",
        amount: 100,
        description: "groceries",
      },
      {
        id: 22,
        source: "A",
        target: "D",
        amount: 100,
      },
      {
        id: 23,
        source: "A",
        target: "D",
        amount: 100,
      },
    ]);
  });

  test("Find duplicate transactions - empty data", () => {
    const transactions: Transaction[] = [];
    expect(findDuplicateTransactions(transactions)).toEqual([]);
  });

  test("Find duplicate transactions - invalid data at runtime", () => {
    const transactions = null;
    // @ts-ignore // allow to send invalid data during runtime, bypassing compile time checks
    expect(() => findDuplicateTransactions(transactions)).toThrow(
      "Invalid Data"
    );
  });

  test("Find duplicate transactions - illtyped data at runtime", () => {
    const transactions = [null];
    // @ts-ignore // allow to send illtyped data during runtime, bypassing compile time checks
    expect(() => findDuplicateTransactions(transactions)).toThrow(
      "Illtyped Data"
    );
  });
});
