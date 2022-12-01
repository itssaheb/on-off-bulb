let sts = document.getElementById('status');
imgTag.src='image/offbulb.png';

turnOn.addEventListener('click',split);
function split()
{
    if(turnOn.textContent.includes('On'))
    {
        imgTag.src='image/onbulb.png';
        turnOn.textContent = "turn Off";
        sts.textContent = "Bulb has been On";
    }
    else
    {
        imgTag.src='image/offbulb.png';
        turnOn.textContent = "turn On";
        sts.textContent = "Bulb has been Off";
    }
}