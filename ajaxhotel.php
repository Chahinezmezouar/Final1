<?php
session_start();
require_once 'Database.php';
require_once 'Main.php';

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['user_id'])) {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    header('Location: login.php');
    exit();
}

// Créer une instance de la classe Database
$db = new Database();
$hotel = new Hotel($db->getConnection());

// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $hotelData = array(
        'hotel_name' => $_POST['hotel_name'],
        'address' => $_POST['address'],
        'state' => $_POST['state'],
        'phone' => $_POST['phone'],
        'email' => $_POST['email'],
        'category' => $_POST['category'],
        'description' => $_POST['description'],
        'languages' => $_POST['languages'],
        'room_types' => $_POST['room_types'],
        'room_descriptions' => $_POST['room_descriptions'],
        'room_rates' => $_POST['room_rates'],
        'amenities' => $_POST['amenities'],
        'services' => $_POST['services'],
        'images' => $_POST['images'],
        'owner_id' => $_SESSION['user_id'] // Utiliser l'ID de l'utilisateur connecté comme propriétaire de l'hôtel
    );

    // Ajouter l'hôtel à la base de données
    $result = $hotel->addHotel($hotelData);

    if ($result) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Erreur lors de l\'ajout de l\'hôtel']);
    }
}
?>
