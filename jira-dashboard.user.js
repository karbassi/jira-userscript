// ==UserScript==
// @name         JIRA Dashboard Cleanup
// @version      0.1
// @description  Remove the dashboard-tab
// @author       Ali Karbassi
// @match        http://*/secure/Dashboard.jspa
// @downloadURL  https://github.com/karbassi/jira-userscript/raw/master/jira-dashboard.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('.dashboard-tabs')[0].style.display = 'none';
    document.getElementById('dashboard-content').style.marginLeft = 0;

    // Your code here...
})();
