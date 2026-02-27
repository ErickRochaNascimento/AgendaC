import { Contato } from './Contato.js'; 
import { Agenda } from './Agenda.js';
const minhaAgenda = new Agenda();

// Instanciando objetos 
const c1 = new Contato("Helena", "71 98888-0000", "helena@email.com"); 
const c2 = new Contato("João", "11 97777-1111", "joao@email.com");
// Usando os métodos    
minhaAgenda.adicionar(c1); 
minhaAgenda.adicionar(c2); 
minhaAgenda.listar(); 


