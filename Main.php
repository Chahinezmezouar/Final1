<?php
session_start();
class Hotel {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function addHotel($hotelData) {
        // Utilisez les requêtes préparées pour éviter les attaques par injection SQL
        $stmt = $this->db->prepare("INSERT INTO hotel (hotel_name, address, state, phone, email, category, description, languages, room_types, room_descriptions, room_rates, amenities, services, images, owner_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        // Utilisez implode pour les champs avec des sélections multiples
        $languages = implode(", ", $hotelData['languages']);
        $roomTypes = implode(", ", $hotelData['room_types']);
        $roomDescriptions = implode(", ", $hotelData['room_descriptions']);
        $amenities = implode(", ", $hotelData['amenities']);
        $services = implode(", ", $hotelData['services']);
        $images = implode(", ", $hotelData['images']);

        $stmt->bind_param(
            "ssssssssssssss",
            $hotelData['hotel_name'],
            $hotelData['address'],
            $hotelData['state'],
            $hotelData['phone'],
            $hotelData['email'],
            $hotelData['category'],
            $hotelData['description'],
            $languages,
            $roomTypes,
            $roomDescriptions,
            $hotelData['room_rates'],
            $amenities,
            $services,
            $images,
            $hotelData['owner_id']
        );

        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }
}

class Tour
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function addTour($tourData)
    {
        $stmt = $this->db->prepare("INSERT INTO sortie (title, description, location, duration, capacity, activities, requirements, owner_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->bind_param(
            "ssssssss",
            $tourData['title'],
            $tourData['description'],
            $tourData['location'],
            $tourData['duration'],
            $tourData['capacity'],
            $tourData['activities'],
            $tourData['requirements'],
            $tourData['owner_id']
        );

        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }
}

class PrivateTour {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function addPrivateTourReservation($privateTourData, $userId) {
        $stmt = $this->db->prepare("INSERT INTO private_tour_reservations (user_id, full_name, email, phone, destination, date, duration, num_people, guide_name, languages, special_requests) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->bind_param(
            "isssssisss",
            $userId,
            $privateTourData['full_name'],
            $privateTourData['email'],
            $privateTourData['phone'],
            $privateTourData['destination'],
            $privateTourData['date'],
            $privateTourData['duration'],
            $privateTourData['num_people'],
            $privateTourData['guide_name'],
            implode(", ", $privateTourData['languages']),
            $privateTourData['special_requests']
        );

        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }
}


// Usage de la classe Database pour obtenir une connexion à la base de données
$db = new Database();
$conn = $db->getConnection();

// Utilisation des classes Hotel et Tour
$hotel = new Hotel($conn);
$tour = new Tour($conn);
$privatetour = new PrivateTour($conn);



?>