'use strict'

const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
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
    closeModal()
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = '
    <td>${client.name}</td>
    <td>${client.email}</td>
    <td>${client.celular}</td>
    <td>${client.cidade}</td>
    <td>
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red" id="delete-${index}">excluir</button>
    </td>
    '

    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

const editDelete = (event) => {
    if (event.target.type == 'button') {
        
        const [action, index] = event.target.id.split('-')
    }
}


// Eventos
document.getElementbyId('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementbyId('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)
