export interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
}

export interface RoadMap {
  id: number;
  title: string;
  description: string;
}

export interface MileStoneProps {
  title: string,
  description: string,
  lastItem: boolean
}