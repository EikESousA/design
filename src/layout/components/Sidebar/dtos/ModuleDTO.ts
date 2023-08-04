import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

export interface IModuleDTO {
  id: string;
  name: string;
  url: string;
  icon: IIconDTO;
  global: boolean;
  admin: boolean;
  badge: number;
  subModules: ISubModulesDTO[];
  selected: boolean;
  open: boolean;
}

export interface ISubModulesDTO {
  id: string;
  name: string;
  url: string;
  icon: IIconDTO;
  global: boolean;
  admin: boolean;
  badge: number;
  selected: boolean;
  open: boolean;
}
