export interface Certificate {
  id: number,
  certificateName: string,
  issuingOrganization: string,
  issueDate: Date,
  expireDate?: Date,
  credentialId: string,
  credentialUrl: URL
}
