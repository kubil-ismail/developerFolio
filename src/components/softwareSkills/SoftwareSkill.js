import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {
  SiExpress,
  SiNextdotjs,
  SiSequelize,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiGraphql
} from "react-icons/si";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.isImage ? (
                  <img
                    src={skills.src}
                    alt="icon"
                    width={45}
                    style={{filter: "grayscale(100%)"}}
                  />
                ) : skills.isIcons ? (
                  skills.icons === "express" ? (
                    <SiExpress color="#9E9E9E" />
                  ) : skills.icons === "next" ? (
                    <SiNextdotjs color="#9E9E9E" />
                  ) : skills.icons === "sequelize" ? (
                    <SiSequelize color="#9E9E9E" />
                  ) : skills.icons === "postgres" ? (
                    <SiPostgresql color="#9E9E9E" />
                  ) : skills.icons === "mysql" ? (
                    <SiMysql color="#9E9E9E" />
                  ) : skills.icons === "php" ? (
                    <SiPhp color="#9E9E9E" />
                  ) : skills.icons === "graphql" ? (
                    <SiGraphql color="#9E9E9E" />
                  ) : (
                    <></>
                  )
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}

                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
