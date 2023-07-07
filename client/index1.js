let counter = 1;

function getall() {
    fetch('https://api-e7by.onrender.com/stu')
        .then(response => response.json())
        .then(json =>
            json.forEach(stu => {
                let students = document.getElementById("ol");
                let student = document.createElement("li");
                student.innerHTML = stu.name;
                students.appendChild(student);
            })
        )
}


btn = document.getElementById("btn");

btn.addEventListener('click',dosome)

function dosome()
{
    btn.disabled = false;
    getall();
    btn.disabled = true;
}
