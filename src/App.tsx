import { useEffect, useState } from "react";
import InfoInputScreen from "./components/InfoInputScreen";
import FinancialServicesScreen from "./components/FinancialServicesScreen";
import IncomeStatusScreen from "./components/IncomeStatusScreen";
import LoadingScreen from "./components/LoadingScreen";
import MainScreen from "./components/MainScreen";
import MyDataCompleteScreen from "./components/MyDataCompleteScreen";
import MyDataConnectScreen from "./components/MyDataConnectScreen";
import MyDataConsentScreen from "./components/MyDataConsentScreen";
import RecommendationLoadingScreen from "./components/RecommendationLoadingScreen";
import RecommendationResultScreen from "./components/RecommendationResultScreen";
import ResidencePeriodScreen from "./components/ResidencePeriodScreen";
import StayPeriodScreen from "./components/StayPeriodScreen";
import {
  TermsComparisonScreen,
  TermsOverviewScreen,
  TermsVisaConditionsScreen,
} from "./components/TermsScreens";
import { defaultUserProfile, type UserProfile } from "./userProfile";

const LOADING_DURATION_MS = 5000;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState<
    | "main"
    | "info"
    | "stay"
    | "residence"
    | "services"
    | "income"
    | "mydata"
    | "consent"
    | "complete"
    | "recommendLoading"
    | "recommendResult"
    | "termsOverview"
    | "termsComparison"
    | "termsVisaConditions"
  >("main");
  const [userProfile, setUserProfile] = useState<UserProfile>(defaultUserProfile);

  const updateProfile = (profile: Partial<UserProfile>) => {
    setUserProfile((current) => ({ ...current, ...profile }));
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#090b2b] text-white">
      <section className="flex min-h-screen items-center justify-center overflow-hidden bg-[#12143a] sm:bg-[#090b2b] sm:p-8">
        <div className="relative h-[874px] w-[402px] shrink-0 overflow-hidden shadow-phone">
          <LoadingScreen isActive={isLoading} />
          <MainScreen
            isActive={!isLoading && screen === "main"}
            onBravoAiClick={() => setScreen("info")}
          />
          <InfoInputScreen
            isActive={!isLoading && screen === "info"}
            onClose={() => setScreen("main")}
            onNext={(visa) => {
              updateProfile({ visa });
              setScreen("stay");
            }}
          />
          <StayPeriodScreen
            isActive={!isLoading && screen === "stay"}
            selectedVisa={userProfile.visa}
            initialMonths={userProfile.remainingStayMonths}
            onBack={() => setScreen("info")}
            onClose={() => setScreen("main")}
            onNext={(remainingStayMonths) => {
              updateProfile({ remainingStayMonths });
              setScreen("residence");
            }}
          />
          <ResidencePeriodScreen
            isActive={!isLoading && screen === "residence"}
            initialPeriod={userProfile.residencePeriod}
            onBack={() => setScreen("stay")}
            onClose={() => setScreen("main")}
            onNext={(residencePeriod) => {
              updateProfile({ residencePeriod });
              setScreen("services");
            }}
          />
          <FinancialServicesScreen
            isActive={!isLoading && screen === "services"}
            initialServices={userProfile.financialServices}
            onBack={() => setScreen("residence")}
            onClose={() => setScreen("main")}
            onNext={(financialServices) => {
              updateProfile({ financialServices });
              setScreen("income");
            }}
          />
          <IncomeStatusScreen
            isActive={!isLoading && screen === "income"}
            initialIncomeStatus={userProfile.incomeStatus}
            initialMonthlyIncome={userProfile.monthlyIncome}
            onBack={() => setScreen("services")}
            onClose={() => setScreen("main")}
            onNext={(incomeData) => {
              updateProfile(incomeData);
              setScreen("mydata");
            }}
          />
          <MyDataConnectScreen
            isActive={!isLoading && screen === "mydata"}
            onClose={() => setScreen("main")}
            onNext={() => setScreen("consent")}
          />
          <MyDataConsentScreen
            isActive={!isLoading && screen === "consent"}
            onClose={() => setScreen("main")}
            onNext={() => setScreen("complete")}
          />
          <MyDataCompleteScreen
            isActive={!isLoading && screen === "complete"}
            userProfile={userProfile}
            onClose={() => setScreen("main")}
            onNext={() => setScreen("recommendLoading")}
          />
          <RecommendationLoadingScreen
            isActive={!isLoading && screen === "recommendLoading"}
            onClose={() => setScreen("main")}
            onComplete={() => setScreen("recommendResult")}
          />
          <RecommendationResultScreen
            isActive={!isLoading && screen === "recommendResult"}
            userProfile={userProfile}
            onClose={() => setScreen("main")}
            onNext={() => setScreen("termsOverview")}
          />
          <TermsOverviewScreen
            isActive={!isLoading && screen === "termsOverview"}
            onBack={() => setScreen("recommendResult")}
            onClose={() => setScreen("main")}
            onNext={() => setScreen("termsComparison")}
          />
          <TermsComparisonScreen
            isActive={!isLoading && screen === "termsComparison"}
            userProfile={userProfile}
            onBack={() => setScreen("termsOverview")}
            onClose={() => setScreen("main")}
            onNext={() => setScreen("termsVisaConditions")}
          />
          <TermsVisaConditionsScreen
            isActive={!isLoading && screen === "termsVisaConditions"}
            userProfile={userProfile}
            onBack={() => setScreen("termsComparison")}
            onClose={() => setScreen("main")}
            onNext={() => setScreen("termsVisaConditions")}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
