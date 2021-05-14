import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <header class="app-header">
        <div class="logo">
          <a href="https://nimblehq.co/compass/" class="logo__link link--unstyled">
            <span class="sr-only">Compass by Nimble</span>
          </a>
        </div>
      </header>

<div class="app-container">
  <aside class="app-container__navigation-container">
    <label class="button-hamburger" for="navigation_toggle">
  <svg class="icon button-hamburger__icon icon--lg icon-mobile-menu" viewBox="0 0 32 32">
  <use xlinkHref="#icon-mobile-menu"></use>
</svg>
</label>
<input type="checkbox" id="navigation_toggle" name="navigation_toggle"></input>

    <nav class="app-navigation" data-controller="app-navigation">
  <div class="logo">
  <a href="https://nimblehq.co/compass/" class="logo__link link--unstyled">
    <span class="sr-only">Compass by Nimble</span>
  </a>
</div>


  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click-&gt;app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Introduction</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item app-navigation__list-item--active">
    <a href="https://nimblehq.co/compass/intro/contribute/" class="app-navigation__link link--unstyled">
      Contribute
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category app-navigation__category--expanded">
      <div class="app-navigation__header-category" data-action="click-&gt;app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Our Company</div>
        <button type="button" class="button-toggle button-toggle--anchor button-toggle--expanded">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/company/ideology/" class="app-navigation__link link--unstyled">
      Ideology
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/company/values/" class="app-navigation__link link--unstyled">
      Values
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/company/brand-guidelines/" class="app-navigation__link link--unstyled">
      Brand Guidelines
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click-&gt;app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Our Team</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/team/roles/" class="app-navigation__link link--unstyled">
        Roles
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/team/roles/team-lead/" class="app-navigation__link link--unstyled">
          Team Lead
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/team/roles/engineering-lead/" class="app-navigation__link link--unstyled">
          Engineering Lead
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/team/organization/" class="app-navigation__link link--unstyled">
        Organization
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/team/organization/squad-rotation/" class="app-navigation__link link--unstyled">
          Squad Rotation
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/team/communication/" class="app-navigation__link link--unstyled">
      Communication
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/team/security/" class="app-navigation__link link--unstyled">
        Security
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/team/security/1password/" class="app-navigation__link link--unstyled">
          1Password
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/team/feedback/" class="app-navigation__link link--unstyled">
      Feedback
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/team/individual-growth/" class="app-navigation__link link--unstyled">
      Individual Growth
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/team/common-ground/" class="app-navigation__link link--unstyled">
      Common Ground
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click-&gt;app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Joining Nimble</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/join/recruitment-process/" class="app-navigation__link link--unstyled">
        Recruitment Process
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/join/recruitment-process/challenges/" class="app-navigation__link link--unstyled">
          Challenges
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/join/perks/" class="app-navigation__link link--unstyled">
        Perks
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/join/perks/work-from-home/" class="app-navigation__link link--unstyled">
          Work From Home
        </a>
      </li>
      
    </ul>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click-&gt;app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Design</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/design/process/" class="app-navigation__link link--unstyled">
      Process
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/design/user-experience/" class="app-navigation__link link--unstyled">
      User Experience
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/design/user-interface/" class="app-navigation__link link--unstyled">
      User Interface
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/design/review/" class="app-navigation__link link--unstyled">
      Design Review
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/design/presentation/" class="app-navigation__link link--unstyled">
      Design Presentation
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/design/tools/" class="app-navigation__link link--unstyled">
      Design Tools
    </a>
  </li>
  
  
</ul>

      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click-&gt;app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Product Management</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">General</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/technical-product-management/" class="app-navigation__link link--unstyled">
      Technical Management
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/product-stack/" class="app-navigation__link link--unstyled">
      Product Stack
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/sprint-planning/" class="app-navigation__link link--unstyled">
      Sprint Planning
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/stakeholders-management/" class="app-navigation__link link--unstyled">
      Stakeholders Management
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/product/planning/" class="app-navigation__link link--unstyled">
        Planning
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/product/planning/pivotal-tracker/" class="app-navigation__link link--unstyled">
          Pivotal Tracker
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/technical-documentation/" class="app-navigation__link link--unstyled">
      Documentation
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/testing/" class="app-navigation__link link--unstyled">
      Testing
    </a>
  </li>
  
  
