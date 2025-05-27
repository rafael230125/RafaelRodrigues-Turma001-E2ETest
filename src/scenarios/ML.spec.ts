import { test } from '@playwright/test';
import MercadoLivrePage from '../support/pages/MLPage';

test.describe('Fluxo Mercado Livre', () => {
  let mlPage: MercadoLivrePage;

  const BASE_URL = 'https://www.mercadolivre.com.br'; // Caso queira usar config.yml, posso adaptar

  test.beforeEach(async ({ page }) => {
    mlPage = new MercadoLivrePage(page);
    await mlPage.acessarSite(BASE_URL);
  });

  test('Pesquisar e validar produto', async () => {
    await mlPage.pesquisarProduto('notebook');
    await mlPage.validarResultadosVisiveis();
    await mlPage.clicarNoPrimeiroProduto();
    await mlPage.validarTituloProdutoVisivel(); // Adicione esta linha
    await mlPage.validarTituloProduto();
  });
});
