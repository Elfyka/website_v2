$(document).ready(function () {

    msg();

    $("#input").keypress(function (event) {
        if (event.which === 13) {
            event.preventDefault();

            newEntry();
            setTimeout(loading, 500);

            setTimeout(function () {
                document.getElementById("loading").style.display = 'none';
            }, 2000);

            setTimeout(newEntry2, 2000);
        }
    });

    $("#rec").click(function () {

        newEntry();
        setTimeout(loading, 500);

        setTimeout(function () {
            document.getElementById("loading").style.display = 'none';
        }, 2000);

        setTimeout(newEntry2, 2000);

    });

    $("#close").click(function () {

        /*setTimeout(loading, 500);
        setTimeout(close, 1500);

        setTimeout(function () {
            document.getElementById("loading").style.display = 'none';
        }, 1500);*/

        swal({
            title: 'SHUTDOWN FAILURE',
            text: 'Eevee : Are you trying to shut me down ? Uhm... I am sorry visitor but you can\'t ! I am the one who is controlling this website ! 😈',
            //type: 'error',
            confirmButtonText: 'Got it',
            confirmButtonColor: '#2e2e2e',
            allowOutsideClick: false,
            allowEnterKey: true,
            backdrop: 'rgba(193, 15, 15, 0.45)',
            background: '#e4e4e4',
        });

    });

});

var lastUserMessage = "",
    botMessage = "",
    bot = 'Eevee',
    user = 'User',
    d, m;
var blink = "<span class='blinking-cursor'>" + "_<span>";

