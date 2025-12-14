import Banner from "./components/Banner";
import CommunityReviews from "./components/CommunityReviews";
import FeaturedItems from "./components/FeaturedItems";
import MarketNews from "./components/MarketNews";

export default function Home() {
  return (
    <section>
      <div>
        <Banner/>
        <FeaturedItems/>
        <MarketNews/>
        <CommunityReviews/>
      </div>
    </section>
  );
}
