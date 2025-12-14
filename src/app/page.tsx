import Banner from "./components/Banner";
import CommunityReviews from "./components/CommunityReviews";
import MarketNews from "./components/MarketNews";

export default function Home() {
  return (
    <section>
      <div>
        <Banner/>
        <MarketNews/>
        <CommunityReviews/>
      </div>
    </section>
  );
}
