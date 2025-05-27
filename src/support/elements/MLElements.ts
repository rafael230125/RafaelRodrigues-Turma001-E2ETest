import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class MercadoLivreElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
  }

  getCampoBusca(): Locator {
    return this.page.locator('input[name="as_word"]');
  }

  getListaResultados(): Locator {
    // Container dos resultados
    return this.page.locator('section.ui-search-results');
  }

  getTitulosResultados(): Locator {
    // Títulos dos produtos nos resultados
    return this.page.locator('h1.ui-label-builder');
  }

  getPrimeiroProduto(): Locator {
    // Primeiro produto clicável
    return this.page.locator('section.ui-search-results a.ui-search-link').first();
  }

  getBotaoFavorito(): Locator {
    // Botão de compra na página do produto (pode variar o texto)
    return this.page.locator('svg.ui-pdp-icon');
  }
}