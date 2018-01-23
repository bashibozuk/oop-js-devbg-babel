class Person {
   constructor(firstName, lastName, yearOfBirth) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.yearOfBirth = yearOfBirth;
   }

   getFristname() {
      return this.firstName;
   }

   get fullName() {
      return this.firstName + ' ' + this.lastName;
   }

   get age() {
      return this.calculateAge();
   }

   set fullName(fullname) {
      const parts = fullname.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
   }

   calculateAge() {
      let year = (new Date()).getFullYear();
      return year - this.yearOfBirth;
   }
}


module.exports = Person;