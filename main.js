function copyFolderRecursively(sourceFolder, destinationFolder) {
  // Create a subfolder in the destination with the same name as the source
  var newFolder = destinationFolder.createFolder(sourceFolder.getName());

  // Loop through files in the source folder and copy them
  var files = sourceFolder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    try {
      var copiedFile = file.makeCopy(file.getName(), newFolder);
      Logger.log('Copied file: ' + file.getName());
    } catch (e) {
      Logger.log('Error copying file ' + file.getName() + ': ' + e);
    }
  }
  // Recursively process subfolders
  var subFolders = sourceFolder.getFolders();
  while (subFolders.hasNext()) {
    var subFolder = subFolders.next();
    // Pass the newly created subfolder for the recursive call
    copyFolderRecursively(subFolder, newFolder);
  }
}

function mainFunction() {
  // Replace with your folder IDs
  var sourceFolderId = 'SOURCE_ID';
  var destinationFolderId = 'DESTINATION_ID';

  var sourceFolder = DriveApp.getFolderById(sourceFolderId);
  var destinationFolder = DriveApp.getFolderById(destinationFolderId);

  copyFolderRecursively(sourceFolder, destinationFolder);
}