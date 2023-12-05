# Arquivo Package.json

* É um arquivo que possue metadados relevantes, como nome, versão do projeto, dependências e etc.

* Podemos usar o comando npm init para iniciarmos o arquivo .json, com a flag -y ele responde sim para tudo.
esse arquivo é principalmente usado para as dependências, pois partir dele podemos instalar todas as dependencias
usando o npm i, podemos também toda vez que adicionarmos uma dependência automaticamente ela ir para no package
como uma dependencia do projeto usando: npm i --save nome_do_modulo, exemplo, npm i --save axios, a flag --save
é quem salva ele nas dependências.

* Podemos fazer algo parecido com o --save, que é o --save-dev nome_modulo, assim ele instala uma dependência
que só vai ser usada na etapa de desenvolvimento.
