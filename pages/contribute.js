import dynamic from 'next/dynamic'
import Head from 'next/head'

const Sidebar = dynamic(() => import('./sidebar'))

export default function Contribute() {
  return (
    <div>
      <Head>
        <title>Contribute | Compass by Nimble</title>
        <meta name="description" content="Compass is a living document guiding our team members to work together and fulfill our mission."></meta>
      </Head>
      <header className="app-header">
        <div className="logo">
          <a href="https://nimblehq.co/compass/" className="logo__link link--unstyled">
            <span className="sr-only">Compass by Nimble</span>
          </a>
        </div>
      </header>

      <div className="app-container">
   <Sidebar/>
   <main className="app-container__content-container">
      <div className="hero">
         <h1>Contribute</h1>
         <img src="https://d33wubrfki0l68.cloudfront.net/06f5dbb4beb1af6282ab7dc613616ba3a1a4dd28/4c459/assets/compass/images/docs/intro/hero-contribute.svg" alt="Hero image for Contribute"></img>
      </div>
      <div className="toc" data-turbolinks="false">
         <ul id="toc" className="list-toc">
            <li className="list-toc__item list-toc__h2"><a href="#how-to-contribute">How to contribute?</a></li>
            <li className="list-toc__item list-toc__h2">
               <a href="#contribution-guidelines">Contribution Guidelines</a>
               <ul className="list-toc__sub-list">
                  <li className="list-toc__item list-toc__h3"><a href="#language">Language</a></li>
                  <li className="list-toc__item list-toc__h3"><a href="#markdown">Markdown</a></li>
                  <li className="list-toc__item list-toc__h3"><a href="#ui-components">UI Components</a></li>
               </ul>
            </li>
         </ul>
      </div>
      <div className="app-content">
         <p>Compass has been thought out as a living document that constantly evolves. Nothing is set into stone. Ever. 
            We always find better ways to do the same things or come up with entire new things to do. As a need, we need to keep Compass in sync with our processes.
         </p>
         <h2 id="how-to-contribute">
            <a className="anchor" href="https://nimblehq.co/compass/intro/contribute/#how-to-contribute" aria-hidden="true"><span className="octicon octicon-link"></span></a>How to contribute?
         </h2>
         <p>We 💙 pull requests. If you have something you want to add or remove, please open <a href="https://github.com/nimblehq/compass/pulls" rel="external nofollow noreferrer" target="_blank">a new pull request</a>.</p>
         <p>The <a href="https://github.com/nimblehq/compass/blob/master/README.md" rel="external nofollow noreferrer" target="_blank">README</a> of the project contains information on how to:</p>
         <ul>
            <li>Run the application in your local environment.</li>
            <li>Manage the content pages and the site navigation.</li>
            <li>Add assets like images and videos to the content pages.</li>
            <li>Deploy a new version online.</li>
         </ul>
         <div className="message-notice">
            <p>Compass relies on <a href="https://jekyllrb.com/" rel="external nofollow noreferrer" target="_blank">Jekyll</a> to convert Markdown content into HTML and <a href="https://webpack.github.io/" rel="external nofollow noreferrer" target="_blank">Webpack</a> to manage front-end assets (SVG images, stylesheets and javascript). No knowledge of either is required to contribute 😃.</p>
         </div>
         <h2 id="contribution-guidelines">
            <a className="anchor" href="https://nimblehq.co/compass/intro/contribute/#contribution-guidelines" aria-hidden="true"><span className="octicon octicon-link"></span></a>Contribution Guidelines
         </h2>
         <p>Since everyone at Nimble can contribute to Compass, we all need to follow guidelines on writing content.</p>
         <h3 id="language">
            <a className="anchor" href="https://nimblehq.co/compass/intro/contribute/#language" aria-hidden="true"><span className="octicon octicon-link"></span></a>Language
         </h3>
         <ul>
            <li>Use an active and formal tone.</li>
            <li>Use American English 🇺🇸.</li>
         </ul>
         <h3 id="markdown">
            <a className="anchor" href="https://nimblehq.co/compass/intro/contribute/#markdown" aria-hidden="true"><span className="octicon octicon-link"></span></a>Markdown
         </h3>
         <ul>
            <li>
               <p>Use hyphens <code className="language-plaintext highlighter-rouge">-</code> for bullet lists.</p>
               <div className="language-markdown highlighter-rouge">
                  <div className="highlight">
                     <pre className="highlight"><code>// Bad
                      <span className="p">*</span> This is an item
                      <span className="p">*</span> This is another item

                      // Good
                      <span className="p">-</span> This is an item
                      <span className="p">-</span> This is another item
                      </code></pre>
                          </div>
                      </div>
                    </li>
                    <li>
                      <p>Add an image description as this is used for the <code className="language-plaintext highlighter-rouge">alt</code> attribute for <code className="language-plaintext highlighter-rouge">&lt;img /&gt;</code>.</p>
                      <div className="language-markdown highlighter-rouge">
                          <div className="highlight">
                            <pre className="highlight"><code>// Bad
                              <span className="p">![](</span><span className="sx">/assets/images/docs/intro/path-to/image.png</span><span className="p">)</span>

                              // Good
                              <span className="p">![</span><span className="nv">Add new calendar from URL</span><span className="p">](</span><span className="sx">/assets/images/docs/intro/path-to/image.png</span><span className="p">)</span>
                              </code>
                            </pre>
                          </div>
                      </div>
                    </li>
                    <li>
                      <p>Use correct indent for list: type space characters in front of your nested list item (or the next lines belong to the same the list item), until the list marker character (<code className="language-plaintext highlighter-rouge">-</code> or <code className="language-plaintext highlighter-rouge">*</code>) lies directly below the first character of the text in the item above it.</p>
                      <div className="language-plaintext highlighter-rouge">
                          <div className="highlight">
                            <pre className="highlight"><code>1. First list item
          - First nested list item
            - Second nested list item

        # OR
          
        1. First list item
          Second line of the first item
          Third line of the first item
        </code></pre>
                          </div>
                      </div>
                    </li>
                </ul>
                <h3 id="ui-components">
                    <a className="anchor" href="https://nimblehq.co/compass/intro/contribute/#ui-components" aria-hidden="true"><span className="octicon octicon-link"></span></a>UI Components
                </h3>
                <p>Compass UI has the following built-in HTML components to enhance the content. Use those wisely.</p>
                <h4 id="callouts">Callouts</h4>
                <p>Use callouts to highlight critical information on a topic.</p>
                <div className="language-html highlighter-rouge">
                    <div className="highlight">
                      <pre className="highlight"><code><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"message-notice"</span><span className="nt">&gt;</span>This is the default callout<span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"message-notice message-notice--info"</span><span className="nt">&gt;</span>This is an informative callout<span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"message-notice message-notice--warning"</span><span className="nt">&gt;</span>This is a warning callout<span className="nt">&lt;/div&gt;</span>
        </code></pre>
                    </div>
                </div>
                <div className="message-notice">
                    <p>This is the default callout</p>
                </div>
                <div className="message-notice message-notice--info">
                    <p>This is an informative callout</p>
                </div>
                <div className="message-notice message-notice--warning">
                    <p>This is a warning callout</p>
                </div>
                <h4 id="bookmark-links">Bookmark Links</h4>
                <p>Use bookmark link to highlight important links and to point sub-pages within a top-level page.</p>
                <div className="language-html highlighter-rouge">
                    <div className="highlight">
                      <pre className="highlight"><code>
        {/* {% include link-bookmark.html slug="/" text="This is an important link" %} */}
        </code></pre>
                    </div>
                </div>
                <p><a href="https://nimblehq.co/compass/" className="link-bookmark">This is an important link</a></p>
              </div>
              <footer className="app-footer">
                <div className="app-footer__cta">
                    <div className="app-footer__cta-text">
                      <h3 className="app-footer__heading">Interested to join the team?</h3>
                      <p className="app-footer__subheading">Learn more about our recruitment process and open positions.</p>
                    </div>
                    <div className="app-footer__cta-action">
                      <a target="_blank" href="https://jobs.nimblehq.co/?source=compass" className="button button--primary" rel="noreferrer">See open positions</a>
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
    </div>
  )
}
