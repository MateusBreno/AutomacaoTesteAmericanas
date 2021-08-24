package pages;

import org.openqa.selenium.By;

import util.BasePage;

public class CarrinhoPage extends BasePage {

	By tituloProduto = By.xpath("//h2[@class='basket-productTitle']");

	public String obterProdutoCarinho() {
		return obterTexto(tituloProduto);
	}
}