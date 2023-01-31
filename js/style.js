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
                        $button.children('a').attr('href', 'https://t.me/AlexeyBatyaDin')
                }
            } 
        })

        // return false;
    })

})