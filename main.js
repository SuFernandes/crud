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

const isValidFields = () => {
    document.getElementsById('form').reportValidity()
}

const clearLocalStorage = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

const saveClient = () => {
    if (isValidFields())
    const client = {
        nome: documet.getElementById('nome').value
        email: documet.getElementById('email').value,
        celular: documet.getElementById('celular').value,
        cidade: documet.getElementById('cidade').value
    }
    createClient(client)
    clearFields()
    closeModal()
}

// Eventos
document.getElementbyId('cadastrarCliente')
.addEventListener('click', openModal)

document.getElementById('modalClose')
.addEventListener('click', closeModal)

document.getElementbyId('salvar')
.addEventListener('click', saveClient)
