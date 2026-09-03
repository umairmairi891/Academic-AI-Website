const mobileMenu=document.querySelector('.Mobile_menu')
const menu_btn=document.getElementById('menu_btn')

menu_btn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('show')
})





  const   mcqs = [{
    Mathematics: [
        {
            heading: 'Mathematics Mastery Quiz',
            Question: "A training course's enrollment vault goes from 80 students to 108 students. What is the percentage growth in enrollment ?",
            mcqs: ['25%', '35%', '28%', '30%'],
            answer: '35%',
            explanation: 'Growth = (108 - 80) / 80 = 28 / 80 = 0.35. Or 35% increase.',
        },
        {
            heading: 'Mathematics Mastery Quiz',
            Question: "Solve the linear logic system: Find the value of variable x if 3x - 12 = 18",
            mcqs: ['x=5', 'x=8', 'x=10', 'x=6'],
            answer: 'x=10',
            explanation: 'Add 12 to both sides: 3x = 30. Divide by 3: x = 10',
        },
        {
            heading: 'Mathematics Mastery Quiz',
            Question: "What is the Euclidean distance between coordinate point A(2, 3) and point B(8, 11) in a 2D plane?",
            mcqs: ['14 units', '10 units', '12 units', '8 units'],
            answer: '10 units',
            explanation: 'Distance = sqrt((8-2)^2 + (11-3)^2) = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10.',
        },
        {
            heading: 'Mathematics Mastery Quiz',
            Question: "If a student flips a balanced coin and rolls a standard 6-sided die, what is the probability of obtaining Heads and rolling an even number?",
            mcqs: ['1/4 (25%)', '1/2 (50%)', '1/12 (8.3%)', '1/6 (16.7%)'],
            answer: '1/4 (25%)',
            explanation: 'P(Heads) = 1/2. P(Even) = 3/6 = 1/2. These are independent events, so P(Both) = 1/2 * 1/2 = 1/4 or 25%.'
        },
        {
            heading: 'Mathematics Mastery Quiz',
            Question: "A company offers a plan of $15 base fee plus $3 per storage unit. Write the equation and solve for the units used if the billing totals $45.",
            mcqs: ['6 units', '15 units', '8 units', '10 units'],
            answer: '10 units',
            explanation: 'Equation: 3u + 15 = 45. 3u = 30. Therefore u = 10 units.'
        },
    ],

    EnglishCommunication: [
        {
            heading: 'English Communication Quiz',
            Question: "Identify the sentence that utilizes the Active Voice correctly instead of Passive options.",
            mcqs: ['The report was delivered by the management committee yesterday ', 'The management committee delivered the report yesterday.', 'The report has been completed and structured by the management committee', 'Management commitee structured delivery was made with the report'],
            answer: 'The management committee delivered the report yesterday.',
            explanation: "The management committee delivered the report' is active, direct and concise because the subject ('committee') performs the action ('delivered')."
        },
        {
            heading: 'English Communication Quiz',
            Question: "Locate and correct the dangling modifier: 'Struggling with the logic equation, a solution was finally found.",
            mcqs: ['Struggling with the logic equation, john finally found a solution ', 'A solution was finally found by john , struggling with the logic equation', 'while struggling with the logic equation the solution finally arrived', 'Struggling with the logic euqation , john mind found a solution'],
            answer: 'Struggling with the logic equation, john finally found a solution',
            explanation: "The opening modifier 'Struggling with...' must immediately refer to the correct subject ('John') who was doing the struggling, rather than 'a solution'."
        },
        {
            heading: 'English Communication Quiz',
            Question: "In standard academic writing, which element functions as the core analytical anchor statement, usually concluding the introductory paragraph?",
            mcqs: ['The hook', 'The Rhetorical Question', 'The Thesis Statement', 'The Body Topic Sentence'],
            answer: 'The Thesis Statement',
            explanation: "The Thesis statement states the main claim, provides direction, and anchors the logic of the entire essay."
        },
        {
            heading: 'English Communication Quiz',
            Question: "Select the vocabulary upgrade that replaces 'very clear' with professional elegance.",
            mcqs: ['Lucid', 'Gigantic', 'obscure', 'Frenetic'],
            answer: 'Frenetic',
            explanation: "'Lucid' means extremely clear, understandable, and coherent, which is a perfect upgrade."
        },
        {
            heading: 'English Communication Quiz',
            Question: "Which of the three Aristotelian pillars represents an appeal to logical facts, statistical evidence, and clean reasoning?",
            mcqs: ['Pathos', 'Ethos', 'Logos', 'Chronos'],
            answer: 'Logos',
            explanation: "Logos stands for logic, appeal to critical reasoning, data, and structured syllogisms."
        },
    ],
    ComputerScience: [
        {

            heading: 'Computer Science',
            Question: "What is the primary characteristic of a dynamic stack data structure?",
            mcqs: ['First In, First Out (FIFO) processing Behavior', 'Last In , First Out (LIFO) Processing Behavior', 'Rando, Access to any element instantly using index', 'A multi dimensional hierarchy of root configurations'],
            answer: 'Last In , First Out (LIFO) Processing Behavior',
            explanation: "A Stack maintains elements in a Last-In, First-Out (LIFO) model, meaning the element added most recently is retrieved first."
        },
        {

            heading: 'Computer Science',
            Question: "Decode the binary representation '1101' into standard base-10 denary numbers.",
            mcqs: ['11', '9', '13', '15'],
            answer: '13',
            explanation: "1101 = (1 * 2^3) + (1 * 2^2) + (0 * 2^1) + (1 * 2^0) = 8 + 4 + 0 + 1 = 13."
        },
        {

            heading: 'Computer Science',
            Question: "An algorithm checks every index of a list in a single linear scan from start to end to look for a name. What is its time complexity?",
            mcqs: ['o(1) constant Time', 'o(n) Linear Time', 'O(n log n)', 'O(n^2) Quadratic Time'],
            answer: 'o(n) Linear Time',
            explanation: "Searching every element sequentially scales directly with the list size, which represents O(n) or linear time complexity."
        },
        {

            heading: 'Computer Science',
            Question: "What HTTP status code is yielded by a web server to explicitly indicate that the requested page has not been found?",
            mcqs: ['200 ok', '500 server error', '301 redirect', '404 not found'],
            answer: '404 not found',
            explanation: "A 404 status code represents the standard CLIENT error meaning the resource was not found on the server."
        },
        {

            heading: 'Computer Science',
            Question: "Which part of internet architecture maps and resolves friendly hostnames like 'academia.com' to raw numeric IP addresses?",
            mcqs: ['SQL Database Server', 'DNS (Domain Name System )', 'HTTP Proxy Buffer', 'LIFO Memory Node'],
            answer: 'DNS (Domain Name System )',
            explanation: "DNS translates human-readable server address strings into router-compatible IP address numbers."
        },
    ],
    science: [
        {

            heading: ' Science',
            Question: "A suspended brick of 4 kg is positioned on a scaffold 10 meters above the ground. If gravitational acceleration represents 9.8 m/s^2, what is its Potential Energy?",
            mcqs: ['392 Joules', '400 Joules', '98 Joules', '39.2 Joules'],
            answer: '392 Joules',
            explanation: "PE = m * g * h = 4 * 9.8 * 10 = 392 Joules."
        },
        {

            heading: ' Science',
            Question: "Which type of chemical bond arises when two atom configurations actively SHARE elements of valence electrons?",
            mcqs: ['Iconic Bond', 'Covalent Bond', 'Hydrogen Bond', 'Metallic Bond'],
            answer: 'Covalent Bond',
            explanation: "A covalent bond occurs when atoms share electrons to stabilize their valence configuration, as seen in H2O."
        },
        {

            heading: ' Science',
            Question: "According to the ecological 10% rule, what percentage of chemical energy is lost as heat/respiration processes when climbing up a trophic level?",
            mcqs: ['10%', '50%', '90%', '0%'],
            answer: '90%',
            explanation: "According to the ecological 10% rule, what percentage of chemical energy is lost as heat/respiration processes when climbing up a trophic level?"
        },
        {

            heading: ' Science',
            Question: "What chemical byproduct represents the cellular energy glucose output in the standard photosynthesis balance equation?",
            mcqs: ['co2 Carbon Dioxide', 'NaCl Chlorine', 'C6H12O6', 'H2o Water'],
            answer: 'C6H12O6',
            explanation: "C6H12O6 is the organic compound Glucose, containing vital biological calories constructed from carbon dioxide, water and solar light."
        },
        {

            heading: ' Science',
            Question: "Which particle defines the unique IDENTITY of an element, determining its integer atomic number in the periodic grid?",
            mcqs: ['Neutron', 'Proton', 'Electron', 'Valance String'],
            answer: 'Proton',
            explanation: "The proton counts uniquely identity element types—Carbon is always 6 protons, Oxygen is 8 protons."
        },
    ]

}
]

