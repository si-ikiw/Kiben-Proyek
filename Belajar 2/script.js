// JavaScript untuk interaksi dalam chat

const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');
const chatHeader = document.querySelector('.chat-header');

// Fungsi untuk menambahkan pesan ke layar chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user-message' : 'friend-message');
    messageDiv.innerText = message;
    chatMessages.appendChild(messageDiv);

    // Auto-scroll ke pesan terbaru
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener untuk tombol Kirim
sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== '') {
        addMessage(message, true);
        chatInput.value = '';
    }
});

// Event listener untuk input pesan
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const message = chatInput.value.trim();
        if (message !== '') {
            addMessage(message, true);
            chatInput.value = '';
        }
    }
});

// Contoh pesan awal
addMessage('kiw, kumaha damang ?', false);
addMessage('damang ben', true);
addMessage('Alhamdullilah', false);
addMessage('muhun ben', true)

// Update header dengan informasi kontak (simulasi)
chatHeader.innerText = 'Beni';



// Simulasikan status pesan (Anda dapat mengganti ini sesuai dengan kebutuhan Anda)
const statusPesan = "dikirim"; // "dikirim", "diterima", atau "dibaca"

// Fungsi untuk mengatur tampilan ceklis sesuai dengan status pesan
function tampilkanCeklis() {
    const ceklisTunggal = document.getElementById("ceklis-tunggal");
    const duaCeklis = document.getElementById("dua-ceklis");
    const ceklisBiru = document.getElementById("ceklis-biru");

    switch (statusPesan) {
        case "dikirim":
            // Tampilkan ceklis tunggal
            ceklisTunggal.style.display = "block";
            duaCeklis.style.display = "none";
            ceklisBiru.style.display = "none";
            break;
        case "diterima":
            // Tampilkan dua ceklis
            ceklisTunggal.style.display = "none";
            duaCeklis.style.display = "block";
            ceklisBiru.style.display = "none";
            break;
        case "dibaca":
            // Tampilkan ceklis biru
            ceklisTunggal.style.display = "none";
            duaCeklis.style.display = "none";
            ceklisBiru.style.display = "block";
            break;
        default:
            // Default: sembunyikan semua ceklis
            ceklisTunggal.style.display = "none";
            duaCeklis.style.display = "none";
            ceklisBiru.style.display = "none";
            break;
    }
}

// Panggil fungsi untuk menampilkan ceklis sesuai dengan status pesan saat halaman dimuat
window.onload = tampilkanCeklis;