# Informações Relevantes Antes de Começar

Este projeto foi criado com o intuito de ser um modelo inicial de Tailwind CSS, Express e EJS. Foi adicionado também BrowserSync e Nodemon para facilitar o desenvolvimento.

O BrowserSync é um módulo Node.js que permite criar um servidor local e sincronizar o navegador para que ele atualize automaticamente quando você fizer alterações no código. O Nodemon é um módulo Node.js que permite reiniciar automaticamente o servidor quando você faz alterações no código.

O Tailwind CSS é um framework CSS que permite criar interfaces de usuário rapidamente. Ele fornece uma série de classes CSS que podem ser usadas para estilizar elementos HTML. O Tailwind CSS é baseado em classes, o que significa que você não precisa escrever CSS para estilizar seus elementos. Em vez disso, você pode usar classes CSS para estilizar seus elementos.

O arquivo tailwind.config.js tem um parâmetro **content** que é responsável por dizer ao Tailwind CSS quais arquivos devem ser analisados ​​para gerar o arquivo CSS final. No caso aqui estou usando o EJS, então preciso que ele analise todos os arquivos **.ejs** dentro da pasta **views**.
*   tailwind.config.js
```js
content: ["./views/**/*.{ejs}"],
```

O parâmetro --watch faz com que o Tailwind CSS fique escutando as alterações nos arquivos e gere o arquivo styles.css final. Caso não queira usar o builder automático, basta rodar sem o parâmetro --watch manualmente toda vez que um arquivo for salvo.

Para facilitar o processo de desenvolvimento, foi adicionado um script no package.json que executa o comando acima. Para executar o script, basta rodar o comando abaixo:

```bash
npm run tailwind
```

___

## Como Usar

1. Clone o repositório

```bash
git clone
```

2. Instale as dependências no diretório node

```bash
npm install
```

3. Execute o servidor via Docker Composer

```bash
docker-compose -f docker-compose.dev.yaml up
```

4. Acessar navegador URL sem Auto Refresh (Node)

```bash
http://localhost:3000
```

5. Acessar navegador URL com Auto Refresh (BrowserSync via Proxy)

```bash
http://localhost:3001
```

___
## Etapas da Instalação do Tailwind CSS Executadas

1. Instalar Tailwind CSS

```bash
npm install tailwindcss
```
2. Criar arquivo src/styles.css

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```


3. Criar arquivo de configuração Tailwind CSS

```bash
npx tailwindcss init
```
Depois de executar o comando, você verá um arquivo tailwind.config.js no diretório raiz.


4. Execute o *build* Tailwind CSS

```bash
npx tailwindcss build -i src/styles.css -o public/css/styles.css --watch
```
-i = arquivo de origem

-o = arquivo de destino

5. Adicionar Tailwind CSS on index.ejs

___

## Dependências

1. [Node.js](http://nodejs.org/)
2. [Express](https://expressjs.com/)
3. [EJS](https://ejs.co/)
4. [Docker](https://www.docker.com/)


## Dependências de Desenvolvimento

1. [Nodemon](https://nodemon.io/)
2. [Tailwind CSS](https://tailwindcss.com/)
3. [BrowserSync](https://www.browsersync.io/)


___
## License

[CC0 1.0 (Public Domain)](LICENSE.md)