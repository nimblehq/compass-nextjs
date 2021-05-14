import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <body class="introduction introduction__compass-introduction">
        <div hidden="">
        </div>
        <header class="app-header">
          <div class="logo">
            <a href="/compass/" class="logo__link link--unstyled">
              <span class="sr-only">Compass by Nimble</span>
            </a>
          </div>
        </header>
        <div class="app-container">
        <aside class="app-container__navigation-container">
    <label class="button-hamburger" for="navigation_toggle">
  <svg class="icon button-hamburger__icon icon--lg icon-mobile-menu" viewBox="0 0 32 32">
</svg>
</label>
<input type="checkbox" id="navigation_toggle" name="navigation_toggle"/>

    <nav class="app-navigation" data-controller="app-navigation">
  <div class="logo">
  <a href="/compass/" class="logo__link link--unstyled">
    <span class="sr-only">Compass by Nimble</span>
  </a>
</div>


  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click->app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Introduction</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/intro/contribute/" class="app-navigation__link link--unstyled">
      Contribute
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click->app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Our Company</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/company/ideology/" class="app-navigation__link link--unstyled">
      Ideology
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/company/values/" class="app-navigation__link link--unstyled">
      Values
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/company/brand-guidelines/" class="app-navigation__link link--unstyled">
      Brand Guidelines
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click->app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Our Team</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/team/roles/" class="app-navigation__link link--unstyled">
        Roles
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/team/roles/team-lead/" class="app-navigation__link link--unstyled">
          Team Lead
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/team/roles/engineering-lead/" class="app-navigation__link link--unstyled">
          Engineering Lead
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/team/organization/" class="app-navigation__link link--unstyled">
        Organization
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/team/organization/squad-rotation/" class="app-navigation__link link--unstyled">
          Squad Rotation
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/team/communication/" class="app-navigation__link link--unstyled">
      Communication
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/team/security/" class="app-navigation__link link--unstyled">
        Security
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/team/security/1password/" class="app-navigation__link link--unstyled">
          1Password
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/team/feedback/" class="app-navigation__link link--unstyled">
      Feedback
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/team/individual-growth/" class="app-navigation__link link--unstyled">
      Individual Growth
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/team/common-ground/" class="app-navigation__link link--unstyled">
      Common Ground
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click->app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Joining Nimble</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/join/recruitment-process/" class="app-navigation__link link--unstyled">
        Recruitment Process
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/join/recruitment-process/challenges/" class="app-navigation__link link--unstyled">
          Challenges
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/join/perks/" class="app-navigation__link link--unstyled">
        Perks
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/join/perks/work-from-home/" class="app-navigation__link link--unstyled">
          Work From Home
        </a>
      </li>
      
    </ul>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click->app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Design</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/design/process/" class="app-navigation__link link--unstyled">
      Process
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/design/user-experience/" class="app-navigation__link link--unstyled">
      User Experience
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/design/user-interface/" class="app-navigation__link link--unstyled">
      User Interface
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/design/review/" class="app-navigation__link link--unstyled">
      Design Review
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/design/presentation/" class="app-navigation__link link--unstyled">
      Design Presentation
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/design/tools/" class="app-navigation__link link--unstyled">
      Design Tools
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click->app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Product Management</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">General</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/technical-product-management/" class="app-navigation__link link--unstyled">
      Technical Management
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/product-stack/" class="app-navigation__link link--unstyled">
      Product Stack
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/sprint-planning/" class="app-navigation__link link--unstyled">
      Sprint Planning
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/stakeholders-management/" class="app-navigation__link link--unstyled">
      Stakeholders Management
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/product/planning/" class="app-navigation__link link--unstyled">
        Planning
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/product/planning/pivotal-tracker/" class="app-navigation__link link--unstyled">
          Pivotal Tracker
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/technical-documentation/" class="app-navigation__link link--unstyled">
      Documentation
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/testing/" class="app-navigation__link link--unstyled">
      Testing
    </a>
  </li>
  
  
