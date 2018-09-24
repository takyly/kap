'use strict';

const {Menu, shell, app} = require('electron');
const os = require('os');
const {openPrefsWindow} = require('./preferences');

// Const {checkForUpdates} = require('./auto-updater');

const checkForUpdatesItem = {
  label: 'Check for Updates…',
  click(item) {
    item.enabled = false;
    // CheckForUpdates(() => {
    //   // This will be called if no update is available
    //   (new Notification({
    //     title: 'No updates available!',
    //     body: 'You will automatically receive updates as soon as they are available 🤗'
    //   })).show();
    // });
  }
};

const issueBody = `
<!--
Thank you for helping us test the Kap Beta, your feedback helps us make Kap better for everyone!

Before you continue; please make sure you've searched our existing issues to avoid duplicates. When you're ready to open a new issue, include as much information as possible. You can use the handy template below for bug reports.

Step to reproduce:    If applicable, provide steps to reproduce the issue you're having.
Current behavior:     A description of how Kap is currently behaving.
Expected behavior:    How you expected Kap to behave.
Workaround:           A workaround for the issue if you've found on. (this will help others experiencing the same issue!)
-->

**macOS version:**    ${process.platform} ${process.arch} ${os.release()}
**Kap version:**      ${app.getVersion()}

#### Steps to reproduce

#### Current behavior

#### Expected behavior

#### Workaround

<!-- If you have additional information, enter it below. -->
`;

const cogMenu = [
  {
    role: 'about'
  },
  {
    type: 'separator'
  },
  {
    label: 'Preferences…',
    accelerator: 'Cmd+,',
    click: openPrefsWindow
  },
  checkForUpdatesItem,
  {
    label: 'Send Feedback…',
    click: () => shell.openExternal(`https://github.com/wulkano/kap/issues/new?body=${encodeURIComponent(issueBody)}`)
  },
  {
    type: 'separator'
  },
  {
    role: 'quit',
    accelerator: 'Command+Q'
  }
];

module.exports = {
  cogMenu: Menu.buildFromTemplate(cogMenu)
};