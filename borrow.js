const kodomAli = {
  name: "kodom ali",
  money: 5000,
  study: "Math",
  subjects: ["Calculas", "Algebra", "Geomatry"],
  exam: function () {
    return this.name + " is participating in an exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking improvement exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const result = kodomAli.exam();
// console.log(result);

const badamAli = {
  name: "kaca badam",
  money: 8000,
};
const result2 =kodomAli.exam.call(badamAli)
// console.log(result2);
const badamMoney = kodomAli.treatDey.call(badamAli,400,40)
const badamMoney2 = kodomAli.treatDey.apply(badamAli,[1000,100])
const badamAliTreat = kodomAli.treatDey.bind(badamAli);
const remaining = badamAliTreat(1000,100)
console.log(badamMoney);
console.log(badamMoney2);
console.log(remaining);