</ul>

        </div>
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">Product Lifecycle</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/lifecycle/starting-new-project/" class="app-navigation__link link--unstyled">
      Starting a Project
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/lifecycle/change-management/" class="app-navigation__link link--unstyled">
      Change Management
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/lifecycle/end-of-life/" class="app-navigation__link link--unstyled">
      Project End of Life
    </a>
  </li>
  
  
</ul>

        </div>
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">Backlog Management</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/backlog-management/organization/" class="app-navigation__link link--unstyled">
      Backlog Organization
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/product/backlog-management/user-stories/" class="app-navigation__link link--unstyled">
        Writing User Stories
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/product/backlog-management/user-stories/estimation/" class="app-navigation__link link--unstyled">
          Estimations
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/product/backlog-management/backlog-grooming/" class="app-navigation__link link--unstyled">
      Backlog Grooming
    </a>
  </li>
  
  
</ul>

        </div>
        
      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click->app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Development</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">General</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/development/version-control/" class="app-navigation__link link--unstyled">
        Version Control
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/version-control/branch-management/" class="app-navigation__link link--unstyled">
          Branch Management
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/version-control/committing-code/" class="app-navigation__link link--unstyled">
          Committing Code
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/version-control/release-management/" class="app-navigation__link link--unstyled">
          Release Management
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/development/code-reviews/" class="app-navigation__link link--unstyled">
      Code Reviews
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/development/code-conventions/" class="app-navigation__link link--unstyled">
        Code Conventions
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/html/" class="app-navigation__link link--unstyled">
          HTML
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/css/" class="app-navigation__link link--unstyled">
          CSS
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/cypress/" class="app-navigation__link link--unstyled">
          Cypress
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/elixir/" class="app-navigation__link link--unstyled">
          Elixir
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/ex-unit/" class="app-navigation__link link--unstyled">
          ExUnit
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/github-actions/" class="app-navigation__link link--unstyled">
          Github Actions
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/golang/" class="app-navigation__link link--unstyled">
          Go
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/javascript/" class="app-navigation__link link--unstyled">
          JavaScript
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/kotlin/" class="app-navigation__link link--unstyled">
          Kotlin
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/elixir-phoenix/" class="app-navigation__link link--unstyled">
          Phoenix
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/quick-nimble" class="app-navigation__link link--unstyled">
          Quick &amp; Nimble
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/react/" class="app-navigation__link link--unstyled">
          React JS
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/ruby/" class="app-navigation__link link--unstyled">
          Ruby
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/ruby-on-rails/" class="app-navigation__link link--unstyled">
          Ruby on Rails
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/rspec/" class="app-navigation__link link--unstyled">
          RSpec
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/swift/" class="app-navigation__link link--unstyled">
          Swift
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/code-conventions/terraform/" class="app-navigation__link link--unstyled">
          Terraform
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/development/testing/" class="app-navigation__link link--unstyled">
      Testing
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/development/localization/" class="app-navigation__link link--unstyled">
      Localization
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/development/documentation/" class="app-navigation__link link--unstyled">
        Documentation
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/documentation/api/" class="app-navigation__link link--unstyled">
          API
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/documentation/github-wiki/" class="app-navigation__link link--unstyled">
          Github Wiki
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/development/laptop-setup/" class="app-navigation__link link--unstyled">
      Laptop Setup
    </a>
  </li>
  
  
</ul>

        </div>
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">Platform</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/development/android/" class="app-navigation__link link--unstyled">
        Android
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/android/user-interface/" class="app-navigation__link link--unstyled">
          User Interface
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/android/testing/" class="app-navigation__link link--unstyled">
          Testing
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/development/ios/" class="app-navigation__link link--unstyled">
        iOS
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/ios/user-interface/" class="app-navigation__link link--unstyled">
          User Interface
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/ios/project-configuration/" class="app-navigation__link link--unstyled">
          Project Configurations
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/development/ios/security/" class="app-navigation__link link--unstyled">
          Security
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/development/web/" class="app-navigation__link link--unstyled">
      Web
    </a>
  </li>
  
  
