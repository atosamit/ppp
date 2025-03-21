const premiumAdjustments = [
  {
    id: "1",
    Comment: "Initial adjustment",
    Total_Borrower_Fees_M: 100.0,
    CU_Retail_Rate: 0.05,
    Protected_Loan_Amount_M: 500.0,
    Pay_Rate: 0.04,
    Premium_Due: 50.0,
    Total_Amount: 650.0
  }
];

const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => premiumAdjustments.find(adj => adj.id === id),
    listPremiumAdjustments: () => premiumAdjustments
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      const index = premiumAdjustments.findIndex(adj => adj.id === input.id);
      if (index === -1) {
        throw new Error("Premium Adjustment not found");
      }
      premiumAdjustments[index] = {
        ...premiumAdjustments[index],
        ...input
      };
      return premiumAdjustments[index];
    }
  }
};

export default resolvers;