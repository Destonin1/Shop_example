	clothes =  [
		{id: 1, name: 'Rebook Trdack Jacket', price: '100$', img: 'img/product.png'},
		{id: 2, name: 'Child Sport Pants', price: '110$', img: 'img/sport_pants_child.jpg'},
		{id: 3, name: 'Shirt', price: '120$', img: 'img/shirt_w.png'},
		{id: 4, name: 'Hoody', price: '130$', img: 'img/hoody_m.jpg'},
		{id: 5, name: 'Hoody', price: '100$', img: 'img/hudi.jpg'},
		{id: 6, name: 'Sport Pants', price: '110$', img: 'img/sport_pants_m1.jpg'},
		{id: 7, name: 'Sport Pants', price: '120$', img: 'img/sport_pants_m.jpg'},
		{id: 8, name: 'T-Shirt', price: '130$', img: 'img/t_shirt.jpg'},
		{id: 9, name: 'T-Shirt', price: '120$', img: 'img/Tshirt.jpg'},
		{id: 10, name: 'Rebook Trdack Jacket', price: '130$', img: 'img/product.png'}
	]


	function renderClothes(i, place, colmd) {
		_clothes = document.createElement('div')
		_clothes.classList.add(colmd)
		_clothes.classList.add('col-sm-6')
		_clothes.classList.add('col-12')
		_clothes.insertAdjacentHTML('beforeEnd','\
			<div class="product_image">\
				<a href="product.html"><img class="product_img" src="' + clothes[i].img + '" alt="' + clothes[i].name + '"></a>\
				<a href="product.html"><p class="product_title">' + clothes[i].name + '</p></a>\
				<span class="product_image_price">' + clothes[i].price + '</span>\
				<div class="product_image_hover">\
					<a href="product.html">\
						<img src="' + clothes[i].img + '" alt="' + clothes[i].name + '">\
						<p class="product_image_title">' + clothes[i].name + '</p>\
					</a>\
					<p class="product_image_udertitle">sizes<span> : </span>s - m - l - xl</p>\
					<div class="product_colors">\
						<span class="red"></span>\
						<span class="black"></span>\
						<span class="blue"></span>\
						<span class="green"></span>\
					</div>\
					<div class="product_icons">\
						<i class="fas fa-globe"></i>\
						<i class="fas fa-cart-plus add_to_cart" data-id="'+ clothes[i].id +'"></i>\
						<i class="far fa-heart"></i>\
					</div>\
				</div>\
			</div>')
			place.appendChild(_clothes);
	}

$(document).ready(function(){

	$(".register_link").click(function(){
		$(".login_wrap").css("display","none");
		$(".register_wrap").css("display","block");
		
	});

	$(".login_link").click(function(){
		$(".register_wrap").css("display","none");
		$(".login_wrap").css("display","block");
		
	});

	$('.search_btn').on('click', function(){
		$('.search_input').focus();
	});

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

  	$('.categories_elem li').click(function(){
  		$(this).toggleClass('categories_elem_active');
  	});

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
			$('#basket_modal_content').html(empty);
		});

	/* Добавление товара в корзину*/
	var confirmContent = document.getElementById('confirm-content');
		let presentProduct = '';
	$('.add_to_cart').on('click', event => {
		event.preventDefault();
		const id = +event.target.dataset.id;
		presentProduct = clothes.find(c => c.id === id);
		if(presentProduct == undefined){
			var confirmBuy = document.getElementById('confirm-buy');
			var error = '<p class="confirm-error">Error. this product does not exist</p>'
			confirmContent.innerHTML = error;
			$('#confirm-buy')[0].showModal();
			transition = setTimeout(function() {
				$('#confirm-buy').addClass('dialog-scale');
			}, 0.5);
			return }
		var product1 = document.createElement('div');
		product1.innerHTML = '<div class="basket_product confirm_product"><div class="basket_img"><img src="' + presentProduct.img + '"></div><div class="basket_text"><p class="basket_name">' + presentProduct.name + '</p> <span class="basket_price">' + presentProduct.price + '</span></div></div>';
		confirmContent.appendChild(product1);
		$('#confirm-buy')[0].showModal();
		transition = setTimeout(function() {
			$('#confirm-buy').addClass('dialog-scale');
		}, 0.5);
	})

	
	$('#buy_btn').on('click', event => {
		if(basket_num <= 0)
			$('#basket_modal_content').html(' ');
		if(presentProduct == undefined){
			$('#confirm-buy')[0].close();
			$('#confirm-buy').removeClass('dialog-scale');
			return }
		var htmlString = document.getElementById('basket_modal_content');
		var product2 = document.createElement('div');
		product2.className = "col-12 col-lg-6";
		product2.innerHTML = '<div class="basket_product"><div class="basket_img"><img src="' + presentProduct.img + '"></div><div class="basket_text"><p class="basket_name">' + presentProduct.name + '</p> <span class="basket_price">' + presentProduct.price + '</span></div><div class="mod-prod-close">&times;</div></div>';
		basket_num++;
		$('.basket_number').html(basket_num);
		htmlString.appendChild(product2);
		$('#confirm-buy')[0].close();
		$('#confirm-buy').removeClass('dialog-scale');
	    clearTimeout(transition);
		confirmContent.innerHTML = '';
		presentProduct = '';
	});

	$('#cancel_btn_buy').on('click', function() {
    	$('#confirm-buy')[0].close();
    	$('#confirm-buy').removeClass('dialog-scale');
	    clearTimeout(transition);
		confirmContent.innerHTML = '';
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
  		$('#basket_modal_content').html(empty);
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

})


