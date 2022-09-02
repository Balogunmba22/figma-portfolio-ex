
 const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'ghostwhite';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            let scroll = window.pageYOffset;
            if (scroll < 300) {
                body.style.backgroundColor = 'ghostwhite';
            } else if (scroll >= 300 && scroll < 600) {
                body.style.backgroundColor = '#f5f9f0';
            } else if (scroll >= 600 && scroll < 1200) {
                body.style.backgroundColor = 'linen'
            } else if (scroll >= 1200 && scroll < 1800) {
                body.style.backgroundColor = '#ebf9f4';
            } else if (scroll >= 1800 && scroll < 3000) {
                body.style.backgroundColor = '#f0f2f5';
            } else {
                body.style.backgroundColor = '#2c2d36';
            }
        }