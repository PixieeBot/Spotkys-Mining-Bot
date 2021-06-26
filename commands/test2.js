const Discord = require("discord.js");

const Command = require("../class/command.js");
const Permission = require("../Enums/permission.js");

function test2Command({msg, disbut}) {
    let button = new disbut.MessageButton()
        .setStyle("green")
        .setLabel("Increment!")
        .setID("test2");
    
    return {
        message: "Increment: 0",
        addition: {
            buttons: [button]
        }
    }   
}

module.exports = new Command({
    keyWords: ["test2"],
    regex: null,
    func: test2Command,
    permissionReq: Permission.User
});