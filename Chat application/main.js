const input = document.querySelector("#message_enter");
const button = document.querySelector("#message_send_btn");
const messageWindow = document.querySelector(".messages_window");
const chatInput = document.querySelector(".chat_message_input");
let time = new Date();
const formatAmPm = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

const functions =  {
    sendMessageComputer: function (message) {
        let x = document.createElement("div");
        messageWindow.appendChild(x);
        x.classList.add("chat_message_computer");
        let y = document.createElement("p");
        x.appendChild(y);
        y.appendChild(document.createTextNode(message));
        let a = document.createElement("p");
        a.appendChild(document.createTextNode(formatAmPm));
        a.classList.add("time");
        a.style.fontSize = "12px";
        x.appendChild(a);
        chatInput.style.minHeight = "30vh";
    },
    sendMessageUserOnClick: function() {
        if (input.value.length > 0) {
            let a = document.createElement("div");
            a.classList.add("chat_message_user");
            messageWindow.appendChild(a);
            let b = document.createElement("p");
            let c = document.createElement("p");
            c.classList.add("time");
            a.appendChild(b);
            b.appendChild(document.createTextNode(input.value));
            a.appendChild(c);
            c.appendChild(document.createTextNode(formatAmPm));
            c.style.fontSize = "12px";
            chatInput.style.minHeight = "30vh";
            input.value = "";
        }
    },
    sendMessageUserKeyPress: function(event) {
        if (event.which === 13) {
            event.preventDefault();
        };
            if (input.value.length > 0 && event.which === 13) {
                let a = document.createElement("div");
                a.classList.add("chat_message_user");
                messageWindow.appendChild(a);
                let b = document.createElement("p");
                let c = document.createElement("p");
                c.classList.add("time");
                a.appendChild(b);
                b.appendChild(document.createTextNode(input.value));
                a.appendChild(c);
                c.appendChild(document.createTextNode(formatAmPm));
                c.style.fontSize = "12px";
                input.value = "";
                chatInput.style.minHeight = "30vh";
                console.log("Its working!!!");
            }
        }
}

button.addEventListener("click", functions.sendMessageUserOnClick);
input.addEventListener("keypress", functions.sendMessageUserKeyPress);

