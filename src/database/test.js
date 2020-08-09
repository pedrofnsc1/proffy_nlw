const database = require('./db.js');
const createProffy = require('./createProffy');

database.then( async (db) => {
  proffyValue = {
    name: "Pedro Ricardo",
    avatar: "https://avatars0.githubusercontent.com/u/39857536?s=460&u=7313d8b3b2592e5ddc7c2c9f0dec3ee1da4b6e27&v=4",
    whatsapp: "84991442772",
    bio: "Reaprendendo a aprender"
  },
  classValue = {
    subject: "Química",
    cost: "20", 
  },
  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  //await createProffy(db, {proffyValue, classValue, classScheduleValues})

  const selectedProffys = await db.all(`SELECT * FROM proffys`);
 // console.log(selectedProffys);

  const selectClassesAndProffy = await db
  .all(`
    SELECT classes.*, proffys.* FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 2
  `);
  console.log(selectClassesAndProffy);


  const filtersProffy = await db
  .all(`
    SELECT class_schedule.* FROM class_schedule
    WHERE class_schedule.class_id =  "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1000"
  `);
});