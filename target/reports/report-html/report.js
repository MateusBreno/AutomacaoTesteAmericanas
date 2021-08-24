$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/carrinho.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 4,
  "name": "Carrinho de Compras",
  "description": "\t\tSendo um usuário do site\n\t\tQuero pesquisar pelo produto desejado\n\t\tPara incluir no carrinho de compras",
  "id": "carrinho-de-compras",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.before({
  "duration": 7217154774,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Incluir Produto no carrinho sem informar cep de destino",
  "description": "",
  "id": "carrinho-de-compras;incluir-produto-no-carrinho-sem-informar-cep-de-destino",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 10,
  "name": "que pesquiso pelo produto \"iPhone 11 Apple (64GB) Preto\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "seleciono o produto \"iPhone 11 Apple (64GB) Preto\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "realizo a inclusao do produto \"iPhone 11 Apple (64GB) Preto\" no carrrinho",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "tenho o produto \"iPhone 11 Apple (64GB) Preto\" incluido no carrinho para compra",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 11 Apple (64GB) Preto",
      "offset": 27
    }
  ],
  "location": "CarrinhoSteps.quePesquisoPeloProduto(String)"
});
formatter.result({
  "duration": 11094418019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 11 Apple (64GB) Preto",
      "offset": 21
    }
  ],
  "location": "CarrinhoSteps.selecionoOProduto(String)"
});
formatter.result({
  "duration": 20506444527,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@alt\u003d\u0027By.xpath: //*[@id\u003d\"rsyswpsdk\"]/div/main/div/div[3]/div[3]/div[1]/div/div/a/div[2]/div/picture/img\u0027]\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MacBook-Pro-de-Mateus.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: /var/folders/2z/t1yrkdkj4g9...}, goog:chromeOptions: {debuggerAddress: localhost:51209}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8f54314649c54e993d678446e648c6c4\n*** Element info: {Using\u003dxpath, value\u003d//img[@alt\u003d\u0027By.xpath: //*[@id\u003d\"rsyswpsdk\"]/div/main/div/div[3]/div[3]/div[1]/div/div/a/div[2]/div/picture/img\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat util.BasePage.aguardarElementoVisivel(BasePage.java:53)\n\tat pages.CompraPage.selecionarProduto(CompraPage.java:20)\n\tat steps.CarrinhoSteps.selecionoOProduto(CarrinhoSteps.java:44)\n\tat ✽.Quando seleciono o produto \"iPhone 11 Apple (64GB) Preto\"(src/test/resources/features/carrinho.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 11 Apple (64GB) Preto",
      "offset": 31
    }
  ],
  "location": "CarrinhoSteps.realizoAInclusaoDoProdutoNoCarrrinho(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 11 Apple (64GB) Preto",
      "offset": 17
    }
  ],
  "location": "CarrinhoSteps.tenhoOProdutoIncluidoNoCarrinhoParaCompra(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1148315485,
  "status": "passed"
});
formatter.after({
  "duration": 335160425,
  "status": "passed"
});