</ul>

        </div>
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">Product Lifecycle</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/lifecycle/starting-new-project/" class="app-navigation__link link--unstyled">
      Starting a Project
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/lifecycle/change-management/" class="app-navigation__link link--unstyled">
      Change Management
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/lifecycle/end-of-life/" class="app-navigation__link link--unstyled">
      Project End of Life
    </a>
  </li>
  
  
</ul>

        </div>
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">Backlog Management</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/backlog-management/organization/" class="app-navigation__link link--unstyled">
      Backlog Organization
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/product/backlog-management/user-stories/" class="app-navigation__link link--unstyled">
        Writing User Stories
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/product/backlog-management/user-stories/estimation/" class="app-navigation__link link--unstyled">
          Estimations
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/product/backlog-management/backlog-grooming/" class="app-navigation__link link--unstyled">
      Backlog Grooming
    </a>
  </li>
  
  
</ul>

        </div>
        
      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click-&gt;app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Development</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        
        <div class="app-navigation__group">
          <div class="app-navigation__header-group">General</div>
          <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/development/version-control/" class="app-navigation__link link--unstyled">
        Version Control
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/version-control/branch-management/" class="app-navigation__link link--unstyled">
          Branch Management
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/version-control/committing-code/" class="app-navigation__link link--unstyled">
          Committing Code
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/version-control/release-management/" class="app-navigation__link link--unstyled">
          Release Management
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/development/code-reviews/" class="app-navigation__link link--unstyled">
      Code Reviews
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/development/code-conventions/" class="app-navigation__link link--unstyled">
        Code Conventions
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/html/" class="app-navigation__link link--unstyled">
          HTML
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/css/" class="app-navigation__link link--unstyled">
          CSS
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/cypress/" class="app-navigation__link link--unstyled">
          Cypress
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/elixir/" class="app-navigation__link link--unstyled">
          Elixir
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/ex-unit/" class="app-navigation__link link--unstyled">
          ExUnit
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/github-actions/" class="app-navigation__link link--unstyled">
          Github Actions
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/golang/" class="app-navigation__link link--unstyled">
          Go
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/javascript/" class="app-navigation__link link--unstyled">
          JavaScript
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/kotlin/" class="app-navigation__link link--unstyled">
          Kotlin
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/elixir-phoenix/" class="app-navigation__link link--unstyled">
          Phoenix
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/quick-nimble" class="app-navigation__link link--unstyled">
          Quick &amp; Nimble
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/react/" class="app-navigation__link link--unstyled">
          React JS
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/ruby/" class="app-navigation__link link--unstyled">
          Ruby
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/ruby-on-rails/" class="app-navigation__link link--unstyled">
          Ruby on Rails
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/rspec/" class="app-navigation__link link--unstyled">
          RSpec
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/swift/" class="app-navigation__link link--unstyled">
          Swift
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/code-conventions/terraform/" class="app-navigation__link link--unstyled">
          Terraform
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/development/testing/" class="app-navigation__link link--unstyled">
      Testing
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/development/localization/" class="app-navigation__link link--unstyled">
      Localization
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/development/documentation/" class="app-navigation__link link--unstyled">
        Documentation
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/documentation/api/" class="app-navigation__link link--unstyled">
          API
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/documentation/github-wiki/" class="app-navigation__link link--unstyled">
          Github Wiki
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/development/laptop-setup/" class="app-navigation__link link--unstyled">
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
      <a href="https://nimblehq.co/compass/development/android/" class="app-navigation__link link--unstyled">
        Android
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/android/user-interface/" class="app-navigation__link link--unstyled">
          User Interface
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/development/ios/" class="app-navigation__link link--unstyled">
        iOS
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/ios/user-interface/" class="app-navigation__link link--unstyled">
          User Interface
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/ios/project-configuration/" class="app-navigation__link link--unstyled">
          Project Configurations
        </a>
      </li>
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/development/ios/security/" class="app-navigation__link link--unstyled">
          Security
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/development/web/" class="app-navigation__link link--unstyled">
      Web
    </a>
  </li>
  
  
