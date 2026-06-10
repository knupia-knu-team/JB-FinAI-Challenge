import categoryEtc from "../../assets/terms/terms-category-etc.png";
import categoryLimit from "../../assets/terms/terms-category-limit.png";
import categoryRate from "../../assets/terms/terms-category-rate.png";
import categoryRepay from "../../assets/terms/terms-category-repay.png";
import categoryTarget from "../../assets/terms/terms-overview-category-target.png";
import visaF2 from "../../assets/terms/terms-visa-f2.png";
import visaF4 from "../../assets/terms/terms-visa-f4.png";
import visaF5 from "../../assets/terms/terms-visa-f5.png";
import visaF6 from "../../assets/terms/terms-visa-f6.png";
import visaF7 from "../../assets/terms/terms-visa-f7.png";

export const termCategories = [
  { label: "대출대상", icon: categoryTarget },
  { label: "대출한도", icon: categoryLimit },
  { label: "대출금리", icon: categoryRate },
  { label: "상환방법", icon: categoryRepay },
  { label: "기타약관", icon: categoryEtc },
];

export const overviewStepLabels = ["1 대출대상", "2 대출한도", "3 대출금리", "4 상환방법", "5 기타약관"];

export const detailStepLabels = ["1 대출대상", "2 대출한도", "3 상환방법", "4 대출기간", "5 기타약관"];

export const visaConditions = [
  {
    title: "F-4 비자 (재외동포)",
    description: "재직 12개월 이상, 연소득 2,000만원 또는\n사업 영위 12개월 이상, 연소득 2,000만원 이상",
    icon: visaF4,
  },
  {
    title: "F-5 비자 (영주)",
    description: "재직 12개월 이상, 연소득 1,500만원 또는\n사업 영위 12개월 이상, 연소득 1,200만원 이상",
    icon: visaF5,
  },
  {
    title: "F-6 비자 (결혼이민)",
    description: "재직 12개월 이상, 연소득 1,500만원 또는\n사업 영위 12개월 이상, 연소득 1,200만원 이상",
    icon: visaF6,
  },
  {
    title: "F-2 비자 (거주)",
    description: "재직 3개월 이상, 연소득 1,500만원 또는\n사업 영위 6개월 이상, 연소득 1,200만원 이상",
    icon: visaF2,
  },
  {
    title: "F-7 비자 (특정활동)",
    description: "재직 1개월 이상, 연소득 1,500만원",
    icon: visaF7,
  },
];
