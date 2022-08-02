class UnsplashApi {
    constructor() {
        this.baseURL='https://api.unsplash.com'
        this.clientID = 'Client-ID rzM-NPeI2ffviOtz1DmVDn2hipPYKbxND247cozudDo'
        this.axiosNesne= axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID
            },
            params: {
                query: 'animal',
                count:1
                //?query=animal&count=1 linkin sonuna bunu ekliyor.
            }
        })
    }

    async randomResimGetir () {

        try{
            const resimResponse=await this.axiosNesne.get('/photos/random')
            //console.log(resimResponse);
            //console.log(resimResponse.data);
            console.log(resimResponse.data[0].urls.regular);
    
            return resimResponse.data[0].urls.regular
        }catch(hata) {
            console.log(hata);
            return 'https://bulma.io/images/placeholders/1280x960.png'
        }
        
    }
}














//Hata verir çünkü count:1 dediğimizde bize dizi verir. Yanlız sadece bu apiye özel bir durum.
// class UnsplashApi {
//     constructor() {
//         this.baseURL='https://api.unsplash.com'
//         this.clientID = 'Client-ID rzM-NPeI2ffviOtz1DmVDn2hipPYKbxND247cozudDo'
//         this.axiosNesne= axios.create({
//             baseURL: this.baseURL,
//             headers: {
//                 Authorization: this.clientID
//             },
//             params: {
//                 query: 'animal',
//                 count:1
//                 //?query=animal&count=1 linkin sonuna bunu ekliyor.
//             }
//         })
//     }

//     async randomResimGetir () {

//         try{
//             const resimResponse=await this.axiosNesne.get('/photos/random')
//             //console.log(resimResponse);
//             //console.log(resimResponse.data);
//             console.log(resimResponse.data.urls.regular);
    
//             //return sakaResponse.data.value
//         }catch(hata) {
//             console.log(hata);
//         }
        
//     }
// }