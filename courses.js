const courses = [
  { id: 1, span: 'Mathematics', heading: 'Mathematics Mastery', rating: '4.8', level: 'Beginner', paragraph: 'Build strong mathematical foundations and improve analytical thinking', lessons: '4 Micro Lessons', duration: '6 Hours Duration', progress: '0%', button: "Enroll & Start Learning " },
  { id: 2, span: 'English Communication', heading: 'English Communication', rating: '4.7', level: 'Beginner', paragraph: 'Enhance speaking, writing, and comprehension skills', lessons: '3 Micro Lessons', duration: '5 Hours Duration', progress: '0%', button: "Enroll & Start Learning " },
  { id: 3, span: 'Computer Science', heading: 'Computer Science Fundamentals', rating: '4.9', level: 'Intermediate', paragraph: 'Learn technology concepts that prepare you for the digital world', lessons: '3 Micro Lessons', duration: '7 Hours Duration', progress: '0%', button: "Enroll & Start Learning " },
  { id: 4, span: 'Science', heading: 'Science Excellence', rating: '4.6', level: 'Beginner', paragraph: 'Understand scientific principles through engaging lessons and examples.', lessons: '3 Micro Lessons', duration: '5 Hours Duration', progress: '0%', button: "Enroll & Start Learning " },
  { id: 5, span: 'General Knowledge', heading: 'General Knowledge', rating: '4.5', level: 'Beginner', paragraph: 'Expand awareness, historical perspective, and critical thinking.', lessons: '3 Micro Lessons', duration: '4 Hours Duration', progress: '0%', button: "Enroll & Start Learning " },
  { id: 6, span: 'Professional Development', heading: ' Professional Development', rating: '4.8', level: 'Advanced', paragraph: 'Learn high-impact skills that prepare students for careers.', lessons: '5 Micro Lessons', duration: '5 Hours Duration', progress: '0%', button: "Enroll & Start Learning " },
];

