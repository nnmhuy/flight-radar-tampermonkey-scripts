// ==UserScript==
// @name         Alarm reminder
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flightradar24.com
// @grant        none
// @downloadURL  https://github.com/nnmhuy/flight-radar-tampermonkey-scripts/raw/main/Alarm%20reminder.user.js
// @updateURL    https://github.com/nnmhuy/flight-radar-tampermonkey-scripts/raw/main/Alarm%20reminder.user.js
// ==/UserScript==


// test auto update
(function() {
    'use strict';
    var audio = new Audio('https://www.fesliyanstudios.com/soundeffects/2019-05-28/Exports/Originals/Alarm-Fast-High-Pitch-B1-www.fesliyanstudios.com-www.fesliyanstudios.com.mp3')


    const alarmSound = () => {
        audio.play();
    }

    const alarm = (msg) => {
        alarmSound();
        alert(msg);
    }


    // for every minute
    setInterval(() => {
        const date = new Date();
        let day = date.getDay();
        let hour = date.getHours();
        let minutes = date.getMinutes();

         // kiểm tra sáng
        if (hour == 4 && minutes == 29) {
            alarm("Kẻng kiểm tra sáng");
        }

        // báo thức sáng (t2-t6: 5h30; t7, CN: 06h00)
        if (day == 0 || day == 6) {
            if (hour == 5 && minutes == 59) alarm("Kẻng báo thức");
        } else {
            if (hour == 5 && minutes == 29) alarm("Kẻng báo thức");
        }

        // bắt đầu giờ làm việc sáng (t2-t7: 07h00)
        if (day != 0) {
            if (hour == 6 && minutes == 59) alarm("Kẻng bắt đầu giờ làm việc");
        }

        // hết giờ làm việc sáng (t2-t7: 11h00)
        if (day != 0) {
            if (hour == 10 && minutes == 59) alarm("Kẻng hết giờ làm việc");
        }

        // báo thức chiều (t2-t6: 13h30; t7, CN: 14h00)
        if (day == 0 || day == 6) {
            if (hour == 13 && minutes == 59) alarm("Kẻng báo thức");
        } else {
            if (hour == 13 && minutes == 29) alarm("Kẻng báo thức");
        }

        // giao ban (t2-t5: 16h00; t6: 15h00)
        if (day >= 1 && day <= 4) {
            if (hour == 15 && minutes == 59) alarm("Kẻng giao ban");
        } else if (day == 5) {
            if (hour == 14 && minutes == 59) alarm("Kẻng giao ban");
        }

        // bắt đầu giờ làm việc chiều (t2-t6: 13h45)
        if (day >= 1 && day <= 5) {
            if (hour == 13 && minutes == 44) alarm("Kẻng bắt đầu giờ làm việc");
        }

        // hết giờ làm việc chiều (t2-t6: 17h45)
        if (day >= 1 && day <= 5) {
            if (hour == 17 && minutes == 44) alarm("Kẻng hết giờ làm việc");
        }

        // kẻng 19h00 cn,t2-t6
        if (day != 6) {
            if (hour == 18 && minutes == 59) alarm("Kẻng xem thời sự");
        }

        // điểm danh/điểm quân số
        if (hour == 20 && minutes == 44) {
            alarm("Kẻng điểm danh/điểm quân số");
        }

        // ngủ
        if (hour == 21 && minutes == 29) {
            alarm("Kẻng ngủ");
        }
    }, 60000)
})();
