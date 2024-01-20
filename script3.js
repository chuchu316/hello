const apiEndpoint = 'https://example.com/api';

function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.showModal();
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.close();
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
            closeDialog('loginDialog');
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

function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

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
        if (data.success) {
            showNotification('註冊成功', true);
            closeDialog('registerDialog');
            // 可在此處進行註冊成功後的其他操作
        } else {
            showNotification('註冊失敗，請檢查用戶名和密碼', false);
        }
    })
    .catch(error => {
        console.error('註冊失敗：', error);
        showNotification('註冊時發生錯誤', false);
    });
}