const syllabus = [
  {
    id: 1,
    lessons1: {
      heading: 'Mathematics Mastery',
      subheading: 'Introduction to Quantitative Reasoning',
      duration: '1h 30m',
      content: 'Understanding the Foundation of Numbers Numbers are not just symbols; they represent proportional relationships in our universe. In this lesson, we explore quantitative reasoning—the ability to apply mathematical concepts to real-world contexts.',
      subcontent: `Core Mathematical Frameworks 1. **The Number Line & Order of Magnitude**: Grasping the relative size of fractions, decimals, and negative numbers. 2. **Proportional Thinking**: Solving problems with ratios, percentages, and scale factors. Let us take standard percentages—increasing a value by 25% is equivalent to multiplying by 1.25, or scaling by a factor of 5/4. 3. **Problem-Solving Framework**: * Identify the goal (what are we solving for?) * List the given values and constraints. * Sketch a visual layout or table of variables. * Write down the governing equation and solve incrementally.`,
      button:'Mark Lesson As Complete'
    },
    lessons2: {
      heading: 'Mathematics Mastery',
      subheading: 'Algebraic Patterns and Variables',
      duration: '1h 45m',
      content: 'Decoding Algebraic Expressions Algebra is the language of generalization. By replacing static values with dynamic variables, we can construct universal solutions for complex processes.',
      subcontent: `Core Concepts * **Independent vs. Dependent Variables**: The independent variable ($x$) is the input, while the dependent variable ($y$) represents the output or result. * **Linear Equation Modeling**: $y = mx + b$, where $m$ is the slope (rate of change) and $b$ is the y-intercept (starting value).`,
      button:'Mark Lesson As Complete'
    },
    lessons3: {
      heading: 'Mathematics Mastery',
      subheading: 'Mental Geometry and Spatial Logic',
      duration: '1h 15m',
      content: 'Thinking in Coordinates and Dimensions Spatial logic is a major indicator of overall mathematical capabilities. This session bridges the gap between numbers and physical shapes.',
      subcontent: `Key Principles 1. **The Cartesian Coordinate Plane**: Two perpendicular axes ($x$ and $y$) allowing graphical visualization of algebraic equations. 2. **Pythagorean Proportions**: In any right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.`,
      button:'Mark Lesson As Complete'
    },
    lessons4: {
      heading: 'Mathematics Mastery',
      subheading: 'Probability and Logical Combinations',
      duration: '1h 30m',
      content: 'Mastering Chance and Decisions We make decisions based on likelihoods. Probability helps turn uncertainty into quantifiable data, allowing for smarter logical strategies.',
      subcontent: `Core Frameworks * **Sample Space**: The complete list of all possible outcomes for an event. * **Independent Probability**: The occurrence of one event does not impact another.`,
      button:'Mark Lesson As Complete'
    },
  },
  {
    id: 2,
    lessons1: {
      heading: 'English Communication',
      subheading: 'Modren Grammer & Sentence Architecture',
      duration: '1h 40m',
      content: 'Crafting Elegant and Clear Sentences English communication starts with strong foundations. Think of sentences as engineering structures—components must link correctly to transfer meaning without collapsing into ambiguity.',
      subcontent: `Essential Building Blocks 1. **The Verb-Subject Balance**: Ensuring singular subjects take singular verbs and plural subjects take plural verbs. 2. **Clause Coordination**: Avoiding run-on sentences.`,
      button:'Mark Lesson As Complete'
    },
    lessons2: {
      heading: 'English Communication',
      subheading: 'Persuasive Writing and Structure',
      duration: '1h 50m',
      content: 'Structuring Arguments with Impact Whether you are writing a college essay or a business email, the goal is influence.',
      subcontent: `The Three Rhetorical Pillars (Aristotle's Triangle) * **Ethos**: Character and credibility. * **Pathos**: Emotional resonance. * **Logos**: Logical appeal.`,
      button:'Mark Lesson As Complete'
    },
    lessons3: {
      heading: 'English Communication',
      subheading: 'Active Comprehension & Vocabulary',
      duration: '1h 30m',
      content: 'Reading Between the Lines Active comprehension is the art of critical reading. Rather than just scanning words, active readers interrogate the text, analyze tone, and unpack implicit assumptions.',
      subcontent: `Active Reading Strategies * **Answering the 'So What?'**: Determine the author’s primary motivation for writing the piece.`,
      button:'Mark Lesson As Complete'
    }
  },
  {
    id: 3,
    lessons1: {
      heading: 'Computer Science Fundamentals',
      subheading: 'Algorithms, Pseudocode, and Flowcharts',
      duration: '2h 15m',
      content: 'The Art of Algorithmic Thinking An algorithm is simply a step-by-step mathematical recipe to solve a specific problem.',
      subcontent: `Key Logics 1. **Sequence**: Running lines of instruction in static order. 2. **Conditionals (Selection)**: Deciding which route to take based on status.`,
      button:'Mark Lesson As Complete'
    },
    lessons2: {
      heading: 'Computer Science Fundamentals',
      subheading: 'Data Structures & Storage Logic',
      duration: '2h 30m',
      content: 'Organizing Information in Memory How an application structures its data determines how fast it can respond to searches, updates, and creation commands.',
      subcontent: `Core Data Structures * **Arrays**: Fast, indexed collections stored sequentially in computer memory.`,
      button:'Mark Lesson As Complete'
    },
    lessons3: {
      heading: 'Computer Science Fundamentals',
      subheading: 'Internet Architectures and HTTP Protocol',
      duration: '2h 15m',
      content: 'Deciphering the Client-Server Web Every time you open an academy course or search a query, your computer operates inside a global, hyper-speed client-server conversation.',
      subcontent: `The standard request-reply cycle: 1. **The Client (Browser)**: Requests resources by sending an HTTP request to an IP Address.`,
      button:'Mark Lesson As Complete'
    }
  },
  {
    id: 4,
    lessons1: {
      heading: 'Science Excellence',
      subheading: 'Energy Conservations and Transfer Logic',
      duration: '1h 45m',
      content: 'The Universal Law of Energy Energy is neither created nor destroyed. It merely changes its configuration from one state to another. This is the first law of thermodynamics, regulating every physical system in our universe.',
      subcontent: `Classic energy structures: * **Potential Energy (Stored)**: Positional gravity storage: $$PE = mgh$$ Where $m$ is mass, $g$ is gravity ($9.8 \text{ m/s}^2$), and $h$ is elevation height. * **Kinetic Energy (Motion)**: Work energy in fluid movement: $$KE = \frac{1}{2}mv^2$$ Where $v$ is velocity speed. * **Entropy & Loss**: In every transfer, some energy devalues into low-temperature heat, decreasing the system's useful activity.`,
      button:'Mark Lesson As Complete'
    },
    lessons2: {
      heading: 'Science Excellence',
      subheading: 'Chemistry Basics: Atom Structures & Periodic Table',
      duration: '1h 45m',
      content: 'Inside the Subatomic Universe Everything around us is composed of elements—unique substance classes made of atoms. Decoding the atomic structure gives us the rules to predict chemistry combinations.',
      subcontent: `The Atomic Blueprint * **The Nucleus**: The central heavy core housing positive **Protons** and neutral **Neutrons**. * **Electron Shells**: Orbiting negative **Electrons** bound by electromagnetic forces. * **Atomic Number**: The total proton count in the nucleus. This determines the identity of the element (e.g., 6 protons is always Carbon). * **Valence Electrons**: The electrons occupying the absolute outermost shell. Atoms actively try to fill this outer shell, inducing Chemical Bonds!`,
      button:'Mark Lesson As Complete'
    },
    lessons3: {
      heading: 'Science Excellence ',
      subheading: 'Biome Ecosystems & Energy Pyramids',
      duration: '1h 30m',
      content: 'The Intricate Balance of Life Biology is the study of living matter interacting. Inside ecosystem biomes, living organisms rely on delicate chains of food, sunlight, and raw nutrients.',
      subcontent: `Trophic Levels of life: 1. **Primary Producers**: Foliage and algae which generate chemical glucose using solar energy via **Photosynthesis**: $$\text{Water } (H_2O) + \text{Carbon Dioxide } (CO_2) + \text{Sunlight} \implies \text{Glucose } (C_6H_{12}O_6) + \text{Oxygen } (O_2).$$ 2. **Primary Consumers**: Herbivore wildlife directly eating plants. 3. **Secondary Consumers**: Carnivore hunters harvesting herbivores. 4. **Decomposers**: Fungi and bacteria processing waste back into soil nutrients.`,
      button:'Mark Lesson As Complete'
    }
  },
  {
    id: 5,
    lessons1: {
      heading: 'General Knowledge',
      subheading: 'Logic & Critical Thinking: Spotting Fallacies',
      duration: '1h 20m',
      content: 'Becoming a Astute Thinker General knowledge is not just about memorizing facts; it is about keeping your reasoning sharp. Let us learn standard logical fallacies that often muddy public debates.',
      subcontent: `Common Cognitive Pitfalls * **Ad Hominem**: Attacking the speaker’s personal characteristics instead of addressing their argument. * **Straw Man**: Misrepresenting someone's argument to make it easier to attack. * **Correlation vs Causation**: Assuming that because event $B$ followed event $A$, event $A$ must have caused event $B$. ("The rooster crows before dawn, so his crowing causes the sun to rise.") * **Confirmation Bias**: Actively searching for and favoring evidence that supports your pre-existing beliefs while ignoring counter-arguments.`,
      button:'Mark Lesson As Complete'
    },
    lessons2: {
      heading: 'General Knowledge',
      subheading: 'Milestones of Human History',
      duration: '1h 30m',
      content: 'Milestones of Human History',
      subcontent: `Crucial Transitions 1. **The Agricultural Revolution (Circa 10k BCE)**: Humans transitioned from nomadic hunter-gatherer habits to stationary farming, making cities and stored wealth possible. 2. **The Printing Press (1440 CE)**: Johannes Gutenberg's machine democratized information literacy, setting off the scientific revolution and Enlightenment. 3. **The Industrial Revolution (1760-1840 CE)**: Transitioning from manual tool work to steam machines and fossil fuels, reshaping global urban centers.`,
      button:'Mark Lesson As Complete'
    },
    lessons3: {
      heading: 'General Knowledge ',
      subheading: 'Global Geographies & Cultures',
      duration: '1h 10m',
      content: 'Understanding Our Global Neighborhood Geography dictates history, economics, and national power. In this lesson, we review physical systems of mountains, rivers, and political trade passages',
      subcontent: `Critical Water Passages and Mountains * **Suez Canal**: A man-made waterway in Egypt connecting the Mediterranean to the Red Sea, routing over 12% of global daily shipping. * **The Ring of Fire**: An active tectonic basin in the Pacific Ocean housing the majority of Earth's volcanic eruptions and earthquakes. * **Himalayas**: Natural mountain boundary blocking weather flows, creating the fertile monsoon basins of Southern Asia.`,
      button:'Mark Lesson As Complete'
    }
  },
  {
    id: 6,
    lessons1: {
      heading: 'Professional Development',
      subheading: 'Resume Engineering & CV Construction',
      duration: '1h 40m',
      content: 'Constructing High-Conversion CVs Resumes are reviewed by recruiters in under 10 seconds. Your resume is a technical design piece—it must prioritize key achievements with high legibility.',
      subcontent: `Structural Strategy 1. **Header**: Clean, professional layout showing your name, contact phone, location, and GitHub/LinkedIn. No photos unless requested in the specific country. 2. **The Rule of Action**: Use active power verbs! * *Weak*: "Was responsible for helping clean up the database." * *Strong*: "Optimized relational database indices, reducing average application query latency by 35%." 3. **The XYZ Formula (Google Standard)**: > "Accomplished [X], as measured by [Y], by doing [Z]." * *Example*: Unlocked a 15% increase in user study retention (Y) by implementing an interactive quiz leader-board (Z) during my 6-week academic internship (X).`,
      button:'Mark Lesson As Complete'
    },
    lessons2: {
      heading: 'Professional Development',
      subheading: 'Interviews Mastery: The STAR Method',
      duration: '1h 50m',
      content: 'Overcoming Behavioral Interviews When an interviewer asks: *"Tell me about a time you had to resolve a conflict in a group,"* they are parsing your situational leadership and problem-solving framework.',
      subcontent: `The STAR Framework * **S - Situation**: Briefly paint the background context. ("During a group computer science assignment, our database code failed 24 hours before the submission deadline.") * **T - Task**: State the clear goal you needed to achieve. ("We had to trace the bugs and submit a fully compiling web application.") * **A - Action**: Explain the systematic steps *you* took to solve it. ("I organized an emergency debug session, split tasks between CSS and database debugging, and refactored the broken express middleware.") * **R - Result**: Demonstrate quantifiable success or learning outcomes. ("The app compiled successfully, we submitted on time, and achieved an $A$ grade for the project.")`,
      button:'Mark Lesson As Complete'
    },
    lessons3: {
      heading: 'Professional Development ',
      subheading: 'Time Management with Eisenhower Matrix',
      duration: '1h 30m',
      content: "Taking Absolute Command of Your Schedule High performers don't have more hours; they possess sharper frameworks to organize their energy. Let us learn the Eisenhower Matrix.",
      subcontent: `The Four Execution Quadrants 1. **Quadrant 1 (Urgent & Important)**: Crises, deadlines, broken deployments. *Schedule immediate action.* 2. **Quadrant 2 (Not Urgent & Important)**: Critical reading, physical health, skill learning, planning. *Dedicate blocks of calm time. This is where your future growth occurs!* 3. **Quadrant 3 (Urgent & Not Important)**: Constant notifications, standard low-level meetings, someone else's minor requests. *Delegate or defer.* 4. **Quadrant 4 (Not Urgent & Not Important)**: Endless mindless scrolling, cataloging emails you don't need. *Eliminate ruthlessly.*`,
      button:'Mark Lesson As Complete'
    }
  },
];

