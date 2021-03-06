const { Client, Intents } = require("discord.js");
// The Client and Intents are destructured from discord.js, since it exports an object by default. Read up on destructuring here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.on("ready", () => {
  console.log("I am ready!");
});

const newconfig = require("./newconfig.json");

client.on("messageCreate", (message) => {
  if(!message.content.startsWith(newconfig.prefix) || message.author.bot) return;

  if (message.content.startsWith(`${newconfig.prefix}ping`)) {
    message.channel.send("pong!");
  } else

  if (message.content.startsWith(`${newconfig.prefix}bitch`)) {
      message.channel.send("I don't know if your brain is all scrambled from all the molly you take, but i never said that.");
  } else

  if (message.content.startsWith(`${newconfig.prefix}yay`)) {
    message.channel.send("i'm happy to be here");
  }
});

client.login(newconfig.token);
