import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('./sidebar'))

export default function Home() {
  return (
    <body className="introduction introduction__compass-introduction">
      <div hidden="">
      </div>
      <header className="app-header">
        <div className="logo">
          <a href="/compass/" className="logo__link link--unstyled">
            <span className="sr-only">Compass by Nimble</span>
          </a>
        </div>
      </header>
      <div className="app-container">
        <Sidebar/>
        <main className="app-container__content-container">
          <div className="hero">
            <h1>We are Nimble</h1>
            <img src="https://d33wubrfki0l68.cloudfront.net/e50bcbc8d309c44ea07ef0583f20a09f34f2035b/e85b1/assets/compass/images/docs/intro/hero-introduction.svg" alt="Hero image for We are Nimble"/>
          </div>
          <div className="toc" data-turbolinks="false">
            <ul id="toc" className="list-toc"></ul>
          </div>
          <div className="app-content">
            <p>We are a <a href="https://nimblehq.co" target="_blank">software development company</a> focused on <a href="https://nimblehq.co/work/" target="_blank">building web and mobile applications</a> for startups and innovative large enterprises. We take a product development approach, creating custom software that people will love to use and empowering our clients to do what they do best - better.</p>
            <p>As an agile and engineering-focused company, we value constant improvements of our processes. Strong with our experience acquired working on very diverse applications and systems, we have developed the methodologies explained in this document.</p>

            <hr/>

            <h2 className="no_toc" id="why-compass">Why Compass?</h2>

            <p>This living document is more than a code of conduct or a set of rules but really a <strong>guide</strong> for all our team members to work together in order to fulfill our mission.</p>

            <ul className="list-block list-block--iconized">
              <li className="list-block__item list-block__item--team">
                <a href="/compass/team/" className="list-block__link">
                  <span className="list-block__text">Team</span>
                </a>
              </li>
              <li className="list-block__item list-block__item--product">
                <a href="/compass/product/" className="list-block__link">
                  <span className="list-block__text">Product</span>
                </a>
              </li>
              <li className="list-block__item list-block__item--design">
                <a href="/compass/design/" className="list-block__link">
                  <span className="list-block__text">Design</span>
                </a>
              </li>
              <li className="list-block__item list-block__item--development">
                <a href="/compass/development/" className="list-block__link">
                  <span className="list-block__text">Development</span>
                </a>
              </li>
            </ul>
          </div>

          <footer className="app-footer">
        
        <div className="app-footer__cta">
          <div className="app-footer__cta-text">
            <h3 className="app-footer__heading">Interested to join the team?</h3>
            <p className="app-footer__subheading">Learn more about our recruitment process and open positions.</p>
          </div>
          <div className="app-footer__cta-action">
            <a target="_blank" href="https://jobs.nimblehq.co/?source=compass" className="button button--primary">See open positions</a>
          </div>
        </div>
        

        <div className="app-footer__impressum">
          <div className="app-footer__link-container">
            <ul className="app-footer__list-link list--unstyled">
              
              <li className="app-footer__list-item">
                <a href="https://nimblehq.co/" className="app-footer__link">nimblehq.co</a>
              </li>
              
              <li className="app-footer__list-item">
                <a href="https://nimblehq.co/services/" className="app-footer__link">Our Services</a>
              </li>
              
              <li className="app-footer__list-item">
                <a href="https://nimblehq.co/blog/" className="app-footer__link">Blog</a>
              </li>
              
            </ul>
          </div>
          <div className="app-footer__copyright">
            © 2021 Nimble
          </div>
        </div>
      </footer>

        </main>
      </div>
    </body>
  )
}
