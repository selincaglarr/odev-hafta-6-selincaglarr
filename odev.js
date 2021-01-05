window.mockApiUrl = "https://5ff193d0db1158001748b15e.mockapi.io/pets/";

window.removePet = (id) => {
    console.log(id) // remove the pet with given id
    fetch('${window.mockApiUrl}${id}',{
        method:"DELETE",
        headers:{
            'Accept':'application/json , text/plain , */*',
            'Content-Type':'application/json'
        }
    
    
    }).then( () => {
        window.location.reload(); // basarili olursa sayfayi yenile diyoruz
    });
  
};
window.openPetDetail = (id) => {
    console.log(id); // show details of the pet with given id
};
