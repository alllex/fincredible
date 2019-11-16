$(document).ready(function() {

  var paginationWrapper = $('.lfr-pagination');

  // Check that we don't modify search results in portal search
  if (!paginationWrapper.closest('.lfr-search-container').length) {
    initAssetPublisherPagination();

  } else {
    initSearchPag();
  }

});

function initAssetPublisherPagination() {
  var currentUrl = window.location.href;
  var paginationWrapper = $('.lfr-pagination');
  var list = paginationWrapper.find("ul.dropdown-menu.lfr-menu-list");
  var paginationList = $("<ul class='pagination-pages luontoon-custom-pagination'></ul>").insertAfter('.lfr-pagination-buttons');

  // Get elements from liferay pagination and append them in custom pagination element
  list.children().each(function () {
    paginationList.append(this);
  });

  // Append custom pagination element to the dom
  paginationWrapper.append(paginationList);
  var listItems = paginationList.children('li');

  // Compare url in order to decide which page is currently active
  // If no params in url --> first page is active
  var found = false;

  listItems.each(function () {
    var liHref = $(this).children('a').attr('href');
    if (liHref === currentUrl) {
      $(this).addClass('selected');
      found = true;
    }
  });

  if (!found) {
    listItems.eq(0).addClass('selected');
  }
}

function getURLParameter(paramName){
    var currentURL = window.location.search.substring(1);
    var urlVars = currentURL.split('&');
    for (var i = 0; i < urlVars.length; i++){
        var param = urlVars[i].split('=');
        if (param[0] == paramName) {
            return param[1];
        }
    }
    return 1;
}

function initSearchPag() {
  var currentUrl = window.location.href;
  var paginationWrapper = $('.lfr-pagination');

  paginationWrapper.each(function (index, element) {
    var self = $(element);
    var thelist = self.find('.lfr-pagination-page-selector ul.dropdown-menu.lfr-menu-list');
    var tgt = self.find('.lfr-pagination-buttons');
    var pList = $("<ul class='pagination-pages luontoon-custom-pagination'></ul>").insertAfter(tgt);

    thelist.children().each(function () {
      pList.append(this);
    });
    var curPage = getURLParameter("_3_cur");
    self.append(pList);
    var lis = pList.children('li');
    lis.eq(curPage-1).addClass('selected');
  });
}