const prompt = require('prompt-sync')();

class Employee {
    constructor(name, position, department) {
        this.name = name; 
        this.position = position;
        this.department = department; 
    }
}
class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }


    getHtml() {
        let html = '<table border="1">';
        html += '<tr><th>Имя</th><th>Должность</th><th>Отдел</th></tr>';

        this.employees.forEach(employee => {
            html += `<tr>
                        <td>${employee.name}</td>
                        <td>${employee.position}</td>
                        <td>${employee.department}</td>
                     </tr>`;
        });

        html += '</table>';
        return html;
    }
}

const employees = [
    new Employee("Иван Иванов", "Менеджер", "Кредитный отдел"),
    new Employee("Петр Петров", "Аналитик", "Аналитический отдел"),
    new Employee("Сидор Сидоров", "Кассир", "Операционный отдел"),
    new Employee("Мария Иванова", "Бухгалтер", "Бухгалтерия")
];

const empTable = new EmpTable(employees);

document.write(empTable.getHtml());