<?php
// Basic protection: only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(403);
    exit("Forbidden");
}

// Collect form data safely
$name    = htmlspecialchars($_POST['Name'] ?? '');
$phone   = htmlspecialchars($_POST['Phone'] ?? '');
$email   = htmlspecialchars($_POST['Email'] ?? '');
$message = htmlspecialchars($_POST['Message'] ?? '');

// Email settings
$to      = "interrig@singnet.com.sg"; // company email
$subject = "New Quote Form Submission";

// Boundary for attachments
$boundary = md5(time());

// Headers
$headers  = "From: Inter-Rig Website <interrig@singnet.com.sg>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";

// Email body (text)
$body  = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
$body .= "Name: $name\n";
$body .= "Phone: $phone\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n\n";

// Handle file uploads
if (isset($_FILES['Drawings']) && !empty($_FILES['Drawings']['name'][0])) {
    // PHP 8 safe count check
    $fileCount = is_array($_FILES['Drawings']['name']) ? count($_FILES['Drawings']['name']) : 0;
    
    for ($i = 0; $i < $fileCount; $i++) {
        if ($_FILES['Drawings']['error'][$i] === UPLOAD_ERR_OK) {
            $fileTmp  = $_FILES['Drawings']['tmp_name'][$i];
            $fileName = $_FILES['Drawings']['name'][$i];
            $fileType = mime_content_type($fileTmp);
            $fileData = chunk_split(base64_encode(file_get_contents($fileTmp)));

            $body .= "--$boundary\r\n";
            $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
            $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $body .= $fileData . "\r\n";
        }
    }
}

// End boundary
$body .= "--$boundary--";

// Send mail
if (mail($to, $subject, $body, $headers)) {
    // Redirect to thank-you page
    header("Location: contact.php?success=1");
    exit();
} else {
    echo "Mail failed to send. Please try again later.";
}
?>