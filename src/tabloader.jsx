// Set up tabs
export const setUpTabs = () => {
    console.log('test');
    var myTabs = window.tabs({ // Need to call window.tabs to access the globally created window object
        el: '#tabs',
        tabNavigationLinks: '.tab-item',
        tabContentContainers: '.tabpage'
    });

    myTabs.init();
}