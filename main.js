function copyFolderRecursively(sourceFolder, destinationFolder) {
    // Create a subfolder in the destination with the same name as the source
    var newFolder = destinationFolder.createFolder(sourceFolder.getName());
  
    // Loop through files in the source folder and copy them
    var files = sourceFolder.getFiles();
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      try {
        var copiedFile = file.makeCopy(file.getName(), newFolder);
        Logger.log('Copied file: ' + file.getName());
      } catch (e) {
        Logger.log('Error copying file ' + file.getName() + ': ' + e);
      }
    }
  
    // Recursively process subfolders
    var subFolders = sourceFolder.getFolders();
    for (var i = 0; i < subFolders.length; i++) {
      var subFolder = subFolders[i];
      // Pass the newly created subfolder for the recursive call
      copyFolderRecursively(subFolder, newFolder);
    }
  }
  
  // Replace with your folder IDs
  var sourceFolderId = 'SOURCE_FOLDER_ID';
  var destinationFolderId = 'DESTINATION_FOLDER_ID';
  
  var sourceFolder = DriveApp.getFolderById(sourceFolderId);
  var destinationFolder = DriveApp.getFolderById(destinationFolderId);
  
  copyFolderRecursively(sourceFolder, destinationFolder);
  