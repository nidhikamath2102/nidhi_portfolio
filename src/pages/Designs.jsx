import React from "react";
import Title from "../components/title";
import canva1 from "../assets/canva1.png";
import canva2 from "../assets/canva2.png";
import canva3 from "../assets/canva3.png";
import canva4 from "../assets/canva4.png";
import canva5 from "../assets/canva5.png";
import canva6 from "../assets/canva6.png";
import canva7 from "../assets/canva7.png";
import canva8 from "../assets/canva8.png";
import canva9 from "../assets/canva9.png";
import canva10 from "../assets/canva10.png";
import canva11 from "../assets/canva11.png";
import canva12 from "../assets/canva12.png";
import canva13 from "../assets/canva13.png";
import canva14 from "../assets/canva14.png";
import canva15 from "../assets/canva15.png";
import canva16 from "../assets/canva16.png";        
import canva17 from "../assets/canva17.png";
import canva18 from "../assets/canva18.png";
import canva19 from "../assets/canva19.png";
import canva20 from "../assets/canva20.png";
import canva21 from "../assets/canva21.png";
import canva22 from "../assets/canva22.png";
import canva23 from "../assets/canva23.png";
import canva24 from "../assets/canva24.png";

const designLinks = [
    { name: "Holi Event", url: "https://www.canva.com/design/DAGA8HR1W4Q/VZgi9aHx-HjAmvHrvNJECQ/edit?utm_content=DAGA8HR1W4Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva1 },
    { name: "Wellness Wednesday", url: "https://www.canva.com/design/DAF-lv8dA4w/vGDWyivBot9QGbiVEMbB3Q/edit?utm_content=DAF-lv8dA4w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva2 },
    { name: "Gratitude Practice", url: "https://www.canva.com/design/DAGDRCnAUVI/FQOotkslJXe7sktMy0f2lw/edit?utm_content=DAGDRCnAUVI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva3 },
    { name: "Stress Awareness Event", url: "https://www.canva.com/design/DAGC1c93B40/13fZD7lyQwn3XWR6BuC1zw/edit?utm_content=DAGC1c93B40&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva4 },
    { name: "Therapy Dogs Meet (Eli & Twix)", url: "https://www.canva.com/design/DAGDRVdZtRU/rM-Bj5KN99XouJPrZA5fTQ/edit?utm_content=DAGDRVdZtRU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva5 },
    { name: "De-stress Event", url: "https://www.canva.com/design/DAF6Fa3kKH0/H0Nh1oYKjcNKmAJhUYqqOA/edit?utm_content=DAF6Fa3kKH0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva6 },
    { name: "Loyalty Card", url: "https://www.canva.com/design/DAGNH94x_J0/-6M4JKDvGeBvwhsNUUprtw/edit?utm_content=DAGNH94x_J0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva7 },
    { name: "Appointment Flyer", url: "https://www.canva.com/design/DAGObcDbhdw/a2B1akTVnbnzn1geKeS6nA/edit?utm_content=DAGObcDbhdw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva8 },
    { name: "Guided Meditation", url: "https://www.canva.com/design/DAGPvGZE0zc/bjxvPt7gFHLxAcbSzPfN7Q/edit?utm_content=DAGPvGZE0zc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva9 },
    { name: "Refresh & Relax with Eli", url: "https://www.canva.com/design/DAGNAmTGSYo/6PD0fmM-IUG7ZteNuS5APg/edit?utm_content=DAGNAmTGSYo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva10 },
    { name: "Serenity Space Flyer", url: "https://www.canva.com/design/DAGRJn2ipLY/zkM4uk-mAGB0TwU1CU4QRA/edit?utm_content=DAGRJn2ipLY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva11 },
    { name: "Feedback Form", url: "https://www.canva.com/design/DAGRFoHlYJc/_yMyM1h5V314B9XHUFRWdw/edit?utm_content=DAGRFoHlYJc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva12 },
    { name: "Spring Walk", url: "https://www.canva.com/design/DAGBhlFmmyQ/-M-kMenGUZkxekN3yPZLHg/edit?utm_content=DAGBhlFmmyQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva13 },
    { name: "Unwind and Recharge", url: "https://www.canva.com/design/DAGA1s8FTQw/-xUGV7DzYHnq_wfCglpPOg/edit?utm_content=DAGA1s8FTQw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva14 },
    { name: "Mindfulness + Sea shell painting", url: "https://www.canva.com/design/DAGTSCLwJtU/nl9Otf33fUFj6ORVKFGcfQ/edit?utm_content=DAGTSCLwJtU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva15 },
    { name: "Meet & Greet with Eli", url: "https://www.canva.com/design/DAGJLQc907g/Xvfl_lez-eTdXQGB0lbJIA/edit?utm_content=DAGJLQc907g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva16 },
    { name: "De-stress + Mindfulness", url: "https://www.canva.com/design/DAGS6isEyP0/wzyeEsw8RAxoLwxJ_a0QXQ/edit?utm_content=DAGS6isEyP0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva17 },
    { name: "Refresh with Therapy dog", url: "https://www.canva.com/design/DAGT8YQnJQ8/BQgwlGpSywtY5-jwHIYK6Q/edit?utm_content=DAGT8YQnJQ8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva18 },
    { name: "De-stress & Relax with Eli", url: "https://www.canva.com/design/DAGW_5ipL9E/2C0sUeyyeA7u5S4aD23FRA/edit?utm_content=DAGW_5ipL9E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva19 },
    { name: "Chillax with Meditation", url: "https://www.canva.com/design/DAGY8UIo2x8/OiNBtqFHI_M6M9C_s_B3Ww/edit?utm_content=DAGY8UIo2x8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva20 },
    { name: "Inner Peace Club", url: "https://www.canva.com/design/DAGNAQb2Ddk/WnPtcskDaFfji4XkyjnjBA/edit?utm_content=DAGNAQb2Ddk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva21 },
    { name: "Relax with Smith & Eli", url: "https://www.canva.com/design/DAGd5ei6Q1I/2lrtuF9VBRIKirp0-_dlKg/edit?utm_content=DAGd5ei6Q1I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva22 },
    { name: "Mindfulness + Therapy Dogs", url: "https://www.canva.com/design/DAGfCuivE7k/UA63zFGvtAUNNYMyq4Jg8g/edit?utm_content=DAGfCuivE7k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva23 },
    { name: "Lunch Invite", url: "https://www.canva.com/design/DAGfyxv-7ew/5dPmxn4YzTnYadI62aXSOA/edit?utm_content=DAGfyxv-7ew&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", imageUrl: canva24 },
];

function Designs() {
    return (
      <div className="w-full flex flex-col justify-center items-start p-6">
        <Title title1={"My"} title2={"Designs"} />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {designLinks.map((design, index) => (
            <a
              key={index}
              href={design.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
                <img src={design.imageUrl} alt={design.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-85 flex items-center justify-center">
                  <span className="text-gray-300 text-center text-xl transform -rotate-45">{design.name}</span>
                </div>
            </a>
          ))}
        </div>
      </div>
    );
}

export default Designs;