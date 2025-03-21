import { gql } from 'apollo-server';

const typeDefs = `
  type Query {
    getPremiumAdjustment(id: ID!): PremiumAdjustment
    listPremiumAdjustments: [PremiumAdjustment!]!
  }
  
  type Mutation {
    editPremiumAdjustment(input: EditPremiumAdjustmentInput!): PremiumAdjustment
  }

  input EditPremiumAdjustmentInput {
    id: ID!
    Comment: String!
    Total_Borrower_Fees_M: Float
    CU_Retail_Rate: Float
    Protected_Loan_Amount_M: Float
    Pay_Rate: Float
    Premium_Due: Float
    Total_Amount: Float
  }

  type PremiumAdjustment {
    id: ID!
    Comment: String!
    Total_Borrower_Fees_M: Float
    CU_Retail_Rate: Float
    Protected_Loan_Amount_M: Float
    Pay_Rate: Float
    Premium_Due: Float
    Total_Amount: Float
  }
`;

export default typeDefs;