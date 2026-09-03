
const IQ=[
    {
        question:'Which figure logical set must logically succeed the active alphabetical patterns? ABC ⟶ BDF ⟶ CFI ⟶ ... ',
        mcqs:['DFH','DHL','DGL','DGJ'],
        answer:'DFH'
    },
    {
        question:'Analyze the sequence trend and calculate the missing integer:    3, 6, 12, 15, 30, 33, ...',
        mcqs:['36','45','66','69'],
        answer:'66'
    },
    {
        question:'Imagine standard shapes rotations: A square points upward with an arrow to the top-right. After rotating the entire tile by 135 degrees counter-clockwise, where does the arrow point?',
        mcqs:['Directly West','Directly South','Directly North','Directly East'],
        answer:'Directly West'
    },
    {
        question:'Acade is to scholar as laboratory is to ...',
        mcqs:['Chemicals','Physict','Hypothetic','Microscope'],
        answer:'Physict'
    },
    {
        question:'A custom math variable puzzle states: If 4 ✨ 3 = 25, and 3 ✨ 2 = 13. What is the value of 5 ✨ 4?',
        mcqs:['41','45','36','40'],
        answer:'41'
    },
    {
        question:`Which segment is the absolute Odd One Out from this geometrical pattern set?
A) Triangle (3 edges) B) Cube (12 edges) C) Hexagon (6 edges) D) Octagon (8 edges)`,
        mcqs:['Segment A','Segment B','Segment C','Segment D'],
        answer:'Segment B'
    },
    {
        question:'Identify the word that most accurately completes the reasoning puzzle: PERSISTENCE is to FLOURISH as IRRESOLUTE is to ...',
        mcqs:['Stagnate','Conquer','Amplify','CLarify'],
        answer:'Stagnate'
    },
    {
        question:"Analyze statement rules: Three students—Alan, Bob, and Chris—attend an assessment. Only one of them aced the test. Alan says: 'Bob aced it.' Bob says: 'Chris did it.' Chris says: 'Bob is lying.' If only one of the three claims is true, who aced the test?",
        mcqs:['Alan','Bob','Chris','It is impossible to determine'],
        answer:'Chris'
    },
    {
        question:"If a digital clock reads 3:15. What is the precise angle degree between the hour hand and the minute hand?",
        mcqs:['0 Degrees','7.5 Degrees','15 Degrees','12.5 Degrees'],
        answer:'7.5 Degrees'
    },
    {
        question:"If a digital clock reads 3:15. What is the precise angle degree between the hour hand and the minute hand?",
        mcqs:['0 Degrees','7.5 Degrees','15 Degrees','12.5 Degrees'],
        answer:'7.5 Degrees'
    },
]


const IQ_assessment_section=document.querySelector('.IQ_assessment_section')
const IQ_quizscreen=document.querySelector('.IQ_quiz_screen')
const IQ_quiz=document.querySelector('.IQ_quiz')
const IQ_quiz_question=document.getElementById('IQ_quiz_question')
const IQ_answers=document.querySelector('.IQ_answers')
const nextbtn=document.querySelector('.next_btn')
const quizResult=document.querySelector('.result')
const resultScore=document.getElementById('result_score')
const backBtn=document.getElementById('back_to_IQ')
const timerheading=document.getElementById('timer')
const questionNumber=document.querySelector('.question_number')


let currentIndex=0
let IQscore=0
let IntervalId=null
function timer(duration=360){
let timeRemaining=duration
 clearInterval(IntervalId)
 IntervalId=setInterval(()=>{
      
      let minutes=Math.floor(timeRemaining/60)
      let seconds=timeRemaining%60

      const paddedmin=String(minutes).padStart(2,'0')
      const paddedsec=String(seconds).padStart(2,'0')
      
      
       timerheading.innerHTML=` Time Remaining ${paddedmin}: ${paddedsec}`
       if(timeRemaining <=0){
              clearInterval(IntervalId)
       }
       timeRemaining--;
},1000)

}




function startIQtest(){
    currentIndex=0;
    IQscore=0
    IQ_assessment_section.classList.add('hide')
    IQ_quizscreen.classList.remove('hide')
    currentTime=0
    showQuiz()
    timer(360)

}

function showQuiz(){
    console.log(currentIndex);
    
    let questionData=IQ[currentIndex]
    questionNumber.innerHTML=`${currentIndex+1} / ${IQ.length}`
    IQ_quiz_question.innerHTML=questionData.question
    IQ_answers.innerHTML=''
    questionData.mcqs.forEach((item)=>{
        const button=document.createElement('button')
         button.innerHTML=item
         button.classList.add('IQ_button')
         button.onclick=()=>{
            selectAnswer(button , item)
         }
         IQ_answers.appendChild(button)
    })

    nextbtn.classList.add('hide')

}

function selectAnswer(btn, item){
    const questionData=IQ[currentIndex]
    const button=document.querySelectorAll('.IQ_button')
    button.forEach((btn)=>{
       btn.disabled=true
    })
    
    if(item===questionData.answer){
        btn.classList.add('correct')
        IQscore++
        
    }else{
        btn.classList.add('wrong')
    }
    nextbtn.classList.remove('hide')
}

function nextIQQuestion(){
    console.log('hi');
    
    currentIndex++;

    if(currentIndex < IQ.length){
        showQuiz()
    }else{
        showResult()
    }
}

nextbtn.addEventListener('click', nextIQQuestion)

backBtn.addEventListener('click',()=>{
    IQ_assessment_section.classList.remove('hide')
    quizResult.classList.add('hide')
})

function showResult(){
    
      quizResult.classList.remove('hide')
      IQ_quizscreen.classList.add('hide')
      const Finalscore=Math.floor(IQscore/IQ.length*100)
      resultScore.innerHTML=`Your Score is ${Finalscore}%`
}