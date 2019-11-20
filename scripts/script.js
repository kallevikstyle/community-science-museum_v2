// This script makes sure that the 'arrow tips' of the arrow sections are not wider 
// than the main arrow sections.
// The reason for this is that the arrow tips are made out of borders and can not
// have a width set in percentage.

const mainArrowSection = document.querySelector('.main-arrow-section');
let arrowTip = document.querySelector('.tip-arrow-section');

console.log(mainArrowSection.offsetWidth);