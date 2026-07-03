#!/bin/bash
# Setup WireGuard tunnel for public IP (IP Publik SG3 - perwiramedia.com)
# Run as root: bash scripts/setup-wireguard.sh
set -e

if [ "$EUID" -ne 0 ]; then
  echo "Jalankan sebagai root: sudo bash scripts/setup-wireguard.sh"
  exit 1
fi

echo "== Install WireGuard =="
apt update
apt install -y wireguard

echo "== Tulis /etc/wireguard/wg0.conf =="
cat > /etc/wireguard/wg0.conf << 'WGEOF'
[Interface]
PrivateKey = WK7abymudIix780mmQvESd3oxyEFhVHwGCOO/qBy10U=
Address = 191.101.190.150/32
DNS = 8.8.8.8

[Peer]
PublicKey = 6BENimzeKyneXEhunWnww9xXJCagD+F8on9jPk6U53I=
Endpoint = ippsg3.perwiramedia.com:8443
AllowedIPs = 0.0.0.0/0, ::/0
PersistentKeepalive = 25
WGEOF

chmod 600 /etc/wireguard/wg0.conf

echo "== Naikkan tunnel =="
wg-quick down wg0 2>/dev/null || true
wg-quick up wg0

echo "== Enable auto-start on boot =="
systemctl enable wg-quick@wg0

echo "== Status tunnel =="
wg show

echo ""
echo "Selesai. Tunggu beberapa saat untuk 'latest handshake' muncul di atas."
echo "Test dari luar: ssh root@191.101.190.150"
