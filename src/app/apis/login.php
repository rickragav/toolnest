<?php

// Replace these values with your GitHub OAuth application credentials
$client_id = 'Iv1.55d1d5f9f802904e';
$client_secret = '81d9b99b87606764345848c765b95cd741dc02b4';
$redirect_uri = $_GET['redirect_uri'];

// Get the authorization code from the query parameters
$code = $_GET['code'] ?? null;

if (!$code) {
    // Handle error: Authorization code not provided
    $response = [
        'success' => false,
        'message' => 'Authorization code not provided',
    ];
    header('Content-Type: application/json'); // Set content type to JSON
    echo json_encode($response);
    exit;
}

// Exchange the authorization code for an access token
$token_url = 'https://github.com/login/oauth/access_token';
$data = [
    'client_id' => $client_id,
    'client_secret' => $client_secret,
    'code' => $code,
    'redirect_uri' => $redirect_uri,
];

$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data),
    ],
];

$context = stream_context_create($options);
$response = file_get_contents($token_url, false, $context);

if ($response === false) {
    // Handle error: Failed to make the request
    $response = [
        'success' => false,
        'message' => 'Failed to make the request',
    ];
} else {
    // Parse the response to get the access token
    parse_str($response, $token_data);

    if (isset($token_data['access_token'])) {
        $access_token = $token_data['access_token'];

        // Handle the obtained access token, e.g., store it securely
        $response = [
            'success' => true,
            'access_token' => $access_token,
        ];
    } else {
        // Handle error: Access token not received
        $response = [
            'success' => false,
            'message' => 'Access token not received',
        ];
    }
}

header('Content-Type: application/json'); // Set content type to JSON
echo json_encode($response);
