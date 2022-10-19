import React from "react";

function Portfolio() {
  return (
    <section>
      <h1 data-testid="h1tag">Portfolio</h1>
      <div class="web-apps-section content">
        <a
          href="https://sspspencer.github.io/run-buddy/"
          target="_blank"
          class="web-app-container Run-buddy"
        >
          <div class="web-app-title">
            <h4>Run-buddy</h4>
          </div>
        </a>
        <a
          href="https://sspspencer.github.io/ShowGo/"
          target="_blank"
          class="web-app-container ShowGo"
        >
          <div class="web-app-title">
            <h4>Show Go</h4>
            <p></p>
          </div>
        </a>
        <a
          href="https://fathomless-scrubland-35301.herokuapp.com/"
          target="_blank"
          class="web-app-container upGrad"
        >
          <div class="web-app-title">
            <h4>upGrad</h4>
            <p></p>
          </div>
        </a>
        <a
          href="https://note-taker-ssp.herokuapp.com/"
          target="_blank"
          class="web-app-container note-taker"
        >
          <div class="web-app-title">
            <h4>Note taker</h4>
          </div>
        </a>
        <a
          href="https://sspspencer.github.io/work-day-scheduler/"
          target="_blank"
          class="web-app-container work-day-scheduler"
        >
          <div class="web-app-title">
            <h4>Work Day</h4>
          </div>
        </a>
        <a
          href="https://sspspencer.github.io/code-quiz/"
          target="_blank"
          class="web-app-container code-quiz"
        >
          <div class="web-app-title">
            <h4>Code-Quiz</h4>
          </div>
        </a>
      </div>
    </section>
  );
}
export default Portfolio;
