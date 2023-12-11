<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    handlePostRequest();
} else {
    handleInvalidRequestMethod();
}

function handlePostRequest() {
    $postData = file_get_contents("php://input");
    $decodedData = json_decode($postData, true);

    if ($decodedData === null || !isset($decodedData['token'])) {
        $response = [
            'success' => false,
            'message' => 'Access token not provided',
        ];
        echoResponse($response);
        exit;
    }

    $url = 'https://api.github.com/user';
    $headers = [
        'Authorization: Bearer ' . $decodedData['token'],
        'User-Agent: PostmanRuntime/7.35.0',
        // Add any other headers as needed
    ];

    $responseData = makeCurlRequest($url, $headers);

    if ($responseData === false) {
        $response = [
            'success' => false,
            'message' => 'cURL Error: ' . curl_error($ch),
        ];
    } else {
        $response = [
            'success' => true,
            'data' => json_decode($responseData, true),
        ];
    }

    echoResponse($response);
}

function makeCurlRequest($url, $headers) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $responseData = curl_exec($ch);
    curl_close($ch);

    return $responseData;
}

function handleInvalidRequestMethod() {
    $response = [
        'success' => false,
        'message' => 'Invalid request method. This endpoint only accepts POST requests.',
    ];
    echoResponse($response);
}

function echoResponse($response) {
    header('Content-Type: application/json');
    echo json_encode($response);
}
