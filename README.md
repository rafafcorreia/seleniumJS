# seleniumJS

1. `npm install --save-dev typescript @cucumber/cucumber selenium-webdriver chromedriver jest chai mocha`

2. Adicionar seguinte trecho no package.json:

```
"scripts": {
    "test": "jest",
    "cucumber": "tsc && cucumber-js"
  },
  "jest": {
    "testTimeout": 50000
  }
}
```

3. Instalar o plugin do Cucumber

4. Criar o arquivo cucumber.js

5. Criar o arquivo tsconfig.json

6. Rodar os testes com o Jest com `npm test`

7. Rodar os testes com Cucumber com `npm cucumber`
