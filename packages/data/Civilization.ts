import { Architecture } from "./Architecture";
import { GameExtension } from "./GameExtension";

export type Civilization = {
  id: number;
  architecture: number;
  gameExtension: number;
};

export const Civilization = {
  Britons: {
    id: 1,
    architecture: Architecture.WestEuropean,
    gameExtension: GameExtension.None
  },
  Franks: {
    id: 2,
    architecture: Architecture.WestEuropean,
    gameExtension: GameExtension.None
  },
  Goths: {
    id: 3,
    architecture: Architecture.CentralEuropean,
    gameExtension: GameExtension.None
  },
  Teutons: {
    id: 4,
    architecture: Architecture.CentralEuropean,
    gameExtension: GameExtension.None
  },
  Japanese: {
    id: 5,
    architecture: Architecture.FarEastern,
    gameExtension: GameExtension.None
  },
  Chinese: {
    id: 6,
    architecture: Architecture.FarEastern,
    gameExtension: GameExtension.None
  },
  Byzantines: {
    id: 7,
    architecture: Architecture.MiddleEastern,
    gameExtension: GameExtension.None
  },
  Persians: {
    id: 8,
    architecture: Architecture.MiddleEastern,
    gameExtension: GameExtension.None
  },
  Saracens: {
    id: 9,
    architecture: Architecture.MiddleEastern,
    gameExtension: GameExtension.None
  },
  Turks: {
    id: 10,
    architecture: Architecture.MiddleEastern,
    gameExtension: GameExtension.None
  },
  Vikings: {
    id: 11,
    architecture: Architecture.CentralEuropean,
    gameExtension: GameExtension.None
  },
  Mongols: {
    id: 12,
    architecture: Architecture.FarEastern,
    gameExtension: GameExtension.None
  },
  Celts: {
    id: 13,
    architecture: Architecture.WestEuropean,
    gameExtension: GameExtension.None
  },
  Spanish: {
    id: 14,
    architecture: Architecture.WestEuropean,
    gameExtension: GameExtension.TheConquerors
  },
  Aztecs: {
    id: 15,
    architecture: Architecture.MesoAmerican,
    gameExtension: GameExtension.TheConquerors
  },
  Mayans: {
    id: 16,
    architecture: Architecture.MesoAmerican,
    gameExtension: GameExtension.TheConquerors
  },
  Huns: {
    id: 17,
    architecture: Architecture.CentralEuropean,
    gameExtension: GameExtension.TheConquerors
  },
  Koreans: {
    id: 18,
    architecture: Architecture.FarEastern,
    gameExtension: GameExtension.TheConquerors
  },
  Italians: {
    id: 19,
    architecture: Architecture.Mediteranean,
    gameExtension: GameExtension.TheForgotten
  },
  Indians: {
    id: 20,
    architecture: Architecture.Indians,
    gameExtension: GameExtension.TheForgotten
  },
  Incas: {
    id: 21,
    architecture: Architecture.MesoAmerican,
    gameExtension: GameExtension.TheForgotten
  },
  Magyars: {
    id: 22,
    architecture: Architecture.EasternEuropean,
    gameExtension: GameExtension.TheForgotten
  },
  Slavs: {
    id: 23,
    architecture: Architecture.EasternEuropean,
    gameExtension: GameExtension.TheForgotten
  },
  Portuguese: {
    id: 24,
    architecture: Architecture.Mediteranean,
    gameExtension: GameExtension.TheAfricanKingdoms
  },
  Ethiopians: {
    id: 25,
    architecture: Architecture.African,
    gameExtension: GameExtension.TheAfricanKingdoms
  },
  Malians: {
    id: 26,
    architecture: Architecture.African,
    gameExtension: GameExtension.TheAfricanKingdoms
  },
  Berbers: {
    id: 27,
    architecture: Architecture.MiddleEastern,
    gameExtension: GameExtension.TheAfricanKingdoms
  },
  Khmer: {
    id: 28,
    architecture: Architecture.FarSouthEastern,
    gameExtension: GameExtension.RiseOfTheRajas
  },
  Malay: {
    id: 29,
    architecture: Architecture.FarSouthEastern,
    gameExtension: GameExtension.RiseOfTheRajas
  },
  Burmese: {
    id: 30,
    architecture: Architecture.FarSouthEastern,
    gameExtension: GameExtension.RiseOfTheRajas
  },
  Vietnamese: {
    id: 31,
    architecture: Architecture.FarSouthEastern,
    gameExtension: GameExtension.RiseOfTheRajas
  }
};
