<?php
/**
 * VISITOR COUNTER API SERVER-SIDE — Hibatullah IIBS
 * Menghitung Pengunjung ASLI MURNI (100% Real-Time & Global)
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Content-Type: application/json; charset=utf-8');

$file = __DIR__ . '/visitor_data.json';
$now = time();
$todayDate = date('Y-m-d');

// Data default awal murni
$data = [
    'date' => $todayDate,
    'today' => 0,
    'total' => 0,
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
    $data['today'] = 0;
}

// Dapatkan IP Asli Pengunjung (Mendukung Cloudflare / Proxy / Direct)
$userIp = $_SERVER['HTTP_CF_CONNECTING_IP'] 
    ?? (isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0] : null)
    ?? $_SERVER['REMOTE_ADDR'] 
    ?? '127.0.0.1';
$userIp = trim($userIp);
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

// Jika pengunjung ini baru (belum aktif dalam 3 menit terakhir), catat sebagai kunjungan baru
if (!isset($activeSessions[$visitorKey])) {
    $data['today'] = (int)($data['today'] ?? 0) + 1;
    $data['total'] = (int)($data['total'] ?? 0) + 1;
}

// Update timestamp terakhir pengunjung ini
$activeSessions[$visitorKey] = $now;
$data['sessions'] = $activeSessions;

// Simpan data ke file JSON secara aman dengan LOCK_EX
@file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX);

// Output JSON murni asli ke frontend
echo json_encode([
    'success' => true,
    'online' => max(1, count($activeSessions)),
    'today'  => (int)$data['today'],
    'total'  => (int)$data['total']
]);
