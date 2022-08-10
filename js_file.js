//Set a reference to the animated element
const animated = document.getElementById("name");
const job = document.getElementById("job");

//Add animation event listener, with attached function.
animated.addEventListener('animationend', () => {
    job.style.visibility = 'visible';
    job.style.transform = 'rotate(-360deg)';
    job.style.color = '#1c6864';
});

const signal = document.getElementsByClassName("circle");
signal[0].addEventListener('animationend',()=>{
    signal[0].style.transform = 'rotate(180deg)';
});

const slogan = document.getElementsByClassName('second_part_title_slogan');
const pic = document.getElementsByClassName('second_part_img_pic');
for(let i=0;i<slogan.length;i++){
    pic[i].addEventListener('mouseover',()=>{
        //console.log('hi');
        slogan[i].style.visibility = 'visible';
        slogan[i].style.transform = 'scale(1.2)';
        slogan[i].style.transition = 'all 3s';

    });
}

const contact = document.getElementsByClassName('contact');
const contactMe = document.getElementsByClassName('corner');
contactMe[0].addEventListener('mouseover',()=>{
    contact[0].style.visibility = 'visible';
    contact[0].style.color = 'black';
    contact[0].style.transform = 'scale(1.2)';
    contact[0].style.transition = 'all 2s';
});
