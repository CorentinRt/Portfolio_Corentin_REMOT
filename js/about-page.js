/* ========================================
GET ABOUT PAGE
======================================== */

const aboutPage = document.getElementById("about-page");



/* ========================================
ABOUT DATA
======================================== */

const aboutSections = aboutData.sections || [];



/* ========================================
ABOUT SECTIONS
======================================== */

const sectionsHTML = aboutSections

    .map((section, index) => {

        /*
        Every second section is reversed.

        0 → image | text
        1 → text | image
        2 → image | text
        3 → text | image
        */

        const reverseClass = index % 2 !== 0
            ? "about-section-reverse"
            : "";


        /*
        DESCRIPTION
        */

        const descriptionHTML = (section.description || [])

            .map(paragraph => {

                return `
                    <p>
                        ${paragraph}
                    </p>
                `;

            })

            .join("");


        /*
        SECTION HTML
        */

        return `

            <article class="about-section ${reverseClass}">

                <div class="about-media">

                    <img
                        src="${section.media}"
                        alt="${section.title}"
                        loading="lazy"
                    >

                </div>


                <div class="about-content">

                    <h2>
                        ${section.title}
                    </h2>

                    ${descriptionHTML}

                </div>

            </article>

        `;

    })

    .join("");



/* ========================================
BUILD PAGE
======================================== */

document.getElementById("about-content").innerHTML = sectionsHTML;