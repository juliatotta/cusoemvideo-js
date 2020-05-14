function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //formulário ano 
    var res = document.getElementById('res') 
    if(fano.value.length == 0 || fano.value > ano){
        window.alert(`Verifique os dados e tente novamente!`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ' ' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Sua idade é <strong>${idade}</strong> anos e seu sexo é <strong>${genero}</strong>`
        res.appendChild(img)
    }
}