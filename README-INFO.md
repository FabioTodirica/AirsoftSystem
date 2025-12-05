# Create an Angular Project
```bash
ng new Project-Name
```

# To Git project
```bash
cd Porject-Name
git init
git add .
```
Create a repository on GithHub to load and synchronize local repository with git.

# Host project on Git
Install ghpages plugin:
```bash
ng add angular-cli-ghpages
```
Run Script build-on-git:
```bash
ng build --configuration production --base-href=/Git-Repository-Name
```
Run Script host-on-git:
```bash
npx angular-cli-ghpages --dir=dist/Project-Name/browser
```
# Configuration on GitHun
In Repository > Settings > Pages set source: gh-pages and folder: root