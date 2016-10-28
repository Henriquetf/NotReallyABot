const Command = require('../slave/Command.js');
const Colour = require('../commands/colour.js');
const Colours = require('../commands/colours.js');
const Eval = require('../commands/eval.js');
const MyColours = require('../commands/mycolours.js');
const NoColour = require('../commands/nocolour.js');

const BotCommands = {
    Colour: new Command(Colour),
    Colours: new Command(Colours),
    Eval: new Command(Eval),
    MyColours: new Command(MyColours),
    NoColour: new Command(NoColour),
}

module.exports = BotCommands;
