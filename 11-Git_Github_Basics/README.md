# Git and GitHub Basics

## Introduction
There are two ways you can start using git repository, either you can start a local git repo on your local machine and later add this to any remote repo like github/gitlab, or you can directly start a remote repo in github/gitlab and clone it to local machine and work on it.


## Getting Started

**Install Git ** - Ubuntu usually comes with git. incase if you dont have, install it by using the following command,

1. To check whether git is installed on the system, this will show the current git version.
```bash
git --version
```
2. To install git using apt 
```bash
sudo apt install git
```
3. **Set Up Git**: Configure your Git username and email using the following commands:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
4. Initialize git in a directory/folder
```bash
git init
```
5. Stage the changes
```bash
git add <file name> #use this to add by file name
git add . # use this for adding all the changes to staging area
```
6. Commit the changes
```bash
git commit -m "<add your commit message here>"
```
7. Adding remote
```bash
git add remote <name of the remote repo> <url of remote repo>
```
8. push to the remote repo
```bash
git init
```
9. pull from the remote repo
```bash
git pull --rebase <name of the remote repo> <name of branch>
```












## Github Pages

Github Pages allows you to host your website thorugh github.

To host your website follow these steps.

**index.html file must be present in the repository so that Github can recognize and host it.**

- Create a new repository with the following as repository name.

- "Githubusername".github.io //Replace the githubusername with your own github username.

- Now clone this repository to your local system.

- Create an index.html file and push it back to Github.

- Now in your browser visit "Githubusername.github.io" //Replace the githubusername with your own github username.

- Website will be accessible.


## Hosting multiple repositories in Github using git pages

- In order to host multiple repositories in github go to any repository and click settings.

- In the **code and automation section** select pages. It is located in the side bar.

- Under **Build and deployment**, under **Source**, select Deploy from a branch.

- Under **Build and deployment**, under **Branch**, use the branch dropdown menu and select the main branch.


**Note: Here also the index.html file should be present as github recognises this file**

Now visit **Githubusername.github.io/repository_name**

Replace the githubusername with your own github username and repository name with your own repository name.


## Oh my git

A game to learn about git commands.

Visit this website to download the binaries.

https://ohmygit.org/

**Download the game as per your OS**

**Extract the binaries**

**Go to the oh my git folder and run the following**

```bash
chmod +x oh-my-git

./oh-my-git
```

Ignore the erros and click the levels button. In the levels button complete till the merge section.