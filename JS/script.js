let register_btn = document.getElementById('register');
var count = 0;
let tbody = document.getElementById('tb-body');

register_btn.addEventListener('click', (event)=>{
    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');

    // let tb_id = document.getElementById('tb-id');
    // let tb_name = document.getElementById('tb-name');
    // let tb_lastname = document.getElementById('tb-lastname');
    // let tb_actions = document.getElementById('tb-actions');
    
    // console.log(name.value);
    // console.log(lastname.value);
    if (name.value != "" && lastname.value != "") {
        count += 1;
        name.classList.add('is-valid');
        name.classList.remove('is-invalid');

        lastname.classList.add('is-valid');
        lastname.classList.remove('is-invalid');

        Swal.fire({
            title: "Excelente!",
            text: "Campos Correctos!",
            icon: "success"
        });

        // let records = new Map();
        // records.set('name',name.value);
        // records.set('lastname',lastname.value);
        // records.set('actions','added');

        row = `
            <tr>
                <td>${count}</td>
                <td>${name.value}</td>
                <td>${lastname.value}</td>
                <td>added</td>
            </tr>
        `;
        
        tbody.innerHTML += row;

    }else{
        if (name.value == "" && lastname.value != "") {
            name.classList.add('is-invalid');
            name.classList.remove('is-valid');

            lastname.classList.add('is-valid');
            lastname.classList.remove('is-invalid');

            Swal.fire({
                title: "Error!",
                text: "Por favor, llena el campo NOMBRE",
                icon: "error"
            });

        }else if (name.value != "" && lastname.value == "") {
            lastname.classList.add('is-invalid');
            lastname.classList.remove('is-valid');

            name.classList.add('is-valid');
            name.classList.remove('is-invalid');

            Swal.fire({
                title: "Error!",
                text: "Por favor, llena el campo APELLIDO",
                icon: "error"
            });

        }else{
            name.classList.add('is-invalid');
            name.classList.remove('is-valid');

            lastname.classList.add('is-invalid');
            lastname.classList.remove('is-valid');

            Swal.fire({
                title: "Error!",
                text: "Por favor, llena los campos!",
                icon: "error"
            });
        }


    }
})
