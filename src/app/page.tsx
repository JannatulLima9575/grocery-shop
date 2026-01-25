import Banner from "./components/Banner";
import CommunityReviews from "./components/CommunityReviews";
import FeaturedItems from "./components/FeaturedItems";
import LivePriceList from "./components/LivePriceList";
import MarketHighlights from "./components/MarketHighlights";
import MarketNews from "./components/MarketNews";
import PriceComparison from "./components/PriceComparison";

export default function Home() {
  return (
    <section>
      <div>
        <Banner/>
        <MarketHighlights />
        <LivePriceList />
        <FeaturedItems/>
        <PriceComparison/>
        <MarketNews/>
        <CommunityReviews/>
      </div>
    </section>
  );
}
