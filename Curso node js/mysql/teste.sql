CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES( /* Os valores são colocados na ordem em que as colunas são escritas. RESPEITE O TIPO. */
    "Ana Silva",
    "email@teste22.com",
    22
);

INSERT INTO usuarios(idade, email, nome) VALUES( /* Exemplo trocando a ordem. RESPEITE O TIPO. */
    8,
    "email@teste32.com",
    "Maria Lima"
);




/* Quando quiser-mos específicar qual dado queremos pegar usamos o WHERE... */
SELECT * FROM usuarios WHERE idade = 8; /*Após o where colocamos qual a coluna e o valor que iremos selecionar. */

SELECT * FROM usuarios WHERE nome = "Ana Silva";

SELECT * FROM usuarios WHERE idade >= 18;




/* Deletando dados... */
DELETE FROM usuarios; /*Deleta toda a tabela*/

DELETE FROM usuarios WHERE nome = "Maria Lima";




/* Fazendo UPDATE de dados para a tabela */
UPDATE usuarios SET nome = "Nome de Teste"; /* Se colocarmos assim, TODOS os registros de usuarios seram AFETADOS. */

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Ana Silva";