const Streak=document.querySelector('.Streak')
let lastVisit=localStorage.getItem('lastvisitDate')
let streak=parseInt(localStorage.getItem('userStreak')) || 1
const todayDate=new Date().toDateString()
console.log(todayDate);

if(lastVisit){
    const lastDate=new Date(lastVisit)
    const currentDate=new Date(todayDate)
    const differentTime=currentDate-lastDate
    
    const days=differentTime/(1000*60*60*24)
    console.log(days);
    if(days===1){
        streak+=1
    }else{
        streak=1
    }
    
}
localStorage.setItem('lastvisitDate',todayDate)
localStorage.setItem('userStreak', streak)
Streak.innerHTML=`${streak}  Days Streak`




const quiz_section=document.querySelector('.quiz_section')
const quiz_arena=document.querySelector('.quiz_arena')
const  quizarenafirstsection=document.querySelector('.quiz_arena_first_section')
const quiz_arena_heading=document.getElementById('quiz_arena_heading')
const Number_counter=document.getElementById('Number_counter ')

const quiz_screen=document.querySelector('.quiz_screen')
const subject_title=document.getElementById('subject_title')
const question_number=document.getElementById('question_number')
const mcqquestion=document.getElementById('question')
const answers =document.querySelector('.answers')
const next_btn=document.querySelector('.next-btn')
const explanation=document.getElementById('explanation')
const backQuiz=document.getElementById('backQuiz')
const result_screen=document.querySelector('.result_screen')

