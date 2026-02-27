export class Agenda {
    constructor() {
        this.contatos = [];

    }


    // Método: Adicionar novo contato 
    adicionar(contato) {
        this.contatos.push(contato);
        console.log(`[OK] Contato ${contato.nome} adicionado.`);
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
        return this.contatos.find(c => c.nome.toLowerCase() === nome.toLowerCase());
    }
} 
