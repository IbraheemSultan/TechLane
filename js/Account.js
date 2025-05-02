const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContent = document.getElementById('tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const tab = button.getAttribute('data-tab');
        loadTab(tab);
      });
    });

    function loadTab(tab) {
      let content = '';
      switch (tab) {
        case 'profile':
          content = `
          <h2>My Profile</h2>
          <div class="form-group">
            <input type="text" placeholder="First Name">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Last Name" >
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email" >
          </div>
          <div class="form-group">
            <input type="text" placeholder="Address" >
          </div>
      <div class="form-group">
        <input type="password" placeholder="Current Password">
      </div>
      <div class="form-group">
        <input type="password" placeholder="New Password">
      </div>
      <div class="form-group">
        <input type="password" placeholder="Confirm New Password">
      </div>
      <button class="btn">Save Changes</button>
   
        `;
          break;
        case 'address':
          content = `
          <h2>Address Book</h2>
          <p>Manage your saved addresses here.</p>
          <div class="form-group">
            <input type="text" placeholder="New Address">
          </div>
          <button class="btn">Add Address</button>
        `;
          break;
        case 'payment':
          content = `
          <h2>Payment Options</h2>
          <p>Manage your credit cards and payment methods.</p>
          <div class="form-group">
            <input type="text" placeholder="Card Number">
          </div>
          <button class="btn">Save Payment Method</button>
        `;
          break;
        case 'returns':
          content = `<h2>My Returns</h2><p>Track your return requests here.</p>`;
          break;
        case 'cancellations':
          content = `<h2>My Cancellations</h2><p>View your cancelled orders here.</p>`;
          break;
        default:
          content = `<h2>My Profile</h2>`;
      }
      tabContent.innerHTML = content;
    }
