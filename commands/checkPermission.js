const Discord = require("discord.js");
const D = require("decimal.js");
const Command = require("../command.js");
const Permission = require("../Enums/permission.js");

function serverStatsCommand({msg, params, guildData, permission}) {
    return {
        message: `Your Permission Level: ${permission}`
    }
}

module.exports = new Command({
    keyWords: ["permission", "checkPermission", "checkpermission"],
    regex: null,
    func: serverStatsCommand,
    permissionReq: Permission.Ban
});