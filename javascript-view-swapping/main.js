var $tabbedViews = document.querySelector('.tabbed-views');
var $tabContainer = $tabbedViews.querySelector('.tab-container');
var $tabClassElements = $tabContainer.querySelectorAll('.tab');
var $viewClassElements = $tabbedViews.querySelectorAll('.view');

$tabContainer.addEventListener('click', event => {
  var dataView;

  if (!event.target.matches('.tab')) {
    return;
  }

  $tabClassElements.forEach(el => {
    if (el !== event.target) {
      el.className = 'tab';
      return;
    }
    el.className = 'tab active';
    dataView = event.target.getAttribute('data-view');

    $viewClassElements.forEach(el => {
      if (el.getAttribute('data-view') !== dataView) {
        el.className = 'view hidden';
        return;
      }
      el.className = 'view';
    });
  });
});
