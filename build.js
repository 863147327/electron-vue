var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join('./app/board-win32-x64'),
    outputDirectory: path.join('./exe'),
    authors: 'hjn',
    exe: 'board.exe',
	  noMsi: true,
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));