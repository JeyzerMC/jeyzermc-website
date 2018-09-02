---
title: "Bash script for token pasting"
cover: "https://images.unsplash.com/photo-1433444306168-f18e2a8dde77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea3573964d1bb646868bcfe6e4ae9cba&auto=format&fit=crop&w=1650&q=80"
category: "tech"
author: "jeyzer"
date: "2018-08-27"
tags:
    - Password
    - Scripting
    - Bash
    - Linux
    - Shortcuts
    - 2FA token
---

Do you have two factor authentification activated on GitHub yet? You should. 2FA really helps making your account secure and you will regret not having it on your account the day someone get a hold of your password. 

## Problem with 2FA

Let's assume you have taken a moment to setup 2FA on your account. You're now on your terminal trying to push some changes. You do a `git push` and are asked to enter your username and password. Problem is: There's no field for your 2FA code. 

A possible solution is to go in your developer settings, select the *Personal Access Token* tab and generate a new token. 

![Imgur](https://i.imgur.com/nQIqUFR.png?2)

## Personal access token

This token is a long hash that you can use in place of your password, which you can also restrain the level of freedom with your account. It acts like an OAuth token and can be used instead of your password over HTTPS. Such token can be restricted to pull a private repo, push, invite people to a repository, etc. 

The thing is, once one is generated, you have to save it and use it everytime you need to login, it won't be visible on your developer settings anymore for you to copy over from an other computer. 

## Accessing the token

So now, you have the token saved in a text file for example, and everytime you try to login in your github account from a terminal or over HTTPS, you will need to open that text file, copy the token and then paste it on the password field in place of your password.

![Imgur](https://i.imgur.com/Vt0Oc8a.gif)


Surely there is a way to make this whole process faster? That was the question haunting my mind when I was faced with this situation. 

## The solution

I have been exploring various solutions, including messing Compose keys and other keyboard based options, and I knew what I wanted: A custom keyboard shortcut that will fetch the personal access token and paste it into the field when prompted. 

Being on ubuntu right now, I will use linux tools to achieve that goal. Note that a very similar process to what I'm about to describe is also available on OSX. 

## The process

The solution is composed of many steps:

1. Have the token saved on a text file.
2. A special shortcut will fetch that token.
3. The token is copied to the clipboard.
4. It is then pasted into the password prompt.
5. The old content of the clipboard is restored. 

Demo of the solution (`helloworld` is my previous clipboard content, not the token):

![Imgur](https://i.imgur.com/5Pqrrag.gif)

Step 1 is pretty straight forward. You get your token, save it into a file and close the file.

Next, you'd want a script that will read that file and save its content in your clipboard. For linux, [xclip](https://github.com/astrand/xclip), a command line interface to the X11 clipboard, will do just fine.

Create a `token_accessor.sh` script and paste the following:

```bash
xclip -sel c < /path/to/script/token_accessor.txt
```

`-sel` will tell xclip which X selection to use, in this case the `c` clipboard option. Other options are `p` for primary and `s` for secondary. The `<` will get the content of the `token_accessor.sh` and write it in the selection. 

You now have the token saved on your clipboard. The next step is to paste it into the password field. We could do it manually by pressing `ctrl` + `shift` + `v` but we might as well have the script do it for us.

## Auto-pasting

To get that, we'll need the script to be able to execute keyboard commands. [xdotool](https://www.semicomplete.com/projects/xdotool/) is perfect for that.

```bash
sudo apt install xdotool
```

We can now use it in our shell script as follow:

```bash
sleep 0.5
xdotool key ctrl+shift+v
```

`sleep 0.5` is needed to let xclip finish executing. Then, we tell `xdotool` to input the key combo `ctrl`+`shift`+`v` for us.

Here we go, you no longer have to open the file holding your token everytime you want to connect to GitHub over HTTPS.

## Restore the previous clipboard

We want to do that for two reasons:

- You usually don't want your token (aka password) on your clipboard and paste it in the wrong field, thus exposing it.
- You don't need the token on your clipboard at all time since the shortcut is pasting it anyway and chances are, it's overwritting what you had before that might be more useful for you. 

Let's change the script to that:

```bash
oldpw=`xclip -sel c -o`
xclip -sel c < /path/to/script/token_accessor.txt
sleep 0.5
xdotool key ctrl+shift+v
echo $oldpw | xclip -sel c 
```

The first line saves the content of your current clipboard into `oldpw`. Then at the end, we restore our clipboard from the same variable.

Mac's OSX also have `pbcopy` and `pbpaste` to achieve a very similar result.

## Setup the keyboard shortcut

Now, the only thing left is to actually have a shortcut to execute that script.

First, make it executable

```bash
chmod +x token_accessor.sh
```

Then, depending on your system, you want to set a shortcut to execute the script.

The computer I'm using right now is using Ubuntu Gnome, so I'll cover that.

Navigate to `Settings`->`Devices`->`Keyboard` and add a new shortcut.

![Keyboard Shortcuts](https://i.imgur.com/yGgpHgz.png?2)

Add a shortcut with the following command:

```
bash /path/to/script/token_accessor.sh
```

Here we go, you can now enjoy a quick access to your token when needed!

![Imgur](https://i.imgur.com/5Pqrrag.gif)


## Next steps

Looking forward, we could use a similar script to paste a password of your choice into a field and keep the same behavior. Obviously, we don't want an actual password to be saved as is in a non secure text file. For that reason, we'll cover in the next article how to generate passwords on the fly when using the script.