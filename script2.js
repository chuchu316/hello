// API Endpoint，請替換成實際的後台 API 位址
const apiEndpoint = 'https://example.com/api';

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 使用 fetch API 發送登入請求
    fetch(`${apiEndpoint}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // 處理登入成功的邏輯，例如跳轉到會員頁面
    })
    .catch(error => console.error('登入失敗：', error));
}

function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // 使用 fetch API 發送註冊請求
    fetch(`${apiEndpoint}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newUsername, newPassword }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // 處理註冊成功的邏輯，例如顯示註冊成功訊息
    })
    .catch(error => console.error('註冊失敗：', error));
}
