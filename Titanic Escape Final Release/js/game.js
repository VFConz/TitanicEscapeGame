/*
Locations WIP not final
can be changed or removed
*/

var locations = { //creating an object that holds object instances of each location in the game and their corresponidng description. **Could add more attributes such as items that could be found**
        cabin: {
            details: "You are in your cabin, you feel dazed and shaken, you can hear screaming outside, to the north there is a door, to the <b>west</b> there is a window that looks like it could be opened."

        },
        corridor: {
            details: "You have found a corridor to the north there appears to be another cabin, which is easily accessible on foot. You may also return to your cabin to the south."

        },
        cabin2: {
            details: "You have found another cabin, there is a person frozen in fear in the corner of the room, you notice another open window to the <b>east</b>, do you climb through it or return <b>south</b> back to the hallway."

        },
        window: {
            details: "After climbing through the window you have arrived onto the main deck of the ship, there is chaos and destruction everywhere. Do you wish to climb back in your cabin to the east or continue north to the other side of the ship?"
        },
        mainEntrance: {
            details: "After travelling further up the ship you hear a loud crash and witness the ship beginning to split in half, a person loses their grip and is now hanging off the edge. Do you want to head back south to the window or go east into the ships main area?"
        },
        lobby: {
            details: "You have arrived at the lobby, you cannot go back outside to the west as the falling debris makes it too dangerous! Do you wish to continue east through the centre of the ship, investigate the cry for help to the south? OR return west back to the entrance?"
        },
        lobbywithdog: { //another version of the lobby room created as a result of the player choosing to save the dog! 
            details: "You have arrived at the lobby with the dog, you put him in your backpack and zip it shut. Your options are limited, the kitchen has flooded, and you already know outside is too dangerous your gut tells you you should continue east through the ship...?"
        },
        lobbywithoutdog: { //version of the lobby the player would return to if they failed to save the dog 
            details: "How could you leave the dog behind? The kitchen to the south has now flooded there is no going back to the west outside is too dangerous. You see people heading to the east, they might have seen something."
        },
        kitchen: {
            details: "You open two large doors to find an abandoned kitchen, you can hear still hear a slight whimpering somewhere in the room. Do you wish to continue <b>south</b> deeper into the kitchen to investigate the whimpering or return back <b>north</b>?"

        },
        kitchenwithdog: { //part of the story that can only be accessed if the player chose to search the backroom and save the dog
            details: "You return back to the kitchen with the dog in your arms, it seems north to the lobby is the most sensible way out? You can hear the sound of water getting closer and closer!"

        },
        dining: {
            details: "You have arrived at the dining room, there is a lot of people here heading north towards a man with a worried look on his face signalling something, there is also to your south a large staircase that no one seems to be using. Do you wish to return back to the lobby to the west or follow the crowd to the north, or to lead the way south up the staircase."
        },

        backroom: {
            details: "You stumble into a backroom the whimpering is even louder, you hear some sort of object shaking. This room is very dark but it can be searched."

        },


        lobbyAfterDining: {
            details: "You have for some reason returned to the lobby, your options are to head back <b>east<\b> into the dining hall, as the kichen to the south is now completelty flooded and outside is just chaos.."

        },


        stairsNoFlood: {
            details: "You decide not to follow the crowd and to begin to head towards the staircase to the south, as you are climbing the staircase you hear a loud crash1 The door the crewman was standing infront of burst open and the water has overpowered everything in the room! YOU NEED TO RUN NOW, TRY HEADING EAST OR WEST QUICKLY!"

        },



        cabinet: {
            details: "You open the locked crate to find a puppy there shivering in fear, do you want to turn back north?"

        },

        deckEastSide: {
            details: "You manage to climb through the window to and have now arrived onto the deck of the ship, it is absolute chaos. Due to the dense crowds you cut across to the opposite side of the ship. Do you wish to climb back in to the cabins to the east or continue north up the ship?"

        },


        deckEastSideJohn: {
            details: "You manage to climb through the window with John and have now arrived onto the deck of the ship, it is absolute chaos and John is speechless. There is an extremely dense crowd so both of you cut across to the opposite side of the ship where it is still chaos but much easier to manouver. Due to the cabins now being flooeded yous have no choice but to continue north up the deck!"

        },

        bar: {
            details: "You after breaking through the door, you turn around and close it shut putting a bar in place to hold it still. It is quiet, there is an old man in the corner drinking whisky. You hear a loud thudding sound to the south. Do you wish to travel west to the other side of the bar or to investigate the thudding to the south, choose wisely as time is running out! That door can only hold on for so long!?"

        },


        thuddingDoor: {
            details: "You move south from the bar entrance to find a door that is shaking violently. You may return north back to the bar entrance or continue west to the other side to continue throgh the ship."

        },


        captainStation: {
            details: "You walk through the bar to find a door with a golden handle, you opne it and you realise where you are and who you are with.. You have found the captains qurters and the captain himself is standing there with his back to you. The only real way out is a ladder to the north."

        },


        barAfterDoor: {
            details: "You return back to the main entrance of the bar from the shaking door, your only real option now is to continue west through the bar to the other side or to returb back to the door to the south."

        },

        thuddingDoorWithSurvivors: {
            details: "You have both the mother and child with you now"

        },

        lifeboats: {
            details: "After climbing the ladder you have arrived at the lifeboats just in time, they where just about to leave! Well done for escaping the Titanic!!!<br>When you are readying to leave please type escape."

        },

        crewman: {
            details: "You approach the crewman who had a worried look on his face, you begin to feel something is wrong and suddenly the door bursts open with water rapidly flowing in... you did not stand a chance."

        },

        crewmanTrapped: {
            details: "You approach the crewman who had a worried look on his face, you begin to feel something is wrong and suddenly the door bursts open with water rapidly flowing in... you did not stand a chance."

        },

    }




        var spawn = "cabin"; //the current location of the player in the game, initially starts as cabin but will change as player moves through game


        var allCommands = ["Grab - For picking up objects(only after a room has been successfully searched)", "North, East, South, West (For movement)", "Search - To search current location for items", "Rescue - To rescue a survivor (if there is one in the same room)", "Bag - For checking bag contents", "Survivors - To check the names of the survivors currently with you. ", "Inspect - To get the description of the room you are in.", "Talk - To talk to a survivor, only if there is one in the same room as you. REMEMBER: All survivors can be talked to.", "Escape - When you reach the lifeboats use this command to end the current game.", "Open - You may at some stage in the game come across door/doors that can be opened."]; //the total amount of commands within the game

        var survivorCount = 0; //to count survivors the players is able to save


        var timer;
        var duration = 300; //5 mins play time
        var cabin2Timer;
        var cabin2Duration = 16;
        var survivorSamTimer;
        var samDuration = 17;
        var stairDuration = 22;
        var stairTimer;
        var endTimer;
        var endDuration = 16;
        var endFloodTimer;
        var floodDuration = 15;

        var failGame = false;



        var backpack = []; //initially emppty on the player starting the game
        var map = false;
        var survivorNames = []; //array to hold the names of survivors to be saved, initially empty

        var cabinSearch = 0; //indicates how many times the cabin has been searched


        var hasStarted = false; //indicates if the game has started or not
        var crewmanFlood = false;

        var cabinetUnlocked = false;
        var backroomSearched = 0;
        var barSearched = 0;
        var barSurvivors = 0;
        var captainDialogue = 0;

        var textCount = 0;

        var survivorJohn = false; //indicates if John has been found
        var survivorDog = false;
        var survivorSamRescued = false;
        var survivorSamFail = false;
        var drunkRescue = false;
        var wifeAndBaby = false;
        var axe = false; //to indicate whether the player has found the crowbar or not.
        var pieRecipe = false;
        var ring = false;
        var diningSearch = 0;
        var kithcenSearch = 0;

        let totalScore = 0


        var talkJohn = false;

        var searchCabin = 0;


        var drunkPass = 0;
        var captainTalk = 0;
        var gameStart = 0;

        let gameAudio = new Audio("audio/sound.mp3");
        gameAudio.volume = 0.15;

        let overflowAudio = new Audio("audio/overflow.mp3");
        overflowAudio.volume = 0.35;

        let whiskeySound = new Audio("audio/whiskey.mp3");
        whiskeySound.volume = 1.0;

        let doorBreak = new Audio("audio/doorbreak.mp3");
        doorBreak.volume = 0.45;

         let whistle = new Audio("audio/whistle.mp3");
        whistle.volume = 0.3;

        let gameStartWhistle = new Audio("audio/whistle.mp3");
        gameStart.volume = 0.3;

        let gameHorror = new Audio("audio/horror.mp3");
        gameStart.volume = 0.7;
            








        /********************************************MOVEMENT METHOD BELOW*****************************************************************************************************************************************************/
        /**********************************************************************************************************************************************************************************************************************/

        /*Method that dicates how the
        player moves through the game,
        if statements used to detect the room
        then switch statements using the data
        passed from the playerInput() method.
        This method will dictate what options the player has 
        in a room and what error messgaes they can receive
        */

        function moveChar(dir) {
            /*this is the function that will dictate where the player can travel through the gsame and what messgaes they will recevie on the output
                                     the if statements as well as detecting rooms can be used to detect certain conditions e.g. a person being saved which may change the options
                                     the player has in the game, e.g. saving survior john will prevent the user from returning back into the corridor */




            if (spawn == "cabin" && !hasStarted) {
                switch (dir) {
                    case "north":
                        document.getElementById('text').innerHTML += '<p><b>THE GAME HAS NOT STARTED YET</b></p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p><b>THE GAME HAS NOT STARTED YET</b></p><hr>';
                        break;


                    case "west":
                        document.getElementById('text').innerHTML += '<p><b>THE GAME HAS NOT STARTED YET</b></p><hr>';
                        break;


                    case "south":
                        document.getElementById('text').innerHTML += '<p><b>THE GAME HAS NOT STARTED YET</b></p><hr>';
                        break;



                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "cabin") {
                console.log('working');
                switch (dir) {
                    case "north":
                        spawn = 'corridor';
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        spawn = 'window';
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>'; //if the player is in cabin they will have the options of going north or west, any other direction is                                                                                                             not valid

                }

            } else if (spawn == "window") {
                switch (dir) {
                    case "north":
                        spawn = "mainEntrance";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "east":
                        spawn = "cabin";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p> Do not go that way you will fall off the boat!</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p> !</p><hr>';
                        break;


                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "cabin" && !hasStarted) {
                switch (dir) {
                    case "north":
                        document.getElementById('text').innerHTML += '<p><b>THE GAME HAS NOT STARTED YET</b></p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p><b>THE GAME HAS NOT STARTED YET</b></p><hr>';
                        break;


                    case "west":
                        document.getElementById('text').innerHTML += '<p><b>THE GAME HAS NOT STARTED YET</b></p><hr>';
                        break;


                    case "south":
                        document.getElementById('text').innerHTML += '<p><b>THE GAME HAS NOT STARTED YET</b></p><hr>';
                        break;



                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "corridor") {
                switch (dir) {
                    case "north":
                        spawn = "cabin2";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "south":
                        spawn = "cabin";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "cabin2" && survivorJohn) { //this else if will be acctivated once the user has entered cabin 2 and chose to save the survivor, this triggers an event preventing the player from returning south
                switch (dir) {

                    case "east":
                        spawn = "deckEastSideJohn";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p> That way is not an option anymore, the water has completely flooded the corridor, go out the window quick!</p><hr><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option!</p><hr><hr>';

                }
            } else if (spawn == "cabin2") { //this else will be activated if the user is in cabin 2 but has not yet chosen to save the survivor
                switch (dir) {
                    case "south":
                        spawn = "corridor";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "east":
                        spawn = "deckEastSide";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }
            } else if (spawn == "mainEntrance" && survivorSamRescued) { //detecting if sam has been saved from falling off the boat
                switch (dir) {
                    case "south":
                        document.getElementById('text').innerHTML += '<p> You turn round to go south but Sam stops you, she says there are no lifeboats that way!!</p><hr><hr>';
                        break;

                    case "east":
                        spawn = "lobby";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>Are you mad, you will fall off the ship!!!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "mainEntrance") {
                switch (dir) {
                    case "south":
                        document.getElementById('text').innerHTML += '<p> Why would you head that direction? The ship is breaking in two!!</p><hr>';
                        break;

                    case "east":
                        spawn = "lobby";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "lobby") {
                switch (dir) {
                    case "south":
                        spawn = "kitchen";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "east":
                        spawn = "dining";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>Do not go back out there! It is too dangerous!!</p><hr>';
                        break;

                    case "north":
                        document.getElementById('text').innerHTML += '<p>Its a dead end unfortunately, try east or south!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p>That way is not an option.</p><hr>';
                }

            } else if (spawn == "lobbywithdog") {
                switch (dir) {

                    case "west":
                        document.getElementById('text').innerHTML += '<p>It is chaos out there, why would you want to go back!</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p>The kitchen is flooded... you saved the dog just in time!</p><hr>';
                        break;

                    case "east":
                        spawn = "dining";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "lobbywithoutdog") {
                switch (dir) {

                    case "west":
                        document.getElementById('text').innerHTML += '<p>It is chaos out there, why would you want to go back!!</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p>The kitchen is flooded... poor dog!!</p><hr>';
                        break;

                    case "east":
                        spawn = "dining";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "kitchenwithdog") {
                switch (dir) {
                    case "north":
                        spawn = "lobbywithdog";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>That is a brick wall!</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p> No point going back that way, you have already saved the puppy!</p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p>Another dead end, north is the only way out of the kitchen!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "kitchen") {
                switch (dir) {
                    case "north":
                        spawn = "lobby";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>That is a brick wall!</p><hr>';
                        break;

                    case "south":
                        spawn = "backroom";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p>Another dead end, north is the only way out of the kitchen!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "backroom") {
                switch (dir) {
                    case "north":
                        spawn = "kitchen";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>That is a brick wall! Try heading out of this room to the north!</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p>You have no chance heading that direction, it is far too dangerous.</p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p>You cannot go through a solid wall, north is the only safe way out of the kitchen!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "cabinet" && survivorDog) {
                switch (dir) {
                    case "north":
                        spawn = "kitchenwithdog";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>That is a brick wall! The only way out is north!</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p>That is a dead end, this room does not go very far!</p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p>Another dead end, you should try heading north!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "cabinet") {
                switch (dir) {
                    case "north":
                        spawn = "lobbywithoutdog";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>That is a brick wall! The only way out is north!</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p>That is a dead end, this room does not go very far!</p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p>Another dead end, you should try heading north!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "dining") {
                switch (dir) {
                    case "north":
                        spawn = "crewman";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "west":
                        spawn = "lobbyAfterDining";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "south":
                        spawn = "stairsNoFlood";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;
                    case "east":
                        document.getElementById('text').innerHTML += '<p>Another dead end, you should try heading north!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "lobbyAfterDining") {
                switch (dir) {
                    case "north":
                        document.getElementById('text').innerHTML += '<p>You cannot go this way unfortunately!</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>Why would you go back out there?!</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p>You have no chance going in there! The kitchen is now flooded.</p><hr>';
                        break;

                    case "east":
                        spawn = "dining";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;


                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "deckEastSideJohn") {
                switch (dir) {
                    case "north":
                        spawn = "mainEntrance";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p>Unfortunately both yours and Johns cabins are now flooded.</p><hr>';
                        break;

                    case "south":
                        document.getElementById('text').innerHTML += '<p>The crowd is too dense, you do not stand a chance going that direction.</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>Be careful!! You nearly fell off the ship!</p><hr>';
                        break;



                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "deckEastSide") {
                switch (dir) {
                    case "north":
                        spawn = "mainEntrance";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;

                    case "east":
                        spawn = "cabin";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;
                    case "south":
                        document.getElementById('text').innerHTML += '<p>The crowd is too dense, you do not stand a chance going that direction.</p><hr>';
                        break;

                    case "west":
                        document.getElementById('text').innerHTML += '<p>Be careful!! You nearly fell off the ship!</p><hr>';
                        break;



                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "stairsNoFlood") {
                switch (dir) {
                    case "north":
                        document.getElementById('text').innerHTML += '<p>Do not run towards the water, you will drown!</p><hr>';
                        break;

                    case "west":
                        spawn = "bar";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        whiskeySound.play();
                        break;
                    case "south":
                        document.getElementById('text').innerHTML += '<p>You try to head south but there is no escape this direction from the flooding..</p><hr>';
                        break;

                    case "east":
                        document.getElementById('text').innerHTML += '<p>That is a solid wall!</p><hr>';
                        break;



                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "bar") {
                switch (dir) {
                    case "north":
                        document.getElementById('text').innerHTML += '<p>That way is too dangerous!</p><hr>';
                        break;

                    case "north":
                        document.getElementById('text').innerHTML += '<p>You just came from that direction, it is now flooded so you cannot return.</p><hr>';
                        break;

                    case "west":
                        spawn = "captainStation";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        whistle.play();
                        break;

                    case "south":
                        spawn = "thuddingDoor";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;



                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "thuddingDoor") {
                switch (dir) {
                    case "north":
                        spawn = "barAfterDoor";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;
                    case "west":
                        spawn = "captainStation";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        whistle.play();
                        break;


                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "barAfterDoor") {
                switch (dir) {

                    case "west":
                        spawn = "captainStation";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        whistle.play();
                        break;

                    case "south":
                        spawn = "thuddingDoor";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;


                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "captainStation") {
                switch (dir) {
                     case "east":
                        document.getElementById('text').innerHTML += '<p>There is no point returning to the bar! You have almost escaped, try that ladder to the north.</p><hr>';
                        break;
                    case "north":
                        spawn = "lifeboats";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr>';
                        break;


                    default:
                        document.getElementById('text').innerHTML += '<p> That way is not an option.</p><hr>';
                }

            } else if (spawn == "crewmanTrapped") {
                switch (dir) {
                    case "north":
                        document.getElementById('text').innerHTML += '<p>You are trapped the game is over!</p><hr>';
                        break;

                    default:
                        document.getElementById('text').innerHTML += '<p> You went the wrong way the game is over for this round!.</p><hr>';
                }

            }









        }
        /********************************************MOVEMENT METHOD ABOVE**********************************************************************************************************************************************************/
        /***************************************************************************************************************************************************************************************************************************/







        function searchCheck() { //to ensure rooms that have the potential to be searched can't be searched more than once

            if (cabinSearch >= 2 || kithcenSearch >= 2 || diningSearch >= 2) {
                document.getElementById('text').innerHTML += 'You have already searched this room! ';
            }
        }





        function checkSurvivors() { //will print a list of all survivors that have been 

            document.getElementById('text').innerHTML += 'The survivors you current have with you are:  ';
            if (survivorNames.length === 0) {
                document.getElementById('text').innerHTML += ' NOBODY <hr>';

            } else {
                document.getElementById('text').innerHTML += '<ol>'; //creating a list
                for (var index = 0; index < survivorNames.length; index++) { //for loop to search through the array of saved survivors
                    document.getElementById('text').innerHTML += '<li>' + survivorNames[index] + '</li>'; //printing survivors to the text field
                }
                document.getElementById('text').innerHTML += '</ol> <hr> '; //closing the list

            }

        }




        /**
        If staements ysed to detect if the player
        is in the correct room before the search 
        can begin, the final else branch will be 
        triggered if the player is in a room that 
        has no items or has already been searched 
        before*/

        function search() {
            if (spawn === "cabin2" && cabinSearch < 1 && searchCabin < 1) {
                document.getElementById('text').innerHTML += 'You can see a map!<br> ';
                cabinSearch++;
                searchCabin++;

            } else if (spawn === "backroom" && backroomSearched < 1) {
                backroomSearched++;
                document.getElementById('text').innerHTML += 'You have found a safe, enter the code to open it! CLUE - It is the current year<br>';

            } else if (spawn === "bar" && barSearched < 1) {
                barSearched++;
                document.getElementById('text').innerHTML += 'You have a quick look around the bar, there is nothing but empty glasses. You take a look behind the bartenders bench and see the glint off a fire axe.<br>';
            } else if (spawn === "barAfterDoor" && barSearched < 1) {
                barSearched++;
                document.getElementById('text').innerHTML += 'You have a quick look around the bar, there is nothing but empty glasses. You take a look behind the bartenders bench and see the glint off a fire axe.<br>';
            }
            else if(spawn === "kitchen" && kithcenSearch == 0){
                  document.getElementById('text').innerHTML += 'You can see some sort of note sitting on the bench, it looks like a recipe for a pie!<br>';
                  kithcenSearch ++;
            }
            else if(spawn === "dining" && diningSearch == 0){
                  document.getElementById('text').innerHTML += 'You look down to see a faint glint, it appears to be a wedding ring that has been dropped in the chaos!<br>';
                  diningSearch ++;
            }
            else {
                document.getElementById('text').innerHTML += 'There is nothing in this room or it has already been searched!!<br>';
            }
        }






        function rescue() {
            survivorCount++; //indicating a survivor has been found
            document.getElementById('count').innerHTML = survivorCount;
            let score = document.getElementById('score').innerHTML;
            
            
            
            if(score == 0)
            {
                console.log('total score start: ' + totalScore)
                document.getElementById('score').innerHTML = "";
                totalScore += 200;
                document.getElementById('score').innerHTML = totalScore;
            }
            else
            {
                
                totalScore += 200;
                console.log('total score: ' + totalScore)
                document.getElementById('score').innerHTML = totalScore;
            }
            
        
        }



        /***************************************************************************************************************************************************************************************************************************/
        /******************************************************************************************** ALL CODE FOR COUNTDOWNS BELOW ************************************************************************************************/
        /***************************************************************************************************************************************************************************************************************************/
        /***************************************************************************************************************************************************************************************************************************/

        function countdown() {


            duration--;
            if (duration >= 0) {
                document.getElementById('time').innerHTML = duration;
            }
            else if (duration == -1) {
                gameHorror.play();
                console.log('yeefmwemfw');
                document.getElementById('text').innerHTML += 'Time is up! <b><u>GAME OVER</u></b> Please wait for the next screen to load.... ';

            } else if (duration == -10) {
                stopTimer();
                endGameLose();
            }
        }




        function countdownCabin2() { //this is the countdownt that will be triggered when survivorJohn is saved in cabin2, the survivor must escape the room in 17 seconds or they will loose

            cabin2Duration--;
            console.log('count down is worikng');
            if (cabin2Duration == 10 && spawn === "cabin2") {
                document.getElementById('text').innerHTML += '<p> 10 seconds! MOVE QUICKLY! </p>';

            }
            if (cabin2Duration == 5 && spawn === "cabin2") {
                document.getElementById('text').innerHTML += '<p> 5 seconds! NOT LONG</p>';

            }
            else if(cabin2Duration == 2 && spawn === "cabin2")
            {
                gameHorror.play();
            }
            else if (cabin2Duration == 0 && spawn === "cabin2") {
                stopTimer();
                document.getElementById('text').innerHTML += '<p> You where too slow! You have failed to escape!<hr>Next screen is loading please wait...</p>';


            } else if (cabin2Duration == -8 && spawn === "cabin2") {
                console.log('You got drowned by the water!!!');
                stopCabin2Timer();
                endGameLose();
            } else if (cabin2Duration == 0) {
                stopCabin2Timer();
            }

        }




        function countdownSam() {

            samDuration--;

            if (spawn === "mainEntrance" && survivorSamRescued) {
                stopSamTimer();
            } else if (samDuration == 10 && spawn === "mainEntrance") {
                document.getElementById('text').innerHTML += '<p> 10 seconds! Rescue them quickly! </p>';
            } else if (samDuration == 5 && spawn === "mainEntrance") {
                document.getElementById('text').innerHTML += '<p> 5 seconds! Hurry! </p>';
            } else if (samDuration == 0 && spawn === "mainEntrance") {
                document.getElementById('text').innerHTML += '<p> You where too slow! </p>';
                survivorSamFail = true;
                stopSamTimer();
            }


        }


        function countdownEnd() {

            stopTimer();
            endDuration--;

            if (endDuration == 12 && spawn === "lifeboats") {
                document.getElementById('text').innerHTML += '<p><b>GAME COMPLETED</b><br>NEXT SCREEN LOADING PLEASE WAIT . . .</p>';
            }
            else if (endDuration == 10 && spawn === "lifeboats") {
                gameHorror.play();
            }
            else if (endDuration == 0 && spawn === "lifeboats") {
                endGameWin();
            }

        }




        function startCabin2Timer() {

            cabin2Timer = setInterval('countdownCabin2()', 1000);

        }



        function startSamTimer() {

            if (spawn === "mainEntrance" && !survivorSamRescued) {

                survivorSamTimer = setInterval('countdownSam()', 1000);
            }


        }


        function startEndGameTimer() {

            endTimer = setInterval('countdownEnd()', 1000);
        }

        function startFlood() {
            if (spawn === "crewman") {
                endFloodTimer = setInterval('countdownFlood()', 1000);
            }
        }


        function endGameFloodTimer() {
            clearInterval(endFloodTimer);

        }


        function countdownFlood() {

            floodDuration--;
            
            if(floodDuration == 10)
            {
                gameHorror.play();
            }
            else if (floodDuration == 7) {
                document.getElementById('text').innerHTML += '<p> Unlucky! You made a mistake and took the wrong path..<br><b>NEXT SCREEN LOADING PLEASE WAIT . . .</b></p><br>';
            } else if (floodDuration == 0) {
                endGameLose();
            }
        }



        function stopEndGameTimer() {
            clearInterval(endTimer);
        }





        function stopTimer() {
            console.log('stop timer');
            clearInterval(timer);
        }




        function stopCabin2Timer() {
            console.log('stop cabin 2 timer');
            clearInterval(cabin2Timer);
        }



        function stopSamTimer() {

            clearInterval(stopSamTimer);
        }


        function startStairTimer() { //starting the stair timer
            console.log('starting the stair timer');
            if (spawn === "stairsNoFlood" && !crewmanFlood) {
                overflowAudio.play();
                stairTimer = setInterval('countdownStairs()', 1000); //starting the timer 
            }

        }


        function stopStairTimer() {
            console.log('stopping stair timer'); //stopping the stair timer
            clearInterval(stairTimer);
        }


        function countdownStairs() {
            stairDuration--;
            
            if (spawn === "bar")
            {
                overflowAudio.pause();
            }
            else
            {
                    if (spawn === "stairsNoFlood" && !crewmanFlood && stairDuration == 15) {
                    document.getElementById('text').innerHTML += '<p> 15 seconds! Get out of there now!! </p>';
                } else if (stairDuration == 10 && spawn === "stairsNoFlood") {
                    document.getElementById('text').innerHTML += '<p> 10 seconds! Not long now! </p>';
                } else if (stairDuration == 5 && spawn === "stairsNoFlood") {
                    document.getElementById('text').innerHTML += '<p> 5 seconds! You really should get going </p>';
                } else if (stairDuration == 0 && spawn === "stairsNoFlood") {
                    document.getElementById('text').innerHTML += '<p id="examp"><b>GAME OVER</b></p><p>You where too slow.. Next screen is loading please wait.</p>';
                } else if (stairDuration == -8 && spawn === "stairsNoFlood") {
                    stopStairTimer();
                    endGameLose();
                } 
            }

           



        }



        /***************************************************************************************************************************************************************************************************************************/
        /******************************************************************************************** ALL CODE FOR COUNTDOWNS ABOVE ************************************************************************************************/
        /***************************************************************************************************************************************************************************************************************************/
        /***************************************************************************************************************************************************************************************************************************/






        function endGameWin() {
            console.log('END OF GAME You Won');


            if (survivorCount == 0) {
                document.getElementById('text').innerHTML += '<p> You have escaped but you have left many behind! Poor efforts </p>';
                sendDataGoodEnd();

            } else {
                document.getElementById('text').innerHTML += '<p> You have escaped with' + survivorCount + ' survivors</p>';
                sendDataGoodEnd();
            }




        }







        function endGameLose() {
            
            failGame = true; 
            console.log('END OF GAME YOU LOSE'); //will be executed if the player runs out of time
            sendDataBadEnd();
        }



        /********************************************PROCESS INPUT METHOD BELOW*****************************************************************************************************************************************************/
        /***************************************************************************************************************************************************************************************************************************/



        function processInput(inputData) { //this method processes the user input that is taken from the text input box as a result as the user hitting the Enter button




            let textBox = document.getElementById("text");
            textBox.scrollTop = textBox.scrollHeight;


            var action = inputData; //turning input string data intro an array of words e.g head west = [head, west] [0] = 'head'


            if (spawn === "backroom" && backroomSearched >= 1) { //detecting if the user is in the backroom and has successsfully searched it giving them the option to enter the code for the safe to save the dog
                console.log("WORKING SWITCH");
                switch (action) {

                    case "1912":
                        spawn = "cabinet";
                        document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr><hr>';
                        break;
                    default:
                        document.getElementById('text').innerHTML += 'Wrong combination! ';
                }
            } else {
                switch (action) { //action = user input from keyboard
                    case "north":
                        moveChar('north');
                        break;
                    case "east":
                        moveChar('east');
                        break;
                    case "south":
                        moveChar('south');
                        break;
                    case "west":
                        moveChar('west');
                        break;
                    case "/help":
                        helpMenu();
                        break; //calling method that creates the help menu visible in the console
                    case "bag":
                        displayBackpack();
                        break; //range of switch cases to detect the players input then return the corresponding game function


                    case "rescue":
                        if (spawn === "cabin2" && !survivorJohn) { //to detect if the player is in the correct room
                            rescue();
                            document.getElementById('text').innerHTML += '<p> You get the persons attention and they are now following you! You turn round to return back to your cabin but the water has completely flooded the corridor, you have no choice but to go east out the window! QUICK OR YOU WILL DROWN!! </p>';
                            survivorNames.push("John"); //adding John to the array that holds the survivors that have been saved by the player.
                            survivorJohn = true; //John has been found
                            startCabin2Timer();
                        } else if (spawn === "cabin2" && survivorJohn) {
                            document.getElementById('text').innerHTML += '<p> You have already saved John! </p>';
                        } else if (spawn === "mainEntrance" && survivorSamFail) {
                            document.getElementById('text').innerHTML += '<p> You where too slow!! (Sam) </p>';

                        } else if (spawn === "mainEntrance" && !survivorSamRescued) {
                            rescue();
                            document.getElementById('text').innerHTML += '<p> You grab the persons hand and pull them up saving their life!! (Sam) </p>';
                            survivorNames.push("Sam");
                            survivorSamRescued = true;
                        } else if (spawn === "mainEntrance" && survivorSamRescued) {
                            document.getElementById('text').innerHTML += '<p> You already stopped Sam from falling off the ship! (Sam) </p>';
                        } else if (spawn === "cabinet" && !survivorDog) {
                            rescue();
                            document.getElementById('text').innerHTML += '<p> You grab the puppy and see he has name tag (Rex).</p>';
                            survivorNames.push("Rex - Jack Russel");
                            survivorDog = true;

                        } else if (spawn === "cabinet" && survivorDog) {
                            document.getElementById('text').innerHTML += '<p> You have already managed to rescue the dog from the crate! </p>';
                        } else if (spawn === "bar" && drunkRescue) {
                            document.getElementById('text').innerHTML += '<p> You have alrady got the drunken man to follow you!<br>Drunk guy: *burps* </p>';
                        } else if (spawn === "bar" && drunkPass > 2) {
                            document.getElementById('text').innerHTML += '<p> You have managed to persuage the stubborn old man to get up and he is now following you! </p>';
                            survivorNames.push("Drunk Frank");
                            rescue();
                            drunkRescue = true;
                        } else if (spawn === "bar" && drunkPass == 2) {
                            document.getElementById('text').innerHTML += '<p> You try to lift the man but he pushed you away, keep talking to persuade him! </p>';
                        } else if (spawn === "bar" && drunkPass == 1) {
                            document.getElementById('text').innerHTML += '<p> You try to rescue the man but he shrugs you away, try talking to him some more!! </p>';
                        } else if (spawn === "bar" && drunkPass == 0) {
                            document.getElementById('text').innerHTML += '<p> You try to get the mans attention but he ignores you! You could try talking to him. </p>';
                        } else if (spawn === "barAfterDoor" && drunkRescue) {
                            document.getElementById('text').innerHTML += '<p> You have alrady got the drunken man to follow you!<br>Drunk guy: *burps* </p>';
                        } else if (spawn === "barAfterDoor" && drunkPass > 2) {
                            document.getElementById('text').innerHTML += '<p> You have managed to persuage the stubborn old man to get up and he is not following you! </p>';
                            survivorNames.push("Drunk Frank");
                            rescue();
                            drunkRescue = true;
                        } else if (spawn === "barAfterDoor" && drunkPass == 2) {
                            document.getElementById('text').innerHTML += '<p> You try to lift the man but he pushed you away, keep talking to persuade him! </p>';
                        } else if (spawn === "barAfterDoor" && drunkPass == 1) {
                            document.getElementById('text').innerHTML += '<p> You try to rescue the man but he shrugs you away, try talking to him some more!! </p>';
                        } else if (spawn === "barAfterDoor" && drunkPass == 0) {
                            document.getElementById('text').innerHTML += '<p> You try to get the mans attention but he ignores you! You could try talking to him. </p>';
                        } else if (spawn === "thuddingDoor" && wifeAndBaby) {
                            document.getElementById('text').innerHTML += '<p> You have successfully rescued the mother and child already, they are following you to the lifeboats.</p>';

                        } else if (spawn === "thuddingDoor" && barSurvivors > 0) {
                            document.getElementById('text').innerHTML += '<p> You have successfully rescued the mother and child.</p>';
                            rescue();
                            rescue();
                            wifeAndBaby = true;
                            survivorNames.push('Marge');
                            survivorNames.push('Lisa');
                        } else if (spawn === "captainStation") {
                            document.getElementById('text').innerHTML += '<p> You try to get the Captain to follow you but he will not move!</p>';

                        } else { //if the player is in a room with 0 survivors they will get an error in console
                            document.getElementById('text').innerHTML += '<p> There is no surviror in here!!! </p>';
                        }

                        break;


                    case "search":
                        search();
                        break; //calling the search function

                    case "survivors":
                        checkSurvivors();
                        break;

                    case "start":
                        start();
                        break;

                    case "inspect":
                        inspectRoom();
                        break;

                    case "open":
                        openDoor();
                        break;

                    case "escape":
                        if (spawn === "lifeboats") {
                            startEndGameTimer();
                            if (survivorCount > 4) {
                                document.getElementById('text').innerHTML += 'Great work, you have managed to rescue atleast 5 passengers from the disaster.<br>';
                            }
                            
                            else if (survivorCount > 2 || survivorCount == 1 || survivorCount == 2) {
                                document.getElementById('text').innerHTML += 'You have escaped with some survivors!<br>Not great, could do a lot better..<br>';
                            } 

                            else if (survivorCount == 0) {
                                document.getElementById('text').innerHTML += 'You have escaped but you have left everyone behind!<br>POOR EFFORT<br>';
                            }
                            
                        } 
                        else {
                            document.getElementById('text').innerHTML += 'You have not reached the lifeboats yet!!';
                        }
                        break;

                    case "talk":
                        talk();
                        break;

                    case "grab":
                        console.log("grab event triggered");
                        if (spawn === "cabin2" && searchCabin < 2 && searchCabin > 0) {
                            console.log("grabbing the map");
                            grab();
                        } else if (spawn === "bar" && barSearched > 0 && !axe) {
                            backpack.push('Large axe');
                            axe = true;
                            totalScore += 50;
                            console.log('total score grab bmap: ' + totalScore)
                            document.getElementById('score').innerHTML = totalScore;
                            
                            document.getElementById('text').innerHTML += 'You picked up the fire axe and holster it onto your back.<hr>';

                        } else if (spawn === "barAfterDoor" && barSearched > 0 && !axe) {
                            backpack.push('Large axe');
                            axe = true;
                            document.getElementById('text').innerHTML += 'You picked up the fire axe and holster it onto your back.<hr>';
                            totalScore += 50;
                            console.log('total score grab bmap: ' + totalScore)
                            document.getElementById('score').innerHTML = totalScore;
                            

                        }
                        else if (spawn === "kitchen" && kithcenSearch > 0 && !pieRecipe) {
                            backpack.push('Shepherds Pie Recipe');
                            pieRecipe = true;
                            document.getElementById('text').innerHTML += 'You pick up the pie recipe and store in in your backpack.<hr>';
                            totalScore += 50;
                            console.log('total score grab bmap: ' + totalScore)
                            document.getElementById('score').innerHTML = totalScore;
                            

                        }
                        
                         else if (spawn === "dining" && diningSearch > 0 && !ring) {
                            backpack.push('Precious Gold Wedding Ring');
                            ring = true;
                            document.getElementById('text').innerHTML += 'You carefully pick up the gold ring, hopefully you will find the owner!<hr>';
                            totalScore += 100;
                            console.log('total score grab bmap: ' + totalScore)
                            document.getElementById('score').innerHTML = totalScore;
                             

                        }
                        else {
                            document.getElementById('text').innerHTML += 'There is nothing in this room for you to pickup!<hr><br>';
                        }
                        break;
                    default:
                        document.getElementById('text').innerHTML += '<p> Sorry I do not understand that command! If you are unsure of the commands please type /help and hit enter.<hr> </p>';

                }
            }

            changePicture();
        }


        /********************************************PROCESS INPUT METHOD ABOVE*****************************************************************************************************************************************************/
        /***************************************************************************************************************************************************************************************************************************/





        function start() {

            if (!hasStarted) {

                //for Actual Timer
                timer = setInterval('countdown()', 1000);

                //for Background
                setTimer();

                hasStarted = true;
                gameStartWhistle.play();
                gameAudio.play();  //playing the game audio
                gameStart++;
                document.getElementById('text').innerHTML += "<hr>" + locations.cabin.details + '<hr>';

            } else if (hasStarted == true) { //prevents the player from trying to restart the game 
                console.log('Game has started already!');
                document.getElementById('text').innerHTML += '<hr><strong>ERROR</strong>:Game has already started!!!<hr><br>';
            }

        }


/***************************************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
/********************************************************************FUNCTIONS FOR PLAYER INTERACTION BELOW*****************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/






        function helpMenu() {

            document.getElementById('text').innerHTML += '<h1>Hello Welcome to Titanic Escape!</h1><hr><hr><p>In this game you will be expected to naviagte through a sinking ship trying to escape safely, you should try to save as many people as possible during your journey for a better overall score!</p><b>Help List For Titanic Escape<b> The <em>commands<em> within this game include: </p>';
            document.getElementById('text').innerHTML += '<ol>'; //creating a list
            for (var index = 0; index < allCommands.length; index++) { //for loop to search through the array of commands
                document.getElementById('text').innerHTML += '<li>' + allCommands[index] + '</li>'; //printing commands to the text field
            }
            document.getElementById('text').innerHTML += '</ol> <hr> '; //closing the list
            document.getElementById('text').innerHTML += '<p><b>Game Tips:</b><br>1.Search as many rooms as possible.<br>2.Be ready to make fast decisions.<br>3.Talk to survivors for clues of items.<br>4.<em>WATCH YOUR TIME</em> - If you are spending too much time in a single room, you should move on!<br>5.<strong>IMPORTANT</strong> - Passengers will not automatically follow you, you <b><u>MUST</u><b/> rescue them.<br>6.Have fun!<br>';
            document.getElementById('text').innerHTML += '<p>You have 5 minutes to escape and rescue as many survivors as possible!<br><b>When you are ready to start please type start and hit enter</b></p>';
        }





        function displayBackpack() {

            document.getElementById('text').innerHTML += 'In your backpack you currently have:  ';
            if (backpack.length === 0) {
                document.getElementById('text').innerHTML += ' NOTHING YET <hr>';

            } else {
                document.getElementById('text').innerHTML += '<ol>'; //creating a list
                for (var index = 0; index < backpack.length; index++) { //for loop to search through the array of commands
                    document.getElementById('text').innerHTML += '<li>' + backpack[index] + '</li>'; //printing commands to the text field
                }
                document.getElementById('text').innerHTML += '</ol> <hr> '; //closing the list

            }

        }





        function inspectRoom() {

            return document.getElementById('text').innerHTML += '<p>' + locations[spawn].details + '</p><hr><hr>'; //outputs the details of the room the player is currently in


        }



        function talk() {
            console.log("talk working");

            if (spawn === "cabin2" && !talkJohn) {
                console.log("talk to john");
                talkJohn = true;
                document.getElementById('text').innerHTML += 'You: What is going on? I heard a loud crash and the ship shook violently!<br>John: I have just woken up, I have no idea what is happening!! There is a map on the table it might help us get out of here! <br>  ';

            } else if (spawn === "cabin2" && talkJohn) {
                document.getElementById('text').innerHTML += 'John has nothing more to say!<br> ';

            } else if (spawn === "cabinet") {
                document.getElementById('text').innerHTML += 'Dog: Woof woof!!<br> ';
            } else if (spawn === "mainEntrance" && !survivorSamRescued) { //activated when the player has not saved sam yet
                document.getElementById('text').innerHTML += 'Sam: Help! Im falling!!<br> ';
            } else if (spawn === "mainEntrance" && survivorSamRescued) { //activated when the player has not saved sam yet
                document.getElementById('text').innerHTML += 'Sam: Thank you for saving my life!<br> ';

            } else if (spawn === "bar" && drunkPass > 2) {
                document.getElementById('text').innerHTML += 'Drunk guy: *Burps*<br>';
                drunkPass++;
            } else if (spawn === "bar" && drunkPass == 2) {
                document.getElementById('text').innerHTML += 'You: I know how to get out of here!<br>Drunk man: Fine I shall come with you, but you better be right!<br>';
                drunkPass++;
            } else if (spawn === "bar" && drunkPass == 1) {
                document.getElementById('text').innerHTML += 'You: Please You must leave!<br>Drunk man: Leave me and my whisky alone!<br>';
                drunkPass++;
            } else if (spawn === "bar" && drunkPass == 0) {
                document.getElementById('text').innerHTML += 'You:.....<br>Drunk Guy: Wh-wha-what are you doing? *Facepalms*<br>';
                drunkPass++;
            } else if (spawn === "barAfterDoor" && drunkPass > 2) {
                document.getElementById('text').innerHTML += 'Drunk guy: *Burps*<br>';
                drunkPass++;
            } else if (spawn === "barAfterDoor" && drunkPass == 2) {
                document.getElementById('text').innerHTML += 'You: I know how to get out of here!<br>Drunk man: Fine I shall come with you, but you better be right!<br>';
                drunkPass++;
            } else if (spawn === "barAfterDoor" && drunkPass == 1) {
                document.getElementById('text').innerHTML += 'You: Please You must leave!<br>Drunk man: Leave me and my whisky alone!<br>';
                drunkPass++;
            } else if (spawn === "barAfterDoor" && drunkPass == 0) {
                document.getElementById('text').innerHTML += 'You:.....<br>Drunk Guy: Wh-wha-what are you doing? *Facepalms*<br>';
                drunkPass++;
            } else if (spawn === "thuddingDoor" && barSurvivors > 0) {
                document.getElementById('text').innerHTML += 'You: Are you okay?<br>Woman: Yes, thank you for saving us! I heard a crash and was not sure what was going on so I locked myself in this room for safety!!<br>You: Follow me I know the way out!<br>';
                drunkPass++;
            } else if (spawn === "captainStation" && captainDialogue > 0) {
                document.getElementById('text').innerHTML += 'You continue to try to speak to the captain however your attempts are ignored....<br>';

            } else if (spawn === "captainStation" && captainDialogue == 0) {
                document.getElementById('text').innerHTML += 'You: You are the captain, how are you still here?<br>Captain: Yes, I am the captain and this is my ship, I wish to stay put. Leave me be, the lifeboats are just down that ladder.<br>';
                captainDialogue++;
            } else {
                document.getElementById('text').innerHTML += 'There is no one in this room to talk to or you have already spoken to everyone!<br>';
            }

        }


        function grab() {

            console.log('grab working');

            if (spawn === "cabin2" && searchCabin > 0 && searchCabin < 2 && !map) {
                console.log('grab working in cabin 2');
                document.getElementById('text').innerHTML += 'You picked up the map!<br>';
                map = true;
                backpack.push('Boat map');
                totalScore += 50;
                console.log('total score grab bmap: ' + totalScore)
                document.getElementById('score').innerHTML = totalScore;

            }
    
            else if(spawn === "kitchen" && kithcenSearch > 0 && kithcenSearch < 2 && !pieRecipe){
                backpack.push("Shepherds Pie Recipe");
                document.getElementById('text').innerHTML += 'You put the pie recipe in your backpack!<br>';
                totalScore += 50;
                console.log('total score grab recipe: ' + totalScore)
                document.getElementById('score').innerHTML = totalScore;
                pieRecipe = true;

                
            }
            
             else if(spawn === "dining" && diningSearch > 0 && diningSearch < 2 && !ring){
                backpack.push("Gold Wedding Ring");
                ring = true;
                document.getElementById('text').innerHTML += 'You pick up the wedding ring!<br>';
                totalScore += 50;
                console.log('total score grab ring: ' + totalScore)
                document.getElementById('score').innerHTML = totalScore;

                
            }
            
              else {
                document.getElementById('text').innerHTML += 'There is nothing more in this room for you to pickup!! <br>';
            }
           
        }


        function openDoor() {

            if (spawn === "thuddingDoor" && !wifeAndBaby && axe) {
                document.getElementById('text').innerHTML += 'You use the fire axe you found behind the bar to break open the door. Upon breaking open the door you find a woman and her child. Do you wish to reutrn south back to the bar entrance or continue west through the bar<br>';
                doorBreak.play();
                barSurvivors++;
            } else if (spawn === "thuddingDoor" && !wifeAndBaby && !axe) {
                document.getElementById('text').innerHTML += 'You try to open the door with your hands but there is no budge, you could try searching this room and the bar for a weapon.<br>';
                barSurvivors++;
            } else {
                document.getElementById('text').innerHTML += 'There is not any doors in here than can be opened. Try a different room!<br>';
            }
        }



/***************************************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
/********************************************************************FUNCTIONS FOR PLAYER INTERACTION ABOVE*****************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/




        function sendDataGoodEnd() {
            calcPoints();
            window.location.assign('goodending.html');
        }




        function sendDataBadEnd() {
            calcPoints();
            window.location.assign('badending.html');
        }



        function calcPoints() {
            let time = parseInt(document.getElementById("time").innerHTML);
            let score = parseInt(document.getElementById("score").innerHTML);
            let survivors = parseInt(document.getElementById("count").innerHTML);
            let finalScore = time + score + (survivors * 100);
            
            if(failGame){
                finalScore -= 200;
            }
            
            sessionStorage.setItem("finalScore", finalScore);
        }




        function endFlood() {

            if (spawn === "crewman") {
                spawn === "crewmanTrapped";
                startFlood();
            }
        }


        /*****************************************************************MAIN PLAY METHOD BELOW************************************************************************************************************************************/
        /***************************************************************************************************************************************************************************************************************************/


        function play() { //will be triggered by the onclick event on a button on the UI


            if (textCount <= 15) { //if statements used to prevent text buildup

                textCount++;
                var input = document.getElementById('input').value.toLowerCase(); //changing the input to lower case to keep data entry consistent
                document.getElementById('input').value = ""; //clearing the input every time enter is pressed
                document.getElementById('input').style = (' :focus');
                document.getElementById('text').innerHTML += '';
                processInput(input); //will process the user input as soon as the enter button is clicked
                changePicture();
                startSamTimer();
                startStairTimer();
                endFlood();

                //these functions will run in the background of the game
                searchCheck();

            } else {
                document.getElementById('text').innerHTML = ''; //clearing the console after 4 text outputs to prevent text buildup on the UI
                var input = document.getElementById('input').value.toLowerCase();
                document.getElementById('input').value = "";
                document.getElementById('input').style = (' :focus');
                document.getElementById('text').innerHTML += '';
                processInput(input);
                changePicture();
                startSamTimer();
                startStairTimer();
                endFlood();



                searchCheck();
                textCount = textCount - 15; //resetting the algorithm so the previous if branch is now active again



            }
        }

/***************************************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
/********************************************************************JQUERY BELOW*******************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/


  $(document).keypress(function(keybind){  //to record keyboard input from the player
        if(keybind.which === 13 && $('input').is(':focus')){
            var input = document.getElementById('input').value.toLowerCase();
            document.getElementById('input').value = ""; //clearing the input every time enter is pressed
            console.log(input);
            
            
            if (textCount <= 15) { //if statements used to prevent text buildup

                textCount++;
                document.getElementById('text').innerHTML += '';
                processInput(input); //will process the user input as soon as the enter button is clicked
                changePicture();
                startSamTimer();
                startStairTimer();
                endFlood();

                //these functions will run in the background of the game
                searchCheck();

            } else {
                document.getElementById('text').innerHTML = ''; //clearing the console after 4 text outputs to prevent text buildup on the UI
                document.getElementById('text').innerHTML += '';
                processInput(input);
                changePicture();
                startSamTimer();
                startStairTimer();
                endFlood();



                searchCheck();
                textCount = textCount - 15; //resetting the algorithm so the previous if branch is now active again
            }
            
        }
    })

/***************************************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
/********************************************************************JQUERY ABOVE*******************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************************************************************/
         

        function setTimer() {
            let x = 1200;

            setInterval(function () {
                x--;


                document.getElementById("BGOverlay").style.height = ((x / 2.4) / 4) + "vh";

                if (x == 0) {
                    clearInterval();
                    console.log("finished");
                }
            }, 250)

        }

        function changePicture() {
            let str = "img/" + spawn + ".jpg";
            console.log(str);
            document.getElementById("gameImg").src = str;
        }
