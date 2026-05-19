export interface Contact {
  id: string;
  phone: string;
  name?: string;
  status: "pending" | "sent" | "failed";
  timestamp?: number;
}

export interface AppState {
  messageTemplate: string;
  linkToShare: string;
  contacts: Contact[];
  isGeneratingQR: boolean;
}
