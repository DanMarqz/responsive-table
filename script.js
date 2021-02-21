function darkMode() {
  let bg = document.getElementById("body-bg");
  let tbl = document.getElementById("tbl");
  let thd = document.getElementById("thd");
  let dvb = document.getElementById("dvb");
  let btn = document.getElementById("btn");

  if (bg.classList.contains("bg-light")){
    bg.className = "bg-dark";
    dvb.className = "table-responsive-sm p-3 bg-dark";
    tbl.className = "table table-secondary table-striped table-hover table-bordered";
    thd.className = "text-center table-dark";
    btn.className = "btn btn-outline-light btn-lg";
    btn.innerHTML = "Light Mode";
  } else {
    bg.className = "bg-light";
    dvb.className = "table-responsive-sm p-3";
    tbl.className = "table table-light table-striped table-hover table-bordered";
    thd.className = "text-center table-success";
    btn.className = "btn btn-outline-dark btn-lg";
    btn.innerHTML = "Dark Mode";
  }
}