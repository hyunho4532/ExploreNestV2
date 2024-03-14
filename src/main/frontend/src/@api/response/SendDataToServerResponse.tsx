function SendDataToServer(data: any) {
    fetch('http://localhost:8081/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();

        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('오류 발생:', error);
        });
}

export default SendDataToServer;