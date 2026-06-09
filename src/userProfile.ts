export type ResidencePeriodId = "under-3m" | "3m-1y" | "1y-3y" | "over-3y";
export type FinancialServiceId =
  | "remittance"
  | "rent"
  | "credit-loan"
  | "car-loan"
  | "insurance"
  | "investment"
  | "other";
export type IncomeStatusId = "salary" | "business" | "none";

export type UserProfile = {
  name: string;
  visa: string;
  remainingStayMonths: number;
  residencePeriod: ResidencePeriodId | "";
  financialServices: FinancialServiceId[];
  incomeStatus: IncomeStatusId;
  monthlyIncome: number;
};

export const defaultUserProfile: UserProfile = {
  name: "응우옌 반 민",
  visa: "E-9",
  remainingStayMonths: 18,
  residencePeriod: "",
  financialServices: [],
  incomeStatus: "salary",
  monthlyIncome: 2500000,
};

const residenceLabels: Record<ResidencePeriodId, string> = {
  "under-3m": "3개월 미만",
  "3m-1y": "3개월 ~ 1년",
  "1y-3y": "1년 3개월",
  "over-3y": "3년 이상",
};

const serviceLabels: Record<FinancialServiceId, string> = {
  remittance: "해외송금",
  rent: "전월세",
  "credit-loan": "신용대출",
  "car-loan": "자동차대출",
  insurance: "보험",
  investment: "투자",
  other: "기타",
};

const incomeStatusLabels: Record<IncomeStatusId, string> = {
  salary: "급여소득자",
  business: "사업소득자",
  none: "소득 없음",
};

export const getResidenceLabel = (period: ResidencePeriodId | "") =>
  period ? residenceLabels[period] : "-";

export const getFinancialServiceLabel = (service: FinancialServiceId) => serviceLabels[service];

export const getIncomeStatusLabel = (status: IncomeStatusId) => incomeStatusLabels[status];

export const getPrimaryFinancialService = (services: FinancialServiceId[]) => {
  const preferredOrder: FinancialServiceId[] = [
    "credit-loan",
    "remittance",
    "rent",
    "car-loan",
    "insurance",
    "investment",
    "other",
  ];

  return preferredOrder.find((service) => services.includes(service)) ?? services[0] ?? "credit-loan";
};

export const formatFullWon = (value: number) => `${value.toLocaleString("ko-KR")}원`;

export const formatShortWon = (value: number) => {
  if (value >= 10000 && value % 10000 === 0) {
    return `${value / 10000}만원`;
  }

  return formatFullWon(value);
};
