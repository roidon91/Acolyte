$(document).ready(function(){
    $(function() {
                var pull  = $('#pull');
                    menu  = $('nav ul');
                    menuHeight  = menu.height();
                $(pull).on('click', function(e) {
                    e.preventDefault();
                    menu.slideToggle();
                });
                $(window).resize(function(){
                    var w = $(window).width();
                    if(w > 320 && menu.is(':hidden')) {
                        menu.removeAttr('style');
                    }
                });
            });
    





    // $( "#reset" ).click(function() {
    //      location.reload();
    

    // });

                $("#search1").click(function(){

                    //var databox = document.getElementById("databox");
                    
                    var params ={type:"search", uid:$("#search").val()};
                    alert(JSON.stringify(params));

                    $.ajax({
                        url:"http://articlesjustforyou.com/search.php",
                        type:"GET",
                        dataType:"json",
                        data:params,
                        ContentType:"application/json",

                       
                        
                        error:function(err){
                            alert(JSON.stringify(err));
                        },
                        success:function(data){
                               var data1 = JSON.stringify(data);
                                alert(data1);
                                var pusheddata = $.parseJSON(data1);
                                var htmldata = "";

                                $.each(pusheddata, function(i, serverData){
                                  htmldata = htmldata +'<li>'+'<br /> '+'<strong>Name:</strong>'+ serverData.name+'<br /> '+'<strong>Email:</strong>'+serverData.email+'<br />'+'<strong>Age:</strong>'+serverData.age +'<br />'+'<strong>Gender:</strong>'+serverData.gender+'<br />'+'<strong>Mobile:</strong>'+serverData.mobile+'<br />'+'<strong>Disease:</strong>'+serverData.disease+'<br />'+'<strong>Prescription:</strong>'+serverData.description+'</li>'  +'<br>';  
                                                                     
                               });
                                    
                                    $('#show-list').append(htmldata).listview('refresh');
                                    //$('#two').append(htmldata1).listview('refresh');



                        }
                       });

                });
            }); 
