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
$tour = new Tour($db->getConnection());

// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $tourData = array(
'title' => $_POST['title'],
        'description' => $_POST['description'],
        'location' => $_POST['location'],
        'duration' => $_POST['duration'],
        'capacity' => $_POST['capacity'],
        'activities' => $_POST['activities'],
        'requirements' => $_POST['requirements'],
        'owner_id' => $_SESSION['user_id'] // Utiliser l'ID de l'utilisateur connecté comme propriétaire de l'hôtel
       
    );

    // Ajouter l'hôtel à la base de données
    $result = $tour->addHotel($tourlData);

    if ($result) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Erreur lors de l\'ajout de sortie']);
    }
}
?>
