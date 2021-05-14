export const toggleGroupMenu = (event) => {
  console.log(event.target)
  const navigationCategoryHeader = event.target;
  const navigationCategory = navigationCategoryHeader.closest('.app-navigation__category');
  const buttonToggle = navigationCategory.querySelector('.button-toggle');

  navigationCategory.classList.toggle('app-navigation__category--expanded');
  buttonToggle.classList.toggle('button-toggle--expanded');
}

export const toggleSubListMenu = (event) => {
  const subListHeader = event.target;
  const parentListItem = subListHeader.closest('.app-navigation__list-item');
  const buttonToggle = parentListItem.querySelector('.button-toggle');

  parentListItem.classList.toggle('app-navigation__list-item--expanded');
  buttonToggle.classList.toggle('button-toggle--expanded');
}
