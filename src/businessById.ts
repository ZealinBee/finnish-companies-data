// GET /BIS/V1/{BUSINESSID}

interface Name {
  source: number;
  order: number;
  version: number;
  registrationDate: Date;
  endDate: Date;
  name: string;
  language: string;
}

interface Address {
  source: number;
  version: number;
  registrationDate: Date;
  endDate: Date;
  careOf: string;
  street: string;
  postCode: string;
  city: string;
  language: string;
  type: number;
  country: string;
}

interface CompanyForm {
  source: number;
  version: number;
  registrationDate: Date;
  endDate: Date;
  name: string;
  language: string;
  type: number;
}

interface BusinessLine {
  source: number;
  order: number;
  version: number;
  registrationDate: Date;
  endDate: Date;
  name: string;
  language: string;
}

interface Language {
  source: number;
  version: number;
  registrationDate: Date;
  endDate: Date;
  name: string;
  language: string;
}

interface RegisteredOffice {
  source: number;
  order: number;
  version: number;
  registrationDate: Date;
  endDate: Date;
  name: string;
  language: string;
}

interface RegisteredEntry {
  description: string;
  status: string;
  registrationDate: Date;
  endDate: Date;
  register: number;
  language: string;
  authority: number;
}

interface ContactDetail {
  source: number;
  order: number;
  version: number;
  registrationDate: Date;
  endDate: Date;
  language: string;
  value: string;
  type: string;
}

interface BusinessIdChange {
  source: number;
  description: string;
  reason: string;
  changeDate: Date;
  change: number;
  oldBusinessId: string;
  newBusinessId: string;
  language: string;
}

interface Business {
  businessId: string;
  name: string;
  registrationDate: Date;
  companyForm: string;
  detailsUri: string;
  names: Name[];
  auxiliaryNames: Name[];
  addresses: Address[];
  companyForms: CompanyForm[];
  businessLines: BusinessLine[];
  languages: Language[];
  registeredOffices: RegisteredOffice[];
  contactDetails: ContactDetail[];
  registeredEntries: RegisteredEntry[];
  businessIdChanges: BusinessIdChange[];
}
