$(function(){
    console.log("скрипт подключен111")

    // код для смены текста в разделе преимущества
    $(document).ready(function(){

        // По умолчанию устанавливаем стиль активной кнопки и показываем первый блок
        $(".specifications__card-btn[data-target='block-1']").addClass("specifications__card-img--active");
        $("#block-1").show();

        // Обработчик клика по кнопкам
        $(".specifications__card-btn").click(function(){
            let target = $(this).data("target");
            
            // Скрываем все блоки
            $(".specifications__info-items").hide();
            
            // Показываем выбранный блок
            $("#" + target).show();
            
            // Убираем стиль активной кнопки у всех кнопок и добавляем его только к текущей
            $(".specifications__card-btn").removeClass("specifications__card-img--active");
            $(this).addClass("specifications__card-img--active");
        });
    });

    $('.device__inner-slider').slick({
        arrows: false, // отключаем дефолтные стрелки
        dots: false, //Точки под слайдером
        appenDots: $('.testimonials__dots')
    })
    $('.device__prev').on('click', function (e) {
        e.preventDefault()
        $('.device__inner-slider').slick('slickPrev')
    })
    $('.device__next').on('click', function (e) {
        e.preventDefault()
        $('.device__inner-slider').slick('slickNext')
    });
})