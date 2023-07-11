const operationElement = document.querySelector('#operation')

const totalElement = document.querySelector('#total')

const keys = document.querySelectorAll('.key')


const writeTotal =( val )=>{ 
  let value=String(val)
  if(value.length<10){totalElement.innerText = val}
  else{
    totalElement.innerText = val.toExponential(2)
  }
  }

const writeText = text => !text ? operationElement.innerText = '' : operationElement.innerText += text

const onDelete = () => operationElement.innerText = operationElement.innerText.slice(0, -1)

const onClear = () => totalElement.innerText = '0'

const onEqual = () => {
  try{
    const val = eval(operationElement.innerText)
    writeTotal(val)
  }catch(e){
    writeTotal("Invalid")
  }
  operationElement.innerHTML=""
}

const action = keyElement => {
  const { id, innerText } = keyElement
  console.log(typeof(innerText))
  switch (id) {
    case 'clear':
      writeText('')
      onClear()
      break;
    case 'delete':
      onDelete()
      break;
    case 'equal':
      onEqual()
      break;
    default:
      writeText(innerText)
      break;
  }
}

const keysListener = () => {
  keys.forEach(el => {
    el.addEventListener('click', () => action(el))
  })
  const keyArr=[1,2,3,4,5,6,7,8,9,0]
  const keyArr2=['/','*','+','-','%','.']
  window.addEventListener("keydown",(e1)=>{
    if(e1.key==='Backspace'){
      onDelete()
    }else if(e1.key in keyArr){
      writeText(e1.key)
    }else if(e1.key=='Enter'){
      onEqual();
    }
    else{
      for (i in keyArr2){
        if(e1.key==keyArr2[i]){
          writeText(e1.key)
        }
      }
    }
  }
  )
}

document.addEventListener('DOMContentLoaded', keysListener())
