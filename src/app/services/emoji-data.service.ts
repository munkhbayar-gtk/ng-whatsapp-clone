import { Injectable } from '@angular/core';

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
    this.prepareData();
  }
  private extractIdx(url: string) : number {
    const seprator = 'emoji-';
    let idx = url.indexOf(seprator);
    const sub = url.substring(idx+ seprator.length);
    idx = sub.indexOf('-');
    const idxStr = sub.substring(0, idx);
    return parseInt(idxStr);
  }
  private prepareData() {

    this.data = new Map();
    for(let i = 0 ; i < this.urls.length; i ++) {
      const url = this.urls[i];
      const idx = this.extractIdx(url);
      this.extractUrl(url, idx);
    }
  }

  private extractUrl(url : string, idx : number) {
    for(let i = 0 ; i < this.n ; i ++) {
      for(let j = 0 ; j < this.m ; j ++){
        const key = this.key(idx, i, j);//`${idx}_${i}_${j}`;
        const emojiData : EmojiData = {
          idx : idx,
          posX : j * -40,
          posY : i * -40,
          url: url,
        }
        this.data.set(key, emojiData);
      }
    }
  }

  private key(idx: number, i : number, j : number) : string {
    return `${idx}_${i}_${j}`;
  }

  getEmoji(idx : number, subIdx : number) : EmojiData | undefined {
    const i = Math.floor(subIdx / this.n);
    const j = subIdx % this.m;
    const k = this.key(idx, i, j);
    console.log('key', k);
    return this.data.get(k);
  }

  private urls = [
    "/assets/images/webp-icons/emoji-0-40_5acfb0b.webp",
    "/assets/images/webp-icons/emoji-1-40_8b08ff4.webp",
    "/assets/images/webp-icons/emoji-2-40_ed53db9.webp",
    "/assets/images/webp-icons/emoji-3-40_b11078f.webp",
    "/assets/images/webp-icons/emoji-4-40_78639f7.webp",
    "/assets/images/webp-icons/emoji-5-40_cf53449.webp",
    "/assets/images/webp-icons/emoji-6-40_1de31e0.webp",
    "/assets/images/webp-icons/emoji-7-40_e239476.webp",
    "/assets/images/webp-icons/emoji-8-40_9f8e3ba.webp",
    "/assets/images/webp-icons/emoji-9-40_4ab3ac1.webp",
    "/assets/images/webp-icons/emoji-10-40_752facf.webp",
    "/assets/images/webp-icons/emoji-11-40_6b95d49.webp",
    "/assets/images/webp-icons/emoji-12-40_d9c6a60.webp",
    "/assets/images/webp-icons/emoji-13-40_fee0e88.webp",
    "/assets/images/webp-icons/emoji-15-40_5a05f43.webp",
    "/assets/images/webp-icons/emoji-16-40_ef5204c.webp",
    "/assets/images/webp-icons/emoji-17-40_4556c67.webp",
    "/assets/images/webp-icons/emoji-18-40_238de89.webp",
    "/assets/images/webp-icons/emoji-19-40_18ef0e5.webp",
    "/assets/images/webp-icons/emoji-20-40_5566f14.webp",
    "/assets/images/webp-icons/emoji-21-40_70e0482.webp",
    "/assets/images/webp-icons/emoji-22-40_1267b03.webp",
    "/assets/images/webp-icons/emoji-23-40_ad22422.webp",
    "/assets/images/webp-icons/emoji-24-40_e6343e5.webp",
    "/assets/images/webp-icons/emoji-25-40_aa1b7c4.webp",
    "/assets/images/webp-icons/emoji-26-40_3ea7a20.webp",
    "/assets/images/webp-icons/emoji-27-40_bc0a084.webp",
    "/assets/images/webp-icons/emoji-28-40_794fe85.webp",
    "/assets/images/webp-icons/emoji-29-40_840ee23.webp",
    "/assets/images/webp-icons/emoji-30-40_9f9ff3a.webp",
    "/assets/images/webp-icons/emoji-31-40_b71d330.webp",
    "/assets/images/webp-icons/emoji-32-40_765d209.webp",
    "/assets/images/webp-icons/emoji-34-40_95b0aa0.webp",
    "/assets/images/webp-icons/emoji-35-40_b96bb59.webp",
    "/assets/images/webp-icons/emoji-36-40_bcf821b.webp",
    "/assets/images/webp-icons/emoji-37-40_e3230b6.webp",
    "/assets/images/webp-icons/emoji-38-40_27114fe.webp",
    "/assets/images/webp-icons/emoji-39-40_deaed36.webp",
    "/assets/images/webp-icons/emoji-40-40_c505ee2.webp",
    "/assets/images/webp-icons/emoji-41-40_203058a.webp",
    "/assets/images/webp-icons/emoji-42-40_9dce20f.webp",
    "/assets/images/webp-icons/emoji-43-40_ebb6125.webp",
    "/assets/images/webp-icons/emoji-44-40_b7d55b2.webp",
    "/assets/images/webp-icons/emoji-45-40_dcc1550.webp",
    "/assets/images/webp-icons/emoji-46-40_f9e9329.webp",
    "/assets/images/webp-icons/emoji-47-40_53cf97d.webp",
    "/assets/images/webp-icons/emoji-48-40_0298390.webp",
    "/assets/images/webp-icons/emoji-49-40_b592ceb.webp",
    "/assets/images/webp-icons/emoji-50-40_b6820c8.webp",
    "/assets/images/webp-icons/emoji-51-40_2ff4c5b.webp",
    "/assets/images/webp-icons/emoji-52-40_5cdb802.webp",
    "/assets/images/webp-icons/emoji-53-40_9ea6b52.webp",
    "/assets/images/webp-icons/emoji-54-40_7ddf68a.webp",
    "/assets/images/webp-icons/emoji-55-40_c37eb5e.webp",
    "/assets/images/webp-icons/emoji-56-40_303d753.webp",
    "/assets/images/webp-icons/emoji-57-40_8d4de3d.webp",
    "/assets/images/webp-icons/emoji-58-40_fc9c637.webp",
    "/assets/images/webp-icons/emoji-59-40_80c3581.webp",
    "/assets/images/webp-icons/emoji-60-40_2493ae4.webp",
    "/assets/images/webp-icons/emoji-61-40_17e20f1.webp",
    "/assets/images/webp-icons/emoji-62-40_eef8b24.webp",
    "/assets/images/webp-icons/emoji-63-40_f067ff0.webp",
    "/assets/images/webp-icons/emoji-64-40_8732587.webp",
    "/assets/images/webp-icons/emoji-65-40_8f39da8.webp",
    "/assets/images/webp-icons/emoji-66-40_d74d5c0.webp",
    "/assets/images/webp-icons/emoji-67-40_bc349d2.webp",
    "/assets/images/webp-icons/emoji-68-40_366d240.webp",
    "/assets/images/webp-icons/emoji-69-40_d35c5cd.webp",
    "/assets/images/webp-icons/emoji-70-40_8793169.webp",
    "/assets/images/webp-icons/emoji-71-40_959a828.webp",
    "/assets/images/webp-icons/emoji-72-40_3a735aa.webp",
    "/assets/images/webp-icons/emoji-73-40_bacaeba.webp",
    "/assets/images/webp-icons/emoji-74-40_d2c8697.webp",
    "/assets/images/webp-icons/emoji-75-40_51d393b.webp",
    "/assets/images/webp-icons/emoji-76-40_d2ab53e.webp",
    "/assets/images/webp-icons/emoji-77-40_7281b3b.webp",
    "/assets/images/webp-icons/emoji-78-40_df3a2b5.webp",
    "/assets/images/webp-icons/emoji-79-40_94aabbd.webp",
    "/assets/images/webp-icons/emoji-80-40_826b5e7.webp",
    "/assets/images/webp-icons/emoji-81-40_cfa013d.webp",
    "/assets/images/webp-icons/emoji-82-40_16f44b7.webp",
    "/assets/images/webp-icons/emoji-83-40_31cc406.webp",
    "/assets/images/webp-icons/emoji-84-40_9fe4994.webp",
    "/assets/images/webp-icons/emoji-85-40_129f5ca.webp",
    "/assets/images/webp-icons/emoji-86-40_2c85b8c.webp",
    "/assets/images/webp-icons/emoji-87-40_8c08f48.webp",
    "/assets/images/webp-icons/emoji-88-40_f4a6a53.webp",
    "/assets/images/webp-icons/emoji-89-40_b07ea77.webp",
    "/assets/images/webp-icons/emoji-90-40_bfe3df4.webp",
    "/assets/images/webp-icons/emoji-91-40_3a3044c.webp",
    "/assets/images/webp-icons/emoji-92-40_392e1a7.webp",
    "/assets/images/webp-icons/emoji-93-40_5b3b0e0.webp",
    "/assets/images/webp-icons/emoji-94-40_3ab7358.webp",
    "/assets/images/webp-icons/emoji-95-40_88e0e67.webp",
    "/assets/images/webp-icons/emoji-96-40_d154eda.webp",
    "/assets/images/webp-icons/emoji-97-40_3bf0eb9.webp",
    "/assets/images/webp-icons/emoji-98-40_88dc6b2.webp",
    "/assets/images/webp-icons/emoji-99-40_e15ae1c.webp",
    "/assets/images/webp-icons/emoji-100-40_d48ed26.webp",
    "/assets/images/webp-icons/emoji-101-40_00b60ba.webp",
    "/assets/images/webp-icons/emoji-102-40_6861794.webp",
    "/assets/images/webp-icons/emoji-103-40_8eeb509.webp",
    "/assets/images/webp-icons/emoji-104-40_d252d87.webp",
    "/assets/images/webp-icons/emoji-105-40_3614d2b.webp",
    "/assets/images/webp-icons/emoji-106-40_7796ea9.webp",
    "/assets/images/webp-icons/emoji-107-40_e88d6f1.webp",
    "/assets/images/webp-icons/emoji-108-40_ef68e3c.webp",
    "/assets/images/webp-icons/emoji-109-40_acc22ba.webp",
    "/assets/images/webp-icons/emoji-110-40_fa5e529.webp",
    "/assets/images/webp-icons/emoji-111-40_dec013f.webp",
    "/assets/images/webp-icons/emoji-112-40_9ac620c.webp",
    "/assets/images/webp-icons/emoji-113-40_dcba913.webp",
    "/assets/images/webp-icons/emoji-114-40_b2087de.webp",
    "/assets/images/webp-icons/emoji-115-40_4705da5.webp",
    "/assets/images/webp-icons/emoji-116-40_e1c1dd9.webp",
    "/assets/images/webp-icons/emoji-117-40_194ba5c.webp",
    "/assets/images/webp-icons/emoji-118-40_a0cbfd7.webp",
    "/assets/images/webp-icons/emoji-119-40_892e8b7.webp",
    "/assets/images/webp-icons/emoji-120-40_a213123.webp",
    "/assets/images/webp-icons/emoji-121-40_848e79e.webp",
    "/assets/images/webp-icons/emoji-122-40_538da3d.webp",
    "/assets/images/webp-icons/emoji-123-40_d0b83e6.webp",
    "/assets/images/webp-icons/emoji-124-40_188268a.webp",
    "/assets/images/webp-icons/emoji-125-40_e98933e.webp",
    "/assets/images/webp-icons/emoji-126-40_2e69ed7.webp",
    "/assets/images/webp-icons/emoji-127-40_1d7d7fd.webp",
    "/assets/images/webp-icons/emoji-128-40_c3216b8.webp",
    "/assets/images/webp-icons/emoji-129-40_22b551e.webp",
    "/assets/images/webp-icons/emoji-130-40_e101502.webp",
    "/assets/images/webp-icons/emoji-131-40_5a941ba.webp",
    "/assets/images/webp-icons/emoji-132-40_a0b6e70.webp",
    "/assets/images/webp-icons/emoji-133-40_388edcb.webp",
    "/assets/images/webp-icons/emoji-134-40_23b2a4b.webp",
    "/assets/images/webp-icons/emoji-135-40_58993c4.webp",
    "/assets/images/webp-icons/emoji-136-40_8b99645.webp",
  ]
}
