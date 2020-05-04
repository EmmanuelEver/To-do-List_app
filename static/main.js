$(document).ready(function(){
	dt = new Date()
	$('.time').html(dt.toLocaleString())
	$('.agendas').sortable();
	//$( '.agendas' ).disableSelection();
	




	$('.agenda-form').submit(function(e){
		let text = $(this).find('input').filter('.agenda-name').val()
		let input = '<li class="agenda" rel ="'+text+'">' +text+  '</li>'
		let content = '<div id="'+text+'" class="content '+text+'"> <a href="#task-modal" rel="modal:open" class="add add-task hide">Add Task</a></div>'
		$('.agendas').append(input);
		console.log(content)
		$('#container-box').append(content);
		e.preventDefault()
	
	})

	$('ul').on('click', 'li', function(){
		$('.add-task').removeClass('hide');
		$('.agendas li.active').removeClass('active');
		let toBeRemove = $('.container-box').children().not('.hide').filter('.content');
		toBeRemove.addClass('hide');
		$(this).addClass('active');
		let content ='.'+ $(this).attr('rel');
		let $content = $('.container-box ').find(content);
		$content.removeClass('hide');
	})

	$('.task-form').submit(function(e){
		e.preventDefault()
		let name = $(this).find('input.task-name').val()
		let desc = $(this).find('textarea').val()
		let due  = $(this).find('input.task-due').val().toLocaleString()
		let toBeAppend = '<div class="task"> <h3>' + name + '</h3> <p>' + desc + '</p> <h5> Time: ' + due + '</h5> </div>'  
		let $appendto = $('.container-box').children().not('.hide').filter('.content');
		$($appendto).append(toBeAppend);
		console.log(toBeAppend)
	})


})