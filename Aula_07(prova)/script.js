const bosses = {

    boss1: {
        nome: "Maculado",
        descricao: "Um dos exilados chamados de volta às Terras Intermédias para seguir seu destino, restaurar a ordem e reunir todas as partes do ELDEN RING. Enfrentando todos os deuses e semideuses desse mundo, fazendo aliados e se tornando um Lorde Prístino",
    },

    boss2: {
        nome: "Radahn",
        descricao: "O Flagelo Estelar Radahn, era um guerreiro muito forte e sempre andava com seu cavalo, mas por ser muito grande e pesado, seu cavalo não o aguentava, então ele foi aprender e estudar a magia gravitacional para reduzir o peso de seu corpo e poder andar em seu amado cavalo. Um dia Radahn entrou em uma grande batalha com Malenia, a deusa da podridão escarlate e saiu gravemente ferido, com seu corpo apodrecendo e sua mente deteriorada",
    },

    boss3: {
        nome: "Maliketh",
        descricao: "A Lamina da Morte Maliketh, a sombra da grande deusa, mãe Marika, aquele que guarda a runa da morte após ser separada do anel prístino, guardando-a para que ninguem mais morra e sua deusa não tenha mais de sofrer",

    },

    boss4: {
        nome: "Malenia",
        descricao: "A Deusa da Podridão Escarlate Malenia, irmã do meio de Miquela e Messmer, uma mulher que foi amaldiçoada com a podridão em seu corpo, des de jovem perdeu a visão pela podridão e então aprendeu a arte da espada com seu professor também cego e habil espadachim. Quando mais velha, perdendo partes do seu corpo, seu irmão mais novo Miquela, descobriu que o ouro podia retardar a podridão, fazendo proteses e costurando tecido de ouro em sua irmã, enquanto buscava por uma cura definitiva",

    },

    boss5: {
        nome: "Radagon",
        descricao: "Radagon, Deus supremo deste mundo junto de Marika, ambos dividindo o mesmo corpo, ditando a mesma ordem e guardando o Anel Prístino, escondendo sua verdadeira forma de Besta Prístina enquanto guarda a ordem criada após a perda de seu filho",
    }
};

function mostrarBoss(id) {

    const boss = bosses[id];

    document.getElementById("nomeBoss").textContent = boss.nome;

    document.getElementById("descricaoBoss").textContent = boss.descricao;
}