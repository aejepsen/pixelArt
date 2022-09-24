let selectedColor = document.getElementsByClassName('color');
// escutador de evento que receberá click sobre a cor a ser selecionada.
for (let index = 0; index < selectedColor.length; index += 1) {
  selectedColor[index].addEventListener('click', clickSelectionColorPixel)
}
// função incluida no escutador captura o id da classe 'color' selecionada ao clicar.
// o parâmetro event é o id da classe 'color' definido na função clickTargetColorPixel.
// após receber o valor do parâmetro event pela função clickTargetColorPixel.
// retira o id='selected' de todos.
// inclui o id='selected' na classList do event selecionado. 
// id='selected' é o valor a ser comparado na função clickTargetColorPixel para definir qual o id referente a cor selecionada.
// inicialmente só o id='blackPallet' está pré definido.
function clickSelectionColorPixel(event) {
  document.getElementById('blackPallet').classList.remove('selected');
  document.getElementById('redPallet').classList.remove('selected');
  document.getElementById('greenPallet').classList.remove('selected');
  document.getElementById('bluePallet').classList.remove('selected');
  event.target.classList.add('selected');

}

let pixels = document.getElementsByClassName('pixel');
// escutador de eventos que recebe os clicks sobre os pixel a serem preenchidos. vai de 0 ao length que é 25.


for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', clickTargetColorPixel);
}
// No if que ao identifica o id='selected' incluindo em seguida na 
// div clicada o id da cor selecionada, que troca a cor anterior para a cor definida pelo seu id.

function clickTargetColorPixel(event) {
  const blackPallet = document.getElementById('blackPallet');
  const redPallet   = document.getElementById('redPallet');
  const greenPallet = document.getElementById('greenPallet');
  const bluePallet  = document.getElementById('bluePallet');

  for (let index = 0; index < blackPallet.classList.length; index += 1) {
    if (blackPallet.classList[index] === 'selected') {
      event.target.id = 'blackPallet';
    }
  }

  for (let index = 0; index < redPallet.classList.length; index += 1) {
    if (redPallet.classList[index] === 'selected') {
      event.target.id = 'redPallet';
    }
  }

  for (let index = 0; index < greenPallet.classList.length; index += 1) {
     if (greenPallet.classList[index] === 'selected') {
      event.target.id = 'greenPallet';
    }
  }

  for (let index = 0; index < bluePallet.classList.length; index += 1) {
    if (bluePallet.classList[index] === 'selected') {
      event.target.id = 'bluePallet';
    }
  }
}
// escutador do botão de limpar os pixel preenchidos.
let buttonClear = document.getElementById('clear-board');
let classPixel = document.getElementsByClassName('pixel');
buttonClear.addEventListener('click', clearColoredPixel)
// a função disparada com o click do botão limpar que 
function clearColoredPixel() {
  for(index = 0; index < classPixel.length; index += 1) {
    classPixel[index].id = 'clear';
  }
}
// ref git@github.com gustavo-henrique-project-pixel-art.git -- Consultei o código para entender a lógica do uso 
// do escutador de eventos e sequência de funções de colorir pixel e entender melhor o enunciado do projeto.
// ref git@github.com marvigdev/trybe-exercicio-git -- consultei o código para conhecer outra opção de algorítimo.



// ref https://github.com/tryber/sd-019-b-project-pixels-art/commits?author=C4BRALL
// codigo abaixo contém gerador de div dinamicamente com definição de tamanho pelo usuário.
// let firstColor = document.querySelectorAll('.color')[0]
// let secondColor = document.querySelectorAll('.color')[1]
// let thirdColor = document.querySelectorAll('.color')[2]
// let fourColor = document.querySelectorAll('.color')[3]
// firstColor.style.background = 'black'
// secondColor.style.background = 'yellow'
// thirdColor.style.background = 'green'
// fourColor.style.background = 'red'


// let quadradinhos = 5
// function creatingSquare () {
//     for(let i = 0; i < quadradinhos; i++){
//         let lin = document.createElement('div')
//         lin.classList.add('linha')
//         document.querySelector('#pixel-board').appendChild(lin)
//         for(let x = 0; x < quadradinhos; x++) {
//             let col = document.createElement('div')
//             col.classList.add('pixel')
//             lin.appendChild(col)
//         }
//     }
// }
// creatingSquare()


// let butaoTamanho = document.querySelector('#generate-board')
// let inputTamanho = document.querySelector('#board-size')
// function escolherTamanho() {
//     butaoTamanho.addEventListener('click', function(){
//         if(inputTamanho.value > 50 || inputTamanho.value < 5) {
//             alert('Input de tamanho inválido')
//         } else if(inputTamanho.value < 50 && inputTamanho.value > 5){
//             document.querySelector('#pixel-board').innerHTML = ''
//             let contador = inputTamanho.value
//             for(let i = 0; i < contador; i++){
//             let lin = document.createElement('div')
//              lin.classList.add('linha')
//              document.querySelector('#pixel-board').appendChild(lin)
//             for(let x = 0; x < contador; x++) {
//              let col = document.createElement('div')
//              col.classList.add('pixel')
//              lin.appendChild(col)
//          }
//          }
//         }
//     })
// }
// escolherTamanho()

// let pixels = document.querySelectorAll('.pixel')
// let buttonClear = document.querySelector('#clear-board')
// function botaozinho () {
//     for(let i = 0; i < pixels.length; i++) {
//     let clear = document.querySelectorAll('.pixel')
//     clear[i].style.backgroundColor = 'white'
//     }
// }
// buttonClear.addEventListener('click', botaozinho)


// let quadroCor = document.querySelector('#color-palette')
// function oneColor(event) {
//     let selected = document.querySelector('.selected')
//     selected.classList.remove('selected')
//     event.target.classList.add('selected')
// }
// quadroCor.addEventListener('click', oneColor)



// let pickPixels = document.querySelectorAll('.pixel')

// function colorirQuadro() {
//     for(let i = 0; i < pickPixels.length; i++){
//         pickPixels[i].addEventListener('click', function(){
//             let corAtual = document.querySelector('.selected').style.backgroundColor
//             pickPixels[i].style.backgroundColor = corAtual
//         })
//     }
// }
// colorirQuadro()

