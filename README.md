# seleniumJS

1. `npm install --save-dev selenium-webdriver`

2. Adicionar seguinte trecho no package.json:

`
"scripts": {
    "test": "jest"
  },
  "jest": {
    "testTimeout": 50000
}
`

3. Rodar os testes com `npm test` 