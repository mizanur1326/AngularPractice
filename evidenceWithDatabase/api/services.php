<?php
include 'database.php';
$products = [];

$sql = "SELECT * FROM service_list";
if($result = $db->query($sql))
{

	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['id'] = $row['id'];
		$products[$i]['name'] = $row['name'];
		$products[$i]['description'] = $row['description'];
		$products[$i]['price'] = $row['price'];
		$products[$i]['image_path'] = $row['image_path'];
		$i++;
	}
	echo json_encode(['data' => $products ]);
}
else
{
	http_response_code(404);
}



