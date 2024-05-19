// Declare an enum for Bengali seasons
enum BengaliSeasons {
    Grisma = 'Grisma',
    Barsha = 'Barsha',
    Sharat = 'Sharat',
    Hemanta = 'Hemanta',
    Shit = 'Shit',
    Basanta = 'Basanta'
}

// Declare a variable to store a Bengali season
let season: BengaliSeasons = BengaliSeasons.Shit;

// Create a map to store facts about each season
const seasonFacts = new Map<BengaliSeasons, string>([  //used a Map to associate each season with a small fact. The keys are of type BengaliSeason, and the values are strings containing facts about the seasons.
    [BengaliSeasons.Grisma, 'Grisma: Onek gorom'],
    [BengaliSeasons.Barsha, 'Barsha: Jhor Tufan + gorom'],
    [BengaliSeasons.Sharat, 'Sharat: brishti +Gorom'],
    [BengaliSeasons.Hemanta,'Hemanta: Halka gorom'],
    [BengaliSeasons.Shit,'Shit: Onek dhula bali'],
    [BengaliSeasons.Basanta,'Basanta: Aram']
]);

// Print the fact about the season stored in the variable 'season'
console.log(seasonFacts.get(season)); //used the get method of the Map to retrieve and print the fact associated with the season stored in the variable season.
