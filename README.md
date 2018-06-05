# Monster UI - User Dashboard App

Requires [Monster UI v.4.2](https://github.com/2600hz/monster-ui)

#### Installation to source files:
1. Upload files from directory `src` to directory with source files of your Monster UI (*near the folders "apps", "css" and "js"*)
2. Register `userdashboard` app
```bash
# sup crossbar_maintenance init_app PATH_TO_USER_DASHBOARD_DIRECTORY API_ROOT
# The Kazoo user should be able to read files from user dashboard app directory
sup crossbar_maintenance init_app /var/www/html/monster-ui/dist/apps/userdashboard https://site.com:8443/v2/
```
4. Build your Monster UI with original builder (command `gulp`)
5. Activate the User Dashboard app in the Monster UI App Store ( `/#/apps/appstore` )

#### Installation to compiled files:
1. Upload all folders and files from directory `src` to root directory of your Monster UI (*near the folders "apps", "css" and "js"*)
2. Register `userdashboard` app
```bash
# sup crossbar_maintenance init_app PATH_TO_USER_DASHBOARD_DIRECTORY API_ROOT
# The Kazoo user should be able to read files from user dashboard app directory
sup crossbar_maintenance init_app /var/www/html/monster-ui/dist/apps/userdashboard https://site.com:8443/v2/
```
3. Activate User Dashboard app in the Monster UI App Store ( `/#/apps/appstore` )
