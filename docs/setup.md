---
sidebar_position: 1
---

# Setup
*CTFCafe on fresh Ubtuntu 22.10*

~10min

## Dependencies

**docker-compose**
[Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

**NGINX**
```bash
sudo apt install -y nginx
```

**CertBot** (optional)
```bash
sudo apt install -y certbot &&
sudo apt install -y python3-certbot-nginx
```

## CTFCafe Setup

**Clone Repo**
```bash
git clone https://github.com/CTF-Cafe/CTF_Cafe_platform.git
```

**Setup dockerCompose**
```bash
cd CTF_Cafe_platform/   &&
vim docker-compose.yml
```
1. Change the MONGODB Username & Password
2. Change the Session Secret
3. Change the FRONTEND_URI and BACKEND_URI
4. Edit anything else you would like to.

**Setup NGINX**
```bash
cp nginx_ctf.conf /etc/nginx/sites-available/default &&
vim /etc/nginx/sites-available/default
```
1. Change YOUR_SERVER to vps_ip or domain.com

**Test & Reload NGINX**
```bash
nginx -t && nginx -s reload
```

**Setup Domain & SSL** (optional)
```bash
sudo certbot --nginx -d example.ctf.cafe
```

**Launch CTFCafe**
```bash
docker-compose up -d
```
1. Make sure to save the admin password sent in the backEnd  docker console.

Head to your browser and open up the url, everything should be working, Enjoy!

Next Steps: `Config`
