let contacts = [
    {
        name: "Tayyaba Khan",
        imgURL: "profile-photo-1.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `909090909093974`,
        email: `tayba2@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Fatima Khan",
        imgURL: "blank-profile.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `909687090909093974`,
        email: `fatima.khan@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Alina Khan",
        imgURL: "profile-photo-2.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `90909090909398990`,
        email: `al.234@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Mariam Khan",
        imgURL: "blank-profile.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `909090909092564656`,
        email: `mariam34@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Amna Khan",
        imgURL: "blank-profile.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `909090909056445`,
        email: `amnakhan@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Hafsa Khan",
        imgURL: "profile-photo-3.jpeg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `90909090909475946`,
        email: `abc123@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Rabbiya Khan",
        imgURL: "blank-profile.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `909090909096743`,
        email: `rabi.kh@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Lyba Khan",
        imgURL: "blank-profile.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `909090909097654`,
        email: `lyba123@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Saad Khan",
        imgURL: "blank-profile.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `909090909043276`,
        email: `saad45@gmail.com`,
        'chat-message': `So many books, so little time`
    }
]

function initialize() {
    let contactList = document.querySelector(".chats-list");

    for (let i = 0; i < contacts.length; i++) {
        contactList.innerHTML += `<div class="chats-list-item" onclick="showChat(${i})">
        <div class="contact-profile-pic" style="background-image: url(images/${contacts[i].imgURL});">

        </div>

        <div class="contact-chat-info">
            <div class="name-section">
                <h5>${contacts[i].name}</h5>
                <h6>Yesterday</h6>
            </div>
            
            <div>
             <p><span>${contacts[i].icon}</span> ${contacts[i].message}</p>
            </div>
        </div>

    </div>`;

    }
}


function showChat(indexNum) {
    document.querySelector("h4").style = `display: none`;
    document.querySelector(".chat-detail").style = `display: flex !important`;
    document.querySelector(".contact-photo").style["background-image"] = `url(images/${contacts[indexNum].imgURL})`;
    document.querySelector(".contact-name").innerHTML = contacts[indexNum].name;
    document.querySelector(".contact-number").innerHTML = `<span class="dial-icon"><i class="fas fa-phone"></i></span> ${contacts[indexNum].number}`;
    document.querySelector(".contact-email").innerHTML = `<span class="email-icon"><i class="far fa-envelope"></i></span> ${contacts[indexNum].email}`;
    document.querySelector(".contact-message").innerHTML = contacts[indexNum]["chat-message"];
}