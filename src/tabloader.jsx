// Set up tabs
export const setUpTabs = () => {
    console.log('test');
    var myTabs = window.tabs({
        el: '#tabs',
        tabNavigationLinks: '.tab-item',
        tabContentContainers: '.tabpage'
    });

    myTabs.init();
}