# Linketinder-Project


Esse projeto utiliza o **groovy**. Pra poder executá-lo é necessário possuir o `SDK` versão `17 ou mais recente`.


---
### Atualmente existem duas versões da aplicação:
  * **Frontend** 
    * Javascript, Typescript, HTML e CSS.
  * **Backend**
    * Groovy 

Existem pelo menos 3 telas, sendo elas:
  *  uma na visão do candidato que visualiza as vagas em que ele está inscrito.
  *  uma na visão da empresa que consegue visualizar os candidatos inscritos na vaga e um gráfico, onde é possível visualizar as competências por candidato.
  *  uma tela de Registro sendo possível escolher entre se registrar como um candidato ou como uma empresa.


### Para executar o projeto e visualizar as telas no `Frontend` siga os passos a seguir:

`1° Passo` - Clone o projeto em alguma pasta

```bash
  git clone <link do repositório> <escolha um nome caso queira>
```

`2° Passo` - Instalar o Node.js: Certifique-se de ter o Node.js instalado em seu sistema. Você pode verificar se está instalado e qual versão está usando com:

```bash
  node -v
```
> Se não estiver instalado, você pode baixá-lo em nodejs.org.

`3° Passo` - Navegue até o diretório do projeto (caso ainda não esteja) e instale as dependências usando o npm

```bash
  npm install
```

`4° Passo` - Carregue a compilação dos arquivos em .ts com o seguinte comando: 

```bash
  npm run build
```

`5° Passo` - Depois de gerar os aquivos.js compilados na pasta `./dist` use o comando a seguir para rodar a aplicação:

```bash
  npm run start
```
---
#### Passos para executá-lo ( `Versão Groov` ):

`1° Passo` - Baixar o **JDK do java**.

_Como o Groovy roda dentro da JVM (Java Virtual Machine), é necessário que ele esteja instalado._
_Execute o comando abaixo para instalar o `JDK`_.
```bash
    sudo apt install openjdk-17-jdk -y
```
_Você pode baixar uma versão mais recente, desde que seja superior a versão 17 irá funcionar._

`2° Passo`  - Baixar o **SDK MAN**.

O ideal aqui para evitar erros e pela simplicidade de instalação é utilizar o **_SDK MAN_**.

_Execute o comando abaixo para instalar o `SDK MAN`_.
```bash
  curl -s "https://get.sdkman.io" | bash
```

*Depois de instalado, você pode verificar qual versão você quer instalar do groovy com o comando:*
```bash
    sdk list groovy
```

ele listará as versões disponíveis que você baixar com ele.

>   Com o **_SDK_** é possível alterar qual versão você quer utilizar do groovy. No nosso caso estamos usando o SDK para gerenciá-lo, ele torna esse processo de mudança muito mais fácil e rápido.

`3° passo` - Baixar o **groovy**.

Depois de identificar a versão que quer instalar é só executar:
```bash
    sdk install groovy <versão que você deseja>
```

Agora que você **_instalou_** o groovy, você consegue executar o programa através da classe Main. Ela está disponível no diretório `src`

ao baixar o projeto e executar o comando a seguir você conseguirá ter acesso ao programa.
```bash
    groovy Main.groovy
```

---

Atualmente o projeto consegue **listar** empresas e candidatos que são pré-carregados ao executar a aplicação.

Por enquanto esse projeto dispõe de funcionalidades simples que o java não possui. Sendo elas:
    
  * No groovy é possível exibir no terminal apenas usando o comando a seguir, sem usar System.out.println como no java e o uso de "( )".
> print "Texto de exemplo"
  * Não exige pontuações como ";"
  * Métódos como gets e seters já são criados por padrão para variáveis de classe

Como é uma linguagem de script, o groovy possibilita maior facilidade quando comparado com o JAVA.
---
#### Foi adicionado testes utilizando o `Spock`. ele testa: 

* criação de candidatos e empresas
* serviço que adiciona candidatos e empresas aos seus respectivos arrays.
