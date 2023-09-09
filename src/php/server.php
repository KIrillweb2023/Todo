<?php 
//Подключаемся к базе данных
$connect = mysqli_connect('localhost', 'root', 'root', 'todo');
if(!$connect){
    echo 'Не удалось подключится к бд!';
}

echo var_dump($_POST);

//Создал переменную под текст таска
$text = $_POST['text'];
echo $text;
//Делаем запрос и отправляем текст в базу данных
$query = mysqli_query($connect, "INSERT INTO texts (text) VALUES ('$text')");
//Делаем проверку в случае неисправности
if(!$query){
    echo 'Запрос не отправился!';
} else {
    //header('Location: ../index.html');
}