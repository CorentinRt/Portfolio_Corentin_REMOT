/* ========================================
CONTACT LINKS
======================================== */

const itchLink = document.getElementById("itch-link");
const linkedinLink = document.getElementById("linkedin-link");
const githubLink = document.getElementById("github-link");


itchLink.href = contactData.links.itch;

linkedinLink.href = contactData.links.linkedin;

githubLink.href = contactData.links.github;



/* ========================================
CV
======================================== */

const cvImage = document.getElementById("cv-image");

const cvDownload = document.getElementById("cv-download");


cvImage.src = contactData.cv.image;

cvDownload.href = contactData.cv.download;