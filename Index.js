import { Contato } from './Contato.js'; 
import { Agenda } from './Agenda.js';
const minhaAgenda = new Agenda();

// Instanciando objetos 
const c1 = new Contato("Helena", "71 98888-0000", "helena@email.com"); 
const c2 = new Contato("João", "71 97777-0000", "joao@email.com");
const c3 = new Contato("Maria", "71 000", "maria@email.com");
const c4 = new Contato("Carlos", "71 96666-0000", "carlos@email.com");

// Usando os métodos    
minhaAgenda.adicionar(c1); 
minhaAgenda.adicionar(c2); 
minhaAgenda.adicionar(c3);
minhaAgenda.adicionar(c4);

minhaAgenda.listar(); 

minhaAgenda.buscar("João");

minhaAgenda.remover("carlos@email.com");

minhaAgenda.listar();


