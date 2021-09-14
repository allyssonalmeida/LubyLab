//1) Implemente um método que crie um novo array baseado nos valores passados.
//Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function arrayCreator(x, y){
  let arr = [];
  for(let i=0; i<x; i++){
    arr[i]= y;
  }
  console.log(arr);
}
//arrayCreator(10,'abc')

//2) Implemente um método que inverta um array, não utilize métodos nativos do array.
//Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function arrayInverter(vetor){
  let t = (vetor.length) - 1
  let newVetor = []
  for(let i= 0; i< vetor.length; i++){
    //console.log(`Colocando o numero ${vetor[t] - t} na posição ${i}`)
    newVetor[i] = vetor[t]
    t--
  }
  console.log(newVetor)
}
//arrayInverter([1,2,3,4,5]);

//3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null)
//Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function isValid(x){
  if(x){
    return true
  }
}
function arrayFilter(vetor){
  let newVetor = vetor.filter(isValid)
  console.log(newVetor)
}
//arrayFilter([1,null,3,undefined,'',6,undefined,8,undefined])

//4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
//Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function arrayConverter(vetor){
  let obj = {};
  vetor.map(item =>{
    obj[item[0]]= item[1]
  })
  console.log(obj)
}
//arrayConverter([["c",2],["d",4],["a",1],["b",3]])

//5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

function arrayRemover(vetor, a,b){
  let newVetor = vetor.filter((v) =>{
    return (v != a && v != b)
  });
  console.log(newVetor)
}
//arrayRemover([5,4,3,2,5], 3,2)

//6) Implemente um método que retorne um array, sem valores duplicados.
//Entrada do método ([55,55,12,13,18,18,22,21]), Resultado do método: [1,2,3,4,5,7]

function arrayDuplicata(vetor){
  let newVetor = [];
  vetor.map(item =>{
    if(!newVetor.find(x => x === item)){
      newVetor.push(item)
    }
  })
  console.log(newVetor)
}
//arrayDuplicata([1,2,3,3,2,4,5,4,7,3])


//7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
//Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function arrayMatches(v1, v2){

  if(v1.length === v2.length){
    let matches = 0;
    for(let i = 0; i < v1.length; i++){
      matches += v1[i] === v2[i] ? 1 : 0
    }
    console.log(matches === v1.length? true : false)
  }else console.log(false);
}
//arrayMatches([1,2,3,4],[1,2,3,4]) //true
//arrayMatches([1,2,3,4],[1,2,3,5]) //false

//8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
//Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function arrayReducer(vetor){
  let newVetor = [];
  vetor.map((item, index)=>{ 
    if(typeof item != 'number'){
      item.map((subitem) => {
        newVetor.push(subitem)
      })
    }else{
      newVetor.push(item)
    }
  })
  console.log(newVetor)
}
//arrayReducer([1, 2, [3], [4, 5], [6], 7, [8, 9, 10]])

//9) Implemente um método divida um array por uma quantidade passada por parâmetro.
//Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function arrayDivider(vetor, divisor){
  let newVetor = []
  while(vetor.length){
    newVetor.push(vetor.splice(0, divisor))
  }
  console.log(newVetor)
}
//arrayDivider([1, 2, 3, 4, 5], 2)

//10) Implemente um método que encontre os valores comuns entre dois arrays.
//Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function arrayFinder(v1, v2){
  let newVetor = [];
  v1.map((item) => {
    let check = (v2.find(element => element === item))
    if(check) newVetor.push(check)
  })
  console.log(newVetor);
}
//arrayFinder([12, 6, 6], [8, 12, 6])

