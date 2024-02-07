// This object has methods that produce HTML
// - These methods are passed data used to produce the HTML
// - In this case, they are passed the model

const chatWeb = {
  // chatPage() returns the HTML for the page
  // it calls the other methods to generate the HTML for different sections
  chatPage: function(chat) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="/style.css">
        </head>
        <body>
          <div id="chat-app">
            ${chatWeb.getUserList(chat)}
            ${chatWeb.getMessageList(chat)}
            ${chatWeb.getOutgoingSection(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      Object.values(chat.messages).map(message => `
    <li>
      <div class="message">
        <div class="sender-info">
          <img class="avatar" alt="avatar of amit" src="images/avatar-${message.sender}.jpg"/>
          <span class="username">${message.sender}</span>
        </div>
        <div class="sender-message"> 
          <p class="message-text">${message.text}</p>
        </div>
      </div>
    </li>
  `).join('') +
      `</ol>`;
  },

  getUserList: function(chat) {
    return `<ul class="users">` +
      Object.values(chat.users).map(user => `
        <li>
          <div class="user">
            <span class="username">${user}</span>
          </div>
        </li>
      `).join('') +
      `</ul>`;
  },

  getOutgoingSection: function() {
    return `
    <div class="outgoing">
        <form class="message-area" action="/chat" method="POST">
          <input type="hidden" name="username" value="meow">
          <div class="text"><input name="text" class="to-send" placeholder="Enter message to send"/></div>
          <div class="submit"><button type="submit">Send</button></div>
        </form>
      </div>
    `
  }
};

module.exports = chatWeb;
