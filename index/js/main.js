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

    $('[data-code]').mouseenter(function() {    
        $('.district span').html($(this).attr('data-title'));
        $('.district').show();
    });    
    $('[data-code]').mouseleave(function() {
        if (!$('.rf-map').hasClass("open")) {
            $('.district').hide();
        }
    });    
    $('.rf-map').on('click', '[data-code], .district-links div', function(){    
        let id = $(this).attr('data-code');
        if ($('#' + id).text() != '') {
            $('.district').show();
            $('.district span').html($(this).attr('data-title'));
            $('[data-code]').addClass('dropfill'); 
            $(this).addClass('mainfill'); 
            $('.rf-map').addClass('open');
            $('#' + id).fadeIn();
        }
    });
    $('.close-district').click(function() {
        $('.rf-map').removeClass('open');
        $('[data-code]').removeClass('dropfill');
        $('[data-code]').removeClass('mainfill');
        $('.district-text').hide();
        $('.district').hide();
    });    
    $('[data-code]').each(function() {  
        let id = $(this).attr('data-code');
        let title = $(this).attr('data-title');    
        if ($('#' + id).text() != '') {    
            $('.district-links').append('<div data-title="' + title + '" data-code="' + id + '">' + title + '</div>');    
        }
    });
})