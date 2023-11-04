export type TImage = {
  src: string;
  alt: string;
}

export type TLink = {
  url: string;
  text?: string;
  rel?: string;
  target?: string;
}

export type TButton = {
  uid: string;
  text: string;
  onClick?: (button: TButton) => void;
}