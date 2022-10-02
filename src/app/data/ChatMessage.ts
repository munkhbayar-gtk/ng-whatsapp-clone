export interface ChatMessage {
  id: number,
  text: string,
  dir: string,
  date: Date,
  isYesNo : boolean,
  answered: boolean
}