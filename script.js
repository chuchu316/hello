// Google 登錄成功後的回調函數
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const email = profile.getEmail();

    // 在這裡可以將 Google 帳號的 email 用作註冊表單的一部分，也可以在後端處理
    document.getElementById('registrationForm').style.display = 'block';
}

// 註冊函數，處理其他註冊邏輯
function register() {
    // 獲取其他註冊表單字段的數據
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 在這裡添加與後端通信的邏輯，可以使用Ajax或Fetch API
    // 例如，使用Fetch API 發送 POST 請求到後端 API
}
