import dynamic from "next/dynamic";
import Head from 'next/head'

const Sidebar = dynamic(() => import("./sidebar"));

export default function Ideology() {
  return (
    <div>
      <Head>
        <title>Contribute | Compass by Nimble</title>
        <meta
          name="description"
          content="Compass is a living document guiding our team members to work together and fulfill our mission."
        ></meta>
      </Head>
      <header className="app-header">
        <div className="logo">
          <a
            href="https://nimblehq.co/compass/"
            className="logo__link link--unstyled"
          >
            <span className="sr-only">Compass by Nimble</span>
          </a>
        </div>
      </header>

      <div className="app-container">
        <Sidebar />
        <main className="app-container__content-container">
          <div class="hero">
            <h1>Ideology</h1>
            <img
              src="https://d33wubrfki0l68.cloudfront.net/2d473921fd008e7b9117a54d72377ebd21f65191/c7d28/assets/compass/images/docs/company/hero-our-company.svg"
              alt="Hero image for Ideology"
            />
          </div>

          <div class="app-content">
            <h2 class="no_toc" id="mission">
              Mission
            </h2>
            <p>
              To ideate and build excellent products that create value to our
              clients and our team members.
            </p>
            <h2 class="no_toc" id="vision">
              Vision
            </h2>
            <p>
              To be the most respected and admired{" "}
              <a href="https://nimblehq.co/services/" target="_blank">
                web and mobile development
              </a>{" "}
              studio of Southeast Asia known for the quality of its people and
              the products we create.
            </p>
            <h2 class="no_toc" id="ideology">
              Ideology
            </h2>
            <ol>
              <li>Love what you do</li>
              <li>Never stop learning</li>
              <li>Be Resilient</li>
              <li>Be trustworthy and reliable</li>
              <li>Be self-aware & thrive to improve yourself constantly</li>
              <li>Have dedication to the work</li>
              <li>
                Have the courage to speak up and have the hard conversations
              </li>
            </ol>
          </div>

          <footer class="app-footer">
            <div class="app-footer__cta">
              <div class="app-footer__cta-text">
                <h3 class="app-footer__heading">
                  Interested to join the team?
                </h3>
                <p class="app-footer__subheading">
                  Learn more about our recruitment process and open positions.
                </p>
              </div>
              <div class="app-footer__cta-action">
                <a
                  target="_blank"
                  href="https://jobs.nimblehq.co/?source=compass"
                  class="button button--primary"
                >
                  See open positions
                </a>
              </div>
            </div>

            <div class="app-footer__impressum">
              <div class="app-footer__link-container">
                <ul class="app-footer__list-link list--unstyled">
                  <li class="app-footer__list-item">
                    <a href="https://nimblehq.co/" class="app-footer__link">
                      nimblehq.co
                    </a>
                  </li>
                  <li class="app-footer__list-item">
                    <a
                      href="https://nimblehq.co/services/"
                      class="app-footer__link"
                    >
                      Our Services
                    </a>
                  </li>
                  <li class="app-footer__list-item">
                    <a
                      href="https://nimblehq.co/blog/"
                      class="app-footer__link"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div class="app-footer__copyright">© 2021 Nimble</div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
