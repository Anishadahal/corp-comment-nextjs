import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HastagList from "@/components/HastagList";

export default function Home() {
  return (
    <div className="relative flex justify-center h-[850px]">
      <Footer />
      <Container
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={filteredFeedbackItems}
        onAddToList={onAddToList}
      />

      <HastagList
        companyList={uniqueCompanyList}
        setSelectedCompany={setSelectedCompany}
      />
    </div>
  );
}
