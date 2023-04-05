import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public categorias = [
    {codigo: 1, nome: 'SALGADOS'},
    {codigo: 2, nome: 'BEBIDAS'},
    {codigo: 3, nome: 'SOBREMESAS & DIVERSOS'},
]

public slideOpts = {
  slidesPerView: 2
}

  public items = [
    { codigo: 1, categoria: 1, descricao: 'Massa crocante recheada com legumes frescos e temperados, otima opcao para quem busca uma opcao mais saudavel', nome: 'Torta de legumes',     valor: 500.00,  imagens: ['tortadelegumes.jpg'], visibled: false },
    { codigo: 2, categoria: 1, descricao: 'Pao de quejo 400g', nome: 'Pao de quijo',            valor: 300.00,  imagens: ['paodequeijo.jpg'], visibled: false },
    { codigo: 3, categoria: 1, descricao: 'Opcoes: Pastel de Carne/Queijo, Coxinha Carne/Frango',nome: 'Salgado Frito',           valor: 700.00,  imagens: ['salgadofrito.jpeg'], visibled: false },
    { codigo: 4, categoria: 1, descricao: 'Opcoes: Rissole de Carne/Quejo, Pastel de Carne/Queijo', nome: 'Salgado Assado',      valor: 500.00,  imagens: ['salgadoassado.jpg'], visibled: false },
    { codigo: 5, categoria: 1, descricao: 'Opcoes: Presunto e Quejo/Mussarela',nome: 'Mini Pizza',      valor: 700.00,  imagens: ['minipizza.jpeg'], visibled: false },
    { codigo: 6, categoria: 2, descricao: 'Cafe Extra Forte',  nome: 'cafe',  valor: 300.00,  imagens: ['cafe.jpg'], visibled: false },
    { codigo: 7, categoria: 2, descricao: 'Agua Mineral 500ml', nome: 'Agua',      valor: 230.00, imagens: ['agua.jpg'], visibled: false },
    { codigo: 8, categoria: 2, descricao: 'Coca-Cola',nome: 'Coca-Cola Lata',   valor: 260.90, imagens: ['coca.jpg'], visibled: false },
    { codigo: 9, categoria: 2, descricao: 'Agua Com Gas 500ml', nome: 'Agua Com Gas',   valor: 230.50, imagens: ['aguacomgas.jpg'], visibled: false },
    { codigo: 10, categoria: 2, descricao: 'Capuccino Expresso',  nome: 'Capuccino',       valor: 400.00, imagens: ['cappuccino.jpg'], visibled: false },
    { codigo: 11, categoria: 3, descricao: 'Sabores: Fandangos/Cheetos',nome: 'Chips',            valor: 110.00, imagens: ['chips.jpg'], visibled: false },
    { codigo: 12, categoria: 3, descricao: 'Sabores: Galinha Caipira/Feijoada',   nome: 'Cup Noodles',       valor: 600.00, imagens: ['cupnoodles.jpg'], visibled: false },
    { codigo: 13, categoria: 3, descricao: 'Sabores: Lacta e Nestle', nome: 'Chocolate Barra',         valor: 300.00, imagens: ['chocolate.jpg'], visibled: false },
    { codigo: 14, categoria: 3, descricao: 'Acai Cremoso no Copo', nome: 'Acai no Copo',            valor: 100.00,  imagens: ['acai.jpg'], visibled: false },
    { codigo: 15, categoria: 3, descricao: 'Sabores:Halls/Trindent',nome: 'Chicletes',   valor: 100.00, imagens: ['chiclete.jpg'], visibled: false }
]

public pathImgs = '../../assets/imagems/';

public selected = 0;

constructor(private navCtrl: NavController) {
  this.setSelected(1);
}

public formataValor(valor:any) {
  let retorno = "";
  
  let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  retorno = formatar.format(valor)
  retorno = "R$ " + retorno;

  return retorno;
}

public setSelected(codigoCategoria:any) {
  this.selected = codigoCategoria;

  this.items.map(el => el.visibled = false);

  this.items
  .filter(el => el.categoria == this.selected)
  .map(el => el.visibled = true);
}

public goItem(item:any) {
  this.navCtrl.navigateForward('produto', {
    queryParams: { item: item }
  });
}

}