let SelectSubject=''
let currentQuestion=0;
let question=[]
let score=0;


function startQuiz(subject) {
    SelectSubject=subject
    question=mcqs[0][subject]
    currentQuestion=0;
    quizarenafirstsection.classList.remove('hide')
    quiz_section.classList.add('hide')
    quiz_arena.classList.remove('hide')
    showQuestion()
    
}


function showQuestion(){
    const questionData=question[currentQuestion]
    subject_title.innerHTML=questionData.heading
    question_number.innerText=`Question ${currentQuestion +1} of ${question.length}`
    mcqquestion.innerHTML=questionData.Question
    answers.innerHTML=''
    questionData.mcqs.forEach((item)=>{
      const button=document.createElement('button')
      button.innerHTML=item
      button.classList.add('answer-btn')
      button.onclick=()=>{
        selectAnswer(button, item)
      }
      answers.appendChild(button)
    })
    explanation.innerHTML=''
    next_btn.classList.add('hide')
}

function selectAnswer(btn, selectAnswer){
   const questionData=question[currentQuestion]
   const button=document.querySelectorAll('.answer-btn')
   button.forEach((btn)=>{
        return btn.disabled=true
   })
   console.log(selectAnswer, questionData.answer);
   
   if(selectAnswer===questionData.answer){
    btn.classList.add('correct')
    score++
   }else{
    btn.classList.add('wrong')
   }
   explanation.innerHTML=`Explanation : ${questionData.explanation}`
   next_btn.classList.remove('hide')
}

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion < question.length){
        showQuestion()
    }else{
        showResult()
    }
}

next_btn.addEventListener('click', nextQuestion)

function showResult(){
    quizarenafirstsection.classList.add('hide')
    result_screen.classList.remove('hide')
    quiz_screen.classList.add('hide')
    document.getElementById('score').innerHTML=`Your Score is ${score}`
}

backQuiz.addEventListener('click',()=>{
        quiz_screen.classList.remove('hide')
        result_screen.classList.add('hide'); 
        quiz_arena.classList.add('hide')
        quiz_section.classList.remove('hide')
})



