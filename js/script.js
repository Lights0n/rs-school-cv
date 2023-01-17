
// https://github.com/eKoopmans/html2pdf.js#getting-started
const saveBtn = document.querySelector('#download-pdf');
const donloadWrapper = document.body.cloneNode(true);
donloadWrapper.querySelector('#projects').remove();
console.log(donloadWrapper);
saveBtn.addEventListener('click', () => {


  var opt = {
    filename: 'Front-end developer resume.pdf',

  };
  // html2pdf().from(document.body).set(opt).save();

  // html2pdf().from(donloadWrapper).save();
  html2pdf().from(document.body).set(opt).save();

})



