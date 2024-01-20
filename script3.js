const apiEndpoint = 'https://example.com/api';

function openLoginDialog() {
    const loginDialog = document.getElementById('loginDialog');
    loginDialog.showModal();
}

function closeLoginDialog() {
    const loginDialog = document.getElementById('loginDialog');
    loginDialog.close();
}

function showNotification(message, isSuccess) {
    const notification = document.createElement('div');
    notification.classList.add('notification', isSuccess ? 'success' : 'error');
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

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
        if (data.success) {
            showNotification('登入成功', true);
            closeLoginDialog();
            // 可在此處進行登入成功後的其他操作
        } else {
            showNotification('登入失敗，請檢查用戶名和密碼', false);
        }
    })
    .catch(error => {
        console.error('登入失敗：', error);
        showNotification('登入時發生錯誤', false);
    });
}