const filter_cards = document.querySelector('.filter_cards');
const filter_list_li = document.querySelectorAll('.filter_list_li');
const subcoursesSectin = document.querySelector('.subcourses_section');
const coursesParentSection = document.querySelector('.Course_Parent_section');
const subheadinglist = document.querySelector('.subheading_list');
const lessonContent = document.querySelector('.lesson_content');
const courseBtn=document.getElementById('course')
let course = [];

filter_cards.innerHTML = `
<div class='filter_content'>
  ${courses.map((item) => `
    <div class='filter_inner_cards'> 
      <span class='card_span'>${item.span}</span>
      <div class='filter_cards_heading'>
        <h2>${item.heading}</h2>
        <div class='filter_rating'>
          <span>⭐${item.rating}</span>
          <p id='level'>${item.level}</p>
        </div>
      </div>
      <p>${item.paragraph}</p>
      <div class='lession'>
        <span>${item.lessons}</span>
        <span>${item.duration}</span>
      </div>
      <div class='progress'>
        <span>Study Progress ${item.progress}</span>
      </div>
      <button onclick='subsyllabus(${item.id})' data-id="${item.id}">${item.button}</button>
    </div>
  `).join('')}
</div>
`;


function subsyllabus(id) {
  const selectedCourse = syllabus.find(item => item.id === Number(id));

  if (!selectedCourse) {
    alert("Syllabus content for this course is not available yet.");
    return;
  }

  coursesParentSection.classList.add('hide');
  subcoursesSectin.classList.remove('hide');

  course = Object.entries(selectedCourse)
    .filter(([key]) => key.startsWith('lessons'))
    .map(([, lesson]) => lesson);
  

  
  renderSubheadingList();

  if (course.length > 0) {
    showLessonDetails(0);
  }
}

