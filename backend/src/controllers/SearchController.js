const Dev = required('..model/Dev');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAssArray(techs);


        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: '10000'
                },
            },
        });

        //buscar todos os devs num raio de 10km
        //filtrar por tecnologias   
        return response.json({ devs: [] })
    }
}