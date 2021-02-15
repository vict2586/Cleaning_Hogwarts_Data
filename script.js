
"use strict";

document.addEventListener("DOMContentLoaded", ListAllStudents);

let jsonObject;

// -------------------------------------------------------------------------------------------------------- //

// fetch info from json
async function ListAllStudents() {
  console.log("Done");

  const AllStudents = [];

  const url = "https://petlatkea.dk/2021/hogwarts/students.json";

  const jsonData = await fetch(url);

  jsonObject = await jsonData.json();

  ShowStudents(jsonObject);
};

// -------------------------------------------------------------------------------------------------------- //

function ShowStudents(jsonObject) {

    //console.log("There is so manny");

    jsonObject.forEach((student) => {

      // make template
      const studenttemp = {
        firstname: "",
        middlename: undefined,
        lastname: "",
        nickname: undefined,
        gender: "",
        img: undefined,
        house: ""
    };

      // create template
      const students = Object.create(studenttemp);

      // ---------------------------------------------------------------------------------------------------- //

      // tells what info should be where and how to get info 
      const firstSpace = student.fullname.trim().indexOf(" ");
      const lastSpace = student.fullname.trim().lastIndexOf(" ");

      students.firstname = student.fullname.substring(0, firstSpace).trim();

      students.middlename = student.fullname.substring(firstSpace, lastSpace).trim();
      students.nickname = student.fullname.substring(firstSpace, lastSpace).trim();

      if (students.middlename.substring(0,1) == `"`) {
        students.nickname = students.middlename;
        students.middlename = "";
      } else {
        students.nickname = "";
      }

      students.lastname = student.fullname.substring(lastSpace).trim();

      students.gender = student.gender;

      students.img = student["none"];

      students.house = student.house;

      console.log(students);

    });
};
