<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delta Abbott | UX/UI Designer</title>
    <style>
        /* General Styles */
        body {
            font-family: 'Lato', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #FFF4E6; /* Pastel Cream Background */
            color: #2D2D2D;
        }

        h1, h2, p {
            margin: 0;
            padding: 0;
        }

        /* Navigation Bar */
        nav {
            background-color: #FF6C65;
            color: white;
            padding: 10px 0;
            position: sticky;
            top: 0;
            z-index: 10;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: flex-start;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            margin: 0 20px;
        }

        nav ul li a {
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: 18px;
            position: relative;
        }

        /* Hover Effect for Navigation Links */
        nav ul li a:hover {
            color: #FFD166;
        }

        nav ul li a::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: transparent;
            transition: all 0.3s ease;
        }

        /* Specific Color Hover for Each Page */
        .about-link:hover::after {
            background-color: #FF6C65; /* Red for About */
        }

        .contact-link:hover::after {
            background-color: #A5D6A7; /* Green for Contact */
        }

        .designs-link:hover::after {
            background-color: #B39DDB; /* Purple for Designs */
        }

        .case-studies-link:hover::after {
            background-color: #FFD166; /* Yellow for Case Studies */
        }

        /* Hero Section */
        .hero {
            display: flex;
            flex-wrap: wrap;
            padding: 80px 20px;
            justify-content: flex-start;
            align-items: center;
            background-color: #FFFBF4;
        }

        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            color: #FF6C65;
            width: 60%;
            padding-left: 50px;
        }

        .hero h2 {
            font-size: 24px;
            color: #2D2D2D;
            width: 50%;
            padding-left: 50px;
        }

        .cta-button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 30px;
            background-color: #FF6C65;
            color: white;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            background-color: #FFD166;
            transform: scale(1.1); /* Enlarges the button on hover */
        }

        /* Section Layout */
        .content-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 60px 20px;
        }

        .content-section .left,
        .content-section .right {
            width: 48%;
        }

        .content-section .left {
            background-color: #72E0E2;
            padding: 20px;
        }

        .content-section .right {
            background-color: #FFD166;
            padding: 20px;
        }

        /* Footer */
        footer {
            background-color: #FF6C65;
            color: white;
            text-align: center;
            padding: 20px 0;
        }
    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="#" class="home-link">Home</a></li>
            <li><a href="#about" class="about-link">About</a></li>
            <li><a href="#designs" class="designs-link">Designs</a></li>
            <li><a href="#case-studies" class="case-studies-link">Case Studies</a></li>
            <li><a href="#contact" class="contact-link">Contact</a></li>
        </ul>
    </nav>

    <div class="hero">
        <h1>Delta Abbott</h1>
        <h2>A UX/UI Designer creating epic + cool user experiences</h2>
        <a href="#work" class="cta-button">See My Work</a>
    </div>

    <div class="content-section">
        <div class="left">
            <h2>About Me</h2>
            <p>I’m a UX Designer with 5 years of experience as a freelance graphic designer. My creativity and passion for connecting with people make me an effective collaborator...</p>
        </div>
        <div class="right">
            <h2>My Work</h2>
            <p>Here is a collection of the designs I’ve worked on. Check out the variety of creative work that shows my range of skills in UX/UI design...</p>
        </div>
    </div>

    <footer>
        <p>© 2025 Delta Abbott | UX/UI Designer</p>
    </footer>
</body>
</html>
