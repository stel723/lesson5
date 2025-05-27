<?php

class User {
    public $name;
    public $email;

    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
}

$user = new User("Иван Иванов", "ivan@example.com");
echo "Имя: " . $user->name . "\n";
echo "Email: " . $user->email . "\n";

?>