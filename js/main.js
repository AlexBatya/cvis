const body = document.querySelector('body');
const header = document.querySelector('header');

const mainQuestions = [
    'Выберите пункт над которым вы хотите поработать:',
    'Поработать над своей реализацией',
    'рекомендация от психолога:',
    'рекомендация от психолога:',

    'Поработать над отношениями с людьми',
    'Отношения с партнёром',
    'Отношения в семье',

    'Хочу найти себя. Провести комплексную работу над собой',
    'выберите пункт, над которым хотите поработать',

];

const questions = [
   ` 
    <div class = 'answerOne'>Поработать над своей реализацией</div>
    <div class = 'answerOne'>Поработать над отношениями с людьми</div>
    <div class = 'answerOne'>Хочу найти себя. Провести комплексную работу над собой</div>
    `,
    `
    <div class = 'answerOne'>Хочу разобраться чем мне заниматься</div>
    <div class = 'answerOne'>Хочу понять, в каком направлении двигаться в жизни, чтобы чувствовать удовлетворение и радость</div>
    `,
    `
    <div class = 'answerTwe'>«Для того, чтобы понять чем заниматься, нужно <span> изучить себя изнутри</span>. 
        Делается это с помощью глубокого <span> самоанализа</span>. 
        Чем я помогаю на своих сессиях? Я создаю особое поле доверия, в котором происходит <span> раскрытие внутреннего потенциала</span>.Таким образом человек с моей помощью наблюдает за собой в другом срезе. <span> Вскрываются убеждения</span>, которые ограничивают человека.
        Открываются двери - дары, которые усиливают человека. Таким образом выстраивается внутренния карта, по которой аккуратно человек 
        раскрывает свой потенциал, уже отслеживает свои ограничения осознанно».
    </div>
    `,
    `
    <div class = 'answerTwe'>«Мир на поверхности порой бывает очень томным. От этого некоторые люди предпочитаю жить с закрытыми глазами. Если и вам так удобнее <span> почувствовать любовь духа</span>,
        то закройте глаза и проследите, каие побочные чувства вызывает у вас окружающий мир. И что, он - Мир чувствует находясь рядом с вами.
        Ваш мир, это все что вас окружает. Просто проследите, как живется вашим друзьям, родным, животным, 
        всем, кто переодически саприкосается с вами. Они испытвают радость и удовлетворение? 
        Если вы найдете тех, кто счастлив с вами, спросите их. За что они вас ценят. Это поможет вам определить ваши внутреннии дары. Чем вы наградили себя, перед тем как оказаться тут. 
        Используйте эти скрытые дары в глубине вас, чтобы взглянуть мир через призму радости и удовлетворения».
    </div>
    `,

    `
    <div class = 'answerOne'>Отношения с партнёром</div>
    <div class = 'answerOne'>Отношения в семье</div>
    `,
    `

    <div class = 'answerOne'>«Почему мне постоянно попадаются абьюзеры»</div>
    <div class = 'answerOne'>«Проблемы с новым партнером»</div>
    <div class = 'answerOne'>«Не могу найти партнера»</div>
    `,
    `

    <div class = 'answerOne'>Проблемы с партнером в семье</div>
    <div class = 'answerOne'>Отсутствие взаимопонимания</div>
    <div class = 'answerOne'>Проблемы с детьми. Ребенок не слышит меня</div>
    `,

    `
    <div class = 'answerTwe'>«Любовь - это побочный <span> эффект частотной связи</span>. Она ощущается в первую очередь запоминанием образа и проявлением к нему. Если человек воспринимает частоту образа на прежнем уровне даже при встрече нового партнера, то чувство которое казалось восхитительным, начинает преобразовываться, корректироваться как курс корабля.
        Поясню! Если вы запомнили всю боль, которую причинили себе на этапе взросления, то эта боль воспроизводится постоянно до тех пор, пока вы не замените все негативные проявления в себе на положительные. Далее <span> подобное притягивает подобное</span>. Если даже вы сама или сам не Абьюзер, но храните в своей памяти воспоминания и переодически примеряете на себя роль жертвы, как новую одежду, то в таком случае вы создаете лабиринты иллюзии, где вы всегда или отчасти жертва отношений».
    </div>
    `,
    `
    <div class = 'answerTwe'>«Зачастую сложные отношения являются <span> побочным результатом</span> той внутренней работы, которую проделал каждый из партнеров до встречи друг с другом. Та работа включала в себя множество пройденных образов, программ, эмоций и чувств. И когда вы соединяетесь с новым партнером, вы как бы даете согласие на то, что готовы с ним <span> разделять его внутреннйи мир</span> во внешней среде. То есть кроме внешней реальности, которую вы пытаетесь выстроить совместно,
        <span> большая работа состоит на внутреннем плане</span>. Для этого люди имеют возможность использовать свой интеллект, чтобы договориться друг с другом. Порой может показаться, что этот скрытый мир не заслуживает столь пристального внимания. А ведь все происходит изнутри наружу. 
        Если вы решели обновить себя и увидеть альтернативные решения своей ситуации, вам придется коснуться своего внутреннего мира и уделять ему время».
    </div> 
    `,
    `
    <div class = 'answerTwe'>«Это один из самых сложных вопросов. Почему я не могу найти партнера. Давайте взгляем на него в срезе <span> внутреннего мира человека</span> и его настроки.
        Когда человек решает соединиться с другим человеком, у него возникает: <br>
        1. Множесто вопросов <br>
        2. Множество ограничений <br>
        3. И запускается природный анализ <br>
        Вопросы рождаются изнутри. На основе того, что человек знает. Он начинает сравнивать свою ситуацию и других. 
        Ограничения также всплывают одно за другим на основе <span> внутренних переживаний</span>. Анализ дан нам природой. На основе всего выше перечисленного, можно понять почему человек не может найти партнера. Зачастую человеку нужно принять партнера того, которого он заслуживвает. И далее <span> совершенствоваться совместно</span>. Когда человек говорит, - я не могу найти партнера. Это также означает и другое. Что ему нет нужды изучать себя
        и принимать свои дары и недостатки. Что он сильно соредоточен на внешнем мире и упускает из виду тот факт, что партнеры для него уже существуют.
        Но ему они не нравятся. И если же это длится достаточно долго. То можно сделать вывод, что человек в первую очередь не нравится себе. 
        Есть и такие пары, которые притягиваются по такому критерию. И проходят совершенствие вместе». 
    </div>
    `,
    `
    <div class = 'answerTwe'>«Современные проблемы с партнером в семье складываются из-за недосказанности. Я провел много экспериментов в своей жизни, когда я наблюдал человека и видел что он все понимает, но не имеет достаточно стремления сказать то, что он хочет. Таким образом из-за недосказанности возникает перегруз системы человека.
                                Его энергия тратится на круговорот этих недосказанностей. Человек пытается загладить эти внутрении конфликты отмалчиваясь. И это не совсем плохо, если не одно НО! 
                                Во внешнем мире человек продолжает проявляться исходя из старого шаблона. Такое поведение в семье зачастую приводит к конфликтам, которые во внутреннем мире человека имеют очень длительную цикличность. Из-за этого самооценка человека падает, а его устремления не имеют достаточной поддержки из внутренних зервов. И человеку проще как бы сбавить обороты жизни,
                                то есть <span> сдаться и подчиниться</span>. Быть в слабости это не плохо. Точно также как охладиться от жары или согреться от холода. Если вы заметите, то здесь человек предпочитает соблюдать банас температуры.
                                Потому-что когда у тела не свойственная ему температура, это сразу становится заметно. Попробуйте точно также наблюдать за проявлением своей силы. Вам хочется ли быть сабой? Вы знаете ответ на вопрос, как быть собой в семье? Что происходит с химией вашего тела если оно систематически испытывыает эмоциональные перегрузы и зажимы? Попробуйте рассмотреть такие вопросы также глубоко, как и повышенную температуру тела.
                                И когда вы увидите из-за чего это происходит, начните искать пути которые помогут вам постепенно снижать перегруз». 
                                </div>
    `,
    `
    <div class = 'answerTwe'>«Чтобы понимать окружающих и себя необходимо научиться <span> распознавать реальность</span>. Если вы начинаете постепенно распознавать от чего ваша система испытывает перегруз, вы начнете смотреть внутрь этой системы.
                                Давайте посмотрим внутрь системы эмоций и чувств. Это сильные инструменты человека с помощью которых можно повлиять на окружающих и себя. Вопрос, как это делать не принося вреда себе и другим? Когда вы создаете позитивное эмоциональное поле и держите его какое-то время, и вдруг происходит ситуация, которая меняет вибрацию вашего поля, то ваша реакция на эти изменения - это и есть <span> ключ к будущему взаимониманию</span>. <br>
                                Если ваша реакция побуждает вас сместить свою вибрацию по частоте в сторону негативных мыслей и проявленностей, то в таком случае вы поддерживаете партнера и соглашаетесь устроить обоюдный пожар из пламени эмоций и чувств. Здесь нужно быть <span> честным по отношению к себе</span>. Чтобы избежать конфликта необходимо уделять время практике управлению эмоциональным и чувственным интеллектом. <br>
                                Это тоже самое, если бы вы захотели научиться пользоваться телефоном 30 лет назад. Вам бы пришлось осваивать внутреннюю настройку телефона. Сейчас большинство людей знают телефон лучше чем самих себя. 
                                Чтобы осознанно управлять настройкой вашего внутреннего интеллекта, вам следует отследить, что вызывает в вас <span> непонимание и извлечь</span> из этого непонимания информацию. Но, как я могу извлечь информацию из непонимания? Путем распознавания реальности. <br>
                                Чтобы распознавать реальность необходимо создавать <span> стремление к распознаванию</span> того, что пока-что скрыто от вас. Например, пожно задавать себе такиен вопросы и давать на них самому себе честные ответы: Почему я испытываю негативные эмоции, когда меня не понимают?
                                Потому-что мне хочется чтобы меня поняли. А для того чтодбы меня поняли, мне также нужно понять и другого. То есть мне нужно понять ситуацию целиком. Вот это честный ответ. 
                                Если происходит недопонимание, то причиной этому являюсь я, а не мой партнер. Он является следствием, выражением моего потенциала или тем игроком, который решил со мной разыграть партию. <br>
                                Но если он начал первый, спросите вы? Для этого нужно распознать. По какой причине это следствие произошло со мной. 
                                Может быть причину я создал до этого момента? И сейчас наблюдаю следствие. В любом из случаев распознавание реальности помогает снизить нагрузку. А затем находятся ответы». 
                                </div>
    `,
    `
    <div class = 'answerTwe'>«Когда человек ощущает баланс воспитания и свободы выражения другого человека, 
                                такой союз крепчает не от того, что нужно выжить или добиться цели. Такой союз имеет преимущество - это взаимопонимание и уважение. <br>
                                Ребенка можно любить, но не слышать. Ребенка можно уважать но недооценивать. Также работает обратный механизм. Ребенок может вас слушать, не не любить.
                                Ребенок может достигать для вас цели, но не уважать вас. В первую очередь необходимо определиться, как воспринимать ребенка. 
                                Я восприниаю детей, как равных себе в потенциале. И не равных себе в данный момент. Поэтому всегда проявляю осознанный контроль по отношению к себе в первую очередь, затем по отношению к ребенку если 
                                этого требует ситуация. То есть, если ребенок теряет осознанный контроль, то мое проявление служит для него как бы ориентиром. Видимым результатом уважения и любви к себе и к нему. <br>
                                Когда <span> потенциал ребенка</span> раскроется, он может быть больше, глубже. 
                                До тех пор, пока потенциал не раскрылся, я не стремлюсь его воспитывать. Я нахожусь рядом. Я проявляю сбалансированные качества. И таким образом это позволяет мне не перегружать свою систему и систему ребенка. Если человек начинает терять осознанный контроль над собой и пытается воспитывать ребенка. Это говорит об искажении познания себя, воспитания и взаимоотношений. Если человек проявляет осознанный контроль к себе и ребенку. Это означает, что такой человек следит за тем, чтобы никакая система
                                не вышла из строя. Ни он сам. Ни ребенок».
                                </div>
    `,
    
    `
    <div class = 'answerOne'>Есть проблемы с обществом</div>
    <div class = 'answerOne'>Уже занимаюсь самопознанием. Нужен наставник для более глубокого изучения себя</div>
    `,
    `
    <div class = 'answerOne'>Я  закрытая личность</div>
    <div class = 'answerOne'>Я имею страх самовыражения/ есть непринятие себя</div>
    `,
    `
    <div class = 'answerTwe'>«Если вы закрытая личность и это вас отягощает, то здесь необходимо понять, что внешний мир - есть <span> проявление ваших внутренних качеств</span> и настроек. Если человек впервые сталкивается с тем, чтобы наблюдать за внешним миром и параллельно сапоставлять
                                его со своим внутренним, то скорее всего он будет удивлен его скоростью и многомерностью. Во внешнем мире, в материальном, твердом измерении нам свойственно видеть свое проявление в масштабе меньшем, чем мы внутри и большем чем наше тело.  <br>
                                По этой причине человек может пугаться и <span> блуждать в своих отражениях</span>. Как в комнате кривых зеркал. Если человек испытывает страх или непринятие внешней реальности, видимой для него и пытается спастись во внутренней <span> колыбели спокойствия</span>, то это лишь потому, что он не позволяет видеть большую часть себя и предпочитает оставаться в маленькой видимой части себя. Исследование внешнего мира не всегда может быть приятным, посколько человек имеет хорошею возможность оттачить свое поведение анализируя, что происходит в мире на основе его мыслей, намерений и действий. В том числе и встретить свои страхи».
                                </div>
    `,
    `
    <div class = 'answerTwe'>«Страх самовыражения означает <span> недоверие себе</span>. Доверие формируется поэтапно исходя из поступков и наблюдения за собой. Для того, чтобы наблюдать за собой было эффективнее, мы имеем возможность видеть свои мыслеформы в твердом мире. <br>
                                Когда мы сталкиваемся с тем, что можем ощутить, мы подключаем <span> эмоциональный интеллект</span> и чувста. Распознавая твердый мир на основе наших внутренних инструментов, мы делаем выводы. Далее мы принимаем решения. И вот если человек принимает решение, 
                                "не принимать себя", то здесь следует задать вопрос, по какой причине. Там будет достаточно ответов. И все эти ответы будут содержать внутри себя множество разных шаблонов в изскажении. Шаблон быть собой. Шаблон стеснения. Шаблон воспитания и т.д. <br>
                                Распознав достаточно шаблонов, человек способен наблюдать себя в других качествах. Для того, чтобы эти новые модели поведения зафиксировались и химия тела не реагировала на старые иллюзии, телу нужно удостовериться и пройти лабиринты иллюзий снова. На этот раз завершив их через
                                <span> осознанное восприятие</span> себя в новом качестве».
                                </div>
    `,

    `
    
    `
]

