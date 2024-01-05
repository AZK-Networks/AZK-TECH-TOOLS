![AZK TECH](./../cover.png)

# USING ADDRESS LIST FOR VENDO

## 1.) Adding the vendo to the address list

### a.) Dynamically add the ip address

>   **Do this for all of your vendo**
> - Address: **< vendo ip address >**
> - Address List: **JuanfiVendo**

<p align="center">
  <img src="./1.png" />
</p>


### b.) Manually add the ip address

>   **Do this for all of your vendo**
> - Name: **JuanfiVendo**
> - Address: **< vendo ip address >**
> 
<p align="center">
  <img src="./2.png" />
</p>

## 2.) Paste this script in the Terminal

### Walled Garden IP
```bash
/ip hotspot walled-garden ip add action=accept disabled=no dst-address-list=JuanfiVendo
```
### Firewall Filter
```bash
/ip firewall filter add action=accept chain=input place-before=0 comment=JuanfiVendo src-address-list=JuanfiVendo
```

## 3.) Done!

<p align="center">
  <img src="./../done.gif" />
</p>
