'use strict'

//event = referenia direta do eventListener
//target = o "alvo" mirado no elemento referenciado no evento do "addEventListener"
//value = recebe o valor inserido no target, no caso, o CEP inserido no input
//fetch = faz requisição para a url

async function pesquisarCep (cep){
    const url = `https://cdn.apicep.com/file/apicep/${cep}.json`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherCampos({target}){

   const infoCep = await pesquisarCep(target.value)
   console.log(infoCep)
    document.getElementById('endereco').value = infoCep.address
    document.getElementById('bairro').value = infoCep.district
    document.getElementById('cidade').value = infoCep.city
    document.getElementById('estado').value = infoCep.state
}

document.getElementById('cep')
        .addEventListener('focusout', preencherCampos)