<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

// Conectar ao banco de dados no Railway
$servername = "your-database-host.railway.app";
$username = "your-database-user";
$password = "your-database-password";
$dbname = "your-database-name";
$port = 3306;

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Inserir mensagem no banco
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    if (!empty($nome) && !empty($mensagem)) {
        $stmt = $conn->prepare("INSERT INTO mensagens (nome, mensagem) VALUES (?, ?)");
        $stmt->bind_param("ss", $nome, $mensagem);
        $stmt->execute();
        $stmt->close();
    }
}

// Retornar mensagens
$result = $conn->query("SELECT nome, mensagem, data FROM mensagens ORDER BY data DESC");
$mensagens = [];
while ($row = $result->fetch_assoc()) {
    $mensagens[] = $row;
}

$conn->close();
header('Content-Type: application/json');
echo json_encode($mensagens);
?>
