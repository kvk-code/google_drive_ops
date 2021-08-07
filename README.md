# google_drive_ops
Some handy google app scripts


lock_folder.gs--can be used to collect files from google folder shared to different users.
                the files uploaded by different users will be segregated based on ownership and stored in folders with the user's name.
                
                function pck_lck(nam, fld) --it is the staring point for the script.
                                             nam :: a unique name to identify the current submissions
                                             fld :: folder which is shared for  file collection
                                             
                                             
                NOTE----lock_folder.gs should be preferrably run as a time-triggered script, which triggers periodically till the end of file collection duration.
