import { Injectable } from '@angular/core';

type emojiDataType = {
  [key: string] : string[]

}

export interface EmojiData {
  idx : number,
  url: string,
  posX: number,
  posY: number
}
@Injectable({
  providedIn: 'root'
})
export class EmojiDataService {
  private n = 5;
  private m = 5;
  private data : Map<string, EmojiData>;
  constructor() {
  }


  getEmoji(idx : number, subIdx : number) : EmojiData | undefined {
    //const i = Math.floor(subIdx / this.n);
    //const j = subIdx % this.m;
    const data  = this.emojiData[`${idx}_${subIdx}`];
    /*
        "94_7": [
            "94",
            "7",
            "7",
            "🛐",
            "b94",
            "emoji-94-40_3ab7358.webp",
            "background-position: -64px -32px;",
            "background-position: -80px -40px;"
          ]
    */
   const [posX, posY] = this.extractPos(data[data.length - 1]);
    return {
      idx : idx,
      url: `/assets/images/webp-icons/${data[5]}`,
      posX: posX,
      posY: posY
    };//this.data.get(k);
  }

  private extractPos(pos : string) : Array<number> {
    //"background-position: -80px -40px;"
    pos = pos.replace('background-position:', '').replace(' ', '');
    const items = pos.split('px');
    let posX = parseInt(items[0].trim());
    let posY = parseInt(items[1].trim());

    return [posX, posY];

  }
  private emojiData : emojiDataType = {
    "94_6": [
      "94",
      "6",
      "8",
      "🛏️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "94_7": [
      "94",
      "7",
      "7",
      "🛐",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "94_4": [
      "94",
      "4",
      "15",
      "🛍️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "94_5": [
      "94",
      "5",
      "2",
      "🛎️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "86_24": [
      "86",
      "24",
      "18",
      "🙉",
      "b86",
      "emoji-86-40_2c85b8c.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "86_23": [
      "86",
      "23",
      "17",
      "🙈",
      "b86",
      "emoji-86-40_2c85b8c.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "94_8": [
      "94",
      "8",
      "3",
      "🛑",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "94_9": [
      "94",
      "9",
      "16",
      "🛒",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "108_24": [
      "108",
      "24",
      "17",
      "🦦",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "40_21": [
      "40",
      "21",
      "16",
      "👨‍❤️‍👨",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "40_22": [
      "40",
      "22",
      "20",
      "👨‍❤️‍💋‍👨",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "108_20": [
      "108",
      "20",
      "9",
      "🦢",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "108_21": [
      "108",
      "21",
      "2",
      "🦣",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "108_22": [
      "108",
      "22",
      "6",
      "🦤",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "108_23": [
      "108",
      "23",
      "18",
      "🦥",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "40_11": [
      "40",
      "11",
      "20",
      "👧",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "40_17": [
      "40",
      "17",
      "1",
      "👨",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "133_10": [
      "133",
      "10",
      "18",
      "🫣",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "70_9": [
      "70",
      "9",
      "19",
      "💈",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "39_18": [
      "39",
      "18",
      "5",
      "👚",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "133_11": [
      "133",
      "11",
      "4",
      "🫤",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "39_19": [
      "39",
      "19",
      "12",
      "👛",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "133_12": [
      "133",
      "12",
      "2",
      "🫥",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "64_20": [
      "64",
      "20",
      "9",
      "👱‍♂️",
      "b64",
      "emoji-64-40_8732587.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "39_23": [
      "39",
      "23",
      "22",
      "👟",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "39_24": [
      "39",
      "24",
      "18",
      "👠",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "39_21": [
      "39",
      "21",
      "11",
      "👝",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "39_22": [
      "39",
      "22",
      "21",
      "👞",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "133_13": [
      "133",
      "13",
      "3",
      "🫦",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "133_14": [
      "133",
      "14",
      "7",
      "🫧",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "133_15": [
      "133",
      "15",
      "18",
      "🫰",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "64_19": [
      "64",
      "19",
      "8",
      "👱‍♀️",
      "b64",
      "emoji-64-40_8732587.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "98_24": [
      "98",
      "24",
      "0",
      "🤥",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "39_20": [
      "39",
      "20",
      "13",
      "👜",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "76_10": [
      "76",
      "10",
      "3",
      "🔑",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "98_22": [
      "98",
      "22",
      "8",
      "🤣",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "98_23": [
      "98",
      "23",
      "15",
      "🤤",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "28_0": [
      "28",
      "0",
      "9",
      "🎿",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "98_20": [
      "98",
      "20",
      "10",
      "🤡",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "98_21": [
      "98",
      "21",
      "22",
      "🤢",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "81_8": [
      "81",
      "8",
      "10",
      "🖖",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "133_21": [
      "133",
      "21",
      "14",
      "🫱",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "28_6": [
      "28",
      "6",
      "6",
      "🏃‍♂️",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "28_5": [
      "28",
      "5",
      "4",
      "🏃‍♀️",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "28_4": [
      "28",
      "4",
      "5",
      "🏃",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "28_3": [
      "28",
      "3",
      "11",
      "🏂",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "28_2": [
      "28",
      "2",
      "3",
      "🏁",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "28_1": [
      "28",
      "1",
      "1",
      "🏀",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "108_17": [
      "108",
      "17",
      "21",
      "🦟",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "39_12": [
      "39",
      "12",
      "10",
      "👔",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "108_18": [
      "108",
      "18",
      "7",
      "🦠",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "39_13": [
      "39",
      "13",
      "6",
      "👕",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "81_1": [
      "81",
      "1",
      "9",
      "🖐️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "39_10": [
      "39",
      "10",
      "5",
      "👒",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "108_19": [
      "108",
      "19",
      "15",
      "🦡",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "39_11": [
      "39",
      "11",
      "17",
      "👓",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "39_16": [
      "39",
      "16",
      "14",
      "👘",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "108_13": [
      "108",
      "13",
      "4",
      "🦛",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "39_17": [
      "39",
      "17",
      "12",
      "👙",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "108_14": [
      "108",
      "14",
      "8",
      "🦜",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "39_14": [
      "39",
      "14",
      "7",
      "👖",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "108_15": [
      "108",
      "15",
      "13",
      "🦝",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "98_19": [
      "98",
      "19",
      "5",
      "🤠",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "81_2": [
      "81",
      "2",
      "17",
      "🖕",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "39_15": [
      "39",
      "15",
      "11",
      "👗",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "108_16": [
      "108",
      "16",
      "10",
      "🦞",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "108_10": [
      "108",
      "10",
      "9",
      "🦘",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "108_11": [
      "108",
      "11",
      "18",
      "🦙",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "108_12": [
      "108",
      "12",
      "7",
      "🦚",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "98_13": [
      "98",
      "13",
      "19",
      "🤟",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "76_23": [
      "76",
      "23",
      "14",
      "🔞",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "27_12": [
      "27",
      "12",
      "12",
      "🎲",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "76_22": [
      "76",
      "22",
      "19",
      "🔝",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "27_11": [
      "27",
      "11",
      "9",
      "🎱",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "131_8": [
      "131",
      "8",
      "12",
      "🪦",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "27_10": [
      "27",
      "10",
      "17",
      "🎰",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "39_3": [
      "39",
      "3",
      "6",
      "👐",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "131_9": [
      "131",
      "9",
      "15",
      "🪧",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "27_16": [
      "27",
      "16",
      "3",
      "🎶",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "27_15": [
      "27",
      "15",
      "2",
      "🎵",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "27_14": [
      "27",
      "14",
      "3",
      "🎴",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "27_13": [
      "27",
      "13",
      "15",
      "🎳",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "131_2": [
      "131",
      "2",
      "12",
      "🪠",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "131_3": [
      "131",
      "3",
      "1",
      "🪡",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "131_0": [
      "131",
      "0",
      "13",
      "🪞",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "131_1": [
      "131",
      "1",
      "14",
      "🪟",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "131_6": [
      "131",
      "6",
      "22",
      "🪤",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "131_10": [
      "131",
      "10",
      "23",
      "🪨",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "131_7": [
      "131",
      "7",
      "21",
      "🪥",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "131_4": [
      "131",
      "4",
      "22",
      "🪢",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "131_5": [
      "131",
      "5",
      "0",
      "🪣",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "131_14": [
      "131",
      "14",
      "18",
      "🪬",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "131_13": [
      "131",
      "13",
      "16",
      "🪫",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "92_1": [
      "92",
      "1",
      "2",
      "🚵",
      "b92",
      "emoji-92-40_392e1a7.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "131_12": [
      "131",
      "12",
      "8",
      "🪪",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "131_11": [
      "131",
      "11",
      "4",
      "🪩",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "131_18": [
      "131",
      "18",
      "20",
      "🪳",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "131_17": [
      "131",
      "17",
      "19",
      "🪲",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "92_2": [
      "92",
      "2",
      "1",
      "🚵‍♀️",
      "b92",
      "emoji-92-40_392e1a7.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "131_16": [
      "131",
      "16",
      "12",
      "🪱",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "92_3": [
      "92",
      "3",
      "3",
      "🚵‍♂️",
      "b92",
      "emoji-92-40_392e1a7.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "131_15": [
      "131",
      "15",
      "18",
      "🪰",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "131_19": [
      "131",
      "19",
      "13",
      "🪴",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "76_12": [
      "76",
      "12",
      "5",
      "🔓",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "27_23": [
      "27",
      "23",
      "3",
      "🎽",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "76_11": [
      "76",
      "11",
      "4",
      "🔒",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "27_22": [
      "27",
      "22",
      "2",
      "🎼",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "76_14": [
      "76",
      "14",
      "16",
      "🔕",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "27_21": [
      "27",
      "21",
      "11",
      "🎻",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "76_13": [
      "76",
      "13",
      "15",
      "🔔",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "27_20": [
      "27",
      "20",
      "7",
      "🎺",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "76_16": [
      "76",
      "16",
      "8",
      "🔗",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "76_15": [
      "76",
      "15",
      "6",
      "🔖",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "76_18": [
      "76",
      "18",
      "17",
      "🔙",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "76_17": [
      "76",
      "17",
      "2",
      "🔘",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "27_24": [
      "27",
      "24",
      "5",
      "🎾",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "76_19": [
      "76",
      "19",
      "16",
      "🔚",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "131_21": [
      "131",
      "21",
      "3",
      "🪶",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "131_20": [
      "131",
      "20",
      "7",
      "🪵",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "131_24": [
      "131",
      "24",
      "19",
      "🪹",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "131_23": [
      "131",
      "23",
      "22",
      "🪸",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "131_22": [
      "131",
      "22",
      "5",
      "🪷",
      "b131",
      "emoji-131-40_5a941ba.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "39_9": [
      "39",
      "9",
      "9",
      "👑",
      "b39",
      "emoji-39-40_deaed36.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "27_19": [
      "27",
      "19",
      "3",
      "🎹",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "27_18": [
      "27",
      "18",
      "9",
      "🎸",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "27_17": [
      "27",
      "17",
      "6",
      "🎷",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "76_21": [
      "76",
      "21",
      "20",
      "🔜",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "76_20": [
      "76",
      "20",
      "18",
      "🔛",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "15_2": [
      "15",
      "2",
      "19",
      "🇱🇺",
      "b15",
      "emoji-15-40_5a05f43.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "15_1": [
      "15",
      "1",
      "18",
      "🇱🇹",
      "b15",
      "emoji-15-40_5a05f43.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "15_0": [
      "15",
      "0",
      "14",
      "🇱🇸",
      "b15",
      "emoji-15-40_5a05f43.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "15_4": [
      "15",
      "4",
      "16",
      "🇱🇾",
      "b15",
      "emoji-15-40_5a05f43.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "15_3": [
      "15",
      "3",
      "12",
      "🇱🇻",
      "b15",
      "emoji-15-40_5a05f43.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "88_24": [
      "88",
      "24",
      "2",
      "🚀",
      "b88",
      "emoji-88-40_f4a6a53.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "15_10": [
      "15",
      "10",
      "21",
      "🇲🇬",
      "b15",
      "emoji-15-40_5a05f43.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "26_2": [
      "26",
      "2",
      "23",
      "🎊",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "1_19": [
      "1",
      "19",
      "16",
      "Ⓜ️",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "26_1": [
      "26",
      "1",
      "0",
      "🎉",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "26_0": [
      "26",
      "0",
      "18",
      "🎈",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "1_15": [
      "1",
      "15",
      "13",
      "⏳",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "1_14": [
      "1",
      "14",
      "9",
      "⏲️",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "1_13": [
      "1",
      "13",
      "8",
      "⏱️",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "26_9": [
      "26",
      "9",
      "21",
      "🎑",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "26_8": [
      "26",
      "8",
      "3",
      "🎐",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "26_7": [
      "26",
      "7",
      "19",
      "🎏",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "15_16": [
      "15",
      "16",
      "20",
      "🇲🇴",
      "b15",
      "emoji-15-40_5a05f43.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "26_6": [
      "26",
      "6",
      "1",
      "🎎",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "26_5": [
      "26",
      "5",
      "12",
      "🎍",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "66_11": [
      "66",
      "11",
      "19",
      "👶",
      "b66",
      "emoji-66-40_d74d5c0.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "26_4": [
      "26",
      "4",
      "2",
      "🎌",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "26_3": [
      "26",
      "3",
      "14",
      "🎋",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "15_24": [
      "15",
      "24",
      "22",
      "🇲🇼",
      "b15",
      "emoji-15-40_5a05f43.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "88_18": [
      "88",
      "18",
      "19",
      "🙏",
      "b88",
      "emoji-88-40_f4a6a53.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "1_12": [
      "1",
      "12",
      "10",
      "⏰",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "37_5": [
      "37",
      "5",
      "2",
      "👈",
      "b37",
      "emoji-37-40_e3230b6.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "1_24": [
      "1",
      "24",
      "1",
      "◻️",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "20_20": [
      "20",
      "20",
      "9",
      "🌉",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "90_8": [
      "90",
      "8",
      "11",
      "🚢",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "90_9": [
      "90",
      "9",
      "20",
      "🚣",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "90_2": [
      "90",
      "2",
      "13",
      "🚜",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "20_17": [
      "20",
      "17",
      "5",
      "🌆",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "20_16": [
      "20",
      "16",
      "23",
      "🌅",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "90_3": [
      "90",
      "3",
      "11",
      "🚝",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "90_0": [
      "90",
      "0",
      "11",
      "🚚",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "20_15": [
      "20",
      "15",
      "0",
      "🌄",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "72_19": [
      "72",
      "19",
      "1",
      "💵",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "90_1": [
      "90",
      "1",
      "12",
      "🚛",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "20_14": [
      "20",
      "14",
      "7",
      "🌃",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "72_18": [
      "72",
      "18",
      "2",
      "💴",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "90_6": [
      "90",
      "6",
      "6",
      "🚠",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "20_13": [
      "20",
      "13",
      "20",
      "🌂",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "72_17": [
      "72",
      "17",
      "7",
      "💳",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "90_7": [
      "90",
      "7",
      "5",
      "🚡",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "20_12": [
      "20",
      "12",
      "10",
      "🌁",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "135_15": [
      "135",
      "15",
      "20",
      "🫵",
      "b135",
      "emoji-135-40_58993c4.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "72_16": [
      "72",
      "16",
      "10",
      "💲",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "20_11": [
      "20",
      "11",
      "17",
      "🌀",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "90_4": [
      "90",
      "4",
      "10",
      "🚞",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "72_15": [
      "72",
      "15",
      "11",
      "💱",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "20_10": [
      "20",
      "10",
      "23",
      "🉑",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "90_5": [
      "90",
      "5",
      "7",
      "🚟",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "72_14": [
      "72",
      "14",
      "6",
      "💰",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "72_13": [
      "72",
      "13",
      "7",
      "💯",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "32_10": [
      "32",
      "10",
      "23",
      "🏭",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "1_21": [
      "1",
      "21",
      "21",
      "▫️",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "72_12": [
      "72",
      "12",
      "11",
      "💮",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "1_20": [
      "1",
      "20",
      "20",
      "▪️",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "72_11": [
      "72",
      "11",
      "20",
      "💭",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "72_10": [
      "72",
      "10",
      "19",
      "💬",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "20_19": [
      "20",
      "19",
      "13",
      "🌈",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "20_18": [
      "20",
      "18",
      "4",
      "🌇",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "129_1": [
      "129",
      "1",
      "13",
      "🧮",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "129_2": [
      "129",
      "2",
      "22",
      "🧯",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "129_0": [
      "129",
      "0",
      "7",
      "🧭",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "129_5": [
      "129",
      "5",
      "1",
      "🧲",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "129_6": [
      "129",
      "6",
      "16",
      "🧳",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "129_3": [
      "129",
      "3",
      "12",
      "🧰",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "129_4": [
      "129",
      "4",
      "23",
      "🧱",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "135_21": [
      "135",
      "21",
      "4",
      "🫶",
      "b135",
      "emoji-135-40_58993c4.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "20_24": [
      "20",
      "24",
      "1",
      "🌍",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "20_23": [
      "20",
      "23",
      "8",
      "🌌",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "20_22": [
      "20",
      "22",
      "11",
      "🌋",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "20_21": [
      "20",
      "21",
      "10",
      "🌊",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "129_9": [
      "129",
      "9",
      "23",
      "🧶",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "123_12": [
      "123",
      "12",
      "18",
      "🧔‍♂️",
      "b123",
      "emoji-123-40_d0b83e6.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "72_24": [
      "72",
      "24",
      "0",
      "💺",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "72_23": [
      "72",
      "23",
      "10",
      "💹",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "129_7": [
      "129",
      "7",
      "1",
      "🧴",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "123_10": [
      "123",
      "10",
      "17",
      "🧔",
      "b123",
      "emoji-123-40_d0b83e6.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "72_22": [
      "72",
      "22",
      "0",
      "💸",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "129_8": [
      "129",
      "8",
      "0",
      "🧵",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "123_11": [
      "123",
      "11",
      "16",
      "🧔‍♀️",
      "b123",
      "emoji-123-40_d0b83e6.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "72_21": [
      "72",
      "21",
      "4",
      "💷",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "72_20": [
      "72",
      "20",
      "3",
      "💶",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "13_4": [
      "13",
      "4",
      "4",
      "🇬🇵",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "13_3": [
      "13",
      "3",
      "8",
      "🇬🇳",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "50_10": [
      "50",
      "10",
      "17",
      "👩‍❤️‍💋‍👨",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "13_2": [
      "13",
      "2",
      "20",
      "🇬🇲",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "13_1": [
      "13",
      "1",
      "2",
      "🇬🇱",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "13_0": [
      "13",
      "0",
      "0",
      "🇬🇮",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "50_11": [
      "50",
      "11",
      "18",
      "👩‍❤️‍💋‍👩",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "111_23": [
      "111",
      "23",
      "9",
      "🧍‍♂️",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "111_22": [
      "111",
      "22",
      "7",
      "🧍‍♀️",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "111_21": [
      "111",
      "21",
      "8",
      "🧍",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "84_23": [
      "84",
      "23",
      "1",
      "😷",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "13_9": [
      "13",
      "9",
      "5",
      "🇬🇺",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "84_24": [
      "84",
      "24",
      "20",
      "😸",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "13_8": [
      "13",
      "8",
      "6",
      "🇬🇹",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "84_21": [
      "84",
      "21",
      "1",
      "😶",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "84_22": [
      "84",
      "22",
      "10",
      "😶‍🌫️",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "13_6": [
      "13",
      "6",
      "1",
      "🇬🇷",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "13_5": [
      "13",
      "5",
      "5",
      "🇬🇶",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "84_20": [
      "84",
      "20",
      "19",
      "😵‍💫",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "19_15": [
      "19",
      "15",
      "8",
      "🇽🇰",
      "b19",
      "emoji-19-40_18ef0e5.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "24_4": [
      "24",
      "4",
      "2",
      "🍟",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "50_20": [
      "50",
      "20",
      "12",
      "👩‍👦",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "24_3": [
      "24",
      "3",
      "10",
      "🍞",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "50_21": [
      "50",
      "21",
      "15",
      "👩‍👦‍👦",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "24_2": [
      "24",
      "2",
      "16",
      "🍝",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "24_1": [
      "24",
      "1",
      "17",
      "🍜",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "24_0": [
      "24",
      "0",
      "19",
      "🍛",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "50_24": [
      "50",
      "24",
      "16",
      "👩‍👧‍👧",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "107_4": [
      "107",
      "4",
      "5",
      "🥹",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "84_18": [
      "84",
      "18",
      "14",
      "😴",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "107_3": [
      "107",
      "3",
      "8",
      "🥸",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "84_19": [
      "84",
      "19",
      "18",
      "😵",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "107_6": [
      "107",
      "6",
      "15",
      "🥻",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "50_22": [
      "50",
      "22",
      "13",
      "👩‍👧",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "84_16": [
      "84",
      "16",
      "12",
      "😲",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "50_23": [
      "50",
      "23",
      "14",
      "👩‍👧‍👦",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "84_17": [
      "84",
      "17",
      "7",
      "😳",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "107_5": [
      "107",
      "5",
      "23",
      "🥺",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "111_12": [
      "111",
      "12",
      "4",
      "🧄",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "84_14": [
      "84",
      "14",
      "13",
      "😰",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "111_11": [
      "111",
      "11",
      "9",
      "🧃",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "84_15": [
      "84",
      "15",
      "11",
      "😱",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "111_10": [
      "111",
      "10",
      "5",
      "🧂",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "84_12": [
      "84",
      "12",
      "17",
      "😮‍💨",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "24_9": [
      "24",
      "9",
      "0",
      "🍤",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "84_13": [
      "84",
      "13",
      "8",
      "😯",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "24_8": [
      "24",
      "8",
      "20",
      "🍣",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "84_10": [
      "84",
      "10",
      "1",
      "😭",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "24_7": [
      "24",
      "7",
      "7",
      "🍢",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "84_11": [
      "84",
      "11",
      "11",
      "😮",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "24_6": [
      "24",
      "6",
      "8",
      "🍡",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "24_5": [
      "24",
      "5",
      "7",
      "🍠",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "111_19": [
      "111",
      "19",
      "11",
      "🧋",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "111_18": [
      "111",
      "18",
      "22",
      "🧊",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "111_17": [
      "111",
      "17",
      "20",
      "🧉",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "19_24": [
      "19",
      "24",
      "9",
      "🈯",
      "b19",
      "emoji-19-40_18ef0e5.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "111_16": [
      "111",
      "16",
      "16",
      "🧈",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "19_23": [
      "19",
      "23",
      "5",
      "🈚",
      "b19",
      "emoji-19-40_18ef0e5.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "111_15": [
      "111",
      "15",
      "18",
      "🧇",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "111_14": [
      "111",
      "14",
      "7",
      "🧆",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "111_13": [
      "111",
      "13",
      "5",
      "🧅",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "107_8": [
      "107",
      "8",
      "19",
      "🥽",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "107_7": [
      "107",
      "7",
      "3",
      "🥼",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "19_22": [
      "19",
      "22",
      "1",
      "🈂️",
      "b19",
      "emoji-19-40_18ef0e5.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "19_21": [
      "19",
      "21",
      "14",
      "🈁",
      "b19",
      "emoji-19-40_18ef0e5.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "107_9": [
      "107",
      "9",
      "23",
      "🥾",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "35_5": [
      "35",
      "5",
      "15",
      "🐬",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "35_6": [
      "35",
      "6",
      "2",
      "🐭",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "35_7": [
      "35",
      "7",
      "12",
      "🐮",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "35_8": [
      "35",
      "8",
      "10",
      "🐯",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "35_9": [
      "35",
      "9",
      "4",
      "🐰",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "35_0": [
      "35",
      "0",
      "22",
      "🐧",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "35_1": [
      "35",
      "1",
      "9",
      "🐨",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "35_2": [
      "35",
      "2",
      "22",
      "🐩",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "35_3": [
      "35",
      "3",
      "6",
      "🐪",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "35_4": [
      "35",
      "4",
      "7",
      "🐫",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "62_15": [
      "62",
      "15",
      "12",
      "👬",
      "b62",
      "emoji-62-40_eef8b24.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "96_21": [
      "96",
      "21",
      "20",
      "🤘",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "96_20": [
      "96",
      "20",
      "16",
      "🤗",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "30_14": [
      "30",
      "14",
      "14",
      "🏋️‍♂️",
      "b30",
      "emoji-30-40_9f9ff3a.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "30_13": [
      "30",
      "13",
      "13",
      "🏋️‍♀️",
      "b30",
      "emoji-30-40_9f9ff3a.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "3_15": [
      "3",
      "15",
      "18",
      "♑",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "3_16": [
      "3",
      "16",
      "19",
      "♒",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "3_17": [
      "3",
      "17",
      "20",
      "♓",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "9_0": [
      "9",
      "0",
      "23",
      "🅾️",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "9_1": [
      "9",
      "1",
      "22",
      "🅿️",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "3_18": [
      "3",
      "18",
      "13",
      "♟️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "3_19": [
      "3",
      "19",
      "22",
      "♠️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "9_2": [
      "9",
      "2",
      "21",
      "🆎",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "9_3": [
      "9",
      "3",
      "22",
      "🆑",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "9_4": [
      "9",
      "4",
      "23",
      "🆒",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "9_6": [
      "9",
      "6",
      "21",
      "🆔",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "9_8": [
      "9",
      "8",
      "20",
      "🆖",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "9_9": [
      "9",
      "9",
      "21",
      "🆗",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "3_10": [
      "3",
      "10",
      "13",
      "♌",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "62_21": [
      "62",
      "21",
      "11",
      "👭",
      "b62",
      "emoji-62-40_eef8b24.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "3_11": [
      "3",
      "11",
      "14",
      "♍",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "96_18": [
      "96",
      "18",
      "3",
      "🤕",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "3_12": [
      "3",
      "12",
      "15",
      "♎",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "96_17": [
      "96",
      "17",
      "17",
      "🤔",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "3_13": [
      "3",
      "13",
      "16",
      "♏",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "3_14": [
      "3",
      "14",
      "17",
      "♐",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "96_19": [
      "96",
      "19",
      "17",
      "🤖",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "96_14": [
      "96",
      "14",
      "4",
      "🤑",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "96_13": [
      "96",
      "13",
      "20",
      "🤐",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "96_16": [
      "96",
      "16",
      "6",
      "🤓",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "96_15": [
      "96",
      "15",
      "2",
      "🤒",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "74_20": [
      "74",
      "20",
      "8",
      "📨",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "29_14": [
      "29",
      "14",
      "7",
      "🏉",
      "b29",
      "emoji-29-40_840ee23.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "11_5": [
      "11",
      "5",
      "12",
      "🇨🇬",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "74_21": [
      "74",
      "21",
      "7",
      "📩",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "29_13": [
      "29",
      "13",
      "2",
      "🏈",
      "b29",
      "emoji-29-40_840ee23.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "11_4": [
      "11",
      "4",
      "3",
      "🇨🇫",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "74_22": [
      "74",
      "22",
      "16",
      "📪",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "11_3": [
      "11",
      "3",
      "13",
      "🇨🇩",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "74_23": [
      "74",
      "23",
      "17",
      "📫",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "11_2": [
      "11",
      "2",
      "9",
      "🇨🇨",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "74_24": [
      "74",
      "24",
      "18",
      "📬",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "11_1": [
      "11",
      "1",
      "22",
      "🇨🇦",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "29_17": [
      "29",
      "17",
      "15",
      "🏊‍♂️",
      "b29",
      "emoji-29-40_840ee23.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "11_0": [
      "11",
      "0",
      "7",
      "🇧🇿",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "29_16": [
      "29",
      "16",
      "13",
      "🏊‍♀️",
      "b29",
      "emoji-29-40_840ee23.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "29_15": [
      "29",
      "15",
      "14",
      "🏊",
      "b29",
      "emoji-29-40_840ee23.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "11_9": [
      "11",
      "9",
      "6",
      "🇨🇱",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "11_8": [
      "11",
      "8",
      "14",
      "🇨🇰",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "11_7": [
      "11",
      "7",
      "16",
      "🇨🇮",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "3_20": [
      "3",
      "20",
      "23",
      "♣️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "3_21": [
      "3",
      "21",
      "0",
      "♥️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "3_22": [
      "3",
      "22",
      "1",
      "♦️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "3_23": [
      "3",
      "23",
      "9",
      "♨️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "3_24": [
      "3",
      "24",
      "7",
      "♻️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "22_6": [
      "22",
      "6",
      "9",
      "🌯",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "74_10": [
      "74",
      "10",
      "22",
      "📞",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "22_5": [
      "22",
      "5",
      "8",
      "🌮",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "74_11": [
      "74",
      "11",
      "0",
      "📟",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "22_4": [
      "22",
      "4",
      "0",
      "🌭",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "109_0": [
      "109",
      "0",
      "1",
      "🦧",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "74_12": [
      "74",
      "12",
      "1",
      "📠",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "22_3": [
      "22",
      "3",
      "3",
      "🌬️",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "74_13": [
      "74",
      "13",
      "14",
      "📡",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "22_2": [
      "22",
      "2",
      "11",
      "🌫️",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "109_2": [
      "109",
      "2",
      "10",
      "🦩",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "74_14": [
      "74",
      "14",
      "18",
      "📢",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "22_1": [
      "22",
      "1",
      "12",
      "🌪️",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "109_1": [
      "109",
      "1",
      "14",
      "🦨",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "74_15": [
      "74",
      "15",
      "17",
      "📣",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "22_0": [
      "22",
      "0",
      "22",
      "🌩️",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "109_4": [
      "109",
      "4",
      "16",
      "🦫",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "74_16": [
      "74",
      "16",
      "12",
      "📤",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "109_3": [
      "109",
      "3",
      "23",
      "🦪",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "74_17": [
      "74",
      "17",
      "11",
      "📥",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "74_18": [
      "74",
      "18",
      "13",
      "📦",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "74_19": [
      "74",
      "19",
      "9",
      "📧",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "22_9": [
      "22",
      "9",
      "4",
      "🌲",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "22_8": [
      "22",
      "8",
      "8",
      "🌱",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "22_7": [
      "22",
      "7",
      "23",
      "🌰",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "109_6": [
      "109",
      "6",
      "19",
      "🦭",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "109_5": [
      "109",
      "5",
      "10",
      "🦬",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "109_8": [
      "109",
      "8",
      "14",
      "🦯",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "109_7": [
      "109",
      "7",
      "23",
      "🦮",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "109_9": [
      "109",
      "9",
      "23",
      "🦴",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "79_6": [
      "79",
      "6",
      "1",
      "🕤",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "79_5": [
      "79",
      "5",
      "0",
      "🕣",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "79_8": [
      "79",
      "8",
      "3",
      "🕦",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "79_7": [
      "79",
      "7",
      "2",
      "🕥",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "33_3": [
      "33",
      "3",
      "14",
      "🏺",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "33_2": [
      "33",
      "2",
      "22",
      "🏹",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "23_10": [
      "23",
      "10",
      "5",
      "🍌",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "79_9": [
      "79",
      "9",
      "4",
      "🕧",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "33_1": [
      "33",
      "1",
      "12",
      "🏸",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "33_0": [
      "33",
      "0",
      "14",
      "🏷️",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "23_12": [
      "23",
      "12",
      "1",
      "🍎",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "23_11": [
      "23",
      "11",
      "14",
      "🍍",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "69_11": [
      "69",
      "11",
      "2",
      "💆‍♂️",
      "b69",
      "emoji-69-40_d35c5cd.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "79_0": [
      "79",
      "0",
      "19",
      "🕞",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "11_23": [
      "11",
      "23",
      "23",
      "🇩🇯",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "11_24": [
      "11",
      "24",
      "22",
      "🇩🇰",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "79_2": [
      "79",
      "2",
      "21",
      "🕠",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "79_1": [
      "79",
      "1",
      "20",
      "🕟",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "33_9": [
      "33",
      "9",
      "20",
      "🐀",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "79_4": [
      "79",
      "4",
      "23",
      "🕢",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "79_3": [
      "79",
      "3",
      "22",
      "🕡",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "69_10": [
      "69",
      "10",
      "1",
      "💆‍♀️",
      "b69",
      "emoji-69-40_d35c5cd.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "114_22": [
      "114",
      "22",
      "6",
      "🧑‍🦰",
      "b114",
      "emoji-114-40_b2087de.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "114_21": [
      "114",
      "21",
      "23",
      "🧑‍🦯",
      "b114",
      "emoji-114-40_b2087de.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "23_21": [
      "23",
      "21",
      "21",
      "🍗",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "114_24": [
      "114",
      "24",
      "14",
      "🧑‍🦲",
      "b114",
      "emoji-114-40_b2087de.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "23_20": [
      "23",
      "20",
      "22",
      "🍖",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "114_23": [
      "114",
      "23",
      "3",
      "🧑‍🦱",
      "b114",
      "emoji-114-40_b2087de.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "23_23": [
      "23",
      "23",
      "1",
      "🍙",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "23_22": [
      "23",
      "22",
      "3",
      "🍘",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "69_23": [
      "69",
      "23",
      "0",
      "💇‍♂️",
      "b69",
      "emoji-69-40_d35c5cd.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "7_5": [
      "7",
      "5",
      "18",
      "✍️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "7_6": [
      "7",
      "6",
      "23",
      "✏️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "7_7": [
      "7",
      "7",
      "19",
      "✒️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "7_8": [
      "7",
      "8",
      "0",
      "✔️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "92_16": [
      "92",
      "16",
      "21",
      "🚶‍♂️",
      "b92",
      "emoji-92-40_392e1a7.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "7_9": [
      "7",
      "9",
      "7",
      "✖️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "92_15": [
      "92",
      "15",
      "19",
      "🚶‍♀️",
      "b92",
      "emoji-92-40_392e1a7.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "92_14": [
      "92",
      "14",
      "20",
      "🚶",
      "b92",
      "emoji-92-40_392e1a7.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "23_14": [
      "23",
      "14",
      "2",
      "🍐",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "23_13": [
      "23",
      "13",
      "0",
      "🍏",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "23_16": [
      "23",
      "16",
      "11",
      "🍒",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "23_15": [
      "23",
      "15",
      "12",
      "🍑",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "23_18": [
      "23",
      "18",
      "1",
      "🍔",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "23_17": [
      "23",
      "17",
      "8",
      "🍓",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "23_19": [
      "23",
      "19",
      "3",
      "🍕",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "115_2": [
      "115",
      "2",
      "14",
      "🧑‍🦽",
      "b115",
      "emoji-115-40_4705da5.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "115_1": [
      "115",
      "1",
      "17",
      "🧑‍🦼",
      "b115",
      "emoji-115-40_4705da5.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "115_0": [
      "115",
      "0",
      "11",
      "🧑‍🦳",
      "b115",
      "emoji-115-40_4705da5.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "11_10": [
      "11",
      "10",
      "21",
      "🇨🇲",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "70_15": [
      "70",
      "15",
      "9",
      "💎",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "11_11": [
      "11",
      "11",
      "7",
      "🇨🇳",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "70_16": [
      "70",
      "16",
      "19",
      "💏",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "70_13": [
      "70",
      "13",
      "10",
      "💌",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "70_14": [
      "70",
      "14",
      "10",
      "💍",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "70_11": [
      "70",
      "11",
      "3",
      "💊",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "70_12": [
      "70",
      "12",
      "1",
      "💋",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "70_10": [
      "70",
      "10",
      "4",
      "💉",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "20_8": [
      "20",
      "8",
      "7",
      "🈺",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "20_7": [
      "20",
      "7",
      "17",
      "🈹",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "20_6": [
      "20",
      "6",
      "6",
      "🈸",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "20_5": [
      "20",
      "5",
      "8",
      "🈷️",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "20_4": [
      "20",
      "4",
      "4",
      "🈶",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "20_3": [
      "20",
      "3",
      "16",
      "🈵",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "20_2": [
      "20",
      "2",
      "15",
      "🈴",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "33_24": [
      "33",
      "24",
      "14",
      "🐎",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "20_1": [
      "20",
      "1",
      "0",
      "🈳",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "33_23": [
      "33",
      "23",
      "3",
      "🐍",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "11_14": [
      "11",
      "14",
      "15",
      "🇨🇷",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "11_15": [
      "11",
      "15",
      "18",
      "🇨🇺",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "11_12": [
      "11",
      "12",
      "10",
      "🇨🇴",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "11_18": [
      "11",
      "18",
      "8",
      "🇨🇽",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "11_19": [
      "11",
      "19",
      "20",
      "🇨🇾",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "11_16": [
      "11",
      "16",
      "0",
      "🇨🇻",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "11_17": [
      "11",
      "17",
      "19",
      "🇨🇼",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "20_9": [
      "20",
      "9",
      "12",
      "🉐",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "66_5": [
      "66",
      "5",
      "19",
      "👵",
      "b66",
      "emoji-66-40_d74d5c0.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "5_10": [
      "5",
      "10",
      "6",
      "⛵",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "5_12": [
      "5",
      "12",
      "7",
      "⛸️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "5_11": [
      "5",
      "11",
      "10",
      "⛷️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "11_21": [
      "11",
      "21",
      "22",
      "🇩🇪",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "11_20": [
      "11",
      "20",
      "21",
      "🇨🇿",
      "b11",
      "emoji-11-40_6b95d49.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "20_0": [
      "20",
      "0",
      "18",
      "🈲",
      "b20",
      "emoji-20-40_5566f14.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "70_22": [
      "70",
      "22",
      "1",
      "💐",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "70_23": [
      "70",
      "23",
      "15",
      "💑",
      "b70",
      "emoji-70-40_8793169.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "77_8": [
      "77",
      "8",
      "15",
      "🔨",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "31_8": [
      "31",
      "8",
      "13",
      "🏒",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "33_19": [
      "33",
      "19",
      "0",
      "🐉",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "77_7": [
      "77",
      "7",
      "14",
      "🔧",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "31_7": [
      "31",
      "7",
      "14",
      "🏑",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "33_18": [
      "33",
      "18",
      "2",
      "🐈‍⬛",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "31_6": [
      "31",
      "6",
      "6",
      "🏐",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "33_17": [
      "33",
      "17",
      "1",
      "🐈",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "77_9": [
      "77",
      "9",
      "20",
      "🔩",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "31_5": [
      "31",
      "5",
      "16",
      "🏏",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "33_16": [
      "33",
      "16",
      "12",
      "🐇",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "31_4": [
      "31",
      "4",
      "5",
      "🏎️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "33_15": [
      "33",
      "15",
      "22",
      "🐆",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "31_3": [
      "31",
      "3",
      "21",
      "🏍️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "33_14": [
      "33",
      "14",
      "21",
      "🐅",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "31_2": [
      "31",
      "2",
      "5",
      "🏌️‍♂️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "33_13": [
      "33",
      "13",
      "13",
      "🐄",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "31_1": [
      "31",
      "1",
      "3",
      "🏌️‍♀️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "33_12": [
      "33",
      "12",
      "11",
      "🐃",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "77_0": [
      "77",
      "0",
      "19",
      "🔠",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "82_22": [
      "82",
      "22",
      "12",
      "😇",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "82_21": [
      "82",
      "21",
      "4",
      "😆",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "82_24": [
      "82",
      "24",
      "15",
      "😉",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "77_1": [
      "77",
      "1",
      "18",
      "🔡",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "82_23": [
      "82",
      "23",
      "6",
      "😈",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "77_4": [
      "77",
      "4",
      "17",
      "🔤",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "77_3": [
      "77",
      "3",
      "15",
      "🔣",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "77_6": [
      "77",
      "6",
      "19",
      "🔦",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "82_20": [
      "82",
      "20",
      "6",
      "😅",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "31_9": [
      "31",
      "9",
      "11",
      "🏓",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "77_5": [
      "77",
      "5",
      "11",
      "🔥",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "104_22": [
      "104",
      "22",
      "23",
      "🥄",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "104_23": [
      "104",
      "23",
      "18",
      "🥅",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "5_23": [
      "5",
      "23",
      "21",
      "⛹️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "104_20": [
      "104",
      "20",
      "15",
      "🥂",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "104_21": [
      "104",
      "21",
      "17",
      "🥃",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "5_24": [
      "5",
      "24",
      "20",
      "⛹️‍♀️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "104_24": [
      "104",
      "24",
      "8",
      "🥇",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "31_0": [
      "31",
      "0",
      "4",
      "🏌️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "21_22": [
      "21",
      "22",
      "19",
      "🌦️",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "33_22": [
      "33",
      "22",
      "15",
      "🐌",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "21_23": [
      "21",
      "23",
      "20",
      "🌧️",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "33_21": [
      "33",
      "21",
      "17",
      "🐋",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "21_24": [
      "21",
      "24",
      "23",
      "🌨️",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "33_20": [
      "33",
      "20",
      "20",
      "🐊",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "82_19": [
      "82",
      "19",
      "2",
      "😄",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "82_18": [
      "82",
      "18",
      "1",
      "😃",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "104_5": [
      "104",
      "5",
      "0",
      "🤾‍♀️",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "104_4": [
      "104",
      "4",
      "1",
      "🤾",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "82_15": [
      "82",
      "15",
      "0",
      "😀",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "82_14": [
      "82",
      "14",
      "21",
      "🗿",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "104_6": [
      "104",
      "6",
      "2",
      "🤾‍♂️",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "5_0": [
      "5",
      "0",
      "7",
      "⛑️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "82_17": [
      "82",
      "17",
      "7",
      "😂",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "5_1": [
      "5",
      "1",
      "0",
      "⛓️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "82_16": [
      "82",
      "16",
      "3",
      "😁",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "5_2": [
      "5",
      "2",
      "4",
      "⛔",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "82_11": [
      "82",
      "11",
      "23",
      "🗼",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "82_10": [
      "82",
      "10",
      "14",
      "🗻",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "5_3": [
      "5",
      "3",
      "17",
      "⛩️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "42_2": [
      "42",
      "2",
      "0",
      "👨‍🦯",
      "b42",
      "emoji-42-40_9dce20f.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "82_13": [
      "82",
      "13",
      "20",
      "🗾",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "5_4": [
      "5",
      "4",
      "12",
      "⛪",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "42_3": [
      "42",
      "3",
      "7",
      "👨‍🦰",
      "b42",
      "emoji-42-40_9dce20f.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "82_12": [
      "82",
      "12",
      "22",
      "🗽",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "5_5": [
      "5",
      "5",
      "12",
      "⛰️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "42_4": [
      "42",
      "4",
      "4",
      "👨‍🦱",
      "b42",
      "emoji-42-40_9dce20f.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "5_6": [
      "5",
      "6",
      "7",
      "⛱️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "42_5": [
      "42",
      "5",
      "15",
      "👨‍🦲",
      "b42",
      "emoji-42-40_9dce20f.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "5_7": [
      "5",
      "7",
      "6",
      "⛲",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "42_6": [
      "42",
      "6",
      "12",
      "👨‍🦳",
      "b42",
      "emoji-42-40_9dce20f.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "5_8": [
      "5",
      "8",
      "19",
      "⛳",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "42_7": [
      "42",
      "7",
      "18",
      "👨‍🦼",
      "b42",
      "emoji-42-40_9dce20f.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "5_9": [
      "5",
      "9",
      "10",
      "⛴️",
      "b5",
      "emoji-5-40_cf53449.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "42_8": [
      "42",
      "8",
      "15",
      "👨‍🦽",
      "b42",
      "emoji-42-40_9dce20f.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "33_11": [
      "33",
      "11",
      "12",
      "🐂",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "33_10": [
      "33",
      "10",
      "19",
      "🐁",
      "b33",
      "emoji-33-40_f8bc50b.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "21_10": [
      "21",
      "10",
      "18",
      "🌘",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "94_22": [
      "94",
      "22",
      "23",
      "🛩️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "94_23": [
      "94",
      "23",
      "21",
      "🛫",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "94_24": [
      "94",
      "24",
      "22",
      "🛬",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "94_20": [
      "94",
      "20",
      "18",
      "🛤️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "94_21": [
      "94",
      "21",
      "8",
      "🛥️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "21_20": [
      "21",
      "20",
      "15",
      "🌤️",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "21_21": [
      "21",
      "21",
      "17",
      "🌥️",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "104_19": [
      "104",
      "19",
      "4",
      "🥁",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "104_17": [
      "104",
      "17",
      "0",
      "🤿",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "104_18": [
      "104",
      "18",
      "4",
      "🥀",
      "b104",
      "emoji-104-40_d252d87.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "21_19": [
      "21",
      "19",
      "10",
      "🌡️",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "94_19": [
      "94",
      "19",
      "19",
      "🛣️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "94_15": [
      "94",
      "15",
      "12",
      "🛟",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "94_16": [
      "94",
      "16",
      "17",
      "🛠️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "94_17": [
      "94",
      "17",
      "9",
      "🛡️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "94_18": [
      "94",
      "18",
      "23",
      "🛢️",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "94_11": [
      "94",
      "11",
      "17",
      "🛖",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "21_11": [
      "21",
      "11",
      "23",
      "🌙",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "94_12": [
      "94",
      "12",
      "23",
      "🛗",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "21_12": [
      "21",
      "12",
      "14",
      "🌚",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "94_13": [
      "94",
      "13",
      "21",
      "🛝",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "21_13": [
      "21",
      "13",
      "12",
      "🌛",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "94_14": [
      "94",
      "14",
      "23",
      "🛞",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "21_14": [
      "21",
      "14",
      "13",
      "🌜",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "21_15": [
      "21",
      "15",
      "11",
      "🌝",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "21_16": [
      "21",
      "16",
      "10",
      "🌞",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "21_17": [
      "21",
      "17",
      "6",
      "🌟",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "94_10": [
      "94",
      "10",
      "15",
      "🛕",
      "b94",
      "emoji-94-40_3ab7358.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "21_18": [
      "21",
      "18",
      "1",
      "🌠",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "133_8": [
      "133",
      "8",
      "21",
      "🫡",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "75_9": [
      "75",
      "9",
      "13",
      "📶",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "133_9": [
      "133",
      "9",
      "20",
      "🫢",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "133_6": [
      "133",
      "6",
      "15",
      "🫙",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "133_7": [
      "133",
      "7",
      "23",
      "🫠",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "75_2": [
      "75",
      "2",
      "21",
      "📯",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "133_0": [
      "133",
      "0",
      "4",
      "🫓",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "37_17": [
      "37",
      "17",
      "12",
      "👊",
      "b37",
      "emoji-37-40_e3230b6.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "75_1": [
      "75",
      "1",
      "20",
      "📮",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "133_1": [
      "133",
      "1",
      "10",
      "🫔",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "75_4": [
      "75",
      "4",
      "1",
      "📱",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "75_3": [
      "75",
      "3",
      "20",
      "📰",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "75_6": [
      "75",
      "6",
      "3",
      "📳",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "89_20": [
      "89",
      "20",
      "1",
      "🚕",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "133_4": [
      "133",
      "4",
      "4",
      "🫗",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "75_5": [
      "75",
      "5",
      "2",
      "📲",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "89_21": [
      "89",
      "21",
      "4",
      "🚖",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "133_5": [
      "133",
      "5",
      "1",
      "🫘",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "75_8": [
      "75",
      "8",
      "15",
      "📵",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "89_22": [
      "89",
      "22",
      "0",
      "🚗",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "133_2": [
      "133",
      "2",
      "13",
      "🫕",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "75_7": [
      "75",
      "7",
      "2",
      "📴",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "89_23": [
      "89",
      "23",
      "3",
      "🚘",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "133_3": [
      "133",
      "3",
      "6",
      "🫖",
      "b133",
      "emoji-133-40_388edcb.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "89_13": [
      "89",
      "13",
      "4",
      "🚎",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "89_14": [
      "89",
      "14",
      "19",
      "🚏",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "89_15": [
      "89",
      "15",
      "9",
      "🚐",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "89_16": [
      "89",
      "16",
      "7",
      "🚑",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "89_17": [
      "89",
      "17",
      "8",
      "🚒",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "89_18": [
      "89",
      "18",
      "6",
      "🚓",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "37_23": [
      "37",
      "23",
      "11",
      "👋",
      "b37",
      "emoji-37-40_e3230b6.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "75_0": [
      "75",
      "0",
      "19",
      "📭",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "89_19": [
      "89",
      "19",
      "1",
      "🚔",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "77_24": [
      "77",
      "24",
      "14",
      "🔸",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "77_23": [
      "77",
      "23",
      "17",
      "🔷",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "3_0": [
      "3",
      "0",
      "5",
      "☯️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "3_1": [
      "3",
      "1",
      "1",
      "☸️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "3_2": [
      "3",
      "2",
      "18",
      "☹️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "3_3": [
      "3",
      "3",
      "10",
      "☺️",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "40_3": [
      "40",
      "3",
      "16",
      "👤",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "40_4": [
      "40",
      "4",
      "17",
      "👥",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "7_19": [
      "7",
      "19",
      "19",
      "❓",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "3_6": [
      "3",
      "6",
      "9",
      "♈",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "40_5": [
      "40",
      "5",
      "22",
      "👦",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "3_7": [
      "3",
      "7",
      "10",
      "♉",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "106_19": [
      "106",
      "19",
      "21",
      "🥴",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "3_8": [
      "3",
      "8",
      "11",
      "♊",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "3_9": [
      "3",
      "9",
      "12",
      "♋",
      "b3",
      "emoji-3-40_b11078f.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "89_10": [
      "89",
      "10",
      "9",
      "🚋",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "89_11": [
      "89",
      "11",
      "3",
      "🚌",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "89_12": [
      "89",
      "12",
      "2",
      "🚍",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "7_13": [
      "7",
      "13",
      "12",
      "✳️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "128_22": [
      "128",
      "22",
      "9",
      "🧪",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "106_14": [
      "106",
      "14",
      "9",
      "🥯",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "7_14": [
      "7",
      "14",
      "9",
      "✴️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "128_23": [
      "128",
      "23",
      "8",
      "🧫",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "106_13": [
      "106",
      "13",
      "6",
      "🥮",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "7_11": [
      "7",
      "11",
      "2",
      "✡️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "128_24": [
      "128",
      "24",
      "6",
      "🧬",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "106_12": [
      "106",
      "12",
      "13",
      "🥭",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "37_11": [
      "37",
      "11",
      "3",
      "👉",
      "b37",
      "emoji-37-40_e3230b6.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "7_12": [
      "7",
      "12",
      "7",
      "✨",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "106_11": [
      "106",
      "11",
      "21",
      "🥬",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "7_17": [
      "7",
      "17",
      "1",
      "❌",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "106_18": [
      "106",
      "18",
      "10",
      "🥳",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "7_18": [
      "7",
      "18",
      "13",
      "❎",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "40_0": [
      "40",
      "0",
      "19",
      "👡",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "106_17": [
      "106",
      "17",
      "9",
      "🥲",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "7_15": [
      "7",
      "15",
      "0",
      "❄️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "40_1": [
      "40",
      "1",
      "20",
      "👢",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "106_16": [
      "106",
      "16",
      "13",
      "🥱",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "7_16": [
      "7",
      "16",
      "11",
      "❇️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "40_2": [
      "40",
      "2",
      "9",
      "👣",
      "b40",
      "emoji-40-40_c505ee2.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "106_15": [
      "106",
      "15",
      "18",
      "🥰",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "106_10": [
      "106",
      "10",
      "14",
      "🥫",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "7_10": [
      "7",
      "10",
      "22",
      "✝️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "128_20": [
      "128",
      "20",
      "4",
      "🧨",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "128_21": [
      "128",
      "21",
      "18",
      "🧩",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "111_7": [
      "111",
      "7",
      "23",
      "🦿",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "25_10": [
      "25",
      "10",
      "21",
      "🍾",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "111_6": [
      "111",
      "6",
      "16",
      "🦾",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "111_9": [
      "111",
      "9",
      "13",
      "🧁",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "111_8": [
      "111",
      "8",
      "13",
      "🧀",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "25_13": [
      "25",
      "13",
      "17",
      "🎁",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "25_14": [
      "25",
      "14",
      "15",
      "🎂",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "25_11": [
      "25",
      "11",
      "20",
      "🍿",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "25_12": [
      "25",
      "12",
      "20",
      "🎀",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "128_19": [
      "128",
      "19",
      "5",
      "🧧",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "51_3": [
      "51",
      "3",
      "4",
      "👩‍👩‍👧‍👦",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "51_4": [
      "51",
      "4",
      "6",
      "👩‍👩‍👧‍👧",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "97_2": [
      "97",
      "2",
      "12",
      "🤙",
      "b97",
      "emoji-97-40_3bf0eb9.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "67_12": [
      "67",
      "12",
      "12",
      "👻",
      "b67",
      "emoji-67-40_bc349d2.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "67_11": [
      "67",
      "11",
      "9",
      "👺",
      "b67",
      "emoji-67-40_bc349d2.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "97_8": [
      "97",
      "8",
      "8",
      "🤚",
      "b97",
      "emoji-97-40_3bf0eb9.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "111_5": [
      "111",
      "5",
      "15",
      "🦽",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "67_10": [
      "67",
      "10",
      "8",
      "👹",
      "b67",
      "emoji-67-40_bc349d2.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "111_4": [
      "111",
      "4",
      "16",
      "🦼",
      "b111",
      "emoji-111-40_dec013f.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "7_24": [
      "7",
      "24",
      "0",
      "❤️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "90_24": [
      "90",
      "24",
      "17",
      "🚦",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "128_12": [
      "128",
      "12",
      "14",
      "🧠",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "128_13": [
      "128",
      "13",
      "1",
      "🧡",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "7_22": [
      "7",
      "22",
      "17",
      "❗",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "90_22": [
      "90",
      "22",
      "7",
      "🚤",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "7_23": [
      "7",
      "23",
      "12",
      "❣️",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "90_23": [
      "90",
      "23",
      "18",
      "🚥",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "128_14": [
      "128",
      "14",
      "4",
      "🧢",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "128_15": [
      "128",
      "15",
      "2",
      "🧣",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "128_16": [
      "128",
      "16",
      "1",
      "🧤",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "51_0": [
      "51",
      "0",
      "2",
      "👩‍👩‍👦",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "128_17": [
      "128",
      "17",
      "2",
      "🧥",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "51_1": [
      "51",
      "1",
      "5",
      "👩‍👩‍👦‍👦",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "128_18": [
      "128",
      "18",
      "0",
      "🧦",
      "b128",
      "emoji-128-40_c3216b8.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "51_2": [
      "51",
      "2",
      "3",
      "👩‍👩‍👧",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "7_20": [
      "7",
      "20",
      "20",
      "❔",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "7_21": [
      "7",
      "21",
      "18",
      "❕",
      "b7",
      "emoji-7-40_e239476.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "25_24": [
      "25",
      "24",
      "2",
      "🎇",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "25_23": [
      "25",
      "23",
      "3",
      "🎆",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "67_22": [
      "67",
      "22",
      "13",
      "💀",
      "b67",
      "emoji-67-40_bc349d2.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "67_21": [
      "67",
      "21",
      "7",
      "👿",
      "b67",
      "emoji-67-40_bc349d2.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "62_9": [
      "62",
      "9",
      "10",
      "👫",
      "b62",
      "emoji-62-40_eef8b24.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "67_20": [
      "67",
      "20",
      "16",
      "👾",
      "b67",
      "emoji-67-40_bc349d2.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "89_24": [
      "89",
      "24",
      "2",
      "🚙",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "90_11": [
      "90",
      "11",
      "21",
      "🚣‍♂️",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "67_19": [
      "67",
      "19",
      "15",
      "👽",
      "b67",
      "emoji-67-40_bc349d2.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "25_15": [
      "25",
      "15",
      "18",
      "🎃",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "25_16": [
      "25",
      "16",
      "3",
      "🎄",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "90_10": [
      "90",
      "10",
      "19",
      "🚣‍♀️",
      "b90",
      "emoji-90-40_bfe3df4.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "79_18": [
      "79",
      "18",
      "12",
      "🕴️",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "135_9": [
      "135",
      "9",
      "1",
      "🫴",
      "b135",
      "emoji-135-40_58993c4.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "73_4": [
      "73",
      "4",
      "13",
      "💿",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "73_3": [
      "73",
      "3",
      "12",
      "💾",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "73_6": [
      "73",
      "6",
      "16",
      "📁",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "73_5": [
      "73",
      "5",
      "14",
      "📀",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "73_8": [
      "73",
      "8",
      "23",
      "📃",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "73_7": [
      "73",
      "7",
      "17",
      "📂",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "135_3": [
      "135",
      "3",
      "0",
      "🫳",
      "b135",
      "emoji-135-40_58993c4.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "73_9": [
      "73",
      "9",
      "0",
      "📄",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "73_0": [
      "73",
      "0",
      "3",
      "💻",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "13_12": [
      "13",
      "12",
      "13",
      "🇭🇰",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "13_11": [
      "13",
      "11",
      "10",
      "🇬🇾",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "73_2": [
      "73",
      "2",
      "11",
      "💽",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "13_10": [
      "13",
      "10",
      "9",
      "🇬🇼",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "73_1": [
      "73",
      "1",
      "14",
      "💼",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "1_1": [
      "1",
      "1",
      "0",
      "⌚",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "100_8": [
      "100",
      "8",
      "5",
      "🤲",
      "b100",
      "emoji-100-40_d48ed26.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "1_2": [
      "1",
      "2",
      "12",
      "⌛",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "1_3": [
      "1",
      "3",
      "4",
      "⌨️",
      "b1",
      "emoji-1-40_8b08ff4.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "13_17": [
      "13",
      "17",
      "14",
      "🇭🇺",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "84_5": [
      "84",
      "5",
      "12",
      "😨",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "13_16": [
      "13",
      "16",
      "11",
      "🇭🇹",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "84_6": [
      "84",
      "6",
      "22",
      "😩",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "13_15": [
      "13",
      "15",
      "17",
      "🇭🇷",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "84_3": [
      "84",
      "3",
      "9",
      "😦",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "13_14": [
      "13",
      "14",
      "12",
      "🇭🇳",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "84_4": [
      "84",
      "4",
      "10",
      "😧",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "84_9": [
      "84",
      "9",
      "6",
      "😬",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "13_19": [
      "13",
      "19",
      "17",
      "🇮🇩",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "84_7": [
      "84",
      "7",
      "16",
      "😪",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "13_18": [
      "13",
      "18",
      "23",
      "🇮🇨",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "84_8": [
      "84",
      "8",
      "21",
      "😫",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "13_20": [
      "13",
      "20",
      "20",
      "🇮🇪",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "13_24": [
      "13",
      "24",
      "5",
      "🇮🇴",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "84_1": [
      "84",
      "1",
      "2",
      "😤",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "13_23": [
      "13",
      "23",
      "16",
      "🇮🇳",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "84_2": [
      "84",
      "2",
      "14",
      "😥",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "13_22": [
      "13",
      "22",
      "21",
      "🇮🇲",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "13_21": [
      "13",
      "21",
      "22",
      "🇮🇱",
      "b13",
      "emoji-13-40_fee0e88.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "84_0": [
      "84",
      "0",
      "19",
      "😣",
      "b84",
      "emoji-84-40_9fe4994.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "79_12": [
      "79",
      "12",
      "23",
      "🕳️",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "79_10": [
      "79",
      "10",
      "20",
      "🕯️",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "79_11": [
      "79",
      "11",
      "11",
      "🕰️",
      "b79",
      "emoji-79-40_94aabbd.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "95_5": [
      "95",
      "5",
      "6",
      "🛷",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "35_14": [
      "35",
      "14",
      "16",
      "🐵",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "80_20": [
      "80",
      "20",
      "21",
      "🖍️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "95_6": [
      "95",
      "6",
      "3",
      "🛸",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "35_15": [
      "35",
      "15",
      "0",
      "🐶",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "95_3": [
      "95",
      "3",
      "20",
      "🛵",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "35_16": [
      "35",
      "16",
      "13",
      "🐷",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "95_4": [
      "95",
      "4",
      "5",
      "🛶",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "35_17": [
      "35",
      "17",
      "15",
      "🐸",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "95_9": [
      "95",
      "9",
      "10",
      "🛻",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "35_18": [
      "35",
      "18",
      "3",
      "🐹",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "35_19": [
      "35",
      "19",
      "7",
      "🐺",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "95_7": [
      "95",
      "7",
      "4",
      "🛹",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "95_8": [
      "95",
      "8",
      "22",
      "🛺",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "35_20": [
      "35",
      "20",
      "6",
      "🐻",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "95_1": [
      "95",
      "1",
      "9",
      "🛳️",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "35_21": [
      "35",
      "21",
      "8",
      "🐻‍❄️",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "95_2": [
      "95",
      "2",
      "18",
      "🛴",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "35_22": [
      "35",
      "22",
      "7",
      "🐼",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "35_23": [
      "35",
      "23",
      "14",
      "🐽",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "95_0": [
      "95",
      "0",
      "1",
      "🛰️",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "35_24": [
      "35",
      "24",
      "23",
      "🐾",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "23_24": [
      "23",
      "24",
      "2",
      "🍚",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "106_21": [
      "106",
      "21",
      "9",
      "🥶",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "106_20": [
      "106",
      "20",
      "8",
      "🥵",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "80_16": [
      "80",
      "16",
      "10",
      "🖇️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "80_17": [
      "80",
      "17",
      "17",
      "🖊️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "80_18": [
      "80",
      "18",
      "18",
      "🖋️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "80_19": [
      "80",
      "19",
      "20",
      "🖌️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "124_9": [
      "124",
      "9",
      "4",
      "🧖",
      "b124",
      "emoji-124-40_188268a.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "80_10": [
      "80",
      "10",
      "9",
      "🕺",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "9_16": [
      "9",
      "16",
      "9",
      "🇦🇫",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "9_14": [
      "9",
      "14",
      "14",
      "🇦🇩",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "35_10": [
      "35",
      "10",
      "1",
      "🐱",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "9_19": [
      "9",
      "19",
      "11",
      "🇦🇱",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "35_11": [
      "35",
      "11",
      "1",
      "🐲",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "9_18": [
      "9",
      "18",
      "16",
      "🇦🇮",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "35_12": [
      "35",
      "12",
      "16",
      "🐳",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "9_17": [
      "9",
      "17",
      "18",
      "🇦🇬",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "35_13": [
      "35",
      "13",
      "9",
      "🐴",
      "b35",
      "emoji-35-40_b96bb59.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "9_12": [
      "9",
      "12",
      "10",
      "🆚",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "9_11": [
      "9",
      "11",
      "22",
      "🆙",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "9_10": [
      "9",
      "10",
      "0",
      "🆘",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "75_10": [
      "75",
      "10",
      "16",
      "📷",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "75_11": [
      "75",
      "11",
      "17",
      "📸",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "75_12": [
      "75",
      "12",
      "18",
      "📹",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "75_13": [
      "75",
      "13",
      "2",
      "📺",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "75_14": [
      "75",
      "14",
      "3",
      "📻",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "75_15": [
      "75",
      "15",
      "15",
      "📼",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "75_16": [
      "75",
      "16",
      "20",
      "📽️",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "75_17": [
      "75",
      "17",
      "16",
      "📿",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "71_6": [
      "71",
      "6",
      "9",
      "💔",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "18_6": [
      "18",
      "6",
      "8",
      "🇸🇿",
      "b18",
      "emoji-18-40_238de89.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "71_5": [
      "71",
      "5",
      "15",
      "💓",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "71_8": [
      "71",
      "8",
      "17",
      "💖",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "71_7": [
      "71",
      "7",
      "13",
      "💕",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "132_22": [
      "132",
      "22",
      "9",
      "🫐",
      "b132",
      "emoji-132-40_a0b6e70.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "18_3": [
      "18",
      "3",
      "4",
      "🇸🇻",
      "b18",
      "emoji-18-40_238de89.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "71_9": [
      "71",
      "9",
      "16",
      "💗",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "9_24": [
      "9",
      "24",
      "13",
      "🇦🇸",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "132_23": [
      "132",
      "23",
      "0",
      "🫑",
      "b132",
      "emoji-132-40_a0b6e70.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "132_24": [
      "132",
      "24",
      "3",
      "🫒",
      "b132",
      "emoji-132-40_a0b6e70.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "71_4": [
      "71",
      "4",
      "10",
      "💒",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "28_19": [
      "28",
      "19",
      "12",
      "🏄‍♂️",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "28_18": [
      "28",
      "18",
      "10",
      "🏄‍♀️",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "9_23": [
      "9",
      "23",
      "19",
      "🇦🇷",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "9_22": [
      "9",
      "22",
      "17",
      "🇦🇶",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "9_21": [
      "9",
      "21",
      "15",
      "🇦🇴",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "9_20": [
      "9",
      "20",
      "20",
      "🇦🇲",
      "b9",
      "emoji-9-40_4ab3ac1.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "82_7": [
      "82",
      "7",
      "21",
      "🗯️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "29_7": [
      "29",
      "7",
      "6",
      "🏇",
      "b29",
      "emoji-29-40_840ee23.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "82_8": [
      "82",
      "8",
      "13",
      "🗳️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "29_6": [
      "29",
      "6",
      "7",
      "🏆",
      "b29",
      "emoji-29-40_840ee23.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "29_5": [
      "29",
      "5",
      "11",
      "🏅",
      "b29",
      "emoji-29-40_840ee23.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "82_5": [
      "82",
      "5",
      "15",
      "🗣️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "82_9": [
      "82",
      "9",
      "20",
      "🗺️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "82_0": [
      "82",
      "0",
      "7",
      "🗓️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "82_3": [
      "82",
      "3",
      "19",
      "🗞️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "82_4": [
      "82",
      "4",
      "7",
      "🗡️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "18_9": [
      "18",
      "9",
      "4",
      "🇹🇩",
      "b18",
      "emoji-18-40_238de89.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "82_1": [
      "82",
      "1",
      "10",
      "🗜️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "82_2": [
      "82",
      "2",
      "4",
      "🗝️",
      "b82",
      "emoji-82-40_16f44b7.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "130_9": [
      "130",
      "9",
      "22",
      "🪅",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "93_7": [
      "93",
      "7",
      "8",
      "🚼",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "130_3": [
      "130",
      "3",
      "17",
      "🩼",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "93_8": [
      "93",
      "8",
      "15",
      "🚽",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "130_4": [
      "130",
      "4",
      "10",
      "🪀",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "93_5": [
      "93",
      "5",
      "7",
      "🚺",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "130_1": [
      "130",
      "1",
      "2",
      "🩺",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "93_6": [
      "93",
      "6",
      "10",
      "🚻",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "130_2": [
      "130",
      "2",
      "0",
      "🩻",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "130_7": [
      "130",
      "7",
      "17",
      "🪃",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "16_18": [
      "16",
      "18",
      "17",
      "🇵🇫",
      "b16",
      "emoji-16-40_ef5204c.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "130_8": [
      "130",
      "8",
      "21",
      "🪄",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "87_13": [
      "87",
      "13",
      "7",
      "🙌",
      "b87",
      "emoji-87-40_8c08f48.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "93_9": [
      "93",
      "9",
      "20",
      "🚾",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "130_5": [
      "130",
      "5",
      "20",
      "🪁",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "130_6": [
      "130",
      "6",
      "12",
      "🪂",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "93_3": [
      "93",
      "3",
      "3",
      "🚸",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "93_4": [
      "93",
      "4",
      "6",
      "🚹",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "93_2": [
      "93",
      "2",
      "10",
      "🚷",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "75_21": [
      "75",
      "21",
      "1",
      "🔃",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "75_22": [
      "75",
      "22",
      "0",
      "🔄",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "75_23": [
      "75",
      "23",
      "23",
      "🔅",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "75_24": [
      "75",
      "24",
      "0",
      "🔆",
      "b75",
      "emoji-75-40_51d393b.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "28_17": [
      "28",
      "17",
      "11",
      "🏄",
      "b28",
      "emoji-28-40_794fe85.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "16_1": [
      "16",
      "1",
      "23",
      "🇲🇾",
      "b16",
      "emoji-16-40_ef5204c.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "0_17": [
      "0",
      "17",
      "16",
      "ℹ️",
      "b0",
      "emoji-0-40_5acfb0b.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "0_16": [
      "0",
      "16",
      "12",
      "™️",
      "b0",
      "emoji-0-40_5acfb0b.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "99_20": [
      "99",
      "20",
      "6",
      "🤯",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "0_15": [
      "0",
      "15",
      "22",
      "⁉️",
      "b0",
      "emoji-0-40_5acfb0b.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "0_14": [
      "0",
      "14",
      "21",
      "‼️",
      "b0",
      "emoji-0-40_5acfb0b.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "0_13": [
      "0",
      "13",
      "14",
      "®️",
      "b0",
      "emoji-0-40_5acfb0b.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "0_12": [
      "0",
      "12",
      "13",
      "©️",
      "b0",
      "emoji-0-40_5acfb0b.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "99_18": [
      "99",
      "18",
      "19",
      "🤭",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "99_19": [
      "99",
      "19",
      "23",
      "🤮",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "99_16": [
      "99",
      "16",
      "22",
      "🤫",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "99_17": [
      "99",
      "17",
      "5",
      "🤬",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "99_14": [
      "99",
      "14",
      "9",
      "🤩",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "99_15": [
      "99",
      "15",
      "3",
      "🤪",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "99_12": [
      "99",
      "12",
      "0",
      "🤧",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "99_13": [
      "99",
      "13",
      "4",
      "🤨",
      "b99",
      "emoji-99-40_e15ae1c.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "27_1": [
      "27",
      "1",
      "1",
      "🎧",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "27_0": [
      "27",
      "0",
      "12",
      "🎦",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "80_9": [
      "80",
      "9",
      "9",
      "🕹️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "27_9": [
      "27",
      "9",
      "14",
      "🎯",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "110_22": [
      "110",
      "22",
      "4",
      "🦺",
      "b110",
      "emoji-110-40_fa5e529.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "27_8": [
      "27",
      "8",
      "16",
      "🎮",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "27_7": [
      "27",
      "7",
      "20",
      "🎭",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "80_7": [
      "80",
      "7",
      "23",
      "🕷️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "27_6": [
      "27",
      "6",
      "23",
      "🎬",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "80_8": [
      "80",
      "8",
      "0",
      "🕸️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "27_5": [
      "27",
      "5",
      "15",
      "🎫",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "27_4": [
      "27",
      "4",
      "17",
      "🎪",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "27_3": [
      "27",
      "3",
      "3",
      "🎩",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "27_2": [
      "27",
      "2",
      "22",
      "🎨",
      "b27",
      "emoji-27-40_bc0a084.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "65_12": [
      "65",
      "12",
      "23",
      "👳‍♀️",
      "b65",
      "emoji-65-40_8f39da8.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "38_22": [
      "38",
      "22",
      "8",
      "👏",
      "b38",
      "emoji-38-40_27114fe.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "130_0": [
      "130",
      "0",
      "1",
      "🩹",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "80_6": [
      "80",
      "6",
      "18",
      "🕶️",
      "b80",
      "emoji-80-40_826b5e7.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "110_23": [
      "110",
      "23",
      "7",
      "🦻",
      "b110",
      "emoji-110-40_fa5e529.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "77_13": [
      "77",
      "13",
      "21",
      "🔭",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "26_21": [
      "26",
      "21",
      "4",
      "🎢",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "77_12": [
      "77",
      "12",
      "22",
      "🔬",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "26_22": [
      "26",
      "22",
      "23",
      "🎣",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "77_15": [
      "77",
      "15",
      "3",
      "🔯",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "38_4": [
      "38",
      "4",
      "21",
      "👌",
      "b38",
      "emoji-38-40_27114fe.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "77_14": [
      "77",
      "14",
      "15",
      "🔮",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "26_20": [
      "26",
      "20",
      "3",
      "🎡",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "77_17": [
      "77",
      "17",
      "4",
      "🔱",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "77_16": [
      "77",
      "16",
      "6",
      "🔰",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "77_19": [
      "77",
      "19",
      "18",
      "🔳",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "26_23": [
      "26",
      "23",
      "0",
      "🎤",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "77_18": [
      "77",
      "18",
      "19",
      "🔲",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "26_24": [
      "26",
      "24",
      "19",
      "🎥",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "91_9": [
      "91",
      "9",
      "16",
      "🚰",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "132_1": [
      "132",
      "1",
      "12",
      "🫀",
      "b132",
      "emoji-132-40_a0b6e70.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "132_2": [
      "132",
      "2",
      "13",
      "🫁",
      "b132",
      "emoji-132-40_a0b6e70.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "91_7": [
      "91",
      "7",
      "11",
      "🚮",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "91_8": [
      "91",
      "8",
      "11",
      "🚯",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "132_0": [
      "132",
      "0",
      "18",
      "🪺",
      "b132",
      "emoji-132-40_a0b6e70.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "132_3": [
      "132",
      "3",
      "18",
      "🫂",
      "b132",
      "emoji-132-40_a0b6e70.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "91_1": [
      "91",
      "1",
      "0",
      "🚨",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "65_24": [
      "65",
      "24",
      "21",
      "👴",
      "b65",
      "emoji-65-40_8f39da8.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "38_10": [
      "38",
      "10",
      "10",
      "👍",
      "b38",
      "emoji-38-40_27114fe.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "91_2": [
      "91",
      "2",
      "4",
      "🚩",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "91_0": [
      "91",
      "0",
      "16",
      "🚧",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "91_5": [
      "91",
      "5",
      "10",
      "🚬",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "91_6": [
      "91",
      "6",
      "16",
      "🚭",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "91_3": [
      "91",
      "3",
      "5",
      "🚪",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "38_16": [
      "38",
      "16",
      "11",
      "👎",
      "b38",
      "emoji-38-40_27114fe.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "91_4": [
      "91",
      "4",
      "6",
      "🚫",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "109_16": [
      "109",
      "16",
      "21",
      "🦶",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "26_18": [
      "26",
      "18",
      "16",
      "🎟️",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "26_19": [
      "26",
      "19",
      "5",
      "🎠",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "109_10": [
      "109",
      "10",
      "22",
      "🦵",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "26_16": [
      "26",
      "16",
      "6",
      "🎛️",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "26_17": [
      "26",
      "17",
      "21",
      "🎞️",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "77_20": [
      "77",
      "20",
      "3",
      "🔴",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "77_22": [
      "77",
      "22",
      "16",
      "🔶",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "77_21": [
      "77",
      "21",
      "7",
      "🔵",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "109_22": [
      "109",
      "22",
      "4",
      "🦷",
      "b109",
      "emoji-109-40_acc22ba.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "77_11": [
      "77",
      "11",
      "2",
      "🔫",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "77_10": [
      "77",
      "10",
      "6",
      "🔪",
      "b77",
      "emoji-77-40_7281b3b.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "14_3": [
      "14",
      "3",
      "23",
      "🇮🇹",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "14_2": [
      "14",
      "2",
      "15",
      "🇮🇸",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "14_1": [
      "14",
      "1",
      "18",
      "🇮🇷",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "14_0": [
      "14",
      "0",
      "19",
      "🇮🇶",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "14_9": [
      "14",
      "9",
      "10",
      "🇰🇬",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "14_8": [
      "14",
      "8",
      "6",
      "🇰🇪",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "14_7": [
      "14",
      "7",
      "1",
      "🇯🇵",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "14_6": [
      "14",
      "6",
      "4",
      "🇯🇴",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "14_5": [
      "14",
      "5",
      "0",
      "🇯🇲",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "14_4": [
      "14",
      "4",
      "3",
      "🇯🇪",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "95_16": [
      "95",
      "16",
      "2",
      "🟥",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "95_17": [
      "95",
      "17",
      "6",
      "🟦",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "95_18": [
      "95",
      "18",
      "3",
      "🟧",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "95_19": [
      "95",
      "19",
      "4",
      "🟨",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "95_12": [
      "95",
      "12",
      "5",
      "🟡",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "112_14": [
      "112",
      "14",
      "2",
      "🧎",
      "b112",
      "emoji-112-40_9ac620c.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "95_13": [
      "95",
      "13",
      "6",
      "🟢",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "112_15": [
      "112",
      "15",
      "1",
      "🧎‍♀️",
      "b112",
      "emoji-112-40_9ac620c.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "95_14": [
      "95",
      "14",
      "8",
      "🟣",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "112_16": [
      "112",
      "16",
      "3",
      "🧎‍♂️",
      "b112",
      "emoji-112-40_9ac620c.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "95_15": [
      "95",
      "15",
      "11",
      "🟤",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "95_10": [
      "95",
      "10",
      "5",
      "🛼",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "95_11": [
      "95",
      "11",
      "4",
      "🟠",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "106_1": [
      "106",
      "1",
      "4",
      "🥢",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "25_3": [
      "25",
      "3",
      "16",
      "🍷",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "106_0": [
      "106",
      "0",
      "3",
      "🥡",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "25_2": [
      "25",
      "2",
      "12",
      "🍶",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "106_3": [
      "106",
      "3",
      "10",
      "🥤",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "25_1": [
      "25",
      "1",
      "8",
      "🍵",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "106_2": [
      "106",
      "2",
      "2",
      "🥣",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "25_0": [
      "25",
      "0",
      "0",
      "🍴",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "31_23": [
      "31",
      "23",
      "19",
      "🏡",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "106_5": [
      "106",
      "5",
      "20",
      "🥦",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "31_24": [
      "31",
      "24",
      "0",
      "🏢",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "106_4": [
      "106",
      "4",
      "15",
      "🥥",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "31_21": [
      "31",
      "21",
      "2",
      "🏟️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "106_7": [
      "106",
      "7",
      "12",
      "🥨",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "31_22": [
      "31",
      "22",
      "18",
      "🏠",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "106_6": [
      "106",
      "6",
      "12",
      "🥧",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "83_23": [
      "83",
      "23",
      "4",
      "😡",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "83_22": [
      "83",
      "22",
      "3",
      "😠",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "25_9": [
      "25",
      "9",
      "1",
      "🍽️",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "25_8": [
      "25",
      "8",
      "5",
      "🍼",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "83_24": [
      "83",
      "24",
      "0",
      "😢",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "25_7": [
      "25",
      "7",
      "14",
      "🍻",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "25_6": [
      "25",
      "6",
      "13",
      "🍺",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "25_5": [
      "25",
      "5",
      "19",
      "🍹",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "83_21": [
      "83",
      "21",
      "15",
      "😟",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "25_4": [
      "25",
      "4",
      "18",
      "🍸",
      "b25",
      "emoji-25-40_aa1b7c4.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "83_20": [
      "83",
      "20",
      "13",
      "😞",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "106_9": [
      "106",
      "9",
      "5",
      "🥪",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "106_8": [
      "106",
      "8",
      "20",
      "🥩",
      "b106",
      "emoji-106-40_7796ea9.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "31_16": [
      "31",
      "16",
      "21",
      "🏚️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "36_4": [
      "36",
      "4",
      "6",
      "👂",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "31_17": [
      "31",
      "17",
      "11",
      "🏛️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "31_14": [
      "31",
      "14",
      "20",
      "🏘️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "31_15": [
      "31",
      "15",
      "6",
      "🏙️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "31_12": [
      "31",
      "12",
      "8",
      "🏖️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "31_13": [
      "31",
      "13",
      "22",
      "🏗️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "31_10": [
      "31",
      "10",
      "13",
      "🏔️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "31_11": [
      "31",
      "11",
      "15",
      "🏕️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "36_0": [
      "36",
      "0",
      "21",
      "🐿️",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "2_18": [
      "2",
      "18",
      "6",
      "☝️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "2_19": [
      "2",
      "19",
      "14",
      "☠️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "36_1": [
      "36",
      "1",
      "11",
      "👀",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "31_18": [
      "31",
      "18",
      "10",
      "🏜️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "36_2": [
      "36",
      "2",
      "10",
      "👁️",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "36_3": [
      "36",
      "3",
      "15",
      "👁️‍🗨️",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "31_19": [
      "31",
      "19",
      "9",
      "🏝️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "2_10": [
      "2",
      "10",
      "8",
      "☔",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "2_11": [
      "2",
      "11",
      "7",
      "☕",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "2_12": [
      "2",
      "12",
      "10",
      "☘️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "31_20": [
      "31",
      "20",
      "22",
      "🏞️",
      "b31",
      "emoji-31-40_b71d330.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "100_14": [
      "100",
      "14",
      "7",
      "🤳",
      "b100",
      "emoji-100-40_d48ed26.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "2_20": [
      "2",
      "20",
      "0",
      "☢️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "73_19": [
      "73",
      "19",
      "9",
      "📎",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "2_21": [
      "2",
      "21",
      "1",
      "☣️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "73_18": [
      "73",
      "18",
      "15",
      "📍",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "2_22": [
      "2",
      "22",
      "6",
      "☦️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "2_23": [
      "2",
      "23",
      "23",
      "☪️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "73_17": [
      "73",
      "17",
      "14",
      "📌",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "73_16": [
      "73",
      "16",
      "15",
      "📋",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "2_24": [
      "2",
      "24",
      "21",
      "☮️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "95_23": [
      "95",
      "23",
      "8",
      "🟰",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "73_15": [
      "73",
      "15",
      "3",
      "📊",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "73_14": [
      "73",
      "14",
      "5",
      "📉",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "122_23": [
      "122",
      "23",
      "21",
      "🧒",
      "b122",
      "emoji-122-40_538da3d.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "95_24": [
      "95",
      "24",
      "22",
      "🤌",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "73_13": [
      "73",
      "13",
      "4",
      "📈",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "73_12": [
      "73",
      "12",
      "11",
      "📇",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "73_11": [
      "73",
      "11",
      "8",
      "📆",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "95_20": [
      "95",
      "20",
      "5",
      "🟩",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "73_10": [
      "73",
      "10",
      "9",
      "📅",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "95_21": [
      "95",
      "21",
      "7",
      "🟪",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "95_22": [
      "95",
      "22",
      "10",
      "🟫",
      "b95",
      "emoji-95-40_88e0e67.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "12_5": [
      "12",
      "5",
      "7",
      "🇪🇪",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "12_4": [
      "12",
      "4",
      "2",
      "🇪🇨",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "12_2": [
      "12",
      "2",
      "12",
      "🇩🇿",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "12_1": [
      "12",
      "1",
      "1",
      "🇩🇴",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "12_0": [
      "12",
      "0",
      "0",
      "🇩🇲",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "85_11": [
      "85",
      "11",
      "7",
      "🙄",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "12_8": [
      "12",
      "8",
      "6",
      "🇪🇷",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "12_6": [
      "12",
      "6",
      "3",
      "🇪🇬",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "85_10": [
      "85",
      "10",
      "14",
      "🙃",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "73_24": [
      "73",
      "24",
      "21",
      "📓",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "73_23": [
      "73",
      "23",
      "23",
      "📒",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "73_22": [
      "73",
      "22",
      "1",
      "📑",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "73_21": [
      "73",
      "21",
      "11",
      "📐",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "73_20": [
      "73",
      "20",
      "12",
      "📏",
      "b73",
      "emoji-73-40_bacaeba.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "23_5": [
      "23",
      "5",
      "7",
      "🍇",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "23_4": [
      "23",
      "4",
      "18",
      "🍆",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "51_11": [
      "51",
      "11",
      "22",
      "👩‍🦯",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "69_4": [
      "69",
      "4",
      "6",
      "💅",
      "b69",
      "emoji-69-40_d35c5cd.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "23_3": [
      "23",
      "3",
      "17",
      "🍅",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "108_1": [
      "108",
      "1",
      "5",
      "🦏",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "108_0": [
      "108",
      "0",
      "4",
      "🦎",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "23_2": [
      "23",
      "2",
      "20",
      "🍄",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "108_3": [
      "108",
      "3",
      "8",
      "🦑",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "23_1": [
      "23",
      "1",
      "15",
      "🍃",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "51_14": [
      "51",
      "14",
      "13",
      "👩‍🦲",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "108_2": [
      "108",
      "2",
      "9",
      "🦐",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "23_0": [
      "23",
      "0",
      "16",
      "🍂",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "51_15": [
      "51",
      "15",
      "10",
      "👩‍🦳",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "108_5": [
      "108",
      "5",
      "23",
      "🦓",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "51_12": [
      "51",
      "12",
      "5",
      "👩‍🦰",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "108_4": [
      "108",
      "4",
      "8",
      "🦒",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "51_13": [
      "51",
      "13",
      "2",
      "👩‍🦱",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "51_16": [
      "51",
      "16",
      "16",
      "👩‍🦼",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "51_17": [
      "51",
      "17",
      "13",
      "👩‍🦽",
      "b51",
      "emoji-51-40_2ff4c5b.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "23_9": [
      "23",
      "9",
      "4",
      "🍋",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "23_8": [
      "23",
      "8",
      "3",
      "🍊",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "23_7": [
      "23",
      "7",
      "6",
      "🍉",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "69_3": [
      "69",
      "3",
      "0",
      "💄",
      "b69",
      "emoji-69-40_d35c5cd.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "23_6": [
      "23",
      "6",
      "10",
      "🍈",
      "b23",
      "emoji-23-40_ad22422.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "102_13": [
      "102",
      "13",
      "17",
      "🤸‍♀️",
      "b102",
      "emoji-102-40_6861794.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "41_20": [
      "41",
      "20",
      "1",
      "👨‍👩‍👧‍👧",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "102_14": [
      "102",
      "14",
      "19",
      "🤸‍♂️",
      "b102",
      "emoji-102-40_6861794.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "102_12": [
      "102",
      "12",
      "18",
      "🤸",
      "b102",
      "emoji-102-40_6861794.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "108_7": [
      "108",
      "7",
      "6",
      "🦕",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "124_24": [
      "124",
      "24",
      "0",
      "🧗‍♂️",
      "b124",
      "emoji-124-40_188268a.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "108_6": [
      "108",
      "6",
      "22",
      "🦔",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "124_23": [
      "124",
      "23",
      "22",
      "🧗‍♀️",
      "b124",
      "emoji-124-40_188268a.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "108_9": [
      "108",
      "9",
      "22",
      "🦗",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "124_22": [
      "124",
      "22",
      "23",
      "🧗",
      "b124",
      "emoji-124-40_188268a.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "108_8": [
      "108",
      "8",
      "5",
      "🦖",
      "b108",
      "emoji-108-40_ef68e3c.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "34_5": [
      "34",
      "5",
      "21",
      "🐔",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "34_4": [
      "34",
      "4",
      "4",
      "🐓",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "34_3": [
      "34",
      "3",
      "20",
      "🐒",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "97_20": [
      "97",
      "20",
      "15",
      "🤜",
      "b97",
      "emoji-97-40_3bf0eb9.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "34_2": [
      "34",
      "2",
      "17",
      "🐑",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "34_1": [
      "34",
      "1",
      "19",
      "🐐",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "34_0": [
      "34",
      "0",
      "16",
      "🐏",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "134_22": [
      "134",
      "22",
      "13",
      "🫲",
      "b134",
      "emoji-134-40_23b2a4b.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "34_9": [
      "34",
      "9",
      "8",
      "🐗",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "34_8": [
      "34",
      "8",
      "15",
      "🐖",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "34_7": [
      "34",
      "7",
      "0",
      "🐕‍🦺",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "34_6": [
      "34",
      "6",
      "21",
      "🐕",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "41_13": [
      "41",
      "13",
      "8",
      "👨‍👨‍👧",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "41_14": [
      "41",
      "14",
      "9",
      "👨‍👨‍👧‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "41_15": [
      "41",
      "15",
      "11",
      "👨‍👨‍👧‍👧",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "41_16": [
      "41",
      "16",
      "21",
      "👨‍👩‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "41_10": [
      "41",
      "10",
      "21",
      "👨‍👧‍👧",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "41_11": [
      "41",
      "11",
      "7",
      "👨‍👨‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "41_12": [
      "41",
      "12",
      "10",
      "👨‍👨‍👦‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "97_14": [
      "97",
      "14",
      "14",
      "🤛",
      "b97",
      "emoji-97-40_3bf0eb9.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "124_11": [
      "124",
      "11",
      "5",
      "🧖‍♂️",
      "b124",
      "emoji-124-40_188268a.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "124_10": [
      "124",
      "10",
      "3",
      "🧖‍♀️",
      "b124",
      "emoji-124-40_188268a.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "41_17": [
      "41",
      "17",
      "0",
      "👨‍👩‍👦‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "41_18": [
      "41",
      "18",
      "22",
      "👨‍👩‍👧",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "41_19": [
      "41",
      "19",
      "23",
      "👨‍👩‍👧‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "8_0": [
      "8",
      "0",
      "10",
      "❤️‍🔥",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "8_1": [
      "8",
      "1",
      "11",
      "❤️‍🩹",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "8_2": [
      "8",
      "2",
      "4",
      "➕",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "8_3": [
      "8",
      "3",
      "5",
      "➖",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "8_4": [
      "8",
      "4",
      "6",
      "➗",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "8_6": [
      "8",
      "6",
      "22",
      "➰",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "8_7": [
      "8",
      "7",
      "23",
      "➿",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "63_14": [
      "63",
      "14",
      "10",
      "👯‍♀️",
      "b63",
      "emoji-63-40_f067ff0.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "63_15": [
      "63",
      "15",
      "11",
      "👯‍♂️",
      "b63",
      "emoji-63-40_f067ff0.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "18_10": [
      "18",
      "10",
      "18",
      "🇹🇫",
      "b18",
      "emoji-18-40_238de89.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "10_7": [
      "10",
      "7",
      "3",
      "🇧🇩",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "81_17": [
      "81",
      "17",
      "7",
      "🖱️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "10_6": [
      "10",
      "6",
      "4",
      "🇧🇧",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "81_18": [
      "81",
      "18",
      "8",
      "🖲️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "10_5": [
      "10",
      "5",
      "12",
      "🇧🇦",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "81_19": [
      "81",
      "19",
      "12",
      "🖼️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "10_4": [
      "10",
      "4",
      "0",
      "🇦🇿",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "10_3": [
      "10",
      "3",
      "10",
      "🇦🇽",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "10_2": [
      "10",
      "2",
      "21",
      "🇦🇼",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "81_14": [
      "81",
      "14",
      "6",
      "🖤",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "10_1": [
      "10",
      "1",
      "22",
      "🇦🇺",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "81_15": [
      "81",
      "15",
      "5",
      "🖥️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "10_0": [
      "10",
      "0",
      "23",
      "🇦🇹",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "81_16": [
      "81",
      "16",
      "6",
      "🖨️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "34_24": [
      "34",
      "24",
      "23",
      "🐦",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "4_17": [
      "4",
      "17",
      "13",
      "⚱️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "103_18": [
      "103",
      "18",
      "18",
      "🤽‍♂️",
      "b103",
      "emoji-103-40_8eeb509.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "4_16": [
      "4",
      "16",
      "11",
      "⚰️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "103_16": [
      "103",
      "16",
      "17",
      "🤽",
      "b103",
      "emoji-103-40_8eeb509.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "4_19": [
      "4",
      "19",
      "3",
      "⚾",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "103_17": [
      "103",
      "17",
      "16",
      "🤽‍♀️",
      "b103",
      "emoji-103-40_8eeb509.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "4_18": [
      "4",
      "18",
      "0",
      "⚽",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "114_0": [
      "114",
      "0",
      "5",
      "🧐",
      "b114",
      "emoji-114-40_b2087de.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "10_9": [
      "10",
      "9",
      "18",
      "🇧🇫",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "10_8": [
      "10",
      "8",
      "6",
      "🇧🇪",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "114_1": [
      "114",
      "1",
      "0",
      "🧑",
      "b114",
      "emoji-114-40_b2087de.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "4_11": [
      "4",
      "11",
      "2",
      "⚠️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "4_10": [
      "4",
      "10",
      "5",
      "⚜️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "4_13": [
      "4",
      "13",
      "9",
      "⚧️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "103_14": [
      "103",
      "14",
      "15",
      "🤼‍♀️",
      "b103",
      "emoji-103-40_8eeb509.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "103_15": [
      "103",
      "15",
      "16",
      "🤼‍♂️",
      "b103",
      "emoji-103-40_8eeb509.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "4_12": [
      "4",
      "12",
      "8",
      "⚡",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "4_15": [
      "4",
      "15",
      "9",
      "⚫",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "103_12": [
      "103",
      "12",
      "23",
      "🤺",
      "b103",
      "emoji-103-40_8eeb509.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "4_14": [
      "4",
      "14",
      "10",
      "⚪",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "21_7": [
      "21",
      "7",
      "15",
      "🌕",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "21_6": [
      "21",
      "6",
      "22",
      "🌔",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "34_19": [
      "34",
      "19",
      "12",
      "🐡",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "21_5": [
      "21",
      "5",
      "21",
      "🌓",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "34_18": [
      "34",
      "18",
      "13",
      "🐠",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "21_4": [
      "21",
      "4",
      "20",
      "🌒",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "34_17": [
      "34",
      "17",
      "14",
      "🐟",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "21_3": [
      "21",
      "3",
      "19",
      "🌑",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "34_16": [
      "34",
      "16",
      "16",
      "🐞",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "21_2": [
      "21",
      "2",
      "14",
      "🌐",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "34_15": [
      "34",
      "15",
      "11",
      "🐝",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "21_1": [
      "21",
      "1",
      "2",
      "🌏",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "34_14": [
      "34",
      "14",
      "17",
      "🐜",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "21_0": [
      "21",
      "0",
      "0",
      "🌎",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "34_13": [
      "34",
      "13",
      "13",
      "🐛",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "21_9": [
      "21",
      "9",
      "17",
      "🌗",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "21_8": [
      "21",
      "8",
      "16",
      "🌖",
      "b21",
      "emoji-21-40_70e0482.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "4_20": [
      "4",
      "20",
      "2",
      "⛄",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "4_22": [
      "4",
      "22",
      "21",
      "⛈️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "4_21": [
      "4",
      "21",
      "16",
      "⛅",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "12_11": [
      "12",
      "11",
      "10",
      "🇪🇺",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "4_24": [
      "4",
      "24",
      "18",
      "⛏️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "12_12": [
      "12",
      "12",
      "14",
      "🇫🇮",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "4_23": [
      "4",
      "23",
      "8",
      "⛎",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "12_10": [
      "12",
      "10",
      "9",
      "🇪🇹",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "34_23": [
      "34",
      "23",
      "2",
      "🐥",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "34_22": [
      "34",
      "22",
      "0",
      "🐤",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "34_21": [
      "34",
      "21",
      "1",
      "🐣",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "34_20": [
      "34",
      "20",
      "2",
      "🐢",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "78_7": [
      "78",
      "7",
      "16",
      "🕋",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "32_7": [
      "32",
      "7",
      "7",
      "🏪",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "32_6": [
      "32",
      "6",
      "9",
      "🏩",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "78_6": [
      "78",
      "6",
      "11",
      "🕊️",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "78_9": [
      "78",
      "9",
      "14",
      "🕍",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "32_5": [
      "32",
      "5",
      "6",
      "🏨",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "32_4": [
      "32",
      "4",
      "19",
      "🏧",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "78_8": [
      "78",
      "8",
      "13",
      "🕌",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "32_3": [
      "32",
      "3",
      "5",
      "🏦",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "32_2": [
      "32",
      "2",
      "4",
      "🏥",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "22_20": [
      "22",
      "20",
      "1",
      "🌽",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "32_1": [
      "32",
      "1",
      "3",
      "🏤",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "22_21": [
      "22",
      "21",
      "0",
      "🌾",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "32_0": [
      "32",
      "0",
      "2",
      "🏣",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "22_22": [
      "22",
      "22",
      "9",
      "🌿",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "78_1": [
      "78",
      "1",
      "12",
      "🔺",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "78_0": [
      "78",
      "0",
      "15",
      "🔹",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "78_2": [
      "78",
      "2",
      "13",
      "🔻",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "78_5": [
      "78",
      "5",
      "0",
      "🕉️",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "32_9": [
      "32",
      "9",
      "1",
      "🏬",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "32_8": [
      "32",
      "8",
      "8",
      "🏫",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "93_17": [
      "93",
      "17",
      "18",
      "🛁",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "93_19": [
      "93",
      "19",
      "3",
      "🛃",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "93_18": [
      "93",
      "18",
      "2",
      "🛂",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "34_12": [
      "34",
      "12",
      "21",
      "🐚",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "22_12": [
      "22",
      "12",
      "2",
      "🌵",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "22_13": [
      "22",
      "13",
      "23",
      "🌶️",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "34_11": [
      "34",
      "11",
      "7",
      "🐙",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "22_14": [
      "22",
      "14",
      "2",
      "🌷",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "34_10": [
      "34",
      "10",
      "3",
      "🐘",
      "b34",
      "emoji-34-40_95b0aa0.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "22_15": [
      "22",
      "15",
      "7",
      "🌸",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "22_16": [
      "22",
      "16",
      "3",
      "🌹",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "22_17": [
      "22",
      "17",
      "6",
      "🌺",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "93_11": [
      "93",
      "11",
      "19",
      "🛀",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "22_18": [
      "22",
      "18",
      "9",
      "🌻",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "93_10": [
      "93",
      "10",
      "17",
      "🚿",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "22_19": [
      "22",
      "19",
      "8",
      "🌼",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "89_8": [
      "89",
      "8",
      "19",
      "🚉",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "89_9": [
      "89",
      "9",
      "18",
      "🚊",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "89_6": [
      "89",
      "6",
      "17",
      "🚇",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "89_7": [
      "89",
      "7",
      "14",
      "🚈",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "81_24": [
      "81",
      "24",
      "6",
      "🗒️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "6_0": [
      "6",
      "0",
      "22",
      "⛹️‍♂️",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "81_20": [
      "81",
      "20",
      "18",
      "🗂️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "89_0": [
      "89",
      "0",
      "4",
      "🚁",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "6_1": [
      "6",
      "1",
      "16",
      "⛺",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "81_21": [
      "81",
      "21",
      "12",
      "🗃️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "6_2": [
      "6",
      "2",
      "15",
      "⛽",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "89_1": [
      "89",
      "1",
      "15",
      "🚂",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "81_22": [
      "81",
      "22",
      "14",
      "🗄️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "6_3": [
      "6",
      "3",
      "16",
      "✂️",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "81_23": [
      "81",
      "23",
      "10",
      "🗑️",
      "b81",
      "emoji-81-40_cfa013d.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "6_4": [
      "6",
      "4",
      "8",
      "✅",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "6_5": [
      "6",
      "5",
      "20",
      "✈️",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "89_4": [
      "89",
      "4",
      "13",
      "🚅",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "103_0": [
      "103",
      "0",
      "18",
      "🤹‍♀️",
      "b103",
      "emoji-103-40_8eeb509.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "6_6": [
      "6",
      "6",
      "6",
      "✉️",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "89_5": [
      "89",
      "5",
      "16",
      "🚆",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "89_2": [
      "89",
      "2",
      "8",
      "🚃",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "6_7": [
      "6",
      "7",
      "13",
      "✊",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "89_3": [
      "89",
      "3",
      "12",
      "🚄",
      "b89",
      "emoji-89-40_b07ea77.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "103_1": [
      "103",
      "1",
      "19",
      "🤹‍♂️",
      "b103",
      "emoji-103-40_8eeb509.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "22_23": [
      "22",
      "23",
      "11",
      "🍀",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "22_24": [
      "22",
      "24",
      "17",
      "🍁",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "125_12": [
      "125",
      "12",
      "9",
      "🧘‍♂️",
      "b125",
      "emoji-125-40_e98933e.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "125_11": [
      "125",
      "11",
      "7",
      "🧘‍♀️",
      "b125",
      "emoji-125-40_e98933e.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "125_10": [
      "125",
      "10",
      "8",
      "🧘",
      "b125",
      "emoji-125-40_e98933e.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "10_19": [
      "10",
      "19",
      "14",
      "🇧🇷",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "10_12": [
      "10",
      "12",
      "19",
      "🇧🇮",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "10_11": [
      "10",
      "11",
      "2",
      "🇧🇭",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "10_13": [
      "10",
      "13",
      "8",
      "🇧🇯",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "10_16": [
      "10",
      "16",
      "16",
      "🇧🇳",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "10_15": [
      "10",
      "15",
      "9",
      "🇧🇲",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "10_18": [
      "10",
      "18",
      "1",
      "🇧🇶",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "10_17": [
      "10",
      "17",
      "11",
      "🇧🇴",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "10_21": [
      "10",
      "21",
      "10",
      "🇧🇹",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "10_20": [
      "10",
      "20",
      "1",
      "🇧🇸",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "22_10": [
      "22",
      "10",
      "5",
      "🌳",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "22_11": [
      "22",
      "11",
      "6",
      "🌴",
      "b22",
      "emoji-22-40_1267b03.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "10_23": [
      "10",
      "23",
      "13",
      "🇧🇼",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "10_24": [
      "10",
      "24",
      "5",
      "🇧🇾",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "65_6": [
      "65",
      "6",
      "22",
      "👲",
      "b65",
      "emoji-65-40_8f39da8.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "71_18": [
      "71",
      "18",
      "15",
      "💠",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "71_19": [
      "71",
      "19",
      "18",
      "💡",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "71_16": [
      "71",
      "16",
      "14",
      "💞",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "71_17": [
      "71",
      "17",
      "20",
      "💟",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "71_14": [
      "71",
      "14",
      "5",
      "💜",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "71_15": [
      "71",
      "15",
      "19",
      "💝",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "93_20": [
      "93",
      "20",
      "4",
      "🛄",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "71_12": [
      "71",
      "12",
      "3",
      "💚",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "71_13": [
      "71",
      "13",
      "2",
      "💛",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "71_10": [
      "71",
      "10",
      "18",
      "💘",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "71_11": [
      "71",
      "11",
      "4",
      "💙",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "93_23": [
      "93",
      "23",
      "9",
      "🛌",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "93_22": [
      "93",
      "22",
      "7",
      "🛋️",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "93_21": [
      "93",
      "21",
      "5",
      "🛅",
      "b93",
      "emoji-93-40_5b3b0e0.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "76_9": [
      "76",
      "9",
      "3",
      "🔐",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "76_8": [
      "76",
      "8",
      "2",
      "🔏",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "83_19": [
      "83",
      "19",
      "1",
      "😝",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "32_24": [
      "32",
      "24",
      "13",
      "🏵️",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "83_16": [
      "83",
      "16",
      "22",
      "😚",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "83_15": [
      "83",
      "15",
      "21",
      "😙",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "83_18": [
      "83",
      "18",
      "2",
      "😜",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "83_17": [
      "83",
      "17",
      "0",
      "😛",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "76_1": [
      "76",
      "1",
      "11",
      "🔈",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "83_12": [
      "83",
      "12",
      "20",
      "😖",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "76_0": [
      "76",
      "0",
      "12",
      "🔇",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "83_11": [
      "83",
      "11",
      "16",
      "😕",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "76_3": [
      "76",
      "3",
      "14",
      "🔊",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "83_14": [
      "83",
      "14",
      "19",
      "😘",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "76_2": [
      "76",
      "2",
      "13",
      "🔉",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "83_13": [
      "83",
      "13",
      "20",
      "😗",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "76_5": [
      "76",
      "5",
      "17",
      "🔌",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "76_4": [
      "76",
      "4",
      "15",
      "🔋",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "76_7": [
      "76",
      "7",
      "1",
      "🔎",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "83_10": [
      "83",
      "10",
      "14",
      "😔",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "76_6": [
      "76",
      "6",
      "0",
      "🔍",
      "b76",
      "emoji-76-40_d2ab53e.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "6_13": [
      "6",
      "13",
      "7",
      "✋",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "71_23": [
      "71",
      "23",
      "10",
      "💥",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "71_24": [
      "71",
      "24",
      "6",
      "💦",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "71_21": [
      "71",
      "21",
      "3",
      "💣",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "71_22": [
      "71",
      "22",
      "18",
      "💤",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "71_20": [
      "71",
      "20",
      "8",
      "💢",
      "b71",
      "emoji-71-40_959a828.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "32_17": [
      "32",
      "17",
      "5",
      "🏳️‍🌈",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "105_2": [
      "105",
      "2",
      "1",
      "🥊",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "32_18": [
      "32",
      "18",
      "1",
      "🏴",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "105_1": [
      "105",
      "1",
      "10",
      "🥉",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "32_15": [
      "32",
      "15",
      "0",
      "🏳️",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "105_4": [
      "105",
      "4",
      "8",
      "🥌",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "32_16": [
      "32",
      "16",
      "6",
      "🏳️‍⚧️",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "105_3": [
      "105",
      "3",
      "2",
      "🥋",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "32_13": [
      "32",
      "13",
      "0",
      "🏰",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "105_6": [
      "105",
      "6",
      "4",
      "🥎",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "4_0": [
      "4",
      "0",
      "9",
      "♾️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "32_14": [
      "32",
      "14",
      "7",
      "🏳‍🟧‍⬛‍🟧",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "105_5": [
      "105",
      "5",
      "15",
      "🥍",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "4_1": [
      "4",
      "1",
      "21",
      "♿",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "32_11": [
      "32",
      "11",
      "2",
      "🏮",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "105_8": [
      "105",
      "8",
      "8",
      "🥐",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "4_2": [
      "4",
      "2",
      "16",
      "⚒️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "32_12": [
      "32",
      "12",
      "1",
      "🏯",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "105_7": [
      "105",
      "7",
      "8",
      "🥏",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "4_3": [
      "4",
      "3",
      "13",
      "⚓",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "4_4": [
      "4",
      "4",
      "8",
      "⚔️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "87_0": [
      "87",
      "0",
      "19",
      "🙊",
      "b87",
      "emoji-87-40_8c08f48.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "4_6": [
      "4",
      "6",
      "10",
      "⚖️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "4_7": [
      "4",
      "7",
      "20",
      "⚗️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "41_6": [
      "41",
      "6",
      "17",
      "👨‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "4_8": [
      "4",
      "8",
      "21",
      "⚙️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "41_7": [
      "41",
      "7",
      "20",
      "👨‍👦‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "32_19": [
      "32",
      "19",
      "2",
      "🏴‍☠️",
      "b32",
      "emoji-32-40_765d209.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "4_9": [
      "4",
      "9",
      "22",
      "⚛️",
      "b4",
      "emoji-4-40_78639f7.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "105_0": [
      "105",
      "0",
      "9",
      "🥈",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "41_8": [
      "41",
      "8",
      "18",
      "👨‍👧",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "41_9": [
      "41",
      "9",
      "19",
      "👨‍👧‍👦",
      "b41",
      "emoji-41-40_203058a.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "6_24": [
      "6",
      "24",
      "17",
      "✌️",
      "b6",
      "emoji-6-40_1de31e0.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "10_10": [
      "10",
      "10",
      "17",
      "🇧🇬",
      "b10",
      "emoji-10-40_752facf.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "105_9": [
      "105",
      "9",
      "19",
      "🥑",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "14_18": [
      "14",
      "18",
      "5",
      "🇰🇿",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "14_17": [
      "14",
      "17",
      "2",
      "🇰🇾",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "14_16": [
      "14",
      "16",
      "9",
      "🇰🇼",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "98_1": [
      "98",
      "1",
      "9",
      "🤝",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "98_7": [
      "98",
      "7",
      "16",
      "🤞",
      "b98",
      "emoji-98-40_88dc6b2.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "14_19": [
      "14",
      "19",
      "11",
      "🇱🇦",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "14_20": [
      "14",
      "20",
      "13",
      "🇱🇧",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "14_24": [
      "14",
      "24",
      "15",
      "🇱🇷",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "14_22": [
      "14",
      "22",
      "17",
      "🇱🇮",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "78_10": [
      "78",
      "10",
      "4",
      "🕎",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "78_12": [
      "78",
      "12",
      "6",
      "🕑",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "78_11": [
      "78",
      "11",
      "5",
      "🕐",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "26_10": [
      "26",
      "10",
      "15",
      "🎒",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "26_11": [
      "26",
      "11",
      "6",
      "🎓",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "26_14": [
      "26",
      "14",
      "4",
      "🎙️",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "26_15": [
      "26",
      "15",
      "5",
      "🎚️",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "26_12": [
      "26",
      "12",
      "12",
      "🎖️",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "26_13": [
      "26",
      "13",
      "14",
      "🎗️",
      "b26",
      "emoji-26-40_3ea7a20.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "130_13": [
      "130",
      "13",
      "22",
      "🪒",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "130_12": [
      "130",
      "12",
      "6",
      "🪑",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "130_11": [
      "130",
      "11",
      "3",
      "🪐",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "130_10": [
      "130",
      "10",
      "11",
      "🪆",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "130_17": [
      "130",
      "17",
      "8",
      "🪖",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "130_16": [
      "130",
      "16",
      "10",
      "🪕",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "130_15": [
      "130",
      "15",
      "21",
      "🪔",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "130_14": [
      "130",
      "14",
      "5",
      "🪓",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "130_19": [
      "130",
      "19",
      "5",
      "🪘",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "130_18": [
      "130",
      "18",
      "8",
      "🪗",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "78_24": [
      "78",
      "24",
      "18",
      "🕝",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "74_3": [
      "74",
      "3",
      "1",
      "📗",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "74_2": [
      "74",
      "2",
      "5",
      "📖",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "74_5": [
      "74",
      "5",
      "3",
      "📙",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "105_19": [
      "105",
      "19",
      "3",
      "🥛",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "74_4": [
      "74",
      "4",
      "2",
      "📘",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "105_18": [
      "105",
      "18",
      "14",
      "🥚",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "74_7": [
      "74",
      "7",
      "5",
      "📛",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "130_20": [
      "130",
      "20",
      "5",
      "🪙",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "74_6": [
      "74",
      "6",
      "4",
      "📚",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "74_9": [
      "74",
      "9",
      "22",
      "📝",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "74_8": [
      "74",
      "8",
      "22",
      "📜",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "130_24": [
      "130",
      "24",
      "14",
      "🪝",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "105_13": [
      "105",
      "13",
      "2",
      "🥕",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "130_23": [
      "130",
      "23",
      "11",
      "🪜",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "105_12": [
      "105",
      "12",
      "6",
      "🥔",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "130_22": [
      "130",
      "22",
      "13",
      "🪛",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "105_11": [
      "105",
      "11",
      "19",
      "🥓",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "130_21": [
      "130",
      "21",
      "19",
      "🪚",
      "b130",
      "emoji-130-40_e101502.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "105_10": [
      "105",
      "10",
      "22",
      "🥒",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "105_17": [
      "105",
      "17",
      "6",
      "🥙",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "105_16": [
      "105",
      "16",
      "12",
      "🥘",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "74_1": [
      "74",
      "1",
      "0",
      "📕",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "105_15": [
      "105",
      "15",
      "11",
      "🥗",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "74_0": [
      "74",
      "0",
      "22",
      "📔",
      "b74",
      "emoji-74-40_d2c8697.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "105_14": [
      "105",
      "14",
      "11",
      "🥖",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "78_14": [
      "78",
      "14",
      "8",
      "🕓",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "78_13": [
      "78",
      "13",
      "7",
      "🕒",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "78_16": [
      "78",
      "16",
      "10",
      "🕕",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "78_15": [
      "78",
      "15",
      "9",
      "🕔",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "2_0": [
      "2",
      "0",
      "0",
      "◼️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "2_1": [
      "2",
      "1",
      "23",
      "◽",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "78_18": [
      "78",
      "18",
      "12",
      "🕗",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "2_2": [
      "2",
      "2",
      "22",
      "◾",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "78_17": [
      "78",
      "17",
      "11",
      "🕖",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "2_3": [
      "2",
      "3",
      "14",
      "☀️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "78_19": [
      "78",
      "19",
      "13",
      "🕘",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "2_4": [
      "2",
      "4",
      "18",
      "☁️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "2_5": [
      "2",
      "5",
      "9",
      "☂️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "85_4": [
      "85",
      "4",
      "0",
      "😽",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "2_6": [
      "2",
      "6",
      "1",
      "☃️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "36_16": [
      "36",
      "16",
      "2",
      "👄",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "85_5": [
      "85",
      "5",
      "3",
      "😾",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "2_7": [
      "2",
      "7",
      "9",
      "☄️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "85_2": [
      "85",
      "2",
      "22",
      "😻",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "36_17": [
      "36",
      "17",
      "5",
      "👅",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "2_8": [
      "2",
      "8",
      "23",
      "☎️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "85_3": [
      "85",
      "3",
      "23",
      "😼",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "36_18": [
      "36",
      "18",
      "4",
      "👆",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "2_9": [
      "2",
      "9",
      "1",
      "☑️",
      "b2",
      "emoji-2-40_ed53db9.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "85_8": [
      "85",
      "8",
      "17",
      "🙁",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "85_9": [
      "85",
      "9",
      "13",
      "🙂",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "85_6": [
      "85",
      "6",
      "2",
      "😿",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "85_7": [
      "85",
      "7",
      "1",
      "🙀",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "14_10": [
      "14",
      "10",
      "20",
      "🇰🇭",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "105_24": [
      "105",
      "24",
      "5",
      "🥠",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "105_23": [
      "105",
      "23",
      "22",
      "🥟",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "105_22": [
      "105",
      "22",
      "17",
      "🥞",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "105_21": [
      "105",
      "21",
      "16",
      "🥝",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "85_0": [
      "85",
      "0",
      "21",
      "😹",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "85_1": [
      "85",
      "1",
      "19",
      "😺",
      "b85",
      "emoji-85-40_129f5ca.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "14_12": [
      "14",
      "12",
      "11",
      "🇰🇲",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "36_24": [
      "36",
      "24",
      "5",
      "👇",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "14_11": [
      "14",
      "11",
      "7",
      "🇰🇮",
      "b14",
      "emoji-14-40_d64c38c.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "78_21": [
      "78",
      "21",
      "15",
      "🕚",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "105_20": [
      "105",
      "20",
      "0",
      "🥜",
      "b105",
      "emoji-105-40_3614d2b.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "78_20": [
      "78",
      "20",
      "14",
      "🕙",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "78_23": [
      "78",
      "23",
      "17",
      "🕜",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "78_22": [
      "78",
      "22",
      "16",
      "🕛",
      "b78",
      "emoji-78-40_df3a2b5.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "24_20": [
      "24",
      "20",
      "2",
      "🍯",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "24_22": [
      "24",
      "22",
      "21",
      "🍱",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "24_21": [
      "24",
      "21",
      "14",
      "🍰",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "24_24": [
      "24",
      "24",
      "15",
      "🍳",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "24_23": [
      "24",
      "23",
      "18",
      "🍲",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "50_4": [
      "50",
      "4",
      "23",
      "👩",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "96_5": [
      "96",
      "5",
      "7",
      "🤍",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "50_8": [
      "50",
      "8",
      "13",
      "👩‍❤️‍👨",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "50_9": [
      "50",
      "9",
      "14",
      "👩‍❤️‍👩",
      "b50",
      "emoji-50-40_b6820c8.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "96_6": [
      "96",
      "6",
      "8",
      "🤎",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "96_7": [
      "96",
      "7",
      "23",
      "🤏",
      "b96",
      "emoji-96-40_d154eda.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "8_14": [
      "8",
      "14",
      "9",
      "⬜",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "91_14": [
      "91",
      "14",
      "4",
      "🚴‍♀️",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "107_16": [
      "107",
      "16",
      "4",
      "🦅",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "91_15": [
      "91",
      "15",
      "6",
      "🚴‍♂️",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "8_15": [
      "8",
      "15",
      "5",
      "⭐",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "107_17": [
      "107",
      "17",
      "3",
      "🦆",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "91_12": [
      "91",
      "12",
      "12",
      "🚳",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "107_18": [
      "107",
      "18",
      "6",
      "🦇",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "8_13": [
      "8",
      "13",
      "8",
      "⬛",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "91_13": [
      "91",
      "13",
      "5",
      "🚴",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "107_19": [
      "107",
      "19",
      "18",
      "🦈",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "36_10": [
      "36",
      "10",
      "8",
      "👃",
      "b36",
      "emoji-36-40_bcf821b.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "8_18": [
      "8",
      "18",
      "1",
      "〽️",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "107_12": [
      "107",
      "12",
      "11",
      "🦁",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "8_19": [
      "8",
      "19",
      "14",
      "㊗️",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "107_13": [
      "107",
      "13",
      "1",
      "🦂",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "8_16": [
      "8",
      "16",
      "2",
      "⭕",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "107_14": [
      "107",
      "14",
      "5",
      "🦃",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "8_17": [
      "8",
      "17",
      "21",
      "〰️",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "107_15": [
      "107",
      "15",
      "10",
      "🦄",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "24_15": [
      "24",
      "15",
      "22",
      "🍪",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "24_14": [
      "24",
      "14",
      "21",
      "🍩",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "24_17": [
      "24",
      "17",
      "18",
      "🍬",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "107_10": [
      "107",
      "10",
      "17",
      "🥿",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "24_16": [
      "24",
      "16",
      "19",
      "🍫",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "107_11": [
      "107",
      "11",
      "11",
      "🦀",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "91_10": [
      "91",
      "10",
      "13",
      "🚱",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "24_19": [
      "24",
      "19",
      "16",
      "🍮",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "91_11": [
      "91",
      "11",
      "19",
      "🚲",
      "b91",
      "emoji-91-40_3a3044c.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "24_18": [
      "24",
      "18",
      "17",
      "🍭",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "123_4": [
      "123",
      "4",
      "20",
      "🧓",
      "b123",
      "emoji-123-40_d0b83e6.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "8_23": [
      "8",
      "23",
      "19",
      "🅰️",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "8_24": [
      "8",
      "24",
      "20",
      "🅱️",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "107_23": [
      "107",
      "23",
      "20",
      "🦌",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "107_24": [
      "107",
      "24",
      "0",
      "🦍",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "107_20": [
      "107",
      "20",
      "5",
      "🦉",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "107_21": [
      "107",
      "21",
      "5",
      "🦊",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "107_22": [
      "107",
      "22",
      "14",
      "🦋",
      "b107",
      "emoji-107-40_e88d6f1.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "8_21": [
      "8",
      "21",
      "4",
      "🀄",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "8_22": [
      "8",
      "22",
      "2",
      "🃏",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "8_20": [
      "8",
      "20",
      "13",
      "㊙️",
      "b8",
      "emoji-8-40_9f8e3ba.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "12_16": [
      "12",
      "16",
      "12",
      "🇫🇴",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "12_13": [
      "12",
      "13",
      "13",
      "🇫🇯",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "12_14": [
      "12",
      "14",
      "11",
      "🇫🇰",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "19_2": [
      "19",
      "2",
      "8",
      "🇺🇳",
      "b19",
      "emoji-19-40_18ef0e5.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "72_9": [
      "72",
      "9",
      "4",
      "💫",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "12_17": [
      "12",
      "17",
      "15",
      "🇫🇷",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "68_22": [
      "68",
      "22",
      "8",
      "💃",
      "b68",
      "emoji-68-40_366d240.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "12_18": [
      "12",
      "18",
      "19",
      "🇬🇦",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "129_24": [
      "129",
      "24",
      "5",
      "🩸",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "129_23": [
      "129",
      "23",
      "16",
      "🩴",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "12_22": [
      "12",
      "22",
      "16",
      "🇬🇫",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "72_1": [
      "72",
      "1",
      "4",
      "💨",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "12_23": [
      "12",
      "23",
      "7",
      "🇬🇬",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -96px -128px;",
      "background-position: -120px -160px;"
    ],
    "72_0": [
      "72",
      "0",
      "5",
      "💧",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "12_20": [
      "12",
      "20",
      "3",
      "🇬🇩",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "72_3": [
      "72",
      "3",
      "15",
      "💪",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "12_21": [
      "12",
      "21",
      "21",
      "🇬🇪",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "72_2": [
      "72",
      "2",
      "11",
      "💩",
      "b72",
      "emoji-72-40_3a735aa.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "129_20": [
      "129",
      "20",
      "13",
      "🩱",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: 0px -128px;",
      "background-position: 0px -160px;"
    ],
    "129_22": [
      "129",
      "22",
      "9",
      "🩳",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -64px -128px;",
      "background-position: -80px -160px;"
    ],
    "129_21": [
      "129",
      "21",
      "8",
      "🩲",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -32px -128px;",
      "background-position: -40px -160px;"
    ],
    "24_11": [
      "24",
      "11",
      "11",
      "🍦",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "24_10": [
      "24",
      "10",
      "4",
      "🍥",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ],
    "24_13": [
      "24",
      "13",
      "10",
      "🍨",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "24_12": [
      "24",
      "12",
      "9",
      "🍧",
      "b24",
      "emoji-24-40_e6343e5.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "83_6": [
      "83",
      "6",
      "3",
      "😐",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -32px -32px;",
      "background-position: -40px -40px;"
    ],
    "83_7": [
      "83",
      "7",
      "5",
      "😑",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -64px -32px;",
      "background-position: -80px -40px;"
    ],
    "12_24": [
      "12",
      "24",
      "23",
      "🇬🇭",
      "b12",
      "emoji-12-40_d9c6a60.webp",
      "background-position: -128px -128px;",
      "background-position: -160px -160px;"
    ],
    "83_4": [
      "83",
      "4",
      "7",
      "😎",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -128px 0px;",
      "background-position: -160px 0px;"
    ],
    "83_5": [
      "83",
      "5",
      "11",
      "😏",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: 0px -32px;",
      "background-position: 0px -40px;"
    ],
    "83_8": [
      "83",
      "8",
      "12",
      "😒",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -96px -32px;",
      "background-position: -120px -40px;"
    ],
    "83_9": [
      "83",
      "9",
      "15",
      "😓",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "129_13": [
      "129",
      "13",
      "13",
      "🧺",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -96px -64px;",
      "background-position: -120px -80px;"
    ],
    "129_12": [
      "129",
      "12",
      "11",
      "🧹",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -64px -64px;",
      "background-position: -80px -80px;"
    ],
    "129_15": [
      "129",
      "15",
      "20",
      "🧼",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: 0px -96px;",
      "background-position: 0px -120px;"
    ],
    "129_14": [
      "129",
      "14",
      "14",
      "🧻",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -128px -64px;",
      "background-position: -160px -80px;"
    ],
    "129_17": [
      "129",
      "17",
      "2",
      "🧾",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -64px -96px;",
      "background-position: -80px -120px;"
    ],
    "83_2": [
      "83",
      "2",
      "16",
      "😌",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -64px 0px;",
      "background-position: -80px 0px;"
    ],
    "19_9": [
      "19",
      "9",
      "15",
      "🇻🇬",
      "b19",
      "emoji-19-40_18ef0e5.webp",
      "background-position: -128px -32px;",
      "background-position: -160px -40px;"
    ],
    "129_16": [
      "129",
      "16",
      "23",
      "🧽",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -32px -96px;",
      "background-position: -40px -120px;"
    ],
    "83_3": [
      "83",
      "3",
      "17",
      "😍",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -96px 0px;",
      "background-position: -120px 0px;"
    ],
    "129_19": [
      "129",
      "19",
      "21",
      "🩰",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -128px -96px;",
      "background-position: -160px -120px;"
    ],
    "83_0": [
      "83",
      "0",
      "11",
      "😊",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: 0px 0px;",
      "background-position: 0px 0px;"
    ],
    "129_18": [
      "129",
      "18",
      "17",
      "🧿",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -96px -96px;",
      "background-position: -120px -120px;"
    ],
    "83_1": [
      "83",
      "1",
      "23",
      "😋",
      "b83",
      "emoji-83-40_31cc406.webp",
      "background-position: -32px 0px;",
      "background-position: -40px 0px;"
    ],
    "129_11": [
      "129",
      "11",
      "10",
      "🧸",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: -32px -64px;",
      "background-position: -40px -80px;"
    ],
    "129_10": [
      "129",
      "10",
      "7",
      "🧷",
      "b129",
      "emoji-129-40_22b551e.webp",
      "background-position: 0px -64px;",
      "background-position: 0px -80px;"
    ]
  }

}
