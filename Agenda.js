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

    remover(email) {
        const index = this.contatos.findIndex(c => c.email === email);
        console.log(`\n[INFO] Tentando remover contato com email: ${email}`);
        if (index !== -1) {
            this.contatos.splice(index, 1);
            console.log(`\n[OK] Contato com email ${email} removido.`);
        } else {
            console.log(`[ERRO] Contato com email ${email} não encontrado.`);
        }
    }
}