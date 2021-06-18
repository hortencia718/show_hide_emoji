// const emojis = document.querySelectorAll("emojis");
// select all emojis


function toggleVisibility(emoji){
    const emoji = document.getElementById('emoji');
    if(emoji.style.display === "block"){
        emoji.style.display = 'none';

        document.getElementById(emojis.id).value = 'show';

    }else{
        emoji.style.display ="block";
        document.getElementById(emojis.id).value ="hide";
    }
   
}