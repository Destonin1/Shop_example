$(document).ready(function(){

	$('.fa-bars').click(function(){
		$('.menu_fixed').toggleClass('menu_fixed_active');
	});

	/* COUNTER */
	var num = 0;

	$("#plus").click(function() {
    	num++;
    $("#counter").html(num);
  	});

	$("#minus").click(function() {
		if( num > 0 ){
			num--;
    		$("#counter").html(num);
		} else {
			$("#counter").html(num);
		}    	
  	});

  	/* Click on li */
  	$('.categories_elem li').click(function(){
  		$(this).toggleClass('categories_elem_active');
  	});

  	/*Click on size */
  	$('.size_btn').click(function(){
  		$('.size_btn').removeClass('size_btn_active');
  		$(this).toggleClass('size_btn_active');
  	});

  	$(".product_info_image_click").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(400); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(400);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 400);
		});
	});

	/*MODAL*/

	var basket_num = 0;
	var	empty = '<div class="col-12 empty_text"><p>It is empty</p></div>';


	$('.basket_btn').click(function(){
		if(basket_num <= 0)
			$('#modal_content').html(empty);
		});

	/* Добавление товара в корзину*/
	$('.add_to_cart').click(function(){
		$('#confirm-buy')[0].showModal();
		transition = setTimeout(function() {
	        $('#confirm-buy').addClass('dialog-scale');
	    }, 0.5);
	});

	$('#buy_btn').click(function(){
		if(basket_num <= 0)
			$('#modal_content').html(' ');
		var htmlString = document.getElementById('modal_content');
		var product1 = document.createElement('div');
		product1.className = "col-12 col-lg-6";
		product1.innerHTML = '<div class="basket_product"><div class="basket_img"><img src="img/product.png"></div><div class="basket_text"><p class="basket_name">Reebok Track Jacket</p> <span class="basket_price">100$</span></div><div class="mod-prod-close">&times;</div></div>';
		basket_num++;
		$('.basket_number').html(basket_num);
		htmlString.appendChild(product1);
		$('#confirm-buy')[0].close();
		$('#confirm-buy').removeClass('dialog-scale');
	    clearTimeout(transition);
	});

	$('#cancel_btn_buy').on('click', function() {
    	$('#confirm-buy')[0].close();
    	$('#confirm-buy').removeClass('dialog-scale');
	    clearTimeout(transition);
  	});

	/*Очистка корзины*/
	var transition

  	$('.modal_clear').on('click', function() {
    	$('#confirm-delete')[0].showModal();
    	transition = setTimeout(function() {
	        $('#confirm-delete').addClass('dialog-scale');
	    }, 0.5);
  	});

  	$('#delete_btn').on('click', function() {
  		$('#modal_content').html(empty);
		basket_num = 0;
		$('.basket_number').html(basket_num);
    	$('#confirm-delete')[0].close();
    	$('#confirm-delete').removeClass('dialog-scale');
	    clearTimeout(transition);
  	});

  	$('#cancel_btn_delete').on('click', function() {
    	$('#confirm-delete')[0].close();
    	$('#confirm-delete').removeClass('dialog-scale');
	    clearTimeout(transition);
  	});
});

