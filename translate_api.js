class TraslateApi {
    constructor(ingilizceSaka) {
        this.baseURL = `https://nlp-translation.p.rapidapi.com`
        this.aranacakCumle = ingilizceSaka
        this.axiosNesnesi = axios.create({
            baseURL: this.baseURL,
            params: {
                text: this.aranacakCumle,
                to: 'tr',
                from: 'en'
            },
            headers: {
                'x-rapidapi-key': 'd9e5192d02mshdea955a28a4a67dp133e84jsn87c6cbb3b6d0',
                'x-rapidapi-host': 'nlp-translation.p.rapidapi.com'
            }
        })
 
    }
 
    async ceviriYap() {
        const ceviri = await this.axiosNesnesi.get('/v1/translate')
        console.log(ceviri.data.translated_text.tr)
    }
}