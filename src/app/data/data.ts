export interface ChatMessage {
  id: number,
  text: string,
  dir: string,
  date: Date,
  buddyId: number,
  isYesNo : boolean | null,
  answered: boolean | null,
  reactions: Reaction[]
}
export interface User {
  id: number,
  firstname: string,
  lastname: string,
  username: string,
  avatarUrl: string,
}
export interface Reaction {
  id: number,
  type: string,
  senderId: number
}
export interface Conversation {
  user: User,
  lastMessage : ChatMessage | null | undefined
}
