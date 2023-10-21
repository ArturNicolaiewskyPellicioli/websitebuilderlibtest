export interface IForm1 {
  title: string;
  description: string;
  halfLineInputs: {
    label: string;
    type: string;
    autoComplete: string;
    placeholder: string;
  }[];
  fullLineInputs: {
    label: string;
    type: string;
    autoComplete: string;
    placeholder: string;
  }[];
  textareaInputs: {
    label: string;
    placeholder: string;
    defaultValue: string;
  }[];
  switchText: string;
  switchLinkText: string;
  switchHref: string;
  submitButtonText: string;
}
