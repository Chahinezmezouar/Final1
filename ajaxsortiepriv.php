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
 
$privatetour = new PrivateTour($db->getConnection());

// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $privatetourData = array(
'full_name'=> $_POST['full_name'],
'email'=> $_POST['email'],
'phone'=> $_POST['phone'],
'destination'=> $_POST['destination'],
'date'=> $_POST['date'],
'duration'=> $_POST['duration'],
'num_people'=> $_POST['num_people'],
'guide_name'=> $_POST['guide_name'],
'languages'=> $_POST['languages'],
'special_requests'=> $_POST['special_requests'],
'owner_id' => $_SESSION['user_id'] // Utiliser l'ID de l'utilisateur connecté comme propriétaire de l'hôtel
       
    );

    // Ajouter l'hôtel à la base de données
    $result = $privatetour->addHotel($privatetourData);

    if ($result) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Erreur lors de l\'ajout sortie privée']);
    }
}
?>