</ul>

        </div>
        
      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click->app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Production</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/production/hosting/" class="app-navigation__link link--unstyled">
      Hosting
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="/compass/production/deployment/" class="app-navigation__link link--unstyled">
        Deployment
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="/compass/production/deployment/jenkins/" class="app-navigation__link link--unstyled">
          Jenkins
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="/compass/production/domain-management/" class="app-navigation__link link--unstyled">
      Domain Management
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  

  <div class="app-navigation__static">
    <a href="https://www.notion.so/nimblehq/Help-Center-8df557530439426b88ec69b72745b511" class="app-navigation__link">Helpdesk</a>
  </div>
</nav>

<footer class="app-navigation-footer">
  <div class="app-navigation-footer__external">
    <a href="/" class="app-navigation-footer__link app-navigation-footer__link--active">
      <span>nimblehq.co</span>
      <svg class="icon app-navigation-footer__link-icon" viewBox="0 0 32 32">
</svg>
    </a>
  </div>
</footer>


  </aside>
          <main class="app-container__content-container">
            <div class="hero">
              <h1>We are Nimble</h1>
              <img src="https://d33wubrfki0l68.cloudfront.net/e50bcbc8d309c44ea07ef0583f20a09f34f2035b/e85b1/assets/compass/images/docs/intro/hero-introduction.svg" alt="Hero image for We are Nimble"/>
            </div>
            <div class="toc" data-turbolinks="false">
              <ul id="toc" class="list-toc"></ul>
            </div>
            <div class="app-content">
              <p>We are a <a href="https://nimblehq.co" target="_blank">software development company</a> focused on <a href="https://nimblehq.co/work/" target="_blank">building web and mobile applications</a> for startups and innovative large enterprises. We take a product development approach, creating custom software that people will love to use and empowering our clients to do what they do best - better.</p>
              <p>As an agile and engineering-focused company, we value constant improvements of our processes. Strong with our experience acquired working on very diverse applications and systems, we have developed the methodologies explained in this document.</p>

              <hr/>

              <h2 class="no_toc" id="why-compass">Why Compass?</h2>

              <p>This living document is more than a code of conduct or a set of rules but really a <strong>guide</strong> for all our team members to work together in order to fulfill our mission.</p>

              <ul class="list-block list-block--iconized">
                <li class="list-block__item list-block__item--team">
                  <a href="/compass/team/" class="list-block__link">
                    <span class="list-block__text">Team</span>
                  </a>
                </li>
                <li class="list-block__item list-block__item--product">
                  <a href="/compass/product/" class="list-block__link">
                    <span class="list-block__text">Product</span>
                  </a>
                </li>
                <li class="list-block__item list-block__item--design">
                  <a href="/compass/design/" class="list-block__link">
                    <span class="list-block__text">Design</span>
                  </a>
                </li>
                <li class="list-block__item list-block__item--development">
                  <a href="/compass/development/" class="list-block__link">
                    <span class="list-block__text">Development</span>
                  </a>
                </li>
              </ul>
            </div>

            <footer class="app-footer">
          
          <div class="app-footer__cta">
            <div class="app-footer__cta-text">
              <h3 class="app-footer__heading">Interested to join the team?</h3>
              <p class="app-footer__subheading">Learn more about our recruitment process and open positions.</p>
            </div>
            <div class="app-footer__cta-action">
              <a target="_blank" href="https://jobs.nimblehq.co/?source=compass" class="button button--primary">See open positions</a>
            </div>
          </div>
          

          <div class="app-footer__impressum">
            <div class="app-footer__link-container">
              <ul class="app-footer__list-link list--unstyled">
                
                <li class="app-footer__list-item">
                  <a href="https://nimblehq.co/" class="app-footer__link">nimblehq.co</a>
                </li>
                
                <li class="app-footer__list-item">
                  <a href="https://nimblehq.co/services/" class="app-footer__link">Our Services</a>
                </li>
                
                <li class="app-footer__list-item">
                  <a href="https://nimblehq.co/blog/" class="app-footer__link">Blog</a>
                </li>
                
              </ul>
            </div>
            <div class="app-footer__copyright">
              © 2021 Nimble
            </div>
          </div>
        </footer>

          </main>
        </div>
      </body>
    </div>
  )
}
