async function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // cm to m
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height);
    let result = '';
    if (bmi < 18.5) {
        result = 'Gầy';
    } else if (bmi < 25) {
        result = 'Bình thường';
    } else if (bmi < 30) {
        result = 'Thừa cân';
    } else {
        result = 'Béo phì';
    }
    const resultText = `BMI của bạn là ${bmi.toFixed(2)}. ${result}`;
    document.getElementById('result').textContent = resultText;
    await showNotification(resultText);
    await shareResult(resultText);
}
async function showNotification(resultText) {
    await LocalNotifications.schedule({
        notifications: [
            {
                title: 'Kết quả BMI',
                body: resultText,
                id: 1,
            },
        ],
    });
}
async function shareBMI(resultText) {
    await Share.share({
        title: 'Chia sẻ kết quả BMI',
        text: resultText,
        url: 'C:\Users\HP\test', // Thay thế bằng URL của ứng dụng hoặc trang web của bạn
        dialogTitle: 'Chia sẻ kết quả BMI',
    });
}


async function takePhoto() {
    const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: 'base64',
    });
    const imageUrl = `data:image/jpeg;base64,${photo.base64String}`;
    document.getElementById('photo').src = imageUrl;}
async function shareBMI() {
        const resultText = document.getElementById('result').textContent;
        await Share.share({
            title: 'Chia sẻ kết quả BMI',
            text: resultText,
            url: 'C:\Users\HP\test', // 
            dialogTitle: 'Chia sẻ kết quả BMI',
        });
    }