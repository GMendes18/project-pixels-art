const paletaCores = document.querySelectorAll('.color');
const black = document.getElementById('black');
const mudarCor = () => {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r},${g},${b})`
}
const gerarCores = () => {
  document.getElementById('button-random-color').addEventListener('click', () => {
    for (index = 0; index < paletaCores.length; index += 1) {
      if (paletaCores[index] === black){
        paletaCores[index].style.backgroundColor = black;
      }else{
      paletaCores[index].style.backgroundColor = mudarCor();
    }
  }
}
  )
}
gerarCores();
mudarCor();
console.log(paletaCores);
