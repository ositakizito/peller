document.getElementById('checkEligibilityButton').addEventListener('click', function () {
    let loadingContainer = document.getElementById('loadingContainer');
    loadingContainer.style.display = 'block';
    let progress = document.getElementById('loadingProgress');
    let loadingText = document.getElementById('loadingText');
    let width = 0;
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('phoneInputContainer').style.display = 'block';
            loadingContainer.style.display = 'none'; // Hide the loading container when done
            document.getElementById('checkEligibilityButton').style.display = 'none'; // Hide the eligibility button
        } else {
            width++;
            progress.style.width = width + '%';
            loadingText.innerText = width + '%';
        }
    }, 50);
});






document.getElementById('submitPhoneButton').addEventListener('click', function () {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message');
    
    if (!phoneNumber) {
        message.textContent = 'You need to add a number!';
        message.style.color = 'red';
    } else {
        // Show processing bars and hide input container
        let processingContainer = document.createElement('div');
        processingContainer.innerHTML = `<div class="loading-container">
            <p id="processingRewardText">Processing Reward: 0%</p>
                <div class="loading-bar">
                    <div id="processingRewardProgress" class="progress"></div>
                </div>
                <br>
                <p id="checkingEligibilityText">Checking Eligibility: 0%</p>
                <div class="loading-bar">
                    <div id="checkingEligibilityProgress" class="progress"></div>
                </div>
            </div>
        `;
        processingContainer.style.backgroundColor = 'white';
        processingContainer.style.top = '50%';
        processingContainer.style.left = '50%';
        processingContainer.style.width = '80%';
        processingContainer.style.display = 'flex';
        processingContainer.style.flexDirection = 'column';
        processingContainer.style.justifyContent = 'center';
        processingContainer.style.padding = '20px';
        processingContainer.style.borderRadius = '10px';
        processingContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        processingContainer.style.transform = 'translate(-50%, -50%)';
        processingContainer.style.position = 'fixed';
        document.body.appendChild(processingContainer);

        let rewardProgress = document.getElementById('processingRewardProgress');
        let rewardText = document.getElementById('processingRewardText');
        let eligibilityProgress = document.getElementById('checkingEligibilityProgress');
        let eligibilityText = document.getElementById('checkingEligibilityText');

        let rewardWidth = 0;
        let eligibilityWidth = 0;

        let rewardInterval = setInterval(function () {
            if (rewardWidth >= 100) {
                clearInterval(rewardInterval);
                let eligibilityInterval = setInterval(function () {
                    if (eligibilityWidth >= 100) {
                        clearInterval(eligibilityInterval);
                        // Hide processing bars and show popup
                        processingContainer.style.display = 'none';
                        let popup = document.getElementById('popup');
                        popup.style.display = 'block';


                        let shareInterval = setInterval(function () {
                            if (shareWidth >= 100) {
                                clearInterval(shareInterval);
                                document.getElementById('loadingSpinner').style.display = 'block'; // Hide spinner when done
                            } else {
                                shareWidth++;
                                shareProgress.style.width = shareWidth + '%';
                                sharePercentage.innerText = shareWidth + '%';
                            }
                        }, 50);

                        document.getElementById('loadingSpinner').style.display = 'block'; // Show spinner
                    } else {
                        eligibilityWidth++;
                        eligibilityProgress.style.width = eligibilityWidth + '%';
                        eligibilityText.innerText = `Checking Eligibility: ${eligibilityWidth}%`;
                    }
                }, 50);
            } else {
                rewardWidth++;
                rewardProgress.style.width = rewardWidth + '%';
                rewardText.innerText = `Processing Reward: ${rewardWidth}%`;
            }
        }, 50);
    }
});


