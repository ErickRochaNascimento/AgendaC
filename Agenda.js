export class Agenda {
    constructor() {
        this.contatos = [];

    }


    // Método: Adicionar novo contato 
    adicionar(contato) {
        console.log(`\n --- Adicionar Contato ---`);


        if (contato.telefone.length < 8) {
            console.log(`[ERRO] Número de telefone inválido para o contato ${contato.nome}.`);
            console.log('O telefone deve conter pelo menos 8 dígitos. Por favor, corrija o número e tente novamente.');
        } else {
            this.contatos.push(contato);
            console.log(`[OK] Contato ${contato.nome} adicionado.`);
        }




    }

    // Método: Listar todos 
    listar() {
        console.log("\n--- MEUS CONTATOS ---");
        this.contatos.forEach(c => {
            console.log(`Nome: ${c.nome} | Tel: ${c.telefone}`);
        });

    }
    // Método: Buscar por nome 
    buscar(nome) {
        console.log(`\n--- Buscar Contato ---`);
        return this.contatos.find(c => c.nome.toLowerCase() === nome.toLowerCase());
        
        
    }

    remover(email) {
        console.log(`\n--- Remover Contato ---`);
        const index = this.contatos.findIndex(c => c.email === email);
        if (index !== -1) {
            const removed = this.contatos.splice(index, 1)[0];
            console.log(`Contato ${removed.nome} removido com sucesso.`);
        } else {
            console.log(`Contato com email ${email} não encontrado.`);
        }
    }


}