function renderSubheadingList() {
  subheadinglist.innerHTML = course.map((lesson, index) => `
    <button class="subheading-item ${index === 0 ? 'active' : ''}" data-index="${index}">
      <span class="lesson-num">Lesson ${index + 1}</span>
      <span class="subheading-text">${lesson.subheading}</span>
      <span class="duration">⏱ ${lesson.duration}</span>
    </button>
  `).join('');
}

function showLessonDetails(index) {
  const lesson = course[index];
  if (!lesson) return;
  console.log(lesson.heading);
  courseBtn.innerHTML=lesson.heading
  
  lessonContent.innerHTML = `
    <header class='detail-header'>
       <h2>${lesson.subheading}</h2>
       <p class='duration-tag'>⏱ ${lesson.duration}</p>
    </header>
    <div class='content-body'>
       <h3>Overview</h3>
       <p>${lesson.content}</p>
    </div>
    <div class='subcontent-body'>
       <h3>Core Frameworks</h3>
       <div>${lesson.subcontent.replace(/\n/g, '<br>')}</div>
    </div>
    <div class='content-btn'>
      <button>${lesson.button}</button>
    </div>
  `;
}

subheadinglist.addEventListener('click', (e) => {
  const clikedBtn = e.target.closest('.subheading-item');
  if (!clikedBtn) return;

  document.querySelectorAll('.subheading-item').forEach((btn) => btn.classList.remove('active'));
  clikedBtn.classList.add('active');

  const lessonIndex = clikedBtn.getAttribute('data-index');
  showLessonDetails(lessonIndex);
});

filter_list_li.forEach((item) => {
  item.addEventListener('click', () => {
    const clickText = item.textContent.toLowerCase();
    const filter_inner_cards = document.querySelectorAll('.filter_inner_cards');

    filter_inner_cards.forEach((card) => {
      const cardspantext = card.querySelector('.card_span').innerHTML.toLowerCase();
      if (clickText === 'all' || clickText === cardspantext) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});