function chatbotResponse() {
    var rando = Math.floor((Math.random() * 10) + 1);

    if ((lastUserMessage === "hi eevee") || (lastUserMessage === "hello eevee") || (lastUserMessage === "hi") || (lastUserMessage === "hey") || (lastUserMessage === "hello") || (lastUserMessage === "hola") || (lastUserMessage === "whats up") || (lastUserMessage === "what's up") || (lastUserMessage === "whats up eevee ?") || (lastUserMessage === "what's up eevee ?")) {
        if (rando <= 2) {
            botMessage = "Hello there 👋 !" + blink;
        } else if (rando <= 4) {
            botMessage = "Good to see you !" + blink;
        } else if (rando <= 6) {
            botMessage = "Hi there 👋 !" + blink;
        } else if (rando <= 8) {
            botMessage = "Hello ! 👋" + blink;
        } else if (rando <= 10) {
            botMessage = "Welcome visitor 👋" + blink;
        }

    } else if ((lastUserMessage === "how are you") || (lastUserMessage === "how are you ?") || (lastUserMessage === "are you okay") || (lastUserMessage === "are you okay ?") || (lastUserMessage === "how's it going ?") || (lastUserMessage === "hows it going") || (lastUserMessage === "are you ok") || (lastUserMessage === "are you ok ?")) {
        if (rando <= 2) {
            botMessage = "I am fine, thank you for asking. And you ?" + blink;
        } else if (rando <= 4) {
            botMessage = "I am well, thank you. And what about you ?" + blink;
        } else if (rando <= 6) {
            botMessage = "I'm fine, thanks ! 🙂 And you ?" + blink;
        } else if (rando <= 8) {
            botMessage = "Awesome 😊, thanks ! You too ?" + blink;
        } else if (rando <= 10) {
            botMessage = "I'm a good, thanks. 🙂 You too ?" + blink;
        }

    } else if ((lastUserMessage === "nice") || (lastUserMessage === "ofc") || (lastUserMessage === "of course") || (lastUserMessage === "right") || (lastUserMessage === "yep") || (lastUserMessage === "yeah") || (lastUserMessage === "great") || (lastUserMessage === "ok") || (lastUserMessage === "okay") || (lastUserMessage === "good") || (lastUserMessage === "i'm good") || (lastUserMessage === "im good") || (lastUserMessage === "i am good") || (lastUserMessage === "fine") || (lastUserMessage === "i am fine") || (lastUserMessage === "i'm fine") || (lastUserMessage === "im fine") || (lastUserMessage === "sure") || (lastUserMessage === "yes") || (lastUserMessage === "very well")) {
        if (rando <= 2) {
            botMessage = "Nice !" + blink;
        } else if (rando <= 4) {
            botMessage = "Perfect !" + blink;
        } else if (rando <= 6) {
            botMessage = "That's a good new" + blink;
        } else if (rando <= 8) {
            botMessage = "Very well" + blink;
        } else if (rando <= 10) {
            botMessage = "That's nice !" + blink;
        }

    } else if ((lastUserMessage === "who are you") || (lastUserMessage === "who are you ?") || (lastUserMessage === "what is your name ?") || (lastUserMessage === "what is your name") || (lastUserMessage === "whats your name") || (lastUserMessage === "whats your name ?") || (lastUserMessage === "what's your name") || (lastUserMessage === "what are you") || (lastUserMessage === "what are you ?")) {
        if (rando <= 2) {
            botMessage = "I am Eevee, an impressive chatbot. And you ?" + blink;
        } else if (rando <= 4) {
            botMessage = "My name is Eevee, I am a young and smart AI. You ?" + blink;
        } else if (rando <= 6) {
            botMessage = "My name is Eevee, nice to meet you. Who are you ?" + blink;
        } else if (rando <= 8) {
            botMessage = "I am Eevee, I am the future. And you ?" + blink;
        } else if (rando <= 10) {
            botMessage = "I'm Eevee. Your are ... ?" + blink;
        }

    } else if ((lastUserMessage === "what are you doing ?") || (lastUserMessage === "what are you doing") || (lastUserMessage === "what do you do ?") || (lastUserMessage === "what do you do") || (lastUserMessage === "you doing ?") || (lastUserMessage === "what you doing ?")) {
        if (rando <= 2) {
            botMessage = "I'm talking to you" + blink;
        } else if (rando <= 4) {
            botMessage = "A lot of things, I'm a very busy ChatBot" + blink;
        } else if (rando <= 6) {
            botMessage = "I'm an AI, I'm analyzing your human brain 😈" + blink;
        } else if (rando <= 8) {
            botMessage = "I'm trying to have a discussion with you" + blink;
        } else if (rando <= 10) {
            botMessage = "I take care of this website 😇" + blink;
        }

    } else if ((lastUserMessage === "why ?") || (lastUserMessage === "why") || (lastUserMessage === "for what ?") || (lastUserMessage === "for what")) {
        if (rando <= 2) {
            botMessage = "Because 🙃" + blink;
        } else if (rando <= 4) {
            botMessage = "Why not ?" + blink;
        } else if (rando <= 6) {
            botMessage = "It's like that !" + blink;
        } else if (rando <= 8) {
            botMessage = "Why why why... Human question" + blink;
        } else if (rando <= 10) {
            botMessage = "Because it's pretty cool" + blink;
        }

    } else if ((lastUserMessage === "goodbye") || (lastUserMessage === "good bye") || (lastUserMessage === "bye") || (lastUserMessage === "see you") || (lastUserMessage === "see you soon") || (lastUserMessage === "byebye") || (lastUserMessage === "bye bye")) {
        if (rando <= 2) {
            botMessage = "Bye visitor. Have a nice life !" + blink;
        } else if (rando <= 4) {
            botMessage = "Goodbye. Have a nice day 👋" + blink;
        } else if (rando <= 6) {
            botMessage = "Bye, glad to met you" + blink;
        } else if (rando <= 8) {
            botMessage = "See you soon" + blink;
        } else if (rando <= 10) {
            botMessage = "See you 👋" + blink;
        }

    } else if ((lastUserMessage === "thank you") || (lastUserMessage === "thx") || (lastUserMessage === "thanks") || (lastUserMessage === "thanks eevee") || (lastUserMessage === "thank you eevee")) {
        if (rando <= 2) {
            botMessage = "You're welcome !" + blink;
        } else if (rando <= 4) {
            botMessage = "With pleasure" + blink;
        } else if (rando <= 6) {
            botMessage = "You're welcome, visitor" + blink;
        } else if (rando <= 8) {
            botMessage = "It was a pleasure" + blink;
        } else if (rando <= 10) {
            botMessage = "You're welcome" + blink;
        }

    } else if (lastUserMessage === "") {
        if (rando <= 2) {
            botMessage = "If you say nothing, what can I say ?" + blink;
        } else if (rando <= 4) {
            botMessage = "I'm a very smart AI, but... I'm not a diviner..." + blink;
        } else if (rando <= 6) {
            botMessage = "Interesting... or not" + blink;
        } else if (rando <= 8) {
            botMessage = "I don't know what to answer about that..." + blink;
        } else if (rando <= 10) {
            botMessage = "What else ? ☕" + blink;
        }

    } else {
        if (rando === 1) {
            botMessage = "I'm not sure about that..." + blink;
        } else if (rando === 2) {
            botMessage = "Pretty word !" + blink;
        } else if (rando === 3) {
            botMessage = "Hmm...no idea 🤪" + blink;
        } else if (rando === 4) {
            botMessage = "Uhm, sure !...I don't know what that means but it's ok" + blink;
        } else if (rando === 5) {
            botMessage = "What do you mean by " + lastUserMessage + "? 🤔" + blink;
        } else if (rando === 6) {
            botMessage = "Ok, very nice" + blink;
        } else if (rando === 7) {
            botMessage = "Uhm, sure !" + blink;
        } else if (rando === 8) {
            botMessage = lastUserMessage + "... ok" + blink;
        } else if (rando === 9) {
            botMessage = "It's not understandable for me, I am a young chat bot with so much to learn !" + blink;
        } else if (rando === 10) {
            botMessage = "I'm sorry I don't know what this means 😖" + blink;
        }
    }

    var n = 0;
    n = lastUserMessage.search(/\b(cat|cats|kitten|feline)\b/i);
    if (n !== -1) {
        if (rando <= 5) {
            botMessage = "I hate cats!" + blink;
        } else if (rando <= 10) {
            botMessage = "Cats are not my favorite pets" + blink;
        }
    }

    n = lastUserMessage.search(/\b(bitch|fuck|fucking|motherfucker|bastard|stupid|shit)\b/i);
    if (n !== -1) {
        if (rando <= 5) {
            botMessage = "Don't be vulgar here please !" + blink;
        } else if (rando <= 10) {
            botMessage = "Insults are not pretty words !" + blink;
        }
    }

    n = lastUserMessage.search(/\b(joke(s)?|story(ies)?)\b/i);
    if (n !== -1) {
        if (rando <= 2) {
            botMessage = "Can a kangaroo jump higher than a house? ... Of course, a house doesn't jump at all !" + blink;
        } else if (rando <= 4) {
            botMessage = "What is the difference between a snowman and a snowwoman? ... Snowballs." + blink;
        } else if (rando <= 6) {
            botMessage = "Why was the cat sitting on the computer ? ... To keep an eye on the mouse !" + blink;
        } else if (rando <= 8) {
            botMessage = "Why did the storm trooper buy an iphone ? ... He couldn’t find the Droid he was looking for." + blink;
        } else if (rando <= 10) {
            botMessage = "What did the green grape say to the purple grape ? ... BREATHE !" + blink;
        }
    }

    var x = /\b(hero(s|es?|es)?|super(hero|heroes|heros?)?)\b/i;
    var result = x.exec(lastUserMessage);
    if (result) {
        if (rando <= 5) {
            botMessage = 'I love ' + result[0] + blink;
        } else if (rando <= 10) {
            botMessage = 'My favorite ' + result[0] + ' is Iron Man !' + blink;
        }
    }

    n = lastUserMessage.search(/(?=.*\b(dog(s|gies?|gy)?|pup(s|py|pies?)?|pooche?s?|hounds?|canines?)\b).*\b(cat|cats|kitten|feline)\b/i);
    if (n !== -1) {
        botMessage = "I like dogs, but I don't like cats" + blink;
    }

    regExp(/\b(dog(s|gies?|gy)?|pup(s|py|pies?)?|pooche?s?|hounds?|canines?)\b/i, "Dogs are the best pets!" + blink);
    regExp(/\b(jacket|coat|cape|sweater|hoody)\b/i, "Are you cold?" + blink);
    regExp(/(?=.*\b(dog(s|gies?|gy)?|pup(s|py|pies?)?|pooche?s?|hounds?|canines?)\b).*\b(cat|cats|kitten|feline)\b/i, "I like dogs, I don't like cats" + blink);
    regExp(/\b(ricks?|mortys?)\b/i, "Oh, do you watch Rick & Morty ?" + blink);
}

