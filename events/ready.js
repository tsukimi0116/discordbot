module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`正在使用 ${client.user.tag}!`);
    },
};