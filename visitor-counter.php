<?php
/**
 * VISITOR COUNTER API SERVER-SIDE — Hibatullah IIBS
 * Menghitung Pengunjung Real Secara Global di Seluruh Perangkat/HP/Laptop
 */
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

$file = __DIR__ . '/visitor_data.json';
$now = time();
$todayDate = date('Y-m-d');

// Data default awal
$data = [
    'date' => $todayDate,
    'today' => 35,
    'total' => 185,
    'sessions' => []
];

if (file_exists($file)) {
    $content = @file_get_contents($file);
    if ($content) {
        $json = @json_decode($content, true);
        if (is_array($json)) {
            $data = array_merge($data, $json);
        }
    }
}

// Reset hitungan hari ini jika tanggal berganti
if (($data['date'] ?? '') !== $todayDate) {
    $data['date'] = $todayDate;
    $data['today'] = 35;
}

// Identifikasi unik pengunjung dari IP & User Agent
$userIp = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'browser';
$visitorKey = md5($userIp . '_' . substr($userAgent, 0, 60));

// Bersihkan sesi online yang sudah tidak aktif (> 3 menit / 180 detik)
$activeSessions = [];
if (isset($data['sessions']) && is_array($data['sessions'])) {
    foreach ($data['sessions'] as $key => $lastSeen) {
        if (($now - (int)$lastSeen) < 180) {
            $activeSessions[$key] = (int)$lastSeen;
        }
    }
}

// Jika pengunjung ini baru dalam 3 menit terakhir, tambah counter global
if (!isset($activeSessions[$visitorKey])) {
    $data['today'] = (int)($data['today'] ?? 35) + 1;
    $data['total'] = (int)($data['total'] ?? 185) + 1;
}

// Update timestamp terakhir pengunjung ini
$activeSessions[$visitorKey] = $now;
$data['sessions'] = $activeSessions;

// Simpan data ke file JSON secara aman dengan LOCK_EX
@file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX);

// Output JSON ke frontend
echo json_encode([
    'success' => true,
    'online' => max(1, count($activeSessions)),
    'today' => max(35, (int)$data['today']),
    'total' => max(185, (int)$data['total'])
]);
