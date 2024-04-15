document.addEventListener("DOMContentLoaded", function() {
    const collegesGrid = document.getElementById("colleges-grid");
    const showMoreButton = document.getElementById("show-more-button");

    // Array of colleges data with image links
    const colleges = [
        { name: "College 1", image: "https://static.vecteezy.com/system/resources/previews/006/470/647/original/university-education-logo-design-template-free-vector.jpg",  pageUrl: "college1.html" }, 
        { name: "College 2", image: "https://logos-download.com/wp-content/uploads/2017/12/Boston_College_logo.png",pageUrl: "college2.html"},
        {name: "college 3", image: "https://images-workbench.99static.com/781zKiykLE7evexQrXTJ4EUzkKw=/99designs-contests-attachments/32/32483/attachment_32483035",pageUrl: "college3.html"},
        {name: "college 4", image: "https://images-platform.99static.com//HaaQaXVEc4Rzq__ssfVhFxkjGDE=/913x89:1564x740/fit-in/500x500/99designs-contests-attachments/74/74966/attachment_74966709",pageUrl: "college4.html"},
        {name: "college 5", image: "https://images-platform.99static.com//Rac6qBOFiibAT9NlDYycSeP4mqo=/586x258:1397x1069/fit-in/500x500/99designs-contests-attachments/119/119313/attachment_119313135",pageUrl: "college5.html"},
        {name: "college 6", image: "https://images-workbench.99static.com/Mj1PrGGqnrSycbC4eiEJCDmYcvM=/99designs-contests-attachments/33/33466/attachment_33466411",pageUrl: "college6.html"},
        {name: "college 7", image: "https://images-workbench.99static.com/oT08hdvymbhMOozIp3TzdXnInYw=/99designs-contests-attachments/83/83261/attachment_83261558",pageUrl: "college7.html"},
        {name: "college 8", image: "https://images-workbench.99static.com/VWP7c9AKZQ4SK_lO-5vrdA2ffPc=/http://s3.amazonaws.com/projects-files/128/12848/1284843/1853a0ff-7d4e-410e-8f09-d7a7c90d36df.jpg",pageUrl: "college8.html"},
        {name: "college 9", image: "https://images-workbench.99static.com/bErmRMln6IWrs27LW97xeNeyBCw=/99designs-contests-attachments/71/71273/attachment_71273273",pageUrl: "college9.html"},
        {name: "college 10", image: "https://images-workbench.99static.com/jYnbWxbhDFHH4kNyFUdOHLrLrjI=/99designs-contests-attachments/38/38845/attachment_38845716",pageUrl: "college10.html"},
        {name: "college 11", image: "https://images-workbench.99static.com/UakOFPaPW4tN0mjUxhZut_cHHEQ=/http://s3.amazonaws.com/projects-files/32/3233/323387/327fc558-6181-42cb-9e34-d6d010c52c71.jpg",pageUrl: "college11.html"},
        {name: "college 12", image: "https://images-workbench.99static.com/TpRIFHcNj8KBc6ZxtYDSnTcGXKY=/http://s3.amazonaws.com/projects-files/169/16943/1694332/288be251-311a-4fed-950a-9cc1eb997d91.png",pageUrl: "college12.html"}
        // Add more colleges data here...
    ];

    let lastIndexDisplayed = 0;

    // Function to create college cards for a given range of colleges
    function createCollegeCards(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            const college = colleges[i];
            if (!college) return; // Break loop if no more colleges to display

            const collegeCard = document.createElement("div");
            collegeCard.classList.add("college-card");

            const collegeImage = document.createElement("img");
            collegeImage.src = college.image;
            collegeImage.alt = college.name;
            collegeImage.addEventListener("click", function() {
                // Redirect to the college page when the image is clicked
                window.location.href = college.pageUrl;
            });

            collegeCard.appendChild(collegeImage);
            collegesGrid.appendChild(collegeCard);
        }
    }

    // Function to show more colleges
    function showMoreColleges() {
        const nextIndex = lastIndexDisplayed + 6; // Show next 6 colleges
        createCollegeCards(lastIndexDisplayed, nextIndex);
        lastIndexDisplayed = nextIndex;

        // Hide the "Show More" button if all colleges have been displayed
        if (lastIndexDisplayed >= colleges.length) {
            showMoreButton.style.display = "none";
        }
    }

    // Create college cards for the initial 6 colleges
    createCollegeCards(0, 6);
    lastIndexDisplayed = 6; // Update last index displayed

    // Event listener for the "Show More" button
    showMoreButton.addEventListener("click", showMoreColleges);
});