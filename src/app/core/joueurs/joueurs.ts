export class Joueurs {

    id_joueur: number;
  
    nom_et_prenom: string;
  
    equipe: string;
  
    constructor(id_joueur: number, nom_et_prenom: string, equipe: string) {
  
      this.id_joueur = id_joueur;
  
      this.nom_et_prenom = nom_et_prenom;
  
      this.equipe = equipe;
  
    }
  
  }