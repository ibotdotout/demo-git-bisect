# Demo Git Bisect for Debugging (NodeJS)

# Abount Git Bisect
### Init Git Bisect

`Good` - Something that your know it is good. Ex. test passed, compiled without any error, bugless
`Bad` - Sometheng that opposite that `Good`. Fx. test failed, compile failed, have Bug !!!

```sh
$ git bisect start < Bad commit >  < Good Commit >
# Bad commit - lastest commit that is bad, normally is HEAD
# Good commit - commit that your known it is good
```

###  Manual Way

```sh
$ git bisect start < Bad commit >  < Good Commit >
$ git bisect bad # when current commit is bad
$ git bisect good # when curret commit is good
```

### Automatic Way

```sh
$ git bisect start < Bad commit >  < Good Commit >
$ git bisect run < script >
```

# References
### Manual
- [git bisect manual](https://git-scm.com/docs/git-bisect)
- [Git Tools - Debugging with Git](https://git-scm.com/book/en/v2/Git-Tools-Debugging-with-Git)

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
- [howto-git-bisect - Git Repo](https://github.com/pnavarrc/howto-git-bisect)
