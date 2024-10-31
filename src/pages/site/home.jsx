import Hero from "../../components/hero.jsx";
import Services from "../../components/services.jsx";
import PriceList from "../../components/priceList.jsx";
import Apointment from "../../components/apointment.jsx";

function SiteHome() {
    return (
        <>
            <Hero />
            <Services />
            <PriceList />
            <Apointment />
        </>
    );
}

export default SiteHome;