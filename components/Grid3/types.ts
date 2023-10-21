export interface IGrid3 {
  title: string;
  searchType: string;
  searchAutoComplete: string;
  searchPlaceholder: string;
  items: {
    id: number;
    date: string;
    homeTeamSrc: string;
    awayTeamSrc: string;
    homeTeamScore?: string;
    awayTeamScore?: string;
    homeTeamName: string;
    awayTeamName: string;
    locationName: string;
    locationAddress: string;
    href1?: string;
    href2?: string;
    href1Text?: string;
    href2Text?: string;
  }[];
}
