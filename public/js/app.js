$(document).ready(function(){
  // Variables   
 const $containerSwapi = $('.container-swapi');
       $containerSwapi.append('<div class="row"/>');
 const $modalTitle = $('#myModalLabel');
 const $modalBody = $('.modal-body');

$.ajax({
    url:'https://swapi.co/api/people/?page=1&format=json',
    contentType: 'application/json',
    method: 'GET',
    success: function(response){
        console.log(response.results);

         $.each(response.results,function(i,obj){
          $containerSwapi.find('.row').append('<div class="container-image col-xs-6 col-sm-2"/>');  
          $containerSwapi.find('.container-image').eq(i).append('<img src="#" class="img-responsive" data-toggle="modal" data-target="#myModal"/>');
          $containerSwapi.find('.container-image').eq(i).append('<p class="img-name"/>');
          $containerSwapi.find('img').eq(i).attr('src','https://starwars-visualguide.com/assets/img/characters/'+ (i+1) +'.jpg');
          $containerSwapi.find('img').eq(i).attr('data-name',response.results[i].name);
          $containerSwapi.find('img').eq(i).attr('data-gender',response.results[i].gender);
          $containerSwapi.find('img').eq(i).attr('data-birth',response.results[i].birth_year);
          $containerSwapi.find('p').eq(i).text(response.results[i].name);                          
         }) 
      },
      fail:function(request){
        if(request){
          alert(request.message);
        }
      }
    });

 $containerSwapi.on('click', '.img-responsive', function(){
    $modalTitle.text('Know more about' + ' ' +  $(this)[0].dataset.name)
    $modalBody.empty().append('<div class="container-image-modal"/>');
    $modalBody.find('.container-image-modal').empty().append('<img class="img-responsive">');
    $modalBody.find('img').attr('src',$(this)[0].src);


  console.log($(this)[0].src); 
  console.log($(this)[0].dataset.name);
  console.log($(this)[0].dataset.gender);
  console.log($(this)[0].dataset.birth);


  });
  });