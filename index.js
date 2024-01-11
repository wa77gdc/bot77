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
                contents:{
                    "type": "bubble",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "เลือกหัวข้อที่ต้องการสอบถาม",
                                "align": "center",
                                "size": "20px",
                                "color": "#333333"
                            }
                        ],
                        "backgroundColor": "#cccccc",
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
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
                                        }
                                    }
                                ],
                                "margin": "10px",
                                "backgroundColor": "#cccccc"
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
                                        }
                                    }
                                ],
                                "backgroundColor": "#eeeeee"
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
                                        }
                                    }
                                ],
                                "backgroundColor": "#cccccc"
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
                                        }
                                    }
                                ],
                                "backgroundColor": "#eeeeee"
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
                contents:{
                    "type": "bubble",
                    "header": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "หัวข้อ สมัครสมาชิก",
                          "align": "center",
                          "size": "20px",
                          "color": "#333333"
                        }
                      ],
                      "backgroundColor": "#cccccc",
                    },
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
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
                              }
                            }
                          ],
                          "margin": "10px",
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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
                contents:{
                    "type": "bubble",
                    "header": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "หัวข้อ ฝาก-ถอน",
                          "align": "center",
                          "size": "20px",
                          "color": "#333333"
                        }
                      ],
                      "backgroundColor": "#cccccc",
                    },
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
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
                              }
                            }
                          ],
                          "margin": "10px",
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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
                    "header": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "หัวข้อ แจ้งปัญหาการใช้งาน",
                          "align": "center",
                          "size": "20px",
                          "color": "#333333"
                        }
                      ],
                      "backgroundColor": "#cccccc",
                    },
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
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
                              }
                            }
                          ],
                          "margin": "10px",
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                    "header": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "หัวข้อ โปรโมชั่น",
                          "align": "center",
                          "size": "20px",
                          "color": "#333333"
                        }
                      ],
                      "backgroundColor": "#cccccc",
                    },
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
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
                              }
                            }
                          ],
                          "margin": "10px",
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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
                              }
                            }
                          ],
                          "backgroundColor": "#eeeeee"
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
                              }
                            }
                          ],
                          "backgroundColor": "#cccccc"
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