const popup1 = () =>`
<main>
        <div class="main__body">
            <div class="main__body__container containerPopup1">
                <section class = 'main__question3'>
                    <div class="popup__question">
                        <h2>Как попасть на консультацию?</h2>
                    </div>
                    <section class="record">
                        <h2>Запишитесь на <span> первую бесплатную консультацию</span>, нажав на кнопку. </h2>
                        <div class="arrow">
                            <img src="https://static.tildacdn.com/tild3137-6138-4433-b535-323531363433/arrow2.svg" alt="">
                        </div>
                        <a class= 'popupLink' href="#popup:form" style = 'color: #856120'>
                            записаться на <br> консультацию
                        </a>
                        <small>
                            Стоимость сессий индивидуальна. Количество сессий индивидуально.
                        </small>
                    </section>

                </section>
            </div>
        </div>
    </main>
`

const popup2 = ()=>`
<main>
        <div class="main__body">
            <div class="main__body__container containerPop">
                <section class = 'main__question3'>
                    <section class="question">
                        <h1>рекомендация от психолога:</h1>
                        <div class="questionNumber">03</div>
                    </section>

                    <section class="consult">
                        <h3>«Если вы имете намерение изучать себя дальше и вам нужен наставник, вы можете записаться на первую консультацию 
                            и более подробно обсудить свой запрос с наставником.</h3>
                        <h2>Запишитесь на <span> первую бесплатную консультацию</span>, нажав на кнопку. 
                        </h2>
                        <div class="arrow">
                            <img src="https://static.tildacdn.com/tild3137-6138-4433-b535-323531363433/arrow2.svg" alt="">
                        </div>
                        <a class= 'linkpopap2' href="#popup:form" style = 'color: #856120'>
                            записаться на <br> консультацию
                        </a>
                        <small>
                            Стоимость сессий индивидуальна. Количество сессий индивидуально.
                        </small>
                    </section>

                    </section>
            </div>
        </div>
    </main>
`
const answerPsix = (mainQuestion, question, number) => `
<main>
    <div class="main__body">
        <div class="main__body__container container">
            <section class = 'main__question3'>
                <section class="question">
                    <h1>${mainQuestion}</h1>
                    <div class="questionNumber">${number}</div>
                </section>
                <section class="answers">
                    <div class="answer3">
                        ${question}
                </section>
                <button class = 'btmPop'>
                <a id = 'popup' class = 'buttonLink' style = 'color: #4B4B4B;'>
                    <p class="text">Спасибо</p>
                    <img src="https://static.tildacdn.com/tild6230-3135-4163-a165-303366623865/Arrow.svg" class="arrow"></img>
                </a> 
                </button>
            </section>
        </div>
    </div>
</main>
`

