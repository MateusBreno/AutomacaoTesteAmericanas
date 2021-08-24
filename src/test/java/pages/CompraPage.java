package pages;

import org.openqa.selenium.By;

import util.BasePage;

public class CompraPage extends BasePage {

	By botaoComprar = By.id("btn-buy");
	By botaoContinuar = By.id("btn-continue");
	By mensagemEstoque = By.xpath("//span[@id='title-stock']");
	By campoCep = By.id("freight-field");
	By botaoCep = By.id("freight-field-button");
	By mensagemValidacaoCep = By.cssSelector(".TextAlert-sc-15dx5po-3");
	By imagemProduto = By.xpath("//*[@id=\"rsyswpsdk\"]/div/main/div/div[3]/div[3]/div[1]/div/div/a/div[2]/div/picture/img");

	public void selecionarProduto(String nomeProduto) {
		By produto = By.xpath("//img[@alt='" + imagemProduto + "']");
		aguardarPaginaCarregar();
		aguardarElementoVisivel(produto);
		scrollDown();
		scrollClique(produto);
	}

	public void incluirNoCarrinho() {
		scrollClique(botaoComprar);
		scrollClique(botaoContinuar);
	}

	public String obterMensagemEstoque() {
		return obterTexto(mensagemEstoque);
	}

	public void informarCep(String cep) {
		escrever(campoCep, cep);
		scrollClique(botaoCep);
	}

	public String obterMensagemValidacaoCep() {
		return obterTexto(mensagemValidacaoCep);
	}

}