import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Skills () {

  return (
    <HelmetProvider>
    <section className="skill" id="skills">
        <Helmet>
            <title>Portfolio | Chhatresh Khatri | About</title>
        </Helmet>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h1>My Technology Stack</h1>
                        <div className="techStack-lang">

                            <h3>Languages</h3>

                            <img src="https://img.shields.io/badge/c-1563b1.svg?style=flat&logo=c&logoColor=white" alt="C"/>
                            <img src="https://img.shields.io/badge/c++-004488.svg?style=flat&logo=c%2B%2B&logoColor=white" alt="C++"/>
                            <img src="https://img.shields.io/badge/Java-3a75b0?style=flat&logo=openjdk&logoColor=white" alt="java"/>
                            <img src="https://img.shields.io/badge/MySql-f29111.svg?style=flat&logo=mysql" alt="MySql"/>
                            <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white" alt="HTML5"/>
                            <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white" alt="CSS3"/>
                            <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript"/>

                            <h3>Framework & Libraries</h3>

                            <img src="https://img.shields.io/badge/bootstrap-702cf5.svg?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
                            <img src="https://img.shields.io/badge/ReactJS-282c34.svg?style=flat&logo=react&logoColor=61dafb" alt="ReactJS"/>
                            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB" alt="ExpressJS"/>
                            <img src="https://img.shields.io/badge/Node.js-233056.svg?style=flat&logo=nodedotjs" alt="Node"/>
                            <img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios"/>
                            <img src="https://img.shields.io/badge/React%20Router-CA4245.svg?style=flat&logo=React-Router&logoColor=white" alt="React-router"/>
                            <img src="https://img.shields.io/badge/Redux-764ABC.svg?style=flat&logo=Redux&logoColor=white" alt="React-redux"/>
                            <img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".env"/>

                            <h3>Tools & IDEs</h3>

                            <img src="https://img.shields.io/badge/MongoDB-001e2b.svg?style=flat&logo=mongodb" alt="MongoDB"/>
                            <img src="https://img.shields.io/badge/nodemon-4f4d3f.svg?style=flat&logo=nodemon" alt="nodemon"/>
                            <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=flat&logo=netlify" alt="netlify"/>
                            <img src="https://img.shields.io/badge/render-1f1f1f.svg?style=flat&logo=render" alt="Render"/>
                            <img src="https://img.shields.io/badge/-Back4App-10203a?logo=back4app" alt="Back4App"/>
                            <img src="https://img.shields.io/badge/-Git-f0efe7?logo=git" alt="Git"/>
                            <img src="https://img.shields.io/badge/-GitHUb-161b22?logo=github" alt="GitHub"/>
                            <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase" alt="Firebase"/>
                            <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=flat&logo=Canva&logoColor=white" alt="Canva"/>
                            <img src="https://img.shields.io/badge/Gimp-0e2426.svg?style=flat&logo=gimp&logoColor=white" alt="Gimp"/>
                            <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white" alt="Postman"/>
                            <img src="https://img.shields.io/badge/Cloudflare-1d1d1d?style=flat&logo=cloudflare&logoColor=orange" alt="Cloudflare"/>
                            <img src="https://img.shields.io/badge/AlibabaCloud-2c3134?style=flat&logo=alibabacloud" alt="Alibaba Cloud"/>
                            <img src="https://img.shields.io/badge/GoogleCloud-5f6368?style=flat&logo=googlecloud" alt="Google Cloud"/>
                            <img src="https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=flat&logo=Android-Studio&logoColor=white" alt="Android Studio"/>
                            <img src="https://img.shields.io/badge/VSCode-1f1f1f?logo=visualstudiocode&logoColor=026ec1" alt="VS Code"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </HelmetProvider>
  )
}

export default Skills;
