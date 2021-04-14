<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/css/lp_style.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/css/lp_animation.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/css/lp_flickity.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="<?php echo get_template_directory_uri()?>/assets/js/lp_main.js"></script>
    <script src="<?php echo get_template_directory_uri()?>/assets/js/lp_menu_btn.js"></script>
    <script src="<?php echo get_template_directory_uri()?>/assets/js/lp_flickity.pkgd.js"></script>
    <title>Document</title>
</head>
<body>
    <header id="top">
        <div class="content header">
            <a href="#" rel="noopener noreferrer"><img src="<?php echo get_template_directory_uri()?>/assets/lp_image/logo.png" alt=""></a>
            <div class="header-menu">
                <nav>
                    <div class="navbtn"><a href="#service"><span class="nav_text">サービス内容</span></a></div>
                    <div class="navbtn"><a href="#case"><span class="nav_text">導入事例</span></a></div>
                    <div class="navbtn"><a href="#rate"><span class="nav_text">料金プラン</span></a></div>
                    <div class="navbtn"><a href="#faq"><span class="nav_text">FAQ</span></a></div>
                    <div class="navbtn"><a href=""><span class="nav_text">運営会社</span></a></div>
                </nav>
                <div class="header-btn-container">
                    <a href="<?php echo get_site_url()?>/sales/contact-form/" class="header-contact-btn">無料相談</a>
                    <a href="<?php echo get_site_url()?>/request/document/" class="header-document-btn">資料請求</a>
                </div>
            </div>
            <div class="dropdown-btn">
                <div class="menu_btn" onclick="event.stopPropagation(); myFunction(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#service"><span class="a-border">サービス内容</span></a>
                    <a href="#case"><span class="a-border">導入事例</span></a>
                    <a href="#rate"><span class="a-border">料金プラン</span></a>
                    <a href="#faq"><span class="a-border">FAQ</span></a>
                    <a href=""><span class="a-border">運営会社</span></a>
                </div>
            </div>
            
        </div>
    </header>