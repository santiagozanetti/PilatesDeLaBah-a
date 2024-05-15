document.addEventListener("DOMContentLoaded", function () {
  const scheduleBody = document.getElementById("schedule-body");

  const schedule = {
    turnoCero: ["-", "-", "7:00", "-", "-", "-"],
    primerTurno: ["8:00", "8:30", "8:00", "8:30", "8:00", "-"],
    segundoTurno: ["9:00", "9:30", "9:00", "9:30", "9:00", "9:00"],
    tercerTurno: ["10:00", "10:30", "10:00", "10:30", "10:00", "10:00"],
    cuartoTurno: ["11:00", "11:30", "11:00", "11:30", "11:00", "11:00"],
    mediodia: ["-", "-", "-", "-", "-", "-"],
    turnoTardeCero: ["15:00", "-", "15:00", "-", "-"],
    primerTurnoTarde: ["16:00", "16:00", "16:00", "16:00", "16:00"],
    segundoTurnoTarde: ["17:00", "17:00", "17:00", "17:00", "17:00"],
    tercerTurnoTarde: ["18:00", "18:00", "18:00", "18:00", "18:00"],
    ultimoTurnoTarde: ["19:00", "19:00", "19:00", "19:00", "19:00"],
  };

  Object.keys(schedule).forEach((day) => {
    const row = document.createElement("tr");
    const times = schedule[day];
    for (let i = 0; i < 6; i++) {
      const cell = document.createElement("td");
      cell.textContent = times[i] || "";
      row.appendChild(cell);
    }
    scheduleBody.appendChild(row);
  });
});
