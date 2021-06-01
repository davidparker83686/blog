(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{476:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"day-2-mysql-relationships-many-to-many"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#day-2-mysql-relationships-many-to-many"}},[t._v("#")]),t._v(" Day 2 - MYSQL RELATIONSHIPS (MANY-TO-MANY)")]),t._v(" "),e("p",[t._v("Daily Journal\nRead Dotnet WebAPI's > Relationships, and answer the following questions")]),t._v(" "),e("h2",{attrs:{id:"what-is-the-difference-between-a-primary-key-and-a-foreign-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-a-primary-key-and-a-foreign-key"}},[t._v("#")]),t._v(" What is the difference between a primary key and a foreign key")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Primary key is a chosen unique Property that can be used to Identify the table where a foreign key is how a child table looks at the parent table using the parents primary key as the childs foreign key\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"what-is-an-alias"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-alias"}},[t._v("#")]),t._v(" What is an Alias?")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("A situation where the same memory location can be accessed using different names.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"demonstrate-how-you-would-query-a-join-statement-that-would-get-all-of-a-doctors-patients-from-the-following-collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demonstrate-how-you-would-query-a-join-statement-that-would-get-all-of-a-doctors-patients-from-the-following-collections"}},[t._v("#")]),t._v(" Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('string sql = @"\n                SELECT\n                d.*,\n                p.*\n                dp.id as doctorpatientId,\n                dp.patientId as patientId,\n                dp.doctorId as doctorId\n                FROM\n                doctors_patients dp\n                JOIN doctors d ON d.id = dp.doctorId\n                JOIN patients p ON p.id = dp.patientId\n                WHERE\n                dp.doctorId = @doctorId;\n            ";\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("p",[t._v("CREATE TABLE doctors (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),e("p",[t._v("CREATE TABLE patients (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),e("p",[t._v("CREATE TABLE doctors (\nid INT NOT NULL AUTO_INCREMENT,\ndoctorId INT NOT NULL,\npatientId INT NOT NULL,")]),t._v(" "),e("p",[t._v("FOREIGN KEY (doctorId)\nREFERENCES doctors(id),\nFOREIGN KEY (patientId)\nREFERENCES patients(id),")]),t._v(" "),e("p",[t._v("AFTERNOON-https://davidparker83686.github.io/job_and_contractors/")])])}),[],!1,null,null,null);a.default=n.exports}}]);