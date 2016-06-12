# Demo Git Bisect for Debugging 
---------------------------------------------------------

Git Bisect is useful for debugging something is work is past but not now (Regression).

# Scenario to use `git bisect`

`Example on nodeJS`

```
* 29baf83 (HEAD -> master, origin/master) Update readme
* f9062dc Add /bisect test
* eb3d6e0 Update test to use meanful name
* 9daebf0 Fix testname of /hi
* 808bbdd Add /bisect
* b57d4ba Refactoring hi to controller
* 48ddb04 Refactoring hello to controller
* 7522416 Refactoring /hi
* a12db20 Refactoring / root path
* ff76ce1 Remove /docker
* 81e2c7f Add README
* 1cea276 Init
```

1. You found the last pushed is failed because of the last commit `HEAD` can't start `node app.js`
2. Your know you can start `node app.js` on previous pushed that on the `81e2c7f Add README` commit
3. Your don't know where commit is the caues of error.  
It should between `ff76ce1 Remove /docker` and `f9062dc Add /bisect test`

### How to solve this ?
1. Find the cause of error on the whole code on HEAD commit? Hard work!!!
2. Find first commit that make error happen to reduce scope of the cause?

`2.` is better way but how many commits that you have to look ?  
In this case, There are 10 commits but you can use [Bisection method](https://en.wikipedia.org/wiki/Bisection_method) that is alike [Binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm) to reduce number of commits.  With bisect method, you only look on 4-5 commits that is wortcase of binary search `log n + 1`

### How `git bisect` help you ?
You don't have to calculate where the middle commit  
and use `git checkout` to it then check status and mark.    
You just tell `git bisect` where are you (HEAD) and where is the good commit that you know.  
`git bisect` will checkout the middle commit then you tell it is `Good` or `Bad` commit, after that move to next one,  
The end, You will know where commit is the cause of error.

### Demo debuggig with `git besect`

```sh
$ git bisect start HEAD 81e2c7f # tell git bisect where to start and where is good commit
$ git bisect run npm test # ues git bisect for automated check the status of commit via test script
$ git show # you found the commit that is caues of error, use `git show` to display how its different from previous commit
$ git bisect reset # end of git bisect, back to HEAD
```
You should found the commit `b57d4ba Refactoring hi to controller` is cause of error.

```js
# b57d4ba Refactoring hi to controller
var hi = (req, res) => {
  res.send('hi')
}
```

that should fix to be this

```js
# Fix the error
module.exports = (req, res) => {
  res.send('hi')
}
```

### What practice that can empower to `git bisect`
1. Automated Test especially TDD with FIRST concept.
2. Atomic Commit.

# About Git Bisect
### Init Git Bisect

`Good` - Something that your know it is good. Ex. test passed, compiled without any error, bugless  
`Bad` - Sometheng that opposite that `Good`. Fx. test failed, compile failed, have Bug !!!

```sh
$ git bisect start < Bad commit >  < Good Commit >
# Bad commit - lastest commit that is bad, normally is HEAD
# Good commit - commit that your know it is good
```

###  Manual Way

```sh
$ git bisect start < Bad commit >  < Good Commit >
$ git bisect bad # when current commit is bad
$ git bisect good # when curret commit is good
```

### Automated Way

```sh
$ git bisect start < Bad commit >  < Good Commit >
$ git bisect run < script >
```

# References
### Manual
- [Git Tools - Debugging with Git](https://git-scm.com/book/en/v2/Git-Tools-Debugging-with-Git)
- [git bisect manual](https://git-scm.com/docs/git-bisect)

### Intro
- [Using Git bisect to figure out when brokenness was introduced](http://webchick.net/node/99)
- [git bisect - thoughtbot](https://robots.thoughtbot.com/git-bisect)
- [Git Bisect: Simple Examples and Automation](http://www.clock.co.uk/blog/git-bisect-simple-examples-and-automation)
- [หาบั๊กด้วย git กับคำสั่ง git bisect](https://blog.whs.in.th/node/2261)

### Articles
- [The idea behind git bisect](http://stackoverflow.com/a/4714297)
- [Finding Failure: Git Bisect](https://hashrocket.com/blog/posts/finding-failure-git-bisect)
- [The git's guide to git: Bisect *** Downsides](https://rkoutnik.com/articles/The-gits-guide-to-git-Bisect.html)
- [Git Bisect: quickly zero in on a bug’s origin](https://medium.com/@porteneuve/git-bisect-quickly-zero-in-on-a-bugs-origin-2ff44dc981c9#.iyndh9iow)

### Tutorials
- [Git bisect tutorial - Video](https://www.youtube.com/watch?v=REaowJ8JSfw)
