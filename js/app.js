var main = function(){
    
    
    $('.post-button').click(function(){
        
        var post = $('.status-box').val();
        
        $('<li>').text(post).prependTo('.posts');
        
        $('.status-box').val('');
        
        $('.counter').text('140');
        
        $('.post-button').addClass('disabled');
        
    });
    
    
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length
        var charactersLeft = 140 - postLength
        
        $('.counter').text(charactersLeft)
        
        if (charactersLeft < 0)  {
            $('.post-button').addClass('disabled');
        }
        
        else if (charactersLeft === 140) {
            $('.post-button').addClass('disabled');
        }        

        else $('.post-button').removeClass('disabled');
        

        
    });
    
    $('.post-button').addClass('disabled');
    
    
};

$(document).ready(main);