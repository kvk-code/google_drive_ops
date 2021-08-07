function pck_lck(nam,fld) {
  var folders = DriveApp.getFoldersByName(fld);
  
  while (folders.hasNext()) {
  var folder = folders.next();
    
  var usr=folder.getEditors();
  var fl_it=folder.getFiles();
  while(fl_it.hasNext()) {
        var fl=fl_it.next();
    var ow_fld="k";
    var own=fl.getOwner();
    var in_folders=DriveApp.getFoldersByName(nam+" "+own.getName());
    
    if(in_folders.hasNext()) {
      ow_fld=in_folders.next();
fl=fl.moveTo(ow_fld);
    }
    else
    {
      ow_fld=folder.createFolder(nam+" "+own.getName());
       ow_fld.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.NONE);
      for (var i = 0; i < usr.length; i++) {
     ow_fld.revokePermissions(usr[i])
    }
   fl=fl.moveTo(ow_fld);
       ow_fld.addEditor(<<the person collecting the folders>>);
    ow_fld.addEditor(own);
      
    }
    
     
}
    
  }
}
