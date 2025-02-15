
import qrcode as qr                 # type: ignore
import os
import qrcode.constants


def qrcode_generator(qrcode_name,qr_link,folder_path):
  
    if qr_link.strip() :                        #for data not contain spaces
    
       img = qr.make(qr_link,version=1,
                   error_correction=qrcode.constants.ERROR_CORRECT_H,
                   border=4,
                   box_size=10)
       
       img.save(os.path.join(folder_path,qrcode_name))    # save png in given folder
       print(f"QR code saved as {qrcode_name}")
  
    else:
     print("Invalid link!!")

    
def main():
  
  ##  Specify the folder where you want to save the QR code
 folder_path = "D:/Program Files/vs codes/CODES/Mini Project/PY - Project"       #the path

#does the folder exist or not-
 os.makedirs(folder_path , exist_ok=True)

#entery of qr link-
 qr_link = input("\nEnter the link for Qrcode : ")
 qrcode_name = f"{qr_link[8:15]}.png"
 qrcode_generator(qrcode_name,qr_link,folder_path)


main()




