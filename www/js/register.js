$(document).ready(function($) {


    $("#regsiter").click(function(){


                    //var a = $("#myform input[type='radio']:checked").val();
                                        //alert(id);
                    var params ={type:"reg",fname:$("#firstname").val(),lname:$("#lastname").val(),email:$("#email").val(), phone:$("#phone").val(), reg:$("#reg").val(), adr:$("#add").val(), adh:$("#adh").val(), pan:$("#pan").val(),pass1:$("#pass1").val(),pass2:$("#pass2").val()  };
                    //alert(JSON.stringify(params));

                    $.ajax({
                        url:"http://articlesjustforyou.com/register.php",
                        type:"GET",
                        dataType:"json",
                        data:params,
                        ContentType:"application/json",
                        success:function(response){
                            //window.location.href = "search.html";
                            //alert("response :" + JSON.stringify(response));
                                                    },
                        error:function(err){
                            //alert(JSON.stringify(err));
                            //location.reload();
                            //alert("Registeration failed");
                            alert("Registered successfully");

                        },

                        complete: function()
                        {
                          window.location.href = "log in.html";
                          //location.reload();
                        }  

                    });

    });

        
                
        




});  //end   
                    
