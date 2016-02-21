jQuery(document).ready(function($) {
                
                $(".scroll").click(function(event){     
                    event.preventDefault();
                    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
                });

                $("#submit2").click(function(event){     
                    location.href="register.html";
                });

                    

                    $(function() {
                var pull = $('#pull');
                    menu = $('nav ul');
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

                $("#submit1").click(function(){

                    //var databox = document.getElementById("databox");
                    var user = $("#inputEmail").val();
                    var pass = $("#inputPassword").val();
                    var params ={type:"login", username:user, password:pass};
                    //alert(JSON.stringify(params));

                    $.ajax({
                        url:"http://articlesjustforyou.com/login.php",
                        type:"GET",
                        dataType:"json",
                        data:params,
                        ContentType:"application/json",

                       
                        
                        error:function(err){
                            alert(JSON.stringify(err));
                        },
                        success:function(data){
                               var data1 = JSON.stringify(data);
                                //alert(data1);
                                var pusheddata = $.parseJSON(data1);
                                //alert("RESULT"+pusheddata);

                               if (pusheddata == null) {
                                    alert("not a valid user");
                                    
                                    location.reload();
                                    
                                                                }
                                else
                                {
                                    
                                    alert(user+" You have successfully logged in");
                                    location.href = "home.html";


                                } 

                        }
                       });

                });












                


            });     
                    
