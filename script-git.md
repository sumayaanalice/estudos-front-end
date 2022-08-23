git config
- ele serve para quando o git é instalado pela primeira vez, sendo necessário definir o nome de usuário e e-mail. Isso é importante para que todos os commits sejam anexados ao nome e e-mail da pessoa que o fez.

git init
- Esse comando pode ser utilizado de duas formas. A primeira é quando se abre o projeto pela primeira vez e se faz o import dele para o git e a segunda ele clona um repositório git a partir de outro servidor.

git clone
- Serve para clonar um projeto a partir de uma URL.

git branch
- serve para criar novas branchs

git checkout
- serve para mudar de uma branch para outra. Caso a branch ainda não exista, pode-se passar o parâmetro git checkout -b <nomedabranch> e então ela além de criar uma branch nova ela já muda para essa branch.

git merge
- ela serve para fazer o merge da branch com a master. É necessário sempre mudar para a branch que você quer fazer o merge (no caso é a master, então se roda o comando: git checkout master), e após isso rodar o comando git merge <nomedabranch>

git stash
- serve para quando se está mexendo numa branch, mas ela não está pronta para um commit, e precisa mexer em outra branch, então pode-se usar esse comando para guardar a branch que ainda não está finalizada e fazer o checkout para mudar para a branch que precisa mexer.

git pull
- puxa todas as alterações que estão no repositório (master) para a branch atual.

git push
- é quando você manda o commit do repositório local para o repositório remoto, criando assim uma PR (pull request) dentro do github. git push <nome_do_repositório_remoto> <nomedabranch>


------------------------------------------------------------

Anotações sobre gulp

Pode-se usar uma âncora com o ID na URL que se está trabalhando, que a cada atualização que o browser fizer, ele volta sempre para a parte que pertence aquela âncora.

Ex: http://localhost:5150/pages/summit-2022/lp-summit.html#speakers

(a âncora seria "#speakers" que é o ID em um trecho do código)