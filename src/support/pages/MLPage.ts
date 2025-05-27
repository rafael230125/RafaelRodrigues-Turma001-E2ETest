import { Page, expect } from '@playwright/test';
import BaseElements from '../elements/BaseElements';
import MercadoLivreElements from '../elements/MLElements';

export default class MercadoLivrePage extends BaseElements {
  readonly el: MercadoLivreElements;

  constructor(page: Page) {
    super(page);
    this.el = new MercadoLivreElements(page);
  }

  async acessarSite(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async pesquisarProduto(produto: string): Promise<void> {
    await this.el.getCampoBusca().fill(produto);
    await this.el.getCampoBusca().press('Enter');
  }

  async validarResultadosVisiveis(): Promise<void> {
    await expect(this.el.getListaResultados()).toBeVisible({ timeout: 3000 });
    await expect(this.el.getTitulosResultados().first()).toBeVisible({ timeout: 3000 });
  }

  async clicarNoPrimeiroProduto(): Promise<void> {
    await this.el.getPrimeiroProduto().click();
  }

  async validarTituloProdutoVisivel(): Promise<void> {
    // Valida o título na página do produto
    await expect(this.page.locator('h1.ui-label-builder')).toBeVisible({ timeout: 3000 });
  }

  async validarBotaoFavoritos(): Promise<void> {
    await expect(this.el.getBotaoFavorito()).toBeVisible({ timeout: 3000 });
  }
}