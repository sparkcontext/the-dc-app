const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.listen(3000,()=>console.log('starting server at 3000'));

app.use(express.static('public'));

app.get('/api', async (request, response)=>{
    csv_url = 'https://www.districtcouncils.gov.hk/datagovhk/psi/List_of_DC_members/List_of_DC_members_2016-19_en.csv'; 
    const csv_response = await fetch(csv_url);
    const csv_data = await csv_response.text();

    const data = [];
    const rows = csv_data.split('\n').slice(1);
    rows.forEach(row =>{
        let obj = {};
        const cols = row.split(',');
        obj['district'] = cols[0];
        obj['name'] = `${cols[1]}`.replace("\"","");
        data.push(obj);
        //data.push(`district: ${cols[0]},name: ${cols[1]}`);
    });
    //return {district, name};
    //const data ={
    //    district : district, 
    //    name : name,
    //};
    response.json(data);
})

app.get('/att_api', async (request, response)=>{
    csv_url = 'https://www.districtcouncils.gov.hk/datagovhk/psi/Attendance_record_of_DC_members/Attendance_record_of_DC_members_2019_en.csv'; 
    const csv_response = await fetch(csv_url);
    const csv_data = await csv_response.text();

    const data = [];
    const rows = csv_data.split('\n').slice(1);
    rows.forEach(row =>{
        let obj = {};
        const cols = row.split(/,(?!\s)/);
       
        obj['district'] = cols[0];
        obj['meeting'] = cols[2];
        obj['type'] = cols[3];
        obj['name'] = `${cols[4]}`.replace("\"","");
        obj['attRate'] = cols[5];
    
        data.push(obj);
        //console.log(data[0]);
        //data.push(`district: ${cols[0]},name: ${cols[1]}`);
    });
    //return {district, name};
    //const data ={
    //    district : district, 
    //    name : name,
    //};
    response.json(data);
})

app.get('/vote_api', async (request, response)=>{
    csv_url = 'https://app.legco.gov.hk/vrdb/odata/vVotingResult?$filter=substringof(%27CHEUNG%20Kwok-kwan%27,%20name_en)'; 
    const csv_response = await fetch(csv_url);
    const csv_data = await csv_response.json();
    console.log(csv_data);
    response.json(csv_data);
})