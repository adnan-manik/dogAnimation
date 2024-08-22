let animState = 'idle';
const dropDown = document.getElementById('animations');

dropDown.addEventListener('change',(e)=>{
    animState = e.target.value;
})


const canvas = document.getElementById('animCanvas');
const context = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImg = new Image();



playerImg.src = 'shadow_dog.png';

const charWidth = 575;
const charHeight = 523;

let frameCount = 0;
const staggerFrame = 5;
let charAnimations = [];
let animStates = [
    {
        name: "idle",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    },
    {
        name: "fall",
        frames: 7
    },
    {
        name: "run",
        frames: 9
    },
    {
        name: "dizzy",
        frames: 11
    },
    {
        name: "sit",
        frames: 5
    },
    {
        name: "roll",
        frames: 7
    },
    {
        name: "bite",
        frames: 7
    },
    {
        name: "ko",
        frames: 12
    },
    {
        name: "getHit",
        frames: 4
    }
];

animStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }

    for(let i = 0; i < state.frames; i++){
        let positionX = i * charWidth;
        let positionY = index * charHeight;
        frames.loc.push({x: positionX, y: positionY });
    }

    charAnimations[state.name] = frames;
}
)

function animate() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(frameCount / staggerFrame) % charAnimations[animState].loc.length;
    // context.drawImage(playerImg, sx, sy, sw, h, dx, dy, dw, dh)
    let frameX = position * charWidth;
    let frameY = charAnimations[animState].loc[position].y;
    context.drawImage(playerImg, frameX, frameY, charWidth, charHeight, 50, 50, CANVAS_WIDTH - 50, CANVAS_HEIGHT - 50);

    frameCount++;
    requestAnimationFrame(animate);
}

animate();