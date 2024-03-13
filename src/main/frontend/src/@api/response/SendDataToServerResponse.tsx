function SendDataToServer(data: any) {
    fetch('http://localhost:8081/handleGoogleLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .catch(error => {
            console.error('오류 발생:', error);
        });
}

export default SendDataToServer;