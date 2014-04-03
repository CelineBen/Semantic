$(document).ready(function(){	
	$.fn.sidebar.settings.onShow = function(){$('.fixed.right').css('right', '40px')};
	$.fn.sidebar.settings.onHide = function(){$('.fixed.right').css('right', '-20px')};
	
	var addCategoryModal = $('#add-category-modal');
	var addBookmarkModal = $('#add-bookmark-modal');
	
	$('.launch').click(function(){
		$('.ui.sidebar').sidebar('toggle');
	});
	
	$('#button-add-category').click(function(){
		addCategoryModal.modal('show');
	});
	
	$('#button-add-bookmark').click(function(){
		addBookmarkModal.modal('show');
	});
	
	$('.ui.dropdown').dropdown({
		onChange: function(value, text){			
			if(value == 5){
				console.log($('#category-name'));
				$('#category-name').show();
			}else{
				$('#category-name').hide();
			}
		}
	});
	
	var categoryValidationRules = {
		categoryName: {
		  identifier  : 'category-name',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter a category name'
			},
			{
			  type   : 'length[2]',
			  prompt : 'Enter at least 2 characters'
			}
		  ]
		}
	};
	
	var bookmarkValidationRules = {
		bookmarkUrl: {
		  identifier  : 'bookmark-url',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter a url'
			},
			{
			  type   : 'url',
			  prompt : 'The url is not valid'
			}
		  ]
		},
		bookmarkName: {
		  identifier  : 'bookmark-name',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter a name'
			},
			{
			  type   : 'length[2]',
			  prompt : 'The name must be at least 2 characters'
			}
		  ]
		},
		categoryName: {
		  identifier  : 'category-list',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter a category'
			}
		  ]
		}
	};
		
	$('.ui.category.form').form(categoryValidationRules, {
		inline : true,
    	on     : 'blur',
    	transition: 'fade down'
  	});
  	
  	$('.ui.bookmark.form').form(bookmarkValidationRules, {
		inline : true,
    	on     : 'blur',
    	transition: 'fade down'
  	});
});	
					
		