const contant = (mainQuestion, question, number) =>`
    <main>
        <div class="main__body">
            <div class="main__body__container container">
                <section class = 'main__question'>
                    <section class="question">
                        <h1>${mainQuestion}</h1>
                        <div class="questionNumber">${number}</div>
                    </section>
                    <section class="answers">
                        <div class="answer">
                            ${question}
                        </div>
                    </section>
                    <button>
                        <a class = 'buttonLink' style = 'color: #4B4B4B;'>
                            <p class="text">далее</p>
                            <img src="https://static.tildacdn.com/tild6230-3135-4163-a165-303366623865/Arrow.svg" class="arrow"></img>
                        </a > 
                    </button>
                </section>
                
            </div>
        </div>
    </main>
`

function clickOnButton(answer, button){
    answer.addEventListener('click', (event)=>{
        const enter = event.target;
        enter.className = 'answerOne answerEnter'
    })
}


const big = (swift) => {
    const main = document.querySelector('main');
    const answers = document.querySelectorAll('.answerOne');
    const button = document.querySelector('button');
    const a = document.querySelector('a');
    const restart = document.querySelector('.restart');

    answers.forEach(elem =>{

        elem.addEventListener('click', event =>{
            const enter = event.target;
            console.log('click')

            for(let i = 0; i < answers.length; i++){  //зануляю все не выбранные ответы
                answers[i].className = 'answerOne'
            }

            enter.className = 'answerOne answerEnter'   // меняю класс выбранному объекту

            button.addEventListener('click', ()=>{
                if(enter.className == 'answerOne answerEnter'){
                    swift(enter, main);
                }
                else if(button.className == 'btmPop'){
                    swift(enter, main, button);
                }

            })


        })
    })
}
header.insertAdjacentHTML('afterend',contant(mainQuestions[0],questions[0],'01'));

