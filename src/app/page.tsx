import Banner from "./components/Banner";
import CommunityReviews from "./components/CommunityReviews";
import FeaturedItems from "./components/FeaturedItems";
import MarketNews from "./components/MarketNews";
import PriceComparison from "./components/PriceComparison";

export default function Home() {
  return (
    <section>
      <div>
        <Banner/>
        <PriceComparison/>
        <FeaturedItems/>
        <MarketNews/>
        <CommunityReviews/>
      </div>
    </section>
  );
}
