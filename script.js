function realPic(){
    let id = Math.floor((Math.random() *6 +1) * 10000)
return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`
}

let fakePic = 'https://thispersondoesnotexist.com/';

function game(){
    let imgscon = document.getElementById("images");
    let rescon = document.getElementById("results");
    let streakcon = document.getElementById("streak");

    let streak = 0;


    function draw(){
        imgscon.innerHTML = "";
        rescon.innerHTML = "";
        
        

    
        let agianBtn = document.createElement("Button");
        agianBtn.textContent = "continue";
        agianBtn.onclick = draw;

        let realOrFake = Math.random() > 0.5;
        let list = [realOrFake, !realOrFake];

        imgscon.style.pointerEvents = "auto";

        for(let isReal of list){
            let img = document.createElement("img");
            img.src = isReal ? realPic() : fakePic;

            img.onclick = function(){
                imgscon.style.pointerEvents = "none";
                rescon.textContent = isReal ? "you are correct, you are too good go touch grass!" : "tell your teacher to teach you better";

                streak = isReal ? streak +100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 : 0;
                streakcon.innerHTML = "streak" +streak;
                rescon.appendChild(agianBtn);
            }

            imgscon.appendChild(img);
        }

    }

    draw();

}

game()
