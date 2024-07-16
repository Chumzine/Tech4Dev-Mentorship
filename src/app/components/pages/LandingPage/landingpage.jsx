import { CustomerExperience } from "../../CustomerExperience";
import { Hero } from "../../Hero";
import { BusinessPartners } from "../../Partners";
import { Glance } from "../../Glance";
import { IPDCServices } from "../../Services";
import { BestResults } from "../../Results";
import { Newsletter } from "../../Newsletter";
import { Footer } from "../../Footer";

export const LandingPage = () => {
    return (
        <>
        <Hero />
        <CustomerExperience />
        <BusinessPartners />
        <Glance />
        <IPDCServices />
        <BestResults />
        <Newsletter />
        <Footer />
        </>
    )
}