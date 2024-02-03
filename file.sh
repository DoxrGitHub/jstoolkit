mkdir /tmp/usb
mount /dev/sda3 /tmp/usb
sed -i 's/["block_devmode"]="1"/["hwid"]="invalid"/' /tmp/usb/opt/crossystem
umount /tmp/usb
