$(document).ready(function(){

  $('input').focus(function(){
    $(this).css('background-color','lightblue');
  });
   $('input').focusout(function(){
      $(this).css('background-color','white');
    });

  $('#textarea').focus(function(){
    $(this).css('background-color','lightblue');
  });
   $('#textarea').focusout(function(){
      $(this).css('background-color','white');
    });

  $('button').click(function () {

    valid = true;
    if($('#nom').val() == ""){
        $('#nom').css('background-color', '#8E1428')
        $('#nom').attr('placeholder','Veuillez entrez votre Nom')
        valid = false
    }
    else if($('#prenom').val() == ""){
        $('#prenom').css('background-color', '#8E1428')
        $('#prenom').attr('placeholder','Veuillez entrez votre Prenom',)
        valid = false
    }
    else if($('#tel').val() == ""){
        $('#tel').css('background-color', '#8E1428')
        $('#tel').attr('placeholder','Veuillez entrez votre tel')
        valid = false
    }else if (!$('#tel').val().match(/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/)) {
       $('#tel').next('#validetel').fadeIn().text("Entrez un numéro valide ! ");
        valid = false
    }
    else if($('#email').val() == ""){
        $('#email').css('background-color', '#8E1428')
        $('#email').attr('placeholder','Veuillez entrez votre Email')
        valid = false
    }
    else if (!$('#email').val().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
       $('#email').next('#valideemail').fadeIn().text("Entrez un email valide ! ");
        valid = false
    }
    else if($('#textarea').val() == ""){
        $('#textarea').css('background-color', '#8E1428')
        $('#textarea').attr('placeholder','Veuillez laissez un message',)
        valid = false
    }
    else if ($('input').val() != ""){
      $('form').css('visibility', 'hidden');
      $('.message').css('visibility', 'visible');
         valid = false

    }

    return valid;
  })

  $('textarea').bind('keyup', function() {
      var mots = $.trim($("textarea").val()).split(" ");
      $('#compteur_mots').html(mots.length)
    });
    $('textarea').bind('keyup', function() {
      $('#compteur_caractere').html(textarea.value.length)
    });

})
