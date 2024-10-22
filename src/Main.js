import React, { useState } from "react";
import "./homepage.css";

function Main() {
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(true);
  const [isChallengesOpen, setIsChallengesOpen] = useState(false);
  const [isTrendsOpen, setIsTrendsOpen] = useState(false);
  const [isFutureOpen, setIsFutureOpen] = useState(false);

  return (
    <main className="App-main">
      <section>
        <h2
          className="section-title"
          onClick={() => setIsIntroductionOpen(!isIntroductionOpen)}
        >
          <i
            className={`fas ${
              isIntroductionOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />{" "}
          Introduction
        </h2>
        {isIntroductionOpen && (
          <div className="section-content">
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Non quam
              dolor mus eleifend adipiscing imperdiet luctus. Molestie lacus
              nisl libero sagittis lacus. Fusce neque etiam lacinia turpis
              iaculis et tellus bibendum. Pretium venenatis fusce pellentesque
              est hendrerit pharetra. Egestas orci mollis risus finibus; non
              accumsan inceptos. Dignissim enim blandit congue venenatis mattis
              iaculis cubilia nostra. Curabitur fusce fusce tristique hac morbi
              platea. Sed ad sagittis mattis aenean justo sollicitudin montes
              inceptos.
            </p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <h2
          className="section-title"
          onClick={() => setIsChallengesOpen(!isChallengesOpen)}
        >
          <i
            className={`fas ${
              isChallengesOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />{" "}
          Challenges
        </h2>
        {isChallengesOpen && (
          <div className="section-content">
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla est
              proin interdum luctus augue nulla ac egestas. Turpis mi semper
              aenean fusce purus. Bibendum justo ac luctus fringilla augue duis
              vestibulum urna. Fringilla nisi odio blandit etiam consectetur
              lacinia fermentum pellentesque. Dignissim vel dis platea sed
              rutrum suscipit. Curabitur dapibus vehicula torquent platea
              egestas ultrices penatibus sollicitudin. Integer lacus elit
              maecenas aliquam montes. Ultricies etiam nisi quisque condimentum
              tempus viverra pretium. Auctor hendrerit id imperdiet adipiscing
              risus sit risus sapien ridiculus. Hac mattis fames adipiscing
              tincidunt vestibulum et efficitur scelerisque facilisi. Elit nisi
              habitant nostra tristique; maecenas himenaeos. Consequat suscipit
              maximus, volutpat viverra dolor est. Sem duis pretium tellus
              posuere pellentesque convallis. Sociosqu condimentum nam augue
              erat eget, auctor dapibus et. Consectetur porttitor condimentum
              laoreet massa netus elementum. Tortor facilisi cras mi; hendrerit
              mi per. Ad vivamus nunc; interdum erat amet auctor. Accumsan enim
              maximus finibus litora dolor. Cras efficitur faucibus ornare risus
              cursus. Id hendrerit erat phasellus vivamus purus. Lobortis congue
              vel cras accumsan pellentesque blandit varius dis. Dolor nunc
              massa eros mollis adipiscing mollis duis. Dolor magnis sed in
              accumsan nascetur in libero. Pretium viverra suspendisse
              pellentesque mattis sit orci interdum tristique odio. Vel cursus
              quisque ullamcorper cursus; viverra orci scelerisque suspendisse
              vulputate. Maecenas felis vitae magna pharetra maximus praesent.
              Etiam porttitor nulla potenti et maecenas urna. Dictumst ligula
              bibendum morbi congue ullamcorper platea habitasse. Purus ornare
              nascetur venenatis non sed velit. Consectetur maecenas scelerisque
              aenean; lorem blandit sodales. Tortor etiam at maximus cubilia,
              nunc elit mi. Ac id semper ac egestas orci. Augue senectus
              bibendum elit in diam pharetra dui tortor. Non sociosqu natoque
              nullam commodo tempor massa blandit. Mi ipsum habitant vulputate
              potenti eros dui. Fringilla quisque hac dictum, consectetur non
              inceptos. Orci faucibus hendrerit vivamus dui nam pellentesque.
              Dictumst risus hac facilisis suscipit ornare pretium montes. Mi
              phasellus urna cubilia accumsan nulla maecenas habitant turpis.
              Praesent diam proin dignissim orci egestas curabitur et.
            </p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <h2
          className="section-title"
          onClick={() => setIsTrendsOpen(!isTrendsOpen)}
        >
          <i
            className={`fas ${
              isTrendsOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />{" "}
          Trends
        </h2>
        {isTrendsOpen && (
          <div className="section-content">
            <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Non quam
              dolor mus eleifend adipiscing imperdiet luctus. Molestie lacus
              nisl libero sagittis lacus. Fusce neque etiam lacinia turpis
              iaculis et tellus bibendum. Pretium venenatis fusce pellentesque
              est hendrerit pharetra. Egestas orci mollis risus finibus; non
              accumsan inceptos. Dignissim enim blandit congue venenatis mattis
              iaculis cubilia nostra. Curabitur fusce fusce tristique hac morbi
              platea. Sed ad sagittis mattis aenean justo sollicitudin montes
              inceptos.</p>
          </div>
        )}
      </section>

      <hr />
      <section>
        <h2
          className="section-title"
          onClick={() => setIsFutureOpen(!isFutureOpen)}
        >
          <i
            className={`fas ${
              isFutureOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />{" "}
          Future Research Direcrtions
        </h2>
        {isFutureOpen && (
          <div className="section-content">
            <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Non quam
              dolor mus eleifend adipiscing imperdiet luctus. Molestie lacus
              nisl libero sagittis lacus. Fusce neque etiam lacinia turpis
              iaculis et tellus bibendum. Pretium venenatis fusce pellentesque
              est hendrerit pharetra. Egestas orci mollis risus finibus; non
              accumsan inceptos. Dignissim enim blandit congue venenatis mattis
              iaculis cubilia nostra. Curabitur fusce fusce tristique hac morbi
              platea. Sed ad sagittis mattis aenean justo sollicitudin montes
              inceptos.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Main;
