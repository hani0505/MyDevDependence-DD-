import { useState } from "react"
import { useFormStore } from "../store/useFormStore"

export function FormGroup(){
const [name, setName] = useState('')
const [command, setCommand] = useState('')
const addLibrary = useFormStore(state => state.addLibrary)
 

    function handleSubmit(e){
        e.preventDefault()
        if(!name.trim() || !command.trim()){
            alert("preencha ambos os campos") 
            return
        }
        addLibrary(name, command)
        setName('')
        setCommand('')
    }
    return(
        <form onSubmit={handleSubmit} className="space-y-3">
            <h2 className="font-bold mb-3">Adicionar nova biblioteca</h2>
            <label className="block text-sm font-medium mb-3"htmlFor="">Nome da Biblioteca</label>
            <input className= "w-full p-2 border rounded dark:bg-slate-800 text-gray-300 text-opacity-60" type="text" placeholder="Ex: Numpy, React, Git" 
            value={name}
            onChange={(e) => setName(e.target.value)}
           
            />

            <label className="block text-sm font-medium mb-3" htmlFor="">Comando de instalação</label>
            <input type="text" 
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Digite um comando de instalação: ex NPM..."
            className=" w-full p-2 border rounded dark:bg-slate-800 text-gray-300 text-opacity-60"
            />

            <button type="submit"
            className="bg-purple-200 w-32 h-14 rounded-xl dark:bg-pink-400">adicionar</button>
        </form>

    )
}