document.getElementById('checkin').addEventListener('click', event=>{
    //getData()
    //    .then(dcmember =>{
    //        document.getElementById('dcmember').innerText = dcmember;
    //    })
    getData();

    async function getData() {
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data);

        for (item of data){
            const root = document.createElement('p');
            const district = document.createElement('div');
            const name = document.createElement('div');

            district.textContent = `${item.district}`;
            name.textContent = `${item.name}`;

            root.append(district, name);

            document.body.append(root);

        }
    }
})
document.getElementById('checkatt').addEventListener('click', event=>{
    getData();

    async function getData() {
        const response = await fetch('/att_api');
        const data = await response.json();
        //console.log(data);
        for (item of data){
            const root = document.createElement('p');
            const district = document.createElement('div');
            const meeting = document.createElement('div');
            const type = document.createElement('div');
            const name = document.createElement('div');
            const attrate = document.createElement('div');

            district.textContent = `${item.district}`;
            meeting.textContent = `${item.meeting}`;
            type.textContent = `${item.type}`;
            name.textContent = `${item.name}`;
            attrate.textContent = `${item.attRate}`;

            root.append(district, name,type,name,attrate);

            document.body.append(root);

        }
    }
})

document.getElementById('checkin').addEventListener('click', event=>{
    //getData()
    //    .then(dcmember =>{
    //        document.getElementById('dcmember').innerText = dcmember;
    //    })
    getData();

    async function getData() {
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data);

        for (item of data){
            const root = document.createElement('p');
            const district = document.createElement('div');
            const name = document.createElement('div');

            district.textContent = `${item.district}`;
            name.textContent = `${item.name}`;

            root.append(district, name);

            document.body.append(root);

        }
    }
})
document.getElementById('checkvote').addEventListener('click', event=>{
    getData();

    async function getData() {
        const response = await fetch('/vote_api');
        const data = await response.json();
        //console.log(data);
        
        for (item of data.value){
            const root = document.createElement('p');
            const votedate = document.createElement('div');
            const meeting = document.createElement('div');
            const motion = document.createElement('div');
            const name = document.createElement('div');
            const vote = document.createElement('div');

            const dateString = new Date(item.vote_date).toLocaleString();
            votedate.textContent = dateString;

            meeting.textContent = `${item.type}`;
            motion.textContent = `${item.motion_en}`;
            name.textContent = `${item.name_en}`;
            vote.textContent = `Vote: ${item.vote}`;

            root.append(votedate, meeting, motion,name,vote);

            document.body.append(root);

        }
    }
})