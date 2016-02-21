<?php
    header('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json");

    $server = "localhost";
    $username = "articsyn_acolyte";
    $password = "aco12345";
    $database = "articsyn_aco";


            $conn = mysqli_connect($server,$username,$password);
            if (!$conn) 
            {
                die("Connection failed: " . mysqli_connect_error());
            }
            mysqli_select_db($database);
            //echo "connection succesful";


if(isset($_GET['type']))
{   

    if($_GET['type'] == "search")
    {    

            $limit = $_GET['uid'];
            //$limit = preg_replace('#[^0-9]#', '', $_GET['uid']);

            $i = 0;
            //$jsonData = '[';

            $sql = "SELECT * FROM articsyn_aco.patientdetails where uid = '$limit' ";
            $result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($conn));
            //$totalrows = mysql_num_rows($result);
            //echo $totalrows;


            $id = 0;
    while($row =mysqli_fetch_assoc($result))
    {
        $arr[$id] = array(
            'uid'=> $row['uid'],
            'name' => $row['name'],
            'email'=> $row['email'],
            'age'=> $row['age'],
            'gender'=> $row['gender'],
            'mobile'=> $row['mobile'],
            'disease'=> $row['disease'],
            'description'=> $row['description'],
        );
        $id++;
    }
    echo json_encode($arr);

                    
    }
}
else
{

    echo "good to go";
}           

  
 


?>