// ==UserScript==
// @name         JIRA Dashboard Cleanup
// @version      0.1
// @description  Remove the dashboard-tab
// @author       Ali Karbassi
// @match        http://*/secure/Dashboard.jspa
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('.dashboard-tabs')[0].style.display = 'none';
    document.getElementById('dashboard-content').style.marginLeft = 0;

    // Your code here...
})();
