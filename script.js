const paletaCores = document.querySelectorAll('.color');
const body = document.getElementsByTagName('body')
const cor1 = document.getElementById('blue')
const cor2 = document.getElementById('red')
const cor3 = document.getElementById('yellow')
const quadro = document.getElementById('pixel-board');
const black = document.getElementById('black');

const criarCor = () => {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r},${g},${b})`
}
//Botão cores aleatórias
const gerarCores = () => {
  let botaoRandom = document.getElementById('button-random-color')
  let arrayCores = [];
  botaoRandom.addEventListener('click', () => {
    const black = document.getElementById('black');
    for (index = 1; index < paletaCores.length; index += 1) {
      if (paletaCores[index] === black) {
        paletaCores[index].style.backgroundColor = 'black';
      } else {
        paletaCores[index].style.backgroundColor = criarCor();
        arrayCores[index - 1] = paletaCores[index].style.backgroundColor
        localStorage.setItem('colorPalette', JSON.stringify(arrayCores));
      }
    }
  }
  )
}
// Local Storage
const atualizarCor = () => {
  const recarregarCor = JSON.parse(localStorage.getItem('colorPalette'));
  if (recarregarCor === null) {
    for (index = 1; index < paletaCores.length; index += 1) {
      if (paletaCores[index] === cor1) {
        paletaCores[index].style.backgroundColor = 'blue'
      } else if (paletaCores[index] === cor2) {
        paletaCores[index].style.backgroundColor = 'red'
      } else if (paletaCores[index] === cor3) {
        paletaCores[index].style.backgroundColor = 'yellow'
      }
    }
  } else {
    for (index = 1; index < paletaCores.length; index += 1) {
      paletaCores[index].style.backgroundColor = recarregarCor[index - 1]
    }
  }
}
//Criar tabela e customizar
const criarTabela = () => {
  for (index = 1; index <= 25; index += 1) {
    let pixels = document.createElement('div')
    pixels.classList.add('pixel');
    pixels.style.backgroundColor = 'white'
    pixels.style.width = '40px'
    pixels.style.height = '40px'
    pixels.style.border = '1px solid black'
    pixels.style.display = 'inline-block'
    pixels.style.position = 'relative'
    quadro.appendChild(pixels)
  }
}
//Selecionar cor 
const selected = () => {
  black.classList.add('selected')
}
// const selecionarClasse = () => {
//   const corSelecionada = document.querySelector('.selected');
//   corSelecionada.classList.remove('selected');
//   event.target.classList.add('selected')
// }
const selecionarCor = () => {
  for (index =0; index < paletaCores.length;index +=1) {
    paletaCores[index].addEventListener('click', () => {
      const corSelecionada = document.querySelector('.selected');
      corSelecionada.classList.remove('selected');
      event.target.classList.add('selected')
    }
    )
  }
}

// black.addEventListener('click',selecionarClasse)
// cor1.addEventListener('click',selecionarClasse)
// cor2.addEventListener('click',selecionarClasse)
// cor3.addEventListener('click',selecionarClasse)
window.onload = () => {
  criarTabela();
  gerarCores();
  atualizarCor();
  selected();
  selecionarCor();
  console.log(paletaCores);
}
