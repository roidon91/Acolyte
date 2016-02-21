$(document).ready(function(){

var htmldata = [];

window.onload = function () {

$.ajax({
                        url:"http://articlesjustforyou.com/analysis.php",
                        //type:"GET",
                        dataType:"json",
                        //data:params,
                        ContentType:"application/json",

                       
                        
                        error:function(err){
                            alert(JSON.stringify(err));
                        },
                        success:function(data){
                               var data1 = JSON.stringify(data);
                                //alert(data1);
                                var pusheddata = $.parseJSON(data1);
                                var dengue;
                                alert("Total Diseases entered:"+pusheddata.length);
                                
                                var size = pusheddata.length;
                                for(var i= 0; i<size; i++)
                                {    

                                        if (pusheddata.disease == "dengue") 
                                        {
                                            dengue++;
                                            //dengue = (dengue/size) * 100;
                                            alert(dengue);

                                        } 
                                        // else{


                                        // }
                                }        


                                $.each(pusheddata, function(i, serverData){
                                  
                                   var chart = new CanvasJS.Chart("chartContainer",
                                        {
                                            title:{
                                                text: "Top Categoires of New Year's Resolution"
                                            },
                                            exportFileName: "Pie Chart",
                                            exportEnabled: true,
                                                    animationEnabled: true,
                                            legend:{
                                                verticalAlign: "bottom",
                                                horizontalAlign: "center"
                                            },
                                            data: [
                                            {       
                                                type: "pie",
                                                showInLegend: true,
                                                toolTipContent: "{legendText}: <strong>{y}%</strong>",
                                                indexLabel: "{label} {y}%",
                                                dataPoints: [
                                                    {  y: 35, legendText: pusheddata[0].disease, exploded: true, label: pusheddata[0].disease },
                                                    {  y: 20, legendText: pusheddata[1].disease, label: pusheddata[1].disease },
                                                    {  y: 18, legendText: pusheddata[2].disease, label: pusheddata[2].disease },
                                                    {  y: 15, legendText: pusheddata[3].disease, label: pusheddata[3].disease},
                                                    {  y: 5, legendText: pusheddata[4].disease, label: pusheddata[4].disease },
                                                    {  y: 7, legendText: pusheddata[5].disease, label: pusheddata[5].disease}
                                                ]
                                        }
                                        ]
                                        });
                                        chart.render();//end of chart
                                    
                                   return i<6;
                                                                                                              
                               });//end of pusshed data
                                  



                        }//end of success
});//end of ajax



    

}//end of onload







 });//last end 
             