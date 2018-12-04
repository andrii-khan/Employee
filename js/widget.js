;(function() {

    const xhr = new XMLHttpRequest();
    let tmpl = document.getElementById('employee-tmpl').innerHTML,
        employeeTmpl = '';
    let UL = document.querySelector('.employee-list');
    xhr.open('GET', '../data/employees.json');
    xhr.send(); 
    xhr.onload = function () {
        const data = JSON.parse(this.responseText);
        data.forEach(e => {
        let liTmpl = tmpl.replace(/{{name}}/ig, e.name);      
        if(e.inoffice == true){
            liTmpl = liTmpl.replace(/{{class-name}}/ig, 'in');
        }else {
            liTmpl = liTmpl.replace(/{{class-name}}/ig, 'out');
        }
        UL.innerHTML += liTmpl;
        });
    }   

})();