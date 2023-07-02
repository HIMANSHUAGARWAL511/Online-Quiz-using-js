const question = [
    {
        'que': "8085 microprocessor has how many pins?",
        'a': "35",
        'b': "30",
        "c": "40",
        "d": "38",
        "correct": "c"
    },
    {
        'que': "HLT opcode means ",
        "a": "load data to accumulator",
        "b": "store result in memory",
        "c": "load accumulator with contents of register",
        "d": "end of program",
        "correct": "d"
    },
    {
        'que': "The program counter in a 8085 micro-processor is a 16-bit register, because ? ",
        "a": "It counts 16-bits at a time",
        "b": "There are 16 address lines ",
        "c": "It facilitates the user storing 16-bit data temporarily ",
        "d": " It has to fetch two 8-bit data at a time ",
        "correct": "d"
    }
]
//console.log(question)
let index=0;
let questioon=document.getElementById("question") 
let total = question.length
let right=0,wrong=0
let answer;
const inputOption=document.querySelectorAll('.option')
const reset =()=>{
    inputOption.forEach((input)=>{
        if(input.checked){
            input.checked=false
        }
    })
}

loadQuestion=()=>{
    if(index==total){
        return endQuiz()
    }
    reset()
    const data=question[index]
    questioon.innerText=`${index+1}) ${data.que}`
    inputOption[0].nextElementSibling.innerText=data.a
    inputOption[1].nextElementSibling.innerText=data.b
    inputOption[2].nextElementSibling.innerText=data.c
    inputOption[3].nextElementSibling.innerText=data.d
    // console.log()
    // console.log(data)/
}
loadQuestion()

const submitQuiz=()=>{
    const data=question[index]
    const ans=getAnswer();
    if(ans==data.correct){
        right++
        // console.log(right)
    }else{
        wrong++
    }
    index++
    loadQuestion()
}
// console.log(questioon)

const getAnswer=()=>{
inputOption.forEach((input)=>{
    if(input.checked){
        answer=input.value
        
    }
})
// console.log(answer)
return answer;
}
const endQuiz=()=>{
    
    if(right==total){
        document.getElementById("QQ").innerHTML=`<h1>Thankyou for playing the  Quiz</h1>
        <h2>Your score is</h2><h3>
        ${right}/${total} are correct</h3><h4>
        Congratulation!! You Scored  the full Marks</h4>`
    }
    else if(right==total-1){
        document.getElementById("QQ").innerHTML=`<h1>Thankyou for playing the  Quiz</h1>
        <h2>Your score is</h2>
       <h3> ${right}/${total} are correct</h3>
        <h4>Keep it up!!</h4>`
    }
    else{
        document.getElementById("QQ").innerHTML=`<h1>Thankyou for playing the  Quiz</h1>
        <h2>Your score is</h2>
       <h3> ${right}/${total} are correct</h3>
        <h4>Sorry!! Try Again</h4>`
    }
}

