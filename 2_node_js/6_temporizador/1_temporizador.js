const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 1 * * 0", function (){

    console.log("Executando tarefa 1", new Date().getSeconds());

}); //De cinco em cinco minutos, as 1 horas, qualquer mês, no Domingo 


setTimeout(function() {

    tarefa1.cancel();
    console.log("Cancelando tarefa 1");

}, 20000)