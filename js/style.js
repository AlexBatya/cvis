$(document).ready(()=>{
    const $answer = $('.answerOne');
    const $button = $('button');



    $answer.click(event=>{
        const $enter= $(event.target);
        $answer.attr('class','answerOne');
        $enter.attr('class', 'answerOne answerEnter');

    });

    $button.click(event=>{

        $answer.each((i, $elem) =>{
            if($elem.className == 'answerOne answerEnter'){
                switch($elem.textContent){
                    case 'Поработать над своей реализацией':
                        $button.children('a').attr('href', '../pages/list02_1.html')
                        break;
                    case 'Хочу разобраться чем мне заниматься':
                        $button.children('a').attr('href', '../pages/list03_1.html')
                        break;
                    case 'Хочу понять, в каком направлении двигаться в жизни, чтобы чувствовать удовлетворение и радость':
                        $button.children('a').attr('href', '../pages/list03_2.html')
                        break;

                    case 'Поработать над отношениями с людьми':
                        $button.children('a').attr('href', '../pages/list02_2.html')
                        break;
                    case 'Отношения с партнёром':
                        $button.children('a').attr('href', '../pages/list01_02_03_1.html')
                        break;
                    case '«Почему мне постоянно попадаются абьюзеры»':
                        $button.children('a').attr('href', '../pages/list02_2_03_1_04_1.html')
                        break;
                    case '«Проблемы с новым партнером»':
                        $button.children('a').attr('href', '../pages/list02_2_03_1_04_2.html')
                        break;
                    case '«Не могу найти партнера»':
                        $button.children('a').attr('href', '../pages/list02_2_03_1_04_3.html')
                        break;

                    case 'Отношения в семье':
                        $button.children('a').attr('href', '../pages/list01_02_03_2.html')
                        break;
                    case 'Проблемы с партнером в семье':
                        $button.children('a').attr('href', '../pages/list02_2_03_2_04_1.html')
                        break;
                    case 'Отсутствие взаимопонимания':
                        $button.children('a').attr('href', '../pages/list02_2_03_2_04_2.html')
                        break;
                    case 'Проблемы с детьми. Ребенок не слышит меня':
                        $button.children('a').attr('href', '../pages/list02_2_03_2_04_3.html')
                        break;
                        
                    case 'Поработать над отношениями с людьми':
                        $button.children('a').attr('href', '../pages/list02_1.html')
                        break;
                    case 'Поработать над отношениями с людьми':
                        $button.children('a').attr('href', '../pages/list02_1.html')
                        break;


                    case 'Хочу найти себя. Провести комплексную работу над собой':
                        $button.children('a').attr('href', '../pages/list02_3.html')
                        break;
                    case 'Есть проблемы с обществом':
                        $button.children('a').attr('href', '../pages/list02_3_03_1.html')
                        break;
                    case 'Я  закрытая личность':
                        $button.children('a').attr('href', '../pages/list02_3_03_1_04_1.html')
                        break;
                    case 'Я имею страх самовыражения/ есть непринятие себя':
                        $button.children('a').attr('href', '../pages/list02_3_03_1_04_2.html')
                        break;

                    case 'Уже занимаюсь самопознанием. Нужен наставник для более глубокого изучения себя':
                        $button.children('a').attr('href', '../pages/popup2.html')
                        break;
                    
                }
            } 
        })

        // return false;
    })

})