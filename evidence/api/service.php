<?php
include './db_connect.php';
$service_name  = [];

$sql = "SELECT * FROM  service_list";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$service_name[$i]['name'] = $row['name'];
		$service_name[$i]['description'] = $row['description'];
		$service_name[$i]['price'] = $row['price'];
		$service_name[$i]['image_path'] = $row['image_path'];
		$i++;
	}
	echo json_encode(['data'=>$service_name]);
}
else
{
	http_response_code(404);
}