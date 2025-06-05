const tooltip = document.getElementById('dot-tooltip');
const occupation = document.querySelector('.ooccupation');
const aiExposure = document.querySelector('.ai-exposure');
const replacementRisk = document.querySelector('.replacement-risk');
const complementarity = document.querySelector('.complementarity');

let currentTooltipData = null;

function handleMouseMove(e) {
    if (tooltip.style.opacity === '1' || tooltip.style.opacity === '') {
        tooltip.style.left = `${e.clientX + 20}px`;
        tooltip.style.top = `${e.clientY + 20}px`;
    }
}

document.querySelectorAll('.img-container').forEach(imgContainer => {
    imgContainer.addEventListener('mouseenter', function(e) {
        const tooltipData = this.querySelector('.dot-tooltip').textContent.trim();
        const lines = tooltipData.split('\n').filter(line => line.trim() !== '');
        if (lines.length >= 4) {
            const occupationText = lines[0].trim();
            const aiExposureText = lines[1].trim().replace('- AI Exposure: ', '');
            const replacementRiskText = lines[2].trim().replace('- Replacement Risk: ', '');
            const complementarityText = lines[3].trim().replace('- Complementarity: ', '');
          
            if (currentTooltipData !== tooltipData) {
                occupation.textContent = occupationText;
                aiExposure.textContent = aiExposureText;
                replacementRisk.textContent = replacementRiskText;
                complementarity.textContent = complementarityText;
                currentTooltipData = tooltipData;
            }
            tooltip.style.opacity = '1';
            tooltip.style.left = `${e.clientX + 20}px`;
            tooltip.style.top = `${e.clientY + 20}px`;
            document.addEventListener('mousemove', handleMouseMove);
        }
    });   
    imgContainer.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0';
        document.removeEventListener('mousemove', handleMouseMove);
    });
});

document.querySelectorAll('.year-btn').forEach(btn => {
    btn.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0';
        document.removeEventListener('mousemove', handleMouseMove);
    });
});