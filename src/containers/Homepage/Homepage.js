import "../Homepage/Homepage.css";
import BTRCard from "./btrCard/btrCard";
import InspirationCard from "./inspirationCard/inspirationCard";
import MainCard from "./mainCard/mainCard";
import OpCard from "./opCard/opCard";
import ShareCard from "./shareCard/shareCard";

function Home() {
  return (
    <div className="Homepage-Main-container overflow-hidden">
      <div className="Homepage-Main-card">
        <MainCard />
      </div>

      <div className="Homepage-BTR-card">
        <BTRCard />
      </div>

      <div className="Homepage-OP-card">
        <OpCard />
      </div>

      <div className="Homepage-Inspiration-card">
        <InspirationCard />
      </div>

      <div className="Homepage-Share-card">
        <ShareCard />
      </div>
    </div>
  );
}

export default Home;
