<script>
  export default {
    name: 'AdminPortal',
}
</script>

<template>
    <header>
      <h1>Welcome, <span id="username">John Doe</span></h1>
    </header>
    <main>
      <section id="user-list">
        <h2 id="main-heading">Users</h2>
        <form id="user-currency-selector">
            <input type="radio" id="gbp" name="currency" value="GBP">
            <label class="radio-label" for="gbp">GBP</label>
            
            <input type="radio" id="usd" name="currency" value="USD">
            <label class="radio-label" for="usd">USD</label>
        </form>
        <div id="user-list-container">
          <div class="user">
            <div class="user-image">MS</div>
            <div class="user-info">
              <span class="user-name">Mohammed Seleman</span>
            </div>
            <div>
              <span class="user-currency">GBP</span>
            </div>
          </div>
          <div class="user">
            <div class="user-image"><svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="white" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></div>
            <div class="user-info">
              <span class="user-name">User 2</span>
            </div>
            <div>
              <span class="user-currency">USD</span>
            </div>
          </div>
          <div class="user">
            <div class="user-image"></div>
            <div class="user-info">
              <span class="user-name">User 3</span>
            </div>
            <div>
              <span class="user-currency">GBP</span>
            </div>
          </div>
        </div>
      </section>
      <section id="money-transaction">
        <h2 id="send-money-header">Send Money</h2>
        <form id="money-form">
          <span id="send-money">
            <p id="currency-symbol">£</p>
            <input type="number" id="amount" name="amount" placeholder="0">
            <select id="currency" name="currency">
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </span>
          <button type="submit">Send</button>
        </form>
      </section>
      <section id="user-balance">
        <h2>Your Balance</h2>
        <p>Your balance is: <span id="balance">£1000.00</span></p>
      </section>
    </main>
  </template>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    font-family: Sans-serif;
}

header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}

main {
    max-width: 800px;
    margin: 15px auto 160px auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    @media(min-width: 768px){
        padding-left: 0;
        padding-right: 0;
        margin: 10px auto;
    }
}

h1 {
    margin: 0;
    font-size: 24px;
}

h2 {
    font-size: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

input[type="radio"] {
            display: none;
        }
label.radio-label {
    display: inline-block;
    padding: 20px 30px;
    background-color: #ccc;
    cursor: pointer;
    font-weight: 550;
    margin-bottom: 20px;
}
input[type="radio"]:checked + label.radio-label {
    background-color: #007bff; 
    color: #fff;
}
li.user, .user {
    margin-bottom: 10px;
    background: #eee;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 70px;

    @media(min-width: 768px){
        max-width: 600px;
        margin: 0 auto 10px auto;
    }
}

.user-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #007bff;
    margin-right: 10px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

.user-info {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.user-name {
    font-size: 18px;
}

.user-currency{
    font-weight: 600;
    letter-spacing: -0.05rem;
    padding-right: 10px;
}

form {
    margin-top: 10px;
}

label, select, input, button {
    display: block;
    margin: 5px 0;
}

input[type="number"] {
    padding: 5px;
    border: none;
    font-size: 24px;
    width: 200px;
    outline: none;
}

#main-heading {
    @media(min-width: 768px) {
        font-size: 30px;
    }
}

#user-list-container {
    @media(min-width: 768px) {
        width: 750px;
        margin: auto;
    }
}

#send-money {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    height: 50px;
    border-radius: 25px;

    @media(min-width: 768px) {
        width: 400px;
        margin: auto;
    }
}

#money-transaction {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    padding: 20px 10px 40px 10px;
    margin-top: 25px;

    @media(min-width: 768px) {
        width: 550px;
        margin: 25px auto 0 auto;
    }
}

#send-money-header {
    margin: 0 0 30px 0;
}

#currency-symbol {
    font-size: 24px;
}

#currency {
    border: none;
    font-weight: 700;
    outline: none;
}

button {
    background: #333;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
}

button[type="submit"] {
    margin: 20px auto 0 auto;
    background: #0666eb;
    width: 250px;
    border-radius: 20px;
    padding: 12px;
    font-weight: 600;

    &:hover {
        background: #0450b3;
    }
}

#balance {
    font-weight: bold;
}
</style>

