# Linketinder-Project


Esse projeto utiliza o **groovy**. Pra poder executá-lo é necessário possuir o `SDK` versão `17 ou mais recente`.

#### Passos para executá-lo:

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
Além disso, 