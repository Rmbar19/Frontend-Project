
var armordiv;
var armor;
var challengeRatingdiv;
var challengeRating;
var hitPointsdiv;
var xpdiv;
var sizediv;
var strengthdiv;
var dexteritydiv;
var constitutiondiv;
var intelligencediv;
var wisdomdiv;
var charismadiv;
var hitPoints;
var xp;
var size;
var strength;
var dexterity;
var constitution;
var intelligence;
var wisdom;
var charisma;


$('#MonstersButton').click(function () {
    var createResult;
    fetch(`https://www.dnd5eapi.co/api/monsters`)

        .then((response) => response.json())
        .then((data) => {
            for (let x = 0; x < data.results.length; x++) {
                createLink = document.querySelector("#mainBackground")
                let itemBackground = document.createElement("span")
                let description = document.createElement("class")
                itemBackground.setAttribute("class", "itemBackground")
                itemBackground.setAttribute("id", `${data.results[x].name}`)
                description.setAttribute("class", "description")
                let title = document.createElement("h3")
                if (!data.results[x].name) {
                    title.innertext = "Name Unknown"
                    description.innerText = "No description known."
                } else {
                    var currentLink = data.results[x].url
                    title.innerText = data.results[x].name
                    fetch(`https://www.dnd5eapi.co${currentLink}`)
                        .then((response) => response.json())
                        .then((data) => {
                            challengeRating = "CR:" + data.challenge_rating
                            challengeRatingdiv = document.createElement("div");
                            challengeRatingdiv.setAttribute("class", "challengeratingdiv");
                            challengeRatingdiv.style.textAlign = "left";
                            challengeRatingdiv.append(challengeRating);
                            hitPoints = "HP:" + data.hit_points;
                            hitPointsdiv = document.createElement("div");
                            hitPointsdiv.setAttribute("class", "hitpoints");
                            hitPointsdiv.style.textAlign = "left";
                            hitPointsdiv.append(hitPoints);
                            xp = "XP:" + data.xp;
                            xpdiv = document.createElement("div");
                            xpdiv.setAttribute("Class", "xp");
                            xpdiv.style.textAlign = "left";
                            xpdiv.append(xp)
                            size = "Size:" + data.size
                            sizediv = document.createElement("div")
                            sizediv.setAttribute("class", "size")
                            sizediv.style.textAlign = "left";
                            sizediv.append(size)
                            armor = "AC:" + data.armor_class
                            armordiv = document.createElement("div")
                            armordiv.setAttribute("class", "armordiv")
                            armordiv.style.textAlign = "left";
                            armordiv.append(armor)
                            strength = "STR:" + data.strength
                            strengthdiv = document.createElement("div")
                            strengthdiv.setAttribute("class", "strengthdiv")
                            strengthdiv.style.textAlign = "left";
                            strengthdiv.append(strength)
                            dexterity = "DEX:" + data.dexterity
                            dexteritydiv = document.createElement("div")
                            dexteritydiv.setAttribute("class", "dexteritydiv")
                            dexteritydiv.style.textAlign = "left";
                            dexteritydiv.append(dexterity)
                            constitution = "CON:" + data.constitution
                            constitutiondiv = document.createElement("div")
                            constitutiondiv.setAttribute("class", "constitutiondiv")
                            constitutiondiv.style.textAlign = "left";
                            constitutiondiv.append(constitution)
                            intelligence = "INT:" + data.intelligence
                            intelligencediv = document.createElement("div")
                            intelligencediv.setAttribute("class", "intelligencediv")
                            intelligencediv.style.textAlign = "left";
                            intelligencediv.append(intelligence)
                            wisdom = "WIS:" + data.wisdom
                            wisdomdiv = document.createElement("div")
                            wisdomdiv.setAttribute("class", "wisdomdiv")
                            wisdomdiv.append(wisdom)
                            wisdomdiv.style.textAlign = "left";
                            charisma = "CHA:" + data.charisma
                            charismadiv = document.createElement("div")
                            charismadiv.setAttribute("class", "charismadiv")
                            charismadiv.style.textAlign = "left";
                            charismadiv.append(charisma)
                            itemBackground.appendChild(title)
                            itemBackground.appendChild(challengeRatingdiv)
                            itemBackground.appendChild(hitPointsdiv)
                            itemBackground.appendChild(xpdiv)
                            itemBackground.appendChild(sizediv)
                            itemBackground.appendChild(armordiv)
                            itemBackground.appendChild(strengthdiv)
                            itemBackground.appendChild(dexteritydiv)
                            itemBackground.appendChild(constitutiondiv)
                            itemBackground.appendChild(intelligencediv)
                            itemBackground.appendChild(wisdomdiv)
                            itemBackground.appendChild(charismadiv)
                            itemBackground.appendChild(description)
                            createLink.append(itemBackground)
                        })
                }
                description.innerText





            }
        })
})







