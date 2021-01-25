const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'ODAzMjkyMjk3NzA5MjIzOTg2.YA7qQA.PEh32dFA0nv7v-kB2S1GbFQKJcw';

bot.login(token)
bot.on('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.content === 'oi') {
        msg.reply('oi vc viu meu pai')
    }
})

bot.on('message', msg => {
    if (msg.content === 'nao') {
        msg.reply('nossa, pode me ajudar')
    }
})

bot.on('message', msg => {
    if (msg.content === 'sim') {
        msg.reply('vc ja viu ele o nome dele e everson caminhao')
    }
})

bot.on('message', msg => {
    if (msg.content === 'nunca nem vi') {
        msg.reply('nossa, voce entao tem alguma coisa pra me ajudar como uma dica ou uma comida estou com fome')
    }
})

bot.on('message', msg => {
    if (msg.content === 'nao vou te dar comida') {
        msg.reply('fim do jogo, ele morreu de fome. digite OI novamente para recomeçar')
    }
})

bot.on('message', msg => {
    if (msg.content === 'ele e adm do servidor') {
        msg.reply('nossa mto obrigado agora posso me reunir com meu pai, e talvez achar minha mae, mas acho q ela morreu. F. FIM DO JOGO. vc ganhou')
    }
})