const checkArray = ()=>{  //проверка на массив
    if(document.querySelectorAll('main').length > 1) {
        for(let i = 0; i < document.querySelectorAll('main').length; i++){
            document.querySelectorAll('main')[i+1].remove();
        }
    }
}


big((enter, main)=>{ 
        switch(enter.textContent){
            case 'Поработать над своей реализацией': 
                main.remove();
                header.insertAdjacentHTML('afterend',contant(mainQuestions[1],questions[1],'02'))
                checkArray()
                big((enter, main)=>{

                    switch(enter.textContent){
                        case 'Хочу разобраться чем мне заниматься': 
                            main.remove();
                            header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[2],'03'))
                            checkArray()

                            document.querySelector('button').addEventListener('click',()=>{
                                document.querySelector('main').remove();
                                header.insertAdjacentHTML('afterend',popup1())
                            })
                            big((enter, main)=>{
                                switch(enter.textContent){
                                    case '': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[2],'03'))
                                        checkArray()
                                        big((enter, main)=>{
                                            
                                        })
                                        break;
                                }            
                            })
                            break;
                        case 'Хочу понять, в каком направлении двигаться в жизни, чтобы чувствовать удовлетворение и радость': 
                            main.remove();
                            header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[3],questions[3],'03'))
                            checkArray()

                            document.querySelector('button').addEventListener('click',()=>{
                                document.querySelector('main').remove();
                                header.insertAdjacentHTML('afterend',popup1())
                            })
                            big((enter, main)=>{
                                switch(enter.textContent){
                                    case '': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[2],'03'))
                                        checkArray()
                                        big((enter, main)=>{
                                            
                                        })
                                        break;
                                } 
                            })
                            break;
                    }            
                })

                break;
        } 
    }
)

