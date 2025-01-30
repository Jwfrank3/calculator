let bills = {
    mortgage: 900, // due on the 1st
    chickasaw: 135, // due on the 1st
    comcast: 135, // due on the 6th
    hardeman: 0, // due on 10th
    jCard: 70, // due on 11th
    vCard: 30, // due on 15th
    gamePass: 22, // due on the 16th
    cricket: 135, //due on 17th
    crunchyRoll: 9, // due on the 17th
    carNote: 262, // due on the 18th
    spotify: 14, // due on the 23rd
    adobe: 22, // due on the 23rd
    carInsurance: 211, // due on the 25th
    lifeInsurance: 35, // due on the 25th
    wetfood: 30, // due every week
    catLitter: 26, //every two weeks, fresh step 38 pounds
    trash: 0, // every three months starting in january at $99
    lawn: 0, // due every other week starting on the next years cut
    gas: 100, // every week for cars
    lunch: 100, // every week
    groceries: 200, // every week
    affirm: 72,
    ring: 5,
  };
  
  let accounts = {
    vickiCheck: 960, // 18th & 1st
    myCheck1: 450, // the sucky slow check 10th & 24th
    myCheck2: 550, // speedy check where i can buy groceries early 18th & 31st
    myCheck3: 450, // duplicate of myCheck1
    vickiCheck2: 1070, // duplicate of vickiCheck
  };
  
  const foodGas = bills.groceries + bills.lunch + bills.gas;
  
  function updateValue() {
    const inputJCheck = document.querySelector(".js-input-myCheck1");
    accounts.myCheck1 = Number(inputJCheck.value) || 450;
  
    const inputJCheck2 = document.querySelector(".js-input-myCheck2");
    accounts.myCheck2 = Number(inputJCheck2.value) || 550;
  
    const inputJCheck3 = document.querySelector(".js-input-myCheck3");
    accounts.myCheck3 = Number(inputJCheck3.value) || 450;
  
    const inputVCheck = document.querySelector(".js-input-vickiCheck");
    accounts.vickiCheck = Number(inputVCheck.value) || 1070;
  
    const inputVCheck2 = document.querySelector(".js-input-vickiCheck2");
    accounts.vickiCheck2 = Number(inputVCheck2.value) || 1070;
  
    const inputChickasaw = document.querySelector(".js-input-chickasaw");
    bills.chickasaw = Number(inputChickasaw.value) || 135;
  
    const inputHardeman = document.querySelector(".js-input-hardeman");
    bills.hardeman = Number(inputHardeman.value) || 36;
  
    const inputLawn = document.querySelector(".js-input-lawn");
    bills.lawn = Number(inputLawn.value) || 0;
  
    const inputTrash = document.querySelector(".js-input-trash");
    bills.trash = Number(inputTrash.value) || 0;
  
    const inputJcard = document.querySelector(".js-input-jCard");
    bills.jCard = Number(inputJcard.value) || 82;
  
    const inputVcard = document.querySelector(".js-input-vCard");
    bills.vCard = Number(inputVcard.value) || 30;
  
    const inputCarInsurance = document.querySelector(".js-input-carInsurance");
    bills.carInsurance = Number(inputCarInsurance.value) || 211;
  
    const inputLifeInsurance = document.querySelector(".js-input-lifeInsurance");
    bills.lifeInsurance = Number(inputLifeInsurance.value) || 36;
  }
  
  function totalBills1() {
    updateValue();
    let total =
      bills.mortgage +
      bills.chickasaw +
      bills.comcast +
      bills.hardeman +
      bills.lawn +
      bills.trash;
    let parts = total / 4;
  
    const firstHalf = parts * 2 + bills.cricket + bills.adobe + bills.ring;
    document.querySelector(
      ".js-paragraph-bills"
    ).innerText = `Total Bills = $${total}`;
  
    let firstBudget =
      accounts.myCheck1 + accounts.vickiCheck - foodGas - firstHalf;
  
    document.querySelector(
      ".js-paragraph-parts"
    ).innerText = `Ned's and Kim's part = $${parts}`;
  
    document.querySelector(
      ".js-paragraph-first"
    ).innerText = `My part = $${firstHalf}`;
  
    document.querySelector(
      ".js-paragraph-first-budget"
    ).innerText = `Remaining Budget $${firstBudget}`;
  }
  
  function totalBills2() {
    updateValue();
    const secondHalf =
      bills.jCard +
      bills.vCard +
      bills.carNote +
      bills.carInsurance +
      bills.lifeInsurance +
      bills.gamePass +
      bills.wetfood +
      bills.affirm;
  
    const miniBudget =
      accounts.myCheck2 - foodGas - bills.catLitter - bills.wetfood;
  
    const secondBudget =
      accounts.myCheck3 + accounts.vickiCheck2 - secondHalf - foodGas;
  
    document.querySelector(
      ".second-half"
    ).innerText = `Second Half is $${secondHalf}`;
  
    document.querySelector(
      ".js-paragraph-second-budget"
    ).innerText = `Second Budget is $${secondBudget}`;
  
    document.querySelector(
      ".js-paragraph-mini-budget"
    ).innerText = `Mini Budget is $${miniBudget}`;
  }
  