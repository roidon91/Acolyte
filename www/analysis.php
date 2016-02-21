<?php
    header('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json");

    $server = "localhost";
    $username = "";
    $password = "";
    $database = "";


            $conn = mysqli_connect($server,$username,$password);
            if (!$conn) 
            {
                die("Connection failed: " . mysqli_connect_error());
            }
            mysqli_select_db($database);
            //echo "connection succesful";




            //$check = $_GET['random1'];
            //$limit = preg_replace('#[^0-9]#', '', $_GET['uid']);

            //$i = 0;
            //$jsonData = '[';

            $sql = "SELECT disease FROM articsyn_aco.patientdetails ";
            $result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($conn));
            //echo result;
            //$totalrows = mysql_num_rows($result);
            //echo $totalrows;

            
           // if (totalrows>0)
            //{
                    $id = 0;
                    while($row =mysqli_fetch_assoc($result))
                    {
                        $arr[$id] = array(
                            'disease'=> $row['disease'],
                        );
                        $id++;
                    }
                    echo json_encode($arr); 


            //}

    

 
                    


  
 


?>
