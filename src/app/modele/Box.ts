export class Box{

  public id:number
  public pieces: number
  public nom:string
  public image:string
  public prix: number
  public saveurs: Array<string>
  public aliments: Array<any>

  constructor(id:number,pieces:number,nom:string,image:string,prix:number,saveurs:Array<string>,aliments:Array<any>){
      this.id=id
      this.pieces=pieces
      this.nom=nom
      this.image = image
      this.prix = prix
      this.saveurs = saveurs
      this.aliments = aliments
  }


static transforme(unObjet: any){

  return new Box(unObjet.id,unObjet.pieces,unObjet.nom,unObjet.image,unObjet.prix,unObjet.saveurs,unObjet.aliments)
}
static transformeArray(unTab:Array<any>):Array<Box>{
  let resultat :Array<Box>=[]
  for (const unObjet of unTab){
      let uneBox= this.transforme(unObjet)
      resultat.push(uneBox)
  }
  return unTab
}
}


