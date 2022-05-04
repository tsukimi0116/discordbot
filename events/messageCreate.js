const client = require('../index');

client.on('messageCreate', async message => {
    console.log(message.content)
    // if (!message.guild) return;
    // if (message.author.bot) return;
    // if (message.content === '阿比') {
    //     message.reply('大帥哥');
    // }

})