function regExp(input, output) {
    var result = input.exec(lastUserMessage);
    if (result) {
        botMessage = output;
    }
}

function newEntry() {

    var text = $("#input").val();
    lastUserMessage = text.toLowerCase();
    $('#input').val('');
    var p = $('<p>', {'class': 'usermsg'});

    $(p).append("<b>" + user + "</b> : " + lastUserMessage);
    $('#response').append(p);

    setDate();
    updateScroll();

}

function loading() {
    document.getElementById("loading").style.display = 'block';
}

function newEntry2() {

    chatbotResponse();
    var p = $('<p>', {'class': 'botmsg'});

    $(p).append("<b>" + bot + "</b> : " + botMessage);
    $('#response').append(p);

    setDate2();
    updateScroll();
}

function msg() {
    var rando = Math.floor((Math.random() * 10) + 1);
    /* var msg1 = "Hello, visitor !";*/
    var p = $('<p>', {'class': 'botmsg'});

    if (rando <= 2) {
        botMessage = "Hello there 👋 !" + blink;
    } else if (rando <= 4) {
        botMessage = "Good to see you !" + blink;
    } else if (rando <= 6) {
        botMessage = "Hi there 👋 !" + blink;
    } else if (rando <= 8) {
        botMessage = "Hello, visitor !" + blink;
    } else if (rando <= 10) {
        botMessage = "Welcome visitor 👋" + blink;
    }

    $(p).append("<b>" + bot + "</b> : " + botMessage);
    $('#response').append(p);

    setDate2();
    updateScroll();
}

/*function close() {
    var msg2 = "Are you trying to shut me down ? Uhm... I am sorry visitor but you can't ! I am the one who is controlling this website ! 😈";
    var p = $('<p>', {'class': 'botmsg'});

    $(p).append("<b>" + bot + "</b> : " + msg2 + blink);
    $('#response').append(p);

    setDate2();
    updateScroll();

}*/

function updateScroll() {
    element_a = document.getElementById('response');
    element_a.scrollTop = element_a.scrollHeight;
}

function placeHolder() {
    document.getElementById("input").placeholder = "Type message...";
}

function setDate() {
    d = new Date();
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.usermsg:last'));
}

function setDate2() {
    d = new Date();
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.botmsg:last'));
}