</ul>

        </div>
        
      
      </div>
    </div>
  
  
  
  <div class="app-navigation__category">
      <div class="app-navigation__header-category" data-action="click-&gt;app-navigation#toggleGroupMenu">
        <div class="app-navigation__title-category">Production</div>
        <button type="button" class="button-toggle button-toggle--anchor">
          <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
        </button>
      </div>

      <div class="app-navigation__content">
      
        <ul class="app-navigation__list">
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/production/hosting/" class="app-navigation__link link--unstyled">
      Hosting
    </a>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <div class="app-navigation__header-sub-list">
      <a href="https://nimblehq.co/compass/production/deployment/" class="app-navigation__link link--unstyled">
        Deployment
      </a>
      <button type="button" class="button-toggle button-toggle--anchor" data-action="app-navigation#toggleSubListMenu">
        <svg class="icon button-toggle__icon icon--xs" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow"></use>
</svg>
      </button>
    </div>
    <ul class="app-navigation__sub-list">
      
      <li class="app-navigation__sub-list-item">
        <a href="https://nimblehq.co/compass/production/deployment/jenkins/" class="app-navigation__link link--unstyled">
          Jenkins
        </a>
      </li>
      
    </ul>
  </li>
  
  
  
  
  <li class="app-navigation__list-item">
    <a href="https://nimblehq.co/compass/production/domain-management/" class="app-navigation__link link--unstyled">
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
    <a href="https://nimblehq.co/" class="app-navigation-footer__link app-navigation-footer__link--active">
      <span>nimblehq.co</span>
      <svg class="icon app-navigation-footer__link-icon" viewBox="0 0 32 32">
  <use xlinkHref="#icon-arrow-tail"></use>
</svg>
    </a>
  </div>
</footer>


  </aside>

  <main class="app-container__content-container">
    
      <div class="hero">
        <h1>Contribute</h1>
        <img src="https://d33wubrfki0l68.cloudfront.net/06f5dbb4beb1af6282ab7dc613616ba3a1a4dd28/4c459/assets/compass/images/docs/intro/hero-contribute.svg" alt="Hero image for Contribute"></img>
      </div>
    

    <div class="toc" data-turbolinks="false">
      <ul id="toc" class="list-toc">
<li class="list-toc__item list-toc__h2"><a href="#how-to-contribute">How to contribute?</a></li>
<li class="list-toc__item list-toc__h2"><a href="#contribution-guidelines">Contribution Guidelines</a>
<ul class="list-toc__sub-list">
<li class="list-toc__item list-toc__h3"><a href="#language">Language</a></li>
<li class="list-toc__item list-toc__h3"><a href="#markdown">Markdown</a></li>
<li class="list-toc__item list-toc__h3"><a href="#ui-components">UI Components</a></li>
</ul>
</li>
</ul>
    </div>

    <div class="app-content">
      

<p>Compass has been thought out as a living document that constantly evolves. Nothing is set into stone. Ever. 
We always find better ways to do the same things or come up with entire new things to do. As a need, we need to keep Compass in sync with our processes.</p>

<h2 id="how-to-contribute">
<a class="anchor" href="https://nimblehq.co/compass/intro/contribute/#how-to-contribute" aria-hidden="true"><span class="octicon octicon-link"></span></a>How to contribute?</h2>

<p>We 💙 pull requests. If you have something you want to add or remove, please open <a href="https://github.com/nimblehq/compass/pulls" rel="external nofollow" target="_blank">a new pull request</a>.</p>

<p>The <a href="https://github.com/nimblehq/compass/blob/master/README.md" rel="external nofollow" target="_blank">README</a> of the project contains information on how to:</p>
<ul>
  <li>Run the application in your local environment.</li>
  <li>Manage the content pages and the site navigation.</li>
  <li>Add assets like images and videos to the content pages.</li>
  <li>Deploy a new version online.</li>
</ul>

<div class="message-notice">
  <p>Compass relies on <a href="https://jekyllrb.com/" rel="external nofollow" target="_blank">Jekyll</a> to convert Markdown content into HTML and <a href="https://webpack.github.io/" rel="external nofollow" target="_blank">Webpack</a> to manage front-end assets (SVG images, stylesheets and javascript). No knowledge of either is required to contribute 😃.</p>
