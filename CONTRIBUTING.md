# Contributing

We have to coordinate our commits with each other, especially if we are splitting up the work and maybe finishing some features on our own. 

To summarize what we'll be doing:

1. Create a branch locally with a succinct but descriptive name
2. Run the JS linter to clean your code with `eslint --fix` (I've already installed ESLint  with the AirBnB style guide).
3. Commit changes to the branch
4. Push changes to your fork
5. Open a PR in our repository so that we can efficiently review the changes and merge if everything looks fine.
6. Lastly, everyone else has to update their local branches/repos by pulling from the newly updated master branch.


## The Code


### How to work on a pull request in a new topic branch.
`git checkout master` - switch to master branch

`git pull origin master` - make sure your local master is up to date with github

`git checkout -b TOPIC-BRANCH-NAME` - create a new feature branch (ex: add-search-bar-feature)

`git add FILES-ETC` - add your code and stuff

`git commit` - commit your code a bunch of times

`git push origin TOPIC-BRANCH-NAME` - push your local branch to the github branch


 Go to the repo on GitHub, switch to the topic branch, and click *Compare & pull request*. This is when we, as a team, can review the requests before merging.

After the merge, everyone has to keep their local master branch updated with the Github master branch.

`git checkout master` - switch to master branch

`git pull origin master` - pull from github master branch

`git push origin master` - push to github master branch
