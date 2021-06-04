# skyva-server
## Steps to initialize the development server - 
Fork [link](https://github.com/skyvaSolutions/skyva-server.git) repository.
1) Clone the forked repository using on your local machine :
```
git clone https://github.com/skyvaSolutions/skyva-server.git
```
2) Install the necessary packages using :
```
npm install
```
3) Create a .env file(credentials will be shared personally)
```
Note - Don't upload the .env credentials to github or any cloud platform.
```
4) Add a reference(remote) to original repo :
```
git remote add upstream https://github.com/skyvaSolutions/skyva-server.git
```
5) Check remotes for this repository :
```
git remote -v
```
6) Create a new branch :
```
git checkout -b <your_branch_name>
```
7) Track your changes :
```
git add .
```
8) Commit your changes :
```
git commit -m "Relevant message"
```
9) Push the committed changes in your feature branch to your remote repo.
```
git push -u origin <your_branch_name>
```

## To pull changes from the repository.
```
git pull upstream main
```
