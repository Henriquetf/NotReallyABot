const ColourFilter = require('../plugins/colorize/ColourFilter.js');
const Config = require('../config.js')

function Colours(message, answer, client) {
    if (message.guild === undefined) return;

    filter = ColourFilter.filter(message.guild.roles);

    content = `Available colours. Total: ${filter.size}`
              + '\nUse **bottie colour *ColourName*** to select a colour.\n\n'
              + ColourFilter.mentionAll(filter, '     ', Config.maxRolesPerLine || 5);

    message.reply(content).delete((filter.size*1.5) + 15);
}

module.exports = {
    handle: Colours,
    cmd: 'colours',
    aliases: ['colors'],
}
