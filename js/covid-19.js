window
    .fetch("https://api.covid19api.com/summary")
    .then((data) => {
        // console.log(data);
        data.json()
            .then((covid) => {
                console.log(covid.Global);
                let global = covid.Global;
                document.getElementById("covidBlock").innerHTML = `
                <section>
                <div>
        <h4 class="badge badge-secondary">NewConfirmed</h4> 
        <span> ${global.NewConfirmed} </span>
        </div>

        <div>
        <h4 class="badge badge-secondary">TotalConfirmed</h4>
        <span>${global.TotalConfirmed}</span>
        </div>


         <div>
        <h4 class="badge badge-danger">NewDeaths</h4>
        <span>${global.NewDeaths}</span>
        </div>
        

        <div>
        <h4 class="badge badge-danger">TotalDeaths</h4>
        <span>${global.TotalDeaths}</span>
        </div>

        <div>
        <h4 class="badge badge-success">NewRecovered</h4>
        <span>${global.NewRecovered}</span>
        </div>

        <div>
        <h4 class="badge badge-success">TotalRecovered</h4>
        <span>${global.TotalRecovered}</span>
        </div>

        
       </section>
        
        `;
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .catch((err) => {
        console.log(err);
    });
