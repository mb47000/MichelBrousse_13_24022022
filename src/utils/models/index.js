export const userModel = (apiData) => {
  return {
    id: apiData.id,
    email: apiData.firstName,
    firstName: apiData.firstName,
    lastName: apiData.lastName,
    createdAt: apiData.createdAt,
    updatedAt: apiData.updatedAt,
  }
}
