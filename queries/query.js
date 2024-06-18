exports.insertData =
  "INSERT INTO angular_employee(name,age,email,mobile,dob,gender) values (?,?,?,?,?,?);";
exports.getPersonal = "SELECT * FROM angular_employee";
exports.SingleData = "SELECT * FROM angular_employee WHERE id =?";
exports.updateData =
  "UPDATE angular_employee SET name =?,age =?,email =?,mobile =?,dob =?,gender =? WHERE id =?";
exports.deleteData = "DELETE FROM angular_employee WHERE id =?";

exports.insertProfessional =
  "INSERT INTO professional(empid,education,domain,languages,skills,joindate,basicsalary,hra,da,insurance,pf,netsalary,allowence,takehomesalary) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
exports.getprofQuery = "SELECT * FROM professional";
exports.SingleDataProf = "SELECT * FROM professional WHERE id =?";
exports.updateProfQuery =
  "UPDATE `professional` SET `empid` =?,`education` =?,`domain`= ?,`languages`= ?,`skills`= ?,`joindate`= ?,`basicsalary`= ?,`hra`= ?,`da`= ?,`insurance`= ?,`pf`= ?,`netsalary`= ?,`allowence`= ?,`takehomesalary`= ? WHERE `id` =?";
exports.deleteProfQuery = "DELETE FROM professional WHERE id =?";
