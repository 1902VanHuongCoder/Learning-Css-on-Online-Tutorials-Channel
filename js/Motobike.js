const sliders = document.querySelectorAll('.slide');

const dots = document.querySelectorAll('.dot');

function setActive(i){
for(let slide of sliders){
    slide.classList.remove('active');
    sliders[i].classList.add('active');
    }
for(let dot of dots)
    {
    dot.classList.remove('active');
    dots[i].classList.add('active');
    }
}

for(let j = 0; j < dots.length; j++)
{
    dots[j].addEventListener('click',function()
    {
        setActive(j);
    })
}
