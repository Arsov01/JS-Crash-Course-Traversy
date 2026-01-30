const template = document.createElement("template");
template.innerHTML = `

<style>
  * {
    box-sizing: border-box;
  }
  
  :host {
    display: block;
    width: 100%;
  }
  
  .user-card {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    height: 100%;
    margin-bottom: 10px;
  }
  
  .user-card:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
  
  .avatar-container {
    position: relative;
    flex-shrink: 0;
  }
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #f0f0f0;
    transition: transform 0.3s ease;
  }
  
  .user-card:hover img {
    transform: scale(1.05);
  }
  
  .user-info {
    flex-grow: 1;
  }
  
  h3 {
    color: #2c3e50;
    font-size: 1.4rem;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }
  
  .title {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
    font-weight: 500;
  }
  
  .contact {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .contact-btn {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: none;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .message-btn {
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  .follow-btn {
    background: #f8f9fa;
    color: #2c3e50;
    border: 1px solid #e9ecef;
  }
  
  .contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .message-btn:hover {
    background: linear-gradient(45deg, #764ba2 0%, #667eea 100%);
  }
  
  .follow-btn:hover {
    background: #e9ecef;
  }
  
  /* Status indicator */
  .status {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 15px;
    height: 15px;
    background: #2ecc71;
    border-radius: 50%;
    border: 2px solid white;
  }
</style>
<div class="user-card">
  <img />
  <div>
    <h3></h3>
    <div class="info">
    <p><slot name="email">no email provided </slot></p>
    <p><slot name = "phone"/> </p>
    </div>
    <button id="toggle-info">Hide Info</button>
  </div>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Get attributes from the element
    const name = this.getAttribute("name") || "Unknown User";
    const avatar = this.getAttribute("avatar") || "";

    // Set the content dynamically
    this.shadowRoot.querySelector("h3").textContent = name;
    this.shadowRoot.querySelector("img").src = avatar;
    this.shadowRoot.querySelector("img").alt = name;
  }
}

window.customElements.define("user-card", UserCard);
