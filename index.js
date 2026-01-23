const text = ["Web Developer","College Student","Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        setTimeout(()=>{index = 0; count++;},1000);
    }
    setTimeout(type,150);
})();
const chatbot = document.getElementById("chatbot");
const messages = document.getElementById("chatMessages");

document.getElementById("chatbot-btn").onclick = toggleChat;

function toggleChat() {
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function sendMsg() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  addMsg(text, "user");
  input.value = "";

  setTimeout(() => reply(text), 600);
}

function addMsg(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function reply(text) {
  text = text.toLowerCase();
  let response = "I can help you navigate the site 🙂";

  if (text.includes("name")) response = "My name is Harshil.";
  else if (text.includes("skills")) response = "I work with HTML, CSS, JavaScript.";
  else if (text.includes("projects")) response = "You can find projects in the Projects section.";
  else if (text.includes("contact")) response = "Check the Contact section to reach me.";
  else if (text.includes("help")) response = "Ask me about skills, projects or contact info.";

  addMsg(response, "bot");
}

var tl= gsap.timeline()

tl.from("nav",{
    y:-30,
    opacity:0,
    duration:2,
    delay:0.5
})
tl.from("nav ul li",{
    y:-30,
    opacity:0,
    duration:2,
    stagger:1
})