
import qrcode as qr                 # type: ignore
import os


##  Specify the folder where you want to save the QR code

folder_path = "D:/Program Files/vs codes/CODES/Mini Project"       #the path

#does the folder exist or not-
os.makedirs(folder_path , exist_ok=True)

#entery of qr link-
qr_link = input("\nEnter the link for Qrcode : ")


if qr_link.strip() :                #for data not contain spaces
    
  img = qr.make(qr_link)
  file_name = f"{qr_link[8:15]}.png"
  
  img.save(os.path.join(folder_path,file_name))    # save png in given folder
  
  print("DONE^")
  
else:
    print("Invalid link!!")

    




 