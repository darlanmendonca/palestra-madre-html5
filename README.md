# HTML5
### Palestra p/ A Madre

Galera, abaixo deixo os links, de tudo que vimos no sábado. E adiciono mais alguns, que continuam falando sobre os temas que conversamos. Abs.

[Apresentação - API's HTML5](http://slides.html5rocks.com/#title-slide)

#### Links com documentação para vocês se aprofudarem nas ferramentas abordadas. Destas, a principal pra galera, seria o Sass.

Tools
- [Node.js + NPM](https://nodejs.org/)
- [Browser-sync](https://www.npmjs.com/package/browser-sync)
- [Gradients Generator](http://www.colorzilla.com/gradient-editor/)
- [Other Gradient Generator](http://www.cssmatic.com/gradient-generator)
- Easings p/ CSS - [Cubic-bezier](http://cubic-bezier.com/)
- [Can I Use](http://caniuse.com/)

Automatizador de Tarefas
- [Gulp](http://gulpjs.com/)
- [Gulp Plugins](http://gulpjs.com/plugins/)
- Compilar Sass - [Gulp Sass](https://www.npmjs.com/package/gulp-sass#basic-usage)
- Gerar Sprite de Imagens - [Gulp Spritesmith](https://github.com/twolfson/gulp.spritesmith)

Templates para HTML
- [Jade](https://github.com/jadejs/jade)

Pré-processadores CSS
- [Sass](http://sass-lang.com/guide)
- [Less](http://lesscss.loopinfinito.com.br/)

### Referências
Falamos sobre animação com CSS, abaixo os links das referências que lhes mostrei.

- [Codrops](http://tympanus.net/codrops/)
    - [Slider](http://tympanus.net/Blueprints/ZoomSlider/)
    - [Gooey Effects](http://tympanus.net/Development/CreativeGooeyEffects/index.html)
    - [Motion Blur](http://tympanus.net/Tutorials/MotionBlurEffect/)
    - [Drawing](http://tympanus.net/Development/SVGDrawingAnimation/index.html)
    - [Card Expansion](http://tympanus.net/codrops/2015/06/18/card-expansion-effect-svg-clippath/)
    - [Image Tilt](http://tympanus.net/codrops/2015/05/28/image-tilt-effect/)

### Tutoriais
- [CSS Transition](https://css-tricks.com/almanac/properties/t/transition/)
- [CSS Animation](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)
- [CSS3 Transform](https://css-tricks.com/almanac/properties/t/transform/)
- [CSS3 Transform](http://www.w3schools.com/cssref/css3_pr_transform.asp)  - by w3schools
- [Solved By Flex-box](http://philipwalton.github.io/solved-by-flexbox/)
- [oCanvas](http://code.tutsplus.com/articles/ocanvas-a-jquery-and-flash-style-library-for-html5-canvas--active-11023)
- [Meta Viewport](https://developer.mozilla.org/pt-BR/docs/Mozilla/Mobile/Viewport_meta_tag)


### Exemplos de projeto
1º Baixe este repositório, há duas formas:
- GIT Clone (requer o GIT instalado na máquina)
Pelo terminal entre na pasta que deseja clonar o repositório, no exemplo abaixo, entro no Desktop:
```sh
cd ~/Desktop
```
E para clonar o repositório, numa pasta chamada 'test':

```sh
git clone git@github.com:darlanmendonca/palestra-madre-html5.git test
```


2º Forma
Baixe o arquivo zipado, neste [link](https://github.com/darlanmendonca/palestra-madre-html5/archive/master.zip).

Instalação
Primeiro você precisa ter instalado na máquina algumas coisas, o Node.js + NPM você baixa e instala [daqui](https://nodejs.org/).

Após intalar o Node.js + NPM, você precisa instalar o Gulp na sua máquina, digite no terminal:

```sh
npm install -g gulp
```

Após baixar pelo GIT, ou arquivo zipado, entre no diretório, e rode o seguinte comando:

```sh
npm install
```

Após isto, basta pelo terminal, entrar no diretório do projeto, há 2 dentro do repositório, 'bith' e 'example-gulp'. Exemplos:

```sh
cd ~/Desktop/bitch
cd ~/Desktop/example-gulp
```

Estando na pasta de um projeto, digite no terminal o comando gulp, para iniciar as tarefas do gulp. Para encerrar, feche a aba do terminal, ou digite ctrl+c na aba do terminal.

O projeto bitch, conta com o seguinte, em seu scaffolding:

- sources (arquivos editáveis)
- public (arquivos que serão os utilizados na hora de publicar o projeto)

Destes, contém:
Sources
- views (em Jade)
- stilos (em Sass)
- sprite images (arquivos em .png)
- scripts (em .js)

Tudo sendo compilado e concatenado para a pasta public.

Todas as tasks do gulp, estão no arquivo gulpfile.js na raiz do projeto.

Já o projeto 'example-gulp', contém apenas um gulpfile com tarefa para compilar Sass em CSS. Para rodar, no terminal digite 'gulp + nome da tarefa', exemplo:

```sh
gulp generate-css
```