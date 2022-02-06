## CÓDIGOS PARA O COLAB VIA GIT
```
git remote add origin https://github.com/heraclitothiago/contate-oab-caxias-ma.git
git branch -M main
git push -u origin main
```

# APLICATIVO DE MENSAGENS PARA A OAB/MA SUBSEÇÃO DE CAXIAS
- Baixar o projeto e descompactar
- Instalar Node.js, chocolatey e demais gerenciadores de pacotes
- Configure o seu ambiente de desenvolvimento para projetos react native com expo
- Abrir o diretório do projeto pelo cmd 
  >cd path/to/your/dir
- Rodar o código a seguir e aguardar a instalação de *todas* as dependências
  >npm install
- Abrir o metro bundle com o comando
  >expo start
- Digitalizar o código Qr e ter o app expo instalado em seu telefone (Dica: Escanear o via tunnel)

##### Não desenvolvi o app com padrão mvc (queria terminar ele o mais rápido possível)

##### Somente está faltando acesso à api de envio de emails, de preferência com uma porta exclusiva ao app, assim em eventual e remota possibilidade de quebra de segurança, é possível revogar as permissões ao servidor de email.

##### O único arquivo não visível no repositório git conterá os dados de acesso ao email, vez que são dados sensíveis

##### Recomenda-se a OAB contratar o pacote free das plataformas de disparos de e-mail, como sendgrid, mailchimp, etc...

##### Por hora estaremos usando a api do telegram, que é free e entrega as mensagens com auxílio do bot de mensagens, como se fosse um log.