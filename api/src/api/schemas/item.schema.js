const Resource = `
  enum PositionRoleType {
    FRONT_END,
    BACK_END,
    USER_EXPERIENCE,
    HUMAN_RESOURCES
  }

  enum PositionLevelType {
    JUNIOR,
    MEDIUM,
    SENIOR
  }

  enum ContractType{
    FULL_TIME,
    TEN_NINETYNINE
  }

  type Resource {
    id: String!
    firstName: String!
    lastName: String!
    contractType: ContractType!,
    positionRole: PositionRoleType!,
    positionLevel: PositionLevelType!,
    salary: Float!,
    createdAt: String!
    joinedAt: String,
    leftAt: String,
  }
`;

module.exports = Resource;
