export class Match {
    id_match: number;

    id_equipe1: string;

    id_equipe2: string;

    horraire: string;



  constructor(id_match: number, id_equipe1: string, id_equipe2: string, horraire: string) {

    this.id_match = id_match;

    this.id_equipe1 = id_equipe1;

    this.id_equipe2 = id_equipe2;

    this.horraire = horraire;

  }
}
