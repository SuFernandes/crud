'use strict'

const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => document.getElementById('modal')
.classList.remove('active')

const tempClient = {
    nome: "Suelen",
    email: "suelen@gmail.com",
    celular: "118855396",
    cidade: "Porto Alegre"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient')) ?? []
const setLocalStorage = localStorage.setItem("dbClient", JSON.stringify(dbClient))

// CRUD = create read update delete
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.slice(index,1)
    setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

// Eventos
document.getElementbyId('cadastrarCliente')
.addEventListener('click', openModal)

document.getElementById('modalClose')
.addEventListener('click', closeModal)