</div>

<h2 id="contribution-guidelines">
<a class="anchor" href="https://nimblehq.co/compass/intro/contribute/#contribution-guidelines" aria-hidden="true"><span class="octicon octicon-link"></span></a>Contribution Guidelines</h2>

<p>Since everyone at Nimble can contribute to Compass, we all need to follow guidelines on writing content.</p>

<h3 id="language">
<a class="anchor" href="https://nimblehq.co/compass/intro/contribute/#language" aria-hidden="true"><span class="octicon octicon-link"></span></a>Language</h3>

<ul>
  <li>Use an active and formal tone.</li>
  <li>Use American English 🇺🇸.</li>
</ul>

<h3 id="markdown">
<a class="anchor" href="https://nimblehq.co/compass/intro/contribute/#markdown" aria-hidden="true"><span class="octicon octicon-link"></span></a>Markdown</h3>

<ul>
  <li>
    <p>Use hyphens <code class="language-plaintext highlighter-rouge">-</code> for bullet lists.</p>

    <div class="language-markdown highlighter-rouge">
<div class="highlight"><pre class="highlight"><code>// Bad
<span class="p">*</span> This is an item
<span class="p">*</span> This is another item

// Good
<span class="p">-</span> This is an item
<span class="p">-</span> This is another item
</code></pre></div>    </div>
  </li>
  <li>
    <p>Add an image description as this is used for the <code class="language-plaintext highlighter-rouge">alt</code> attribute for <code class="language-plaintext highlighter-rouge">&lt;img /&gt;</code>.</p>

    <div class="language-markdown highlighter-rouge">
<div class="highlight"><pre class="highlight"><code>// Bad
<span class="p">![](</span><span class="sx">/assets/images/docs/intro/path-to/image.png</span><span class="p">)</span>

// Good
<span class="p">![</span><span class="nv">Add new calendar from URL</span><span class="p">](</span><span class="sx">/assets/images/docs/intro/path-to/image.png</span><span class="p">)</span>
</code></pre></div>    </div>
  </li>
  <li>
    <p>Use correct indent for list: type space characters in front of your nested list item (or the next lines belong to the same the list item), until the list marker character (<code class="language-plaintext highlighter-rouge">-</code> or <code class="language-plaintext highlighter-rouge">*</code>) lies directly below the first character of the text in the item above it.</p>

    <div class="language-plaintext highlighter-rouge">
<div class="highlight"><pre class="highlight"><code>1. First list item
   - First nested list item
     - Second nested list item

# OR
  
1. First list item
   Second line of the first item
   Third line of the first item
</code></pre></div>    </div>
  </li>
</ul>

<h3 id="ui-components">
<a class="anchor" href="https://nimblehq.co/compass/intro/contribute/#ui-components" aria-hidden="true"><span class="octicon octicon-link"></span></a>UI Components</h3>

<p>Compass UI has the following built-in HTML components to enhance the content. Use those wisely.</p>

<h4 id="callouts">Callouts</h4>

<p>Use callouts to highlight critical information on a topic.</p>

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"message-notice"</span><span class="nt">&gt;</span>This is the default callout<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"message-notice message-notice--info"</span><span class="nt">&gt;</span>This is an informative callout<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"message-notice message-notice--warning"</span><span class="nt">&gt;</span>This is a warning callout<span class="nt">&lt;/div&gt;</span>
</code></pre></div></div>

<div class="message-notice">
  <p>This is the default callout</p>
</div>

<div class="message-notice message-notice--info">
  <p>This is an informative callout</p>
</div>

<div class="message-notice message-notice--warning">
  <p>This is a warning callout</p>
</div>

<h4 id="bookmark-links">Bookmark Links</h4>

<p>Use bookmark link to highlight important links and to point sub-pages within a top-level page.</p>

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
{/* {% include link-bookmark.html slug="/" text="This is an important link" %} */}
</code></pre></div></div>

<p><a href="https://nimblehq.co/compass/" class="link-bookmark">This is an important link</a></p>



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
    </div>
  )
}
