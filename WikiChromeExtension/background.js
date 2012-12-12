// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
var alreadyRun = false;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo){
    if(changeInfo.status == 'complete')
    {
    alreadyRun = true;
    chrome.tabs.executeScript(
        null, {file:"injectRating.js"});
    }
});