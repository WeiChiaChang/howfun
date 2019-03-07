#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('HowFun /'),
  'handle': chalk.cyan('陳孜昊 a.k.a. 金城武'),
  'work': chalk.white('大家好，我叛徒 HOW 哥啦，現在很幸 Fu 喔ㄏㄏ！'),
  'youtube': chalk.cyan('https://www.youtube.com/user/jasonjason1124'),
  'ig': chalk.cyan('https://www.instagram.com/howhowhasfriends/?hl=zh-tw'),
  'facebook': chalk.cyan('https://www.facebook.com/howfunofficial/'),
  'npx': chalk.white('npx howfun'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelYouTube': chalk.white.bold('  YouTube:'),
  'labelIG': chalk.white.bold(' Instagram:'),
  'labelFacebook': chalk.white.bold('  Facebook:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var youtubeing = ` ${data.labelYouTube}  ${data.youtube}`
var iging = `${data.labelIG}  ${data.ig}`
var facebooking = `${data.labelFacebook}  ${data.facebook}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = 
    heading +
    newline +
    newline +
    working +
    newline +
    youtubeing +
    newline +
    iging +
    newline +
    facebooking +
    newline +
    newline +
    carding

console.log(chalk.white(boxen(output, options)))
