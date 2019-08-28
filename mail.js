"use strict";
const nodemailer = require("nodemailer");

// async..await在全局范围内不允许，必须使用包装
async function main(){

  // 从ethereal.email生成测试SMTP服务帐户
  // 只有当您没有真正的邮件帐户进行测试时才需要
  let testAccount = await nodemailer.createTestAccount();

  // 使用默认的SMTP传输创建可重用的Transporter对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // 465为真，其他端口为假
    auth: {
      user: '1198842338@qq.com', // 生成的以太用户
      pass: 'klycgfbsilvajahg' // 生成的以太密码
    }
  });

  // 使用定义的传输对象发送邮件
  let info = await transporter.sendMail({
    from: '"悄悄话！" <1198842338@qq.com>', // sender address
    to: "2809849778@qq.com", // list of receivers
    subject: "一直以来有一句话深藏我心，自从看到你后我决定是时候把这句话说给你听了，我爱你！", // 标题
    text: "一直以来有一句话深藏我心，自从看到你后我决定是时候把这句话说给你听了，我爱你！", // 内容
    //html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // 消息已发送: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // 仅当通过以太账户发送时才可预览
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
setInterval(function(){main().catch(console.error);},1000)

