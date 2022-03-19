const tabButtons = document.querySelectorAll('.design-list__item'),
      designDescr = document.querySelectorAll('.design__descr'),
      designImgs = document.querySelectorAll('.design-images'),
      designBlockImgs = document.querySelectorAll(".design-block__img");
      designTitles = document.querySelectorAll(".design__title");

tabButtons.forEach(tabButton => tabButton.addEventListener('click', () => {
  tabButtons.forEach(tab => tab.classList.remove('design-list__item_active'));
  tabButton.classList.add('design-list__item_active');
  
  dataValue = tabButton.dataset.tabsHandler;
  arrays = [ designTitles, designBlockImgs, designDescr, designImgs ];
  changeContent(arrays, dataValue);
}));

const changeContent = (arrays, dataValue) => 
  arrays.forEach(array => 
    array.forEach(element => 
      (dataValue === element.dataset.tabsField) ? 
        element.classList.remove('hidden') : 
        element.classList.add('hidden')));