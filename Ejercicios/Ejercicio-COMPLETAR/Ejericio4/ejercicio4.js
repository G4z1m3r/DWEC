const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {}

document.addEventListener('DOMContentLoaded', () => {

    pintarTareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

// console.log(Date.now())

formulario.addEventListener('submit', e => {
    e.preventDefault()
    setTarea(e)
})

const setTarea = e => {
    if (input.value.trim() === '') {
        console.log('está vacio')
        return
    } 
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }
    tareas[tarea.id] = tarea
    // console.log(tareas)
    formulario.reset()
    input.focus()
    pintarTareas()
}

const pintarTareas = () => {

    localStorage.setItem('tareas', JSON.stringify(tareas))

    if (Object.values(tareas).length === 0) {
        return
    }

    listaTarea.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto

        if (tarea.estado) {
            clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary')
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }

        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTarea.appendChild(fragment)
}

const btnAccion = e => {
    // console.log(e.target.classList.contains('fa-check-circle'))
    if (e.target.classList.contains('fa-check-circle')) {
        // console.log(e.target.dataset.id)
        tareas[e.target.dataset.id].estado = true
        pintarTareas()
        // console.log(tareas)
    }

    if (e.target.classList.contains('fa-times-circle')) {
        delete tareas[e.target.dataset.id]
        pintarTareas()
        // console.log(tareas)
    }

    if (e.target.classList.contains('fa-undo-alt')) {
        tareas[e.target.dataset.id].estado = false
        pintarTareas()
        // console.log(tareas)
    }
    

    e.stopPropagation()
}
