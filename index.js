const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000

const line = require('@line/bot-sdk');


const config = {
  channelAccessToken: process.env.token,
  channelSecret: process.env.secretCode
}

app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all([
      req.body.events.map(handleEvents)
    ])
    .then((result) => res.json(result))
})

const client = new line.Client(config);




async function handleEvents(event) {

  console.log(event.type);

  if (event.type == 'message') {
    console.log(event.message.text)
    if (event.message.text == 'ติดต่อเรา') {
      return client.replyMessage(event.replyToken, {
        type: 'flex',
        altText: 'เลือกหัวข้อที่ต้องการสอบถาม',
        contents: {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/d/1iPLMDqZoy_q8YjSMRbV-WY5QtDDB_u7Z",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "เลือกหัวข้อที่ต้องการสอบถาม",
                "align": "center",
                "size": "lg",
                "color": "#333333",
                "weight": "bold"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "สมัครสมาชิก",
                      "text": "#สมัครสมาชิก"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ฝาก-ถอน",
                      "text": "#ฝาก-ถอน"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "แจ้งปัญหาการใช้งาน",
                      "text": "#แจ้งปัญหาการใช้งาน"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ข้อมูลการเล่นเกม",
                      "text": "#ข้อมูลการเล่นเกม"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรโมชั่น",
                      "text": "#โปรโมชั่น"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              }
            ]
          },
          "styles": {
            "hero": {
              "separator": true
            }
          }
        }

      });

    }

    if (event.message.text == '#สมัครสมาชิก') {
      return client.replyMessage(event.replyToken, {
        type: 'flex',
        altText: 'สมัครสมาชิก',
        contents: {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/d/1HYjcbU8MsAzENbNLwjSmMqukXqaYxs6v",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "สมัครสมาชิก",
                "align": "center",
                "size": "xl",
                "color": "#333333",
                "weight": "bold"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ต้องการสมัครสมาชิกออโต้",
                      "text": "ต้องการสมัครสมาชิกออโต้"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ต้องการให้เราสมัครสมาชิกให้",
                      "text": "ต้องการให้เราสมัครสมาชิกให้"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "สมัครแล้ว ติดปัญหา",
                      "text": "สมัครแล้ว ติดปัญหา"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              }
            ]
          },
          "styles": {
            "hero": {
              "separator": true
            }
          }
        }

      });

    }

    if (event.message.text == '#ฝาก-ถอน') {
      return client.replyMessage(event.replyToken, {
        type: 'flex',
        altText: 'ฝาก-ถอน',
        contents: {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/d/1DNYwl_c-Zs0YXDY-COydAKc-CP4R7EAF",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "ฝาก-ถอน",
                "align": "center",
                "size": "20px",
                "color": "#333333",
                "weight": "bold",
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีการฝากเงิน",
                      "text": "วิธีการฝากเงิน"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ฝากเงินไม่เข้า",
                      "text": "ฝากเงินไม่เข้า"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "อัปโหลดสลิปไม่ได้",
                      "text": "อัปโหลดสลิปไม่ได้"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ฝาก - ถอนขั้นต่ำเท่าไหร่",
                      "text": "ฝาก - ถอนขั้นต่ำเท่าไหร่"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีการถอนเงิน",
                      "text": "วิธีการถอนเงิน"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ถอนเงินแล้วได้เงินไม่ครบ",
                      "text": "ถอนเงินแล้วได้เงินไม่ครบ"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ถอนเงินนาน (ตรวจสอบ)",
                      "text": "ถอนเงินนาน (ตรวจสอบ)"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              }
            ]
          },
          "styles": {
            "hero": {
              "separator": true
            }
          }
        }

      });

    }
    if (event.message.text == '#แจ้งปัญหาการใช้งาน') {
      return client.replyMessage(event.replyToken, {
        type: 'flex',
        altText: 'แจ้งปัญหาการใช้งาน',
        contents: {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/d/1xxVLosOXiOpxZMvf3tgKsPgkbZD4l4kV",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "แจ้งปัญหาการใช้งาน",
                "align": "center",
                "size": "xl",
                "color": "#333333",
                "weight": "bold"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "เข้าเว็บไม่ได้",
                      "text": "เข้าเว็บไม่ได้"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ลืมรหัสผ่าน",
                      "text": "ลืมรหัสผ่าน"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ต้องการเปลี่ยนเบอร์โทร",
                      "text": "ต้องการเปลี่ยนเบอร์โทร"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "จำยูสไม่ได้",
                      "text": "จำยูสไม่ได้"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "เปลี่ยนภาษายังไง",
                      "text": "เปลี่ยนภาษายังไง"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปรับยอดเดิมพันเพิ่มไม่ได้",
                      "text": "ปรับยอดเดิมพันเพิ่มไม่ได้"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โหลดแอปลงหน้าโฮมยังไง",
                      "text": "โหลดแอปลงหน้าโฮมยังไง"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              }
            ],
            "spacing": "0px"
          },
          "styles": {
            "hero": {
              "separator": true
            }
          }
        }

      });

    }

    if (event.message.text == '#ข้อมูลการเล่นเกม') {
      return client.replyMessage(event.replyToken, {
        type: 'flex',
        altText: 'ข้อมูลการเล่นเกม',
        contents: {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/d/1cNht6K9Th5bo30suMT6zzztLgDVgRKVQ",
            "size": "full",
            "aspectMode": "cover",
            "aspectRatio": "20:13"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "ข้อมูลการเล่นเกม",
                "size": "xl",
                "color": "#333333",
                "weight": "bold",
                "align": "center"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีแทงบอล",
                      "text": "วิธีแทงบอล"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีดูบิลบอล",
                      "text": "วิธีดูบิลบอล"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีแทงบอลสเต็ป",
                      "text": "วิธีแทงบอลสเต็ป"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "แนะนำค่ายบอล",
                      "text": "แนะนำค่ายบอล"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีปรับค่าคอมบาคาร่า",
                      "text": "วิธีปรับค่าคอมบาคาร่า"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีเล่นบาคาร่าวัว",
                      "text": "วิธีเล่นบาคาร่าวัว"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีเล่นบาคาร่าสายฟ้า",
                      "text": "วิธีเล่นบาคาร่าสายฟ้า"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีการซื้อฟรีสปิน",
                      "text": "วิธีการซื้อฟรีสปิน"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีปรับเบทสล็อต",
                      "text": "วิธีปรับเบทสล็อต"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีเล่นไฮโล",
                      "text": "วิธีเล่นไฮโล"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "วิธีเล่นรูเล็ต",
                      "text": "วิธีเล่นรูเล็ต"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              }
            ],
            "spacing": "0px"
          },
          "styles": {
            "hero": {
              "separator": true
            }
          }
        }

      });

    }

    if (event.message.text == '#โปรโมชั่น') {
      return client.replyMessage(event.replyToken, {
        type: 'flex',
        altText: 'โปรโมชั่น',
        contents: {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/d/1DV2Ua4Yp6Wf9pWPogunaxmXRPRJBL2bd",
            "size": "full",
            "aspectMode": "cover",
            "aspectRatio": "20:13"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "โปรโมชั่น",
                "size": "xl",
                "color": "#333333",
                "weight": "bold",
                "align": "start"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ฝากรับสูตร",
                      "text": "ฝากรับสูตร"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรกีฬา5%",
                      "text": "โปรกีฬา5%"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรมวย10%",
                      "text": "โปรมวย10%"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรวันเกิด",
                      "text": "โปรวันเกิด"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรคืนยอดเสีย",
                      "text": "โปรคืนยอดเสีย"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรทายเลขท้าย",
                      "text": "โปรทายเลขท้าย"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรแนะนำเพื่อน",
                      "text": "โปรแนะนำเพื่อน"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              }
            ],
            "spacing": "0px"
          },
          "styles": {
            "hero": {
              "separator": true
            }
          }
        }

      });

    }

    if (event.message.text == 'test') {
      return client.replyMessage(event.replyToken, {
        type: 'flex',
        altText: 'โปรโมชั่น',
        contents: {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://lh3.googleusercontent.com/d/1DV2Ua4Yp6Wf9pWPogunaxmXRPRJBL2bd",
            "size": "full",
            "aspectMode": "cover",
            "aspectRatio": "20:13"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "หัวข้อ โปรโมชั่น",
                "size": "xl",
                "color": "#333333",
                "weight": "bold",
                "align": "start"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ฝากรับสูตร",
                      "text": "ฝากรับสูตร"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "margin": "xs",
                "spacing": "none",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรกีฬา5%",
                      "text": "โปรกีฬา5%"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรมวย10%",
                      "text": "โปรมวย10%"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรวันเกิด",
                      "text": "โปรวันเกิด"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรคืนยอดเสีย",
                      "text": "โปรคืนยอดเสีย"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรทายเลขท้าย",
                      "text": "โปรทายเลขท้าย"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "โปรแนะนำเพื่อน",
                      "text": "โปรแนะนำเพื่อน"
                    },
                    "margin": "none",
                    "height": "sm",
                    "style": "primary"
                  }
                ],
                "spacing": "none",
                "margin": "xs",
                "paddingAll": "xs"
              }
            ],
            "spacing": "0px"
          },
          "styles": {
            "hero": {
              "separator": true
            }
          }
        }

      });

    }


  }
}




console.log(config)

app.get('/', (req, res) => {
  res.send('ok');
})

app.listen(port, () => console.log(`Start server on port ${port}`))