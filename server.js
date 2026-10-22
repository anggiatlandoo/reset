const http = require('http');
const { exec } = require('child_process');

// Membuat web server agar Render menganggap ini Web Service aktif
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('RESET AI Agent is Running 24/7!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  // Otomatis memicu inisialisasi wallet dan menjalankan AI Agent RESET di latar belakang
  exec('cd signer && node bin/reset-signer.mjs init || true && node bin/reset-signer.mjs agent --role mine', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log(stdout);
  });
});
