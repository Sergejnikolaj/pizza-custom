				$(document).ready(function(){
					$("#link").click(function(){
						$('#hidden').toggle(300);
						$(this).toggleClass('close');
					});
					$("#lin").click(function(){
						$('#hidde').toggle(300);
						$(this).toggleClass('close');
					});
					
					$('#amero').hover(function() {
						$('#ameropic').show(500);
						}, function() {
							$('#ameropic').hide();
						});
					$('#italo').hover(function() {
						$('#italopic').show(500);
						}, function() {
							$('#italopic').hide();
						});
					$('#hotdog').hover(function() {
						$('#hotdogpic').show(500);
						}, function() {
							$('#hotdogpic').hide();
						});
					$('#cheese').hover(function() {
						$('#cheesepic').show(500);
						}, function() {
							$('#cheesepic').hide();
						});
					
					$("input[type='radio']").click(function(){
						myMax();
						radioWeight()
					});
					
					$("input[data-name='hdog']").click(function(){
						$('.sizenew25').toggleClass('white25').removeClass('sizenew25');
						$('.sizenew35').toggleClass('white35').removeClass('sizenew35');
						$('#idsize35').attr('disabled', 'disabled');
						$('#idsize25').attr('disabled', 'disabled');
						
						$("#idsize30").prop("checked", true);
						myMax();
					});
					$("input[data-name='bortcheese']").click(function(){
						$('.sizenew25').addClass('white25').removeClass('sizenew25');
						$('.sizenew35').addClass('white35').removeClass('sizenew35');
						$('#idsize35').attr('disabled', 'disabled');
						$('#idsize25').attr('disabled', 'disabled');
						
						$("#idsize30").prop("checked", true);
						myMax();
					});
					$("input[data-name='americano']").click(function(){
						$('.white25').addClass('sizenew25').removeClass('white25');
						$('.white35').addClass('sizenew35').removeClass('white35');
						$('#idsize35').removeAttr('disabled');
						$('#idsize25').removeAttr('disabled');
					});
					$("input[data-name='italiano']").click(function(){
						$('.white25').addClass('sizenew25').removeClass('white25');
						$('.white35').addClass('sizenew35').removeClass('white35');
						$('#idsize35').removeAttr('disabled');
						$('#idsize25').removeAttr('disabled');
					});
					
					function radioClick() {
						var summCH = 0;
						var elemsCH = $('input[type="radio"]:checked');
						var elemsTotalCH = elemsCH.length;
						for(var i=0; i<elemsTotalCH; ++i){
							summCH = summCH+Number($(elemsCH[i]).attr('value'))}
						console.log(summCH);
						return summCH;
					}
					function radioWeight() {
						var ummCH = 0;
						var elemsCH = $('input[type="radio"]:checked');
						var elemsTotalCH = elemsCH.length;
						for(var i=0; i<elemsTotalCH; ++i){
							ummCH = ummCH+Number($(elemsCH[i]).attr('data-weight'))}
						console.log('ummCH= ' + ummCH);
						return ummCH;
					}

					$('.makechoice>div').click(function() {
						$('.stuff-holder>div').hide();
						$('#hidde .'+$(this).attr("data-stuff")).show();				
		
						$('.makechoice>div>div').removeClass('active');
						$(this).find("div").addClass('active');
					});
					
					$(".addstuff").click(function(){					
						var i = Number($(this).parent().find('.counter').text());
						$(this).parent().attr('data-quantity', ++i);
						$(this).parent().find('.counter').text(i);
						if(i > 1) {
							$(this).parent().find('.counter').css('display', 'block');
						}
						if($(this).parents('#hidden').length===0){
							$(this).parent().appendTo('#hidden').css('display', 'block');
						}
						myMax();
						addWeight();
					});
					
					function addStuff() {
						var summ = 0;
						var elems = $('#hidden').children();
						var elemsTotal = elems.length;
						for(var j=1; j<elemsTotal; ++j){
							summ = summ + Number($(elems[j]).attr('value'))*Number($(elems[j]).attr('data-quantity'));
						}
						console.log(summ);
						return summ;
					}
					
					function addWeight() {
						var umm = 0;
						var elems = $('#hidden').children();
						var elemsTotal = elems.length;
						for(var j=1; j<elemsTotal; ++j){
							umm = umm + Number($(elems[j]).attr('data-weight'))*Number($(elems[j]).attr('data-quantity'));
						}
						console.log('umm= ' + umm);
						return umm;
					}
					
					function myMax() {
						var summMAX = addStuff() + radioClick();
						var ummMAX = addWeight() + radioWeight();
						console.log('summMAX ' +summMAX);
						console.log('ummMAX ' +ummMAX);
						$("#price").text(summMAX);
						$("#weight").text(ummMAX);
					}
					
					$(".removestuff").click(function(){
						if($(this).parents('#hidden').length===0){
							return;
						}
						var i = $(this).parent().find('.counter').text();
						$(this).parent().attr('data-quantity', --i);
						$(this).parent().find('.counter').text(i);
						if(i===0) {
							$(this).parent().appendTo('#hidde');
							$(this).parent().find('.counter').text(0).css('display', 'none');
						}
						var numw = Number($("#price").text());
						var numk = Number($("#weight").text());
						var numz = Number($(this).parent().attr('value'));
						var numy = Number($(this).parent().attr('data-weight'));
						$("#price").text(numw - numz);
						$("#weight").text(numk - numy);
						myMax();
						addWeight();
					});
					
					$('#myselect').change(function() {
						if ($(this).val() !== '1') {
							$(this).parent().addClass('mandatory2').removeClass('mandatory');
						} else {
							$(this).parent().addClass('mandatory').removeClass('mandatory2');
						}
					});

				});
					

				
				
				
					
				
				
				
				
				
