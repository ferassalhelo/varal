import HeroBanner from "./components/HeroBanner/HeroBanner";
import style from "./App.module.css";
import waysData from "./staticDataa/waysData";
import PriceDisplayGroup from "./components/PriceDisplayGroup/PriceDisplayGroup";
import priceDisplayCardData from "./staticDataa/priceDisplayData";
import SearchInput from "./components/SearchInput/SearchInput";
import MissionGroup from "./components/MissionGroup/MissionGroup";
import MissionCardData from "./staticDataa/missionData";
import WayGroup from "./components/WaysGroup/WaysGroup";
import Blogs from "./components/Blogs/Blogs";
import blogsData from "./staticDataa/blogsData";
import TitleWithAfterLine from "./components/TitleWithAfterLine/TitleWithAfterLine";
import Reviews from "./components/Reviews/Reviews";
import reviewData from "./staticDataa/reviewData";
import OurAndServises from "./components/OurAndServises/OurAndServises";
import ourAndServises from "./staticDataa/ourAndServisesData";
import Header from "./components/Header/Header";
import PostionShapeGroup from "./components/PostionShapeGroup/PostionShapeGroup";

function App() {
  return (
    <div className="container" id="home">
      <Header />
      <SearchInput />
      <HeroBanner />
      <section id="serv">
        <h2 className={style.section_titeles}>
          Dedicated
          <br /> to our mission we are
        </h2>
        <p className={style.secondary_text}>
          Our services include Company Formation & Renewals, Trust & Fiduciary,
          Tax Residency Setup With Family, Bank Accounts, Remote Management,
          Stock Trading Platforms, Ownership Solutions.
        </p>
        <MissionGroup data={MissionCardData} />
      </section>
      <WayGroup data={waysData} />
      <section id="pric">
        <h2 className={style.section_titeles2}>
          Most popular affordable pricing per jurisdictions are brought to you
          to kick off your adventure.
        </h2>
        <PriceDisplayGroup data={priceDisplayCardData} />
      </section>
      <section className={style.ways_box}>
        <div className={style.way_item}>
          <TitleWithAfterLine
            title="Read about our blogs for more 
                   information on our processes"
          />
          <Blogs data={blogsData} />
          <TitleWithAfterLine
            title="Satidfied We are When Our 
            Customers Are Happy"
          />
          <Reviews data={reviewData} />
        </div>
        <div id="about" className={style.way_item}>
          <TitleWithAfterLine
            title="Get to know the whole us and 
                  more of our services"
          />
          <OurAndServises data={ourAndServises} />
        </div>
      </section>
      <footer>
        <p className={style.foot_text}>Varaluae 2021 © All Right Reserved</p>
      </footer>
      <PostionShapeGroup />
    </div>
  );
}

export default App;