big((enter, main)=>{ 
        switch(enter.textContent){
            case 'Поработать над отношениями с людьми': 
                main.remove();
                header.insertAdjacentHTML('afterend',contant(mainQuestions[4],questions[4],'02'))
                checkArray()
                big((enter, main)=>{

                    switch(enter.textContent){
                        case 'Отношения с партнёром': 
                            main.remove();
                            header.insertAdjacentHTML('afterend',contant(mainQuestions[5],questions[5],'03'))
                            checkArray()
                            big((enter, main)=>{
                                switch(enter.textContent){
                                    case '«Почему мне постоянно попадаются абьюзеры»': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[7],'04'))
                                        checkArray()

                                        document.querySelector('button').addEventListener('click',()=>{
                                            document.querySelector('main').remove();
                                            header.insertAdjacentHTML('afterend',popup1())
                                        })
                                        big((enter, main)=>{
                                            
                                        })
                                        break;
                                    case '«Проблемы с новым партнером»': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[8],'04'))
                                        checkArray()

                                        document.querySelector('button').addEventListener('click',()=>{
                                            document.querySelector('main').remove();
                                            header.insertAdjacentHTML('afterend',popup1())
                                        })
                                        big((enter, main)=>{

                                            
                                        })
                                        break;
                                    case '«Не могу найти партнера»': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[9],'04'))
                                        checkArray()
                                        document.querySelector('button').addEventListener('click',()=>{
                                            document.querySelector('main').remove();
                                            header.insertAdjacentHTML('afterend',popup1())
                                        })
                                        big((enter, main)=>{

                                            
                                        })
                                        break;
                                }            
                            })
                            break;
                        case 'Отношения в семье': 
                            main.remove();
                            header.insertAdjacentHTML('afterend',contant(mainQuestions[6],questions[6],'03'))
                            checkArray()
                            big((enter, main)=>{
                                switch(enter.textContent){
                                    case 'Проблемы с партнером в семье': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[10],'04'))
                                        checkArray()
                                        document.querySelector('button').addEventListener('click',()=>{
                                            document.querySelector('main').remove();
                                            header.insertAdjacentHTML('afterend',popup1())
                                        })
                                        big((enter, main)=>{
                                            
                                            
                                        })
                                        break;
                                    case 'Отсутствие взаимопонимания': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[11],'04'))
                                        checkArray()
                                        document.querySelector('button').addEventListener('click',()=>{
                                            document.querySelector('main').remove();
                                            header.insertAdjacentHTML('afterend',popup1())
                                        })
                                        big((enter, main)=>{
                                            
                                        
                                        })
                                        break;
                                    case 'Проблемы с детьми. Ребенок не слышит меня': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[12],'04'))
                                        checkArray()
                                        document.querySelector('button').addEventListener('click',()=>{
                                            document.querySelector('main').remove();
                                            header.insertAdjacentHTML('afterend',popup1())
                                        })
                                        big((enter, main)=>{
                                            
                                        
                                        })
                                        break;
                                } 
                            })
                            break;
                    }            
                })

                break;
        } 
    }
)
big((enter, main)=>{ 
        switch(enter.textContent){
            case 'Хочу найти себя. Провести комплексную работу над собой': 
                main.remove();
                header.insertAdjacentHTML('afterend',contant(mainQuestions[7],questions[13],'02'))
                checkArray()
                big((enter, main)=>{

                    switch(enter.textContent){
                        case 'Есть проблемы с обществом': 
                            main.remove();
                            header.insertAdjacentHTML('afterend',contant(mainQuestions[8],questions[14],'03'))
                            checkArray()
                            big((enter, main)=>{
                                switch(enter.textContent){
                                    case 'Я  закрытая личность': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[15],'04'))
                                        checkArray()
                                        document.querySelector('button').addEventListener('click',()=>{
                                            document.querySelector('main').remove();
                                            header.insertAdjacentHTML('afterend',popup1())
                                        })
                                        big((enter, main)=>{
                                            
                                        })
                                        break;
                                    case 'Я имею страх самовыражения/ есть непринятие себя': 
                                        main.remove();
                                        header.insertAdjacentHTML('afterend',answerPsix(mainQuestions[2],questions[16],'04'))
                                        checkArray()
                                        document.querySelector('button').addEventListener('click',()=>{
                                            document.querySelector('main').remove();
                                            header.insertAdjacentHTML('afterend',popup1())
                                        })
                                        big((enter, main, button)=>{
                                            
                                        })
                                        break;
                                }
                            })
                            break;
                        case 'Уже занимаюсь самопознанием. Нужен наставник для более глубокого изучения себя': 
                            main.remove();
                            header.insertAdjacentHTML('afterend',popup2())
                            checkArray()
                            big((enter, main)=>{
                                
                            })
                            break;
                    }            
                })

                break;
        } 
    }
)