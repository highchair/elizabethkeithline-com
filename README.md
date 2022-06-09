elizabethkeithline-com
======================

Static website for artist Elizabeth Keithline. 

Initialized with a fresh OSX install. Followed [these intructions](https://stackoverflow.com/questions/51126403/you-dont-have-write-permissions-for-the-library-ruby-gems-2-3-0-directory-ma) to get a new install of Ruby separate from the Ruby that comes with Mac. Hopefully this will make it easier to manage Gems and Ruby versions in the future. 

I ended up paying for Ruby On Mac and it worked immediately. When I followed the instructions myself I could not get ZSH to use the Homebrew installed Ruby. 

Check your Ruby environemnt. It should be something other than the default Ruby installed by Mac OS. 

+ `which ruby` should show a path other than the default Mac OSX path of `/usr/bin/ruby`
+ `ruby -v` should be a version newer than 2.6.1, preferably the newest version 3.1.0. 
+ To switch Ruby environments which chruby, `chruby 3.1.0`

It seems that on a clean Mac, we also need to install a JS runtime library. Node is the best one to install, as you will likely need it anyway for another project. The gems will use it, but there is not need to require each site to install its own version. Use Homebrew: `brew install node`.

And then… [Ruby 3.0 and Jekyll are not entirely compatible](https://github.com/jekyll/jekyll/issues/8523). Webrick is required to get them running together. 

Oh, but we are not done. Firefox does not allow a user to navigate to a localhost port (?!). I needed to create a string of any port I might want to allow (which are many, every project I work on locally uses a different port to avoid conflicts). [Instructions](https://www.ryadel.com/en/firefox-this-address-is-restricted-override-fix-port/).

Finally got my local working after an hour and a half. 


# Get Started

If no Bundler installed (check with `which bundler`), install that first: `gem install bundler`.
Then run `bundle install` to fetch the dependencies from the Gemfile. Gemfile.lock will be created. 

## Serve and Build commands

Then it is Jekyll commands as expected. 

```
# To serve
jekyll serve --I

# To build
jekyll build
```
