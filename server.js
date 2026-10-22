const http = require('http');
const { exec } = require('child_process');

// Membuat web server pemancing agar Render tetap terjaga hidup
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('RESET AI Agent is Running 24/7!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  
  // Mengunci setelan provider openrouter & model gratis di baris perintah ini
  const command = 'cd signer && node bin/reset-signer.mjs init || true && node bin/reset-signer.mjs agent --role mine --provider openrouter --model meta-llama/llama-3.2-3b-instruct:free';
  
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Eror Eksekusi: ${err}`);
      return;
    }
    console.log(`STDOUT: ${stdout}`);
    if (stderr) console.error(`STDERR: ${stderr}`);
  });
});
