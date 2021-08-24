package pages;

import org.openqa.selenium.By;

import util.BasePage;

public class ConsultaPage extends BasePage {

	By campoBusca = By.id("h_search-input");
	By botaoBuscar = By.id("h_search-btn");

	public void realizarConsulta(String nomeProduto) {
		escrever(campoBusca, nomeProduto);
		clique(botaoBuscar);
	}

}