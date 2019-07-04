var ei_url = "https://www.enneagraminstitute.com/"; //https://www.enneagraminstitute.com/type-8/
var wing_url =  "https://www.crystalknows.com/enneagram/"; //https://www.crystalknows.com/enneagram/type-9-wing-8
var all_types = { // Type : Letter, Number, Q1, Q2, Verse, Song, Summary // Saturate the World
    "Type1": ["B", 
                1, 
                "I really only engage in activities I'm convinced would be beneficial and edifying to me and others.",
                "Being told I'm wrong.",
                "Romans 5:8, 'God shows his love for us in that while we were still sinners, Christ died for us.'",
                "https://www.youtube.com/embed/-sO2UMoOaFQ",
                "Ones are conscientious and ethical, with a strong sense of right and wrong. They are teachers, crusaders, and advocates for change: always striving to improve things, but afraid of making a mistake. Well-organized, orderly, and fastidious, they try to maintain high standards, but can slip into being critical and perfectionistic. They typically have problems with resentment and impatience. At their Best: wise, discerning, realistic, and noble. Can be morally heroic."],
    "Type2": ["D",
                2,
                "I want to satisfy the people around me most, even if it requires me to go the extra mile. Maybe next time, my friends will think of me first.",
                "Not being seen as helpful, kind, or loving.",
                "John 13:8, Jesus says to Peter, 'Unless I wash you, you have no part in me.' Twos are more comfortable doing the washing. Pride will cause them to want to resist being served by others. But Jesus solemnly warns Peter that if he doesn’t humble himself and admit his weakness and neediness, then he cannot have a relationship with Jesus. For Jesus came to serve, not to be served.",
                "https://www.youtube.com/embed/PrDzd4ufypE",
                "Twos are empathetic, sincere, and warm-hearted. They are friendly, generous, and self-sacrificing, but can also be sentimental, flattering, and people-pleasing. They are well-meaning and driven to be close to others, but can slip into doing things for others in order to be needed. They typically have problems with possessiveness and with acknowledging their own needs. At their Best: unselfish and altruistic, they have unconditional love for others."],
    "Type3": ["E",
                3,
                "I'm most familiar with it. I would rather not make a fool out of myself participating in something I don't have experience in.",
                "Feeling undervalued or dismissed.",
                "1 Corinthians 13:1-3. Essentially, that successes or failures don’t matter. What matters is whether or not the motive behind the behavior is love or self-exaltation. Without the core motivation of love, Paul says our efforts are but a noisy gong or clanging cymbal. In other words, we are only seeking to draw attention to ourselves and impress. When ambition and accomplishments are the ultimate goal, love is never present.",
                "https://www.youtube.com/embed/1mpQVljAWTY",
                "Threes are self-assured, attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious and highly driven for advancement. They are diplomatic and poised, but can also be overly concerned with their image and what others think of them. They typically have problems with workaholism and competitiveness. At their Best: self-accepting, authentic, everything they seem to be—role models who inspire others."],
    "Type4": ["I",
                4,
                "It's something that will make me feel 'me.' I feel comfortable and a sense of belonging when I participate in this.",
                "Feeling misunderstood, or sense anger or abandonment from someone else.",
                "John 15:11, 'These things I have spoken to you, that my joy may be in you, and that your joy may be full.' The 'these things' that Jesus is referring to are unpacked in John 15:1-10, the essence of which is summed up when He says, 'Abide in me, and I in you' (15:4). Jesus is describing the glorious reality of the mutual indwelling of God and man through faith in the gospel. This is uniquely meaningful for a Four in that it reassures them that nothing is missing. Their identity and sense of self is complete in Christ. Their joy is full, for it is the very joy of Jesus Himself.",
                "https://www.youtube.com/embed/9qBhMFBo37Y",
                "Fours are self-aware, sensitive, and reserved. They are emotionally honest, creative, and personal, but can also be moody and self-conscious. Withholding themselves from others due to feeling vulnerable and defective, they can also feel disdainful and exempt from ordinary ways of living. They typically have problems with melancholy, self-indulgence, and self-pity. At their Best: inspired and highly creative, they are able to renew themselves and transform their experiences."],
    "Type5": ["F",
                5,
                "It involves the least unnecessary interaction. I think there is value in appreciating stillness once in a while.",
                "Expectations, especially emotional ones.",
                "Deuteronomy 6:5, 'You shall love the Lord your God with all your heart, and with all your soul, and with all your might.' This verse reminds us that human beings are made to worship God with their whole selves and not just the mind.",
                "https://www.youtube.com/embed/iUYqhQ3O9U8",
                "Fives are alert, insightful, and curious. They are able to concentrate and focus on developing complex ideas and skills. Independent, innovative, and inventive, they can also become preoccupied with their thoughts and imaginary constructs. They become detached, yet high-strung and intense. They typically have problems with eccentricity, nihilism, and isolation. At their Best: visionary pioneers, often ahead of their time, and able to see the world in an entirely new way."],
    "Type6": ["G",
                6,
                "It seems like the safest option. I'm not comfortable with activities I feel could be threatening to some extent.",
                "Feeling mistrustful or blamed.",
                "1 Peter 5:6-7. Sixes will have their fear transformed into courage and confidence as they humble themselves before God and cast their anxieties on Him. The most important thing for Sixes to remember is that they are safe to come to God with their fears because 'He cares for them.' Sixes can rest and act courageously because they have a God who promises to take care of them. When they doubt this truth, they need only to look at the cross to see the extent of God’s loving care.",
                "https://www.youtube.com/embed/hnxtj8ta1KU",
                "The committed, security-oriented type. Sixes are reliable, hard-working, responsible, and trustworthy. Excellent 'troubleshooters,' they foresee problems and foster cooperation, but can also become defensive, evasive, and anxious—running on stress while complaining about it. They can be cautious and indecisive, but also reactive, defiant and rebellious. They typically have problems with self-doubt and suspicion. At their Best: internally stable and self-reliant, courageously championing themselves and others."],
    "Type7": ["H",
                7,
                "It's the new, exciting thing I haven't tried yet. I've done the same old activities over and over again.",
                "Feeling trapped or limited.",
                "John 15:11, 'These things I have spoken to you, that my joy may be in you, and that your joy may be full.' The 'these things' that Jesus is referring to are unpacked in John 15:1-10, the essence of which is summed up when He says, “Abide in me, and I in you” (15:4). Jesus is describing the glorious reality of the mutual indwelling of God and man through faith in the gospel. This is uniquely meaningful for a Seven in that it reassures them that no experience or substance can give them the joy they’re longing for. Their identity and sense of self is complete in Christ. Their joy is Jesus's joy.",
                "https://www.youtube.com/embed/vSDPGwz98tI",
                "Sevens are extroverted, optimistic, versatile, and spontaneous. Playful, high-spirited, and practical, they can also misapply their many talents, becoming over-extended, scattered, and undisciplined. They constantly seek new and exciting experiences, but can become distracted and exhausted by staying on the go. They typically have problems with impatience and impulsiveness. At their Best: they focus their talents on worthwhile goals, becoming appreciative, joyous, and satisfied."],
    "Type8": ["A",
                8,
                "The feeling of putting your whole heart and belief into something sucks me right in. Doing things half-heartedly reflects ingenuity.",
                "Feeling controlled or dominated, or feeling abandoment or disloyalty",
                "2 Corinthians 12:7-10. In this passage Paul admits that he is weak. Rather than defending himself through an image of power, Paul owns his weakness, which, he says, keeps him humble and dependent upon the grace and power of God. 'Therefore,' Paul says, 'I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.'",
                "https://www.youtube.com/embed/KpcT13WpT4M",
                "Eights are self-confident, strong, and assertive. Protective, resourceful, straight-talking, and decisive, but can also be ego-centric and domineering. Eights feel they must control their environment, especially people, sometimes becoming confrontational and intimidating. Eights typically have problems with their tempers and with allowing themselves to be vulnerable. At their Best: self- mastering, they use their strength to improve others' lives, becoming heroic, magnanimous, and inspiring."],
    "Type9": ["C",
                9,
                "I usually don't have preferences, but even if I do, my opinion isn't that important. I'm fine with whatever others want to do.",
                "Internal chaos or being unable to escape negative feelings or emotions.",
                "Ephesians 4:15: 'Rather, speaking the truth in love, we are to grow up in every way into Him who is the head, into Christ.' The temptation for Nines is to withdraw and check out. Therefore, they must learn to trust their intuition, assert their presence, and exercise their voice. This is what Paul is exhorting us to do in this verse. The body of Christ will not grow into the fullness of Christ apart from the boldness to speak the truth in love. Nines are good with the 'in love' part. It’s lacking the courage and clarity to speak the truth that they struggle with. The world needs their objectivity and voice, for they have unique ability to harmonize and restore peace. So in faith they must learn to be bold and declare the truth in love.",
                "https://www.youtube.com/embed/IOuZs8v6dzo",
                "Nines are accepting, trusting, and stable. They are usually creative, optimistic, and supportive, but can also be too willing to go along with others to keep the peace. They want everything to go smoothly and be without conflict, but they can also tend to be complacent, simplifying problems and minimizing anything upsetting. They typically have problems with inertia and stubbornness. At their Best: indomitable and all-embracing, they are able to bring people together and heal conflicts."]
}

var wing_text = "You also seem to have some types that flank each other. There might be a chance of one of these types being your “wing” type, which means that it affects your dominant type. Keep that in mind!<br><br>"

function checkChecked() {
    var inputs = $("input:checked");
    let len = inputs.length;
    if (len != 3) {
        alert("Please select 3 paragraphs.");
    } else {
        // get descriptions
        var descriptions = {};
        for (var i = 0; i < inputs.length; i++) {
            let type = inputs[i].value;
            descriptions[type] = $("." + type).text();
        }
        savePart1(inputs, descriptions);
        saveTopThree(inputs);
        window.location.href = "threetypes.html";
    }
}

// RANDOMLY PLACED SAVE FUNCTION
function savePart1(inputs, descriptions) {
    var html = "<h2>PART 1</h2><h3>You picked...<br>";
    for (var i = 0; i < inputs.length; i++) {
        let type = inputs[i].value;
        html += "<b>Type " + all_types[type][1] + "</b>: " + descriptions[type] + "<br><br>";
    }
    html += "</h3><br><h2>PART 2</h2><h3>";
    localStorage.setItem("answerKey", html);
}

function saveTopThree(inputs) {
    var queryString = "";
    for (var i = 0; i < inputs.length; i++) {
        let num = i + 1;
        let type = inputs[i].value;
        localStorage.setItem(num, type);
    }
    // localStorage.setItem("jankResult", 0);
}

$(window).load(function() {
    accordion();
    explainTopThree(); // on threetypes.html
    fillIdentify();
    fillExplore();
    fillExploreCompare();
    fillResults(); // on results.html
});

function explainTopThree() {
    // 3 types
    let first = localStorage.getItem("1");
    let sec = localStorage.getItem("2");
    let third = localStorage.getItem("3");
    $("#" + first + "," + "#" + sec + "," + "#" + third).css({"font-weight":"bold"}); // temporarily red

    let num1 = all_types[first][1];
    let num2 = all_types[sec][1];
    let num3 = all_types[third][1];

    let exp1 = all_types[first][6];
    let exp2 = all_types[sec][6];
    let exp3 = all_types[third][6];

    $("#firstTypeName").html("Type " +num1);
    $("#secondTypeName").html("Type " + num2);
    $("#thirdTypeName").html("Type " + num3);

    $("#readFirstType").html(exp1);
    $("#readSecondType").html(exp2);
    $("#readThirdType").html(exp3);

    let array = [];
    array.push(first+sec);
    array.push(first+third);
    array.push(sec+third);
    localStorage.setItem("comparisons", array);
}

function questionOne() {
    window.location.href = "identify.html";
}


var count = 0;
var compArray = [localStorage.getItem("1") + localStorage.getItem("2"), 
                localStorage.getItem("1") + localStorage.getItem("3"),
                localStorage.getItem("2") + localStorage.getItem("3")];

function fillIdentify() {
    let firstType = compArray[count].substr(0, 5);
    let secondType = compArray[count].substr(5);

    let num1 = all_types[firstType][1];
    let num2 = all_types[secondType][1];

    let revisedNumA = Math.min(num1, num2);
    let revisedNumB = Math.max(num1, num2);

    let descAType = list_mistypes[revisedNumA - 1];
    let descBType = list_mistypes[revisedNumB - 1];

    let descA = descAType[revisedNumB];
    let descB = descBType[revisedNumA];
    let comp = mistypes[revisedNumA.toString() + revisedNumB.toString()];

    var html = "";
    html += "<tr><th>Both</th><th>Type A</th><th>Type B</th></tr>";
    
    for (var j=0; j < descA.length; j++) {
        html += "<tr>";
        html += "<td>" + comp[j] + "</td>";
        html += "<td>" + descA[j] + "</td>";
        html += "<td>" + descB[j] + "</td>";
        html += "</tr>"
    }
    $('input:checked').attr('checked',false);
    console.log(html);
    $("#tbl").html(html); // idk
}

function submitAnswer() {
    event.preventDefault();
    if ($("input:checked")[0] != undefined) {
        var length = compArray.length;
        var input = $("input:checked")[0].value;
        var currentComp = compArray[count];

        let Type1 = compArray[count].substr(0, 5);
        let Type2 = compArray[count].substr(5);

        let num1 = all_types[Type1][1];
        let num2 = all_types[Type2][1];

        // revised
        let firstType = Math.min(num1, num2);
        let secondType = Math.max(num1, num2);

        var table = $("#tbl").html();

        if (length == 3) {

            if (input == "A") {
                localStorage.setItem("firstPlace", firstType);
                localStorage.setItem("secondPlace", secondType);
                savePart2(firstType, secondType, table, "A", "B");
            } else {
                localStorage.setItem("firstPlace", secondType);
                localStorage.setItem("secondPlace", firstType);
                savePart2(secondType, firstType, table, "B", "A");
            }

            compArray.splice(count, 1);
        } else if (length == 2) {
            let firstPlace = localStorage.getItem("firstPlace");
            let secondPlace = localStorage.getItem("secondPlace");
            var newPick;
            var notPick;
            var other;

            if (input == "A") {
                newPick = firstType;
                notPick = secondType;
                other = "B";
            } else {
                newPick = secondType; 
                notPick = firstType;
                other = "A";
            }

            savePart2(newPick, notPick, table, input, other);

            if (firstPlace == newPick) { // First Place already determined. Second and Third place must be determined.
                // localStorage.setItem("final", "Type"+firstPlace);
                // window.location.href = "results.html";
                localStorage.setItem("thirdPlace", notPick);
            } else if (secondPlace == newPick) { // Either this stays the same OR inconclusive -- compare First Place and Third Place next
                localStorage.setItem("thirdPlace", notPick);  
            } else if (notPick == firstPlace) { // Either this stays the same OR inconclusive -- compare First Place and Third Place next
                localStorage.setItem("firstPlace", newPick);
                localStorage.setItem("secondPlace", firstPlace);
                localStorage.setItem("thirdPlace", secondPlace);
            } else if (notPick == secondPlace) { // Third Place already determined. First and Second place must be determined.
                localStorage.setItem("thirdPlace", secondPlace);
                localStorage.setItem("secondPlace", newPick);
            }
            
            compArray.splice(count, 1);
        } else {
            let firstPlace = localStorage.getItem("firstPlace");
            let secondPlace = localStorage.getItem("secondPlace");
            let thirdPlace = localStorage.getItem("thirdPlace");
            var newPick;
            var notPick; // i hope i didnt destroy anything
            var other;

            if (input == "A") {
                newPick = firstType;
                notPick = secondType;
                other = "B";
            } else {
                newPick = secondType; 
                notPick = firstType;
                other = "A";
            }

            savePart2(newPick, notPick, table, input, other);
            beginSavePart3();

            if (secondPlace == newPick && firstPlace == notPick) {
                localStorage.setItem("firstPlace", newPick);
                localStorage.setItem("secondPlace", notPick);
            } else if (thirdPlace == newPick) {
                if (secondPlace == notPick) {
                    localStorage.setItem("thirdPlace", notPick);
                    localStorage.setItem("secondPlace", newPick);
                } else {
                    localStorage.setItem("firstPlace", "N/A");
                }
            }

            // continue
            window.location.href = "explore.html";
        }
        nextQuestion();
    } else {
        alert("Please either skip or select an answer");
    }
}

// RANDOMLY PLACED SAVE FUNCTION
function savePart2(one, two, table, a, b) {
    var html = localStorage.getItem("answerKey");
    html += "<b>You picked Type " + one + " over Type " + two + "</b> (" + a + " > " + b + ")</h3><br>";
    html += "<table>" + table + "</table><br>";
    localStorage.setItem("answerKey", html);
}

function beginSavePart3() {
    var html = localStorage.getItem("answerKey");
    html += "<br><h2>PART 3</h2><h3>The following types listed are related to the category you chose: </h3><br>";
    localStorage.setItem("answerKey", html);
}

function nextQuestion() {
    event.preventDefault();
    var length = compArray.length;

    if (count >= length - 1) {
        count = 0;
    } else {
        count += 1;
    }
    fillIdentify();
}

var final = [];
var groupArray = ["Center", "Social", "Conflict", "Relational"];
var finalArray = [0, 0, 0];

// EXPLORE
function fillExplore() {
    var final1 = localStorage.getItem("1");
    var final2 = localStorage.getItem("2");
    var final3 = localStorage.getItem("3");

    var num1 = all_types[final1][1];
    var num2 = all_types[final2][1];
    var num3 = all_types[final3][1];

    var firstPlace = localStorage.getItem("firstPlace");
    var secondPlace = localStorage.getItem("secondPlace");
    var thirdPlace = localStorage.getItem("thirdPlace");

    if (firstPlace == "N/A") {
        // how to word the ordering
        $(".inconclusiveOrNot").html("Based on the previous comparisons, the types did not emerge in any particular order: ");

        var array = [num1, num2, num3];
        final.push(num1, num2, num3);

        // WINGS
        identifyWings(array);

        // STRESS / GROWTH
        identifyArrows(array);

        $(".conclusiveResults").html("Hopefully these possible explanations will help you determine what your type is in this next section. In this section, we will be breaking down different traits that characterize each type. If you are particularly stumped on a comparison, you can come back to it after looking at the other comparisons. <b>There are only a few comparisons, so think about it before clicking 'Next'!</b> (Source: Rob Fitzel) <br>");
        
        if ($("#possibilities").text().trim() == "However, there is a reason why these 3 are your top types. Here are some possibilities you should consider:") {
            $("#possibilities").html("");
            $(".conclusiveResults").html("As a result, we were unable to eliminate any options for the next step. In this section, we will be breaking down different traits that characterize each type. If you are particularly stumped on a comparison, you can come back to it after looking at the other comparisons. <b>There are only a few comparisons, so think about it before clicking 'Next'!</b> (Source: Rob Fitzel) <br>");
        } 

    } else {
        final1 = "Type" + firstPlace;
        final2 = "Type" + secondPlace;
        final3 = "Type" + thirdPlace;

        num1 = all_types[final1][1];
        num2 = all_types[final2][1];
        num3 = all_types[final3][1];

        final.push(num1, num2);

        $("#possibilities").hide();
        $(".inconclusiveOrNot").html("Based on the previous comparisons, this is the order in which the types may be ranked in: ");
        $(".conclusiveResults").html("Based off this ranking, we will focus only on the top two types: <b>Type " + num1 + "</b> and <b>Type " + num2 + "</b>. In this section, we will be breaking down different traits that characterize each type. If you are particularly stumped on a comparison, you can come back to it after looking at the other comparisons. <b>There are only a few comparisons, so think about it before clicking 'Next'!</b> (Source: Rob Fitzel) <br>");
    }

    $("#firstTypeName1").html("Type " + num1);
    $("#secondTypeName1").html("Type " + num2);
    $("#thirdTypeName1").html("Type " + num3);

    let exp1 = all_types["Type" + num1][6];
    let exp2 = all_types["Type" + num2][6];
    let exp3 = all_types["Type" + num3][6];

    $("#readFirstType1").html(exp1);
    $("#readSecondType1").html(exp2);
    $("#readThirdType1").html(exp3);

    // fill in URLs
    $("#typelink1").attr("href", ei_url + "type-" + num1);
    $("#typelink2").attr("href", ei_url + "type-" + num2);
    $("#typelink3").attr("href", ei_url + "type-" + num3);
}

function fillExploreCompare() {
    if (groupArray.length == 0) {
        newQuestion();
    } else {
        var category = groupArray[count];
        var descriptions = [];

        for (var i=0; i < final.length; i++) {
            let group = grouptypes[final[i] - 1][category];
            if (!descriptions.includes(group)) {
                descriptions.push(group);
            }
        }

        var html = "";

        if (descriptions.length > 1) { // make sure there are enough things to compare
            // populate table
            $(".blurb").html(groupexp[category]);

            if (descriptions.length == 2) {
                html += "<tr><th>" + descriptions[0] + "</th><th>" + descriptions[1] + "</th></tr>";
                $("#q2c").hide();
                $("input[class='2']").hide();
            } else {
                html += "<tr><th>" + descriptions[0] + "</th><th>" + descriptions[1] + "</th><th>" + descriptions[2] + "</th></tr>";
                $("#q2c").show();
                $("input[class='2']").show();
            }

            html += "<tr>";
            for (var i=0; i < descriptions.length; i++) {
                let descriptionName = descriptions[i]; 
                html += "<td>" + groupdescriptions[descriptionName] + "</td>";
                $('.' + i).html(descriptionName);
                $('input[class='+ i + ']').attr('value', descriptionName);
            }
            html += "</tr>";

            $('input:checked').attr('checked',false);
            $("#exptbl").html(html); // idk why this is here

        } else { // otherwise...bye bye
            if (count == groupArray.length - 1) {
                count = 0;
            }
            var filtered = groupArray.filter(function(value, index, arr){
                    return value != category;
                });
            groupArray = filtered;
            fillExploreCompare();
        }
    }
}

function newQuestion() {
    $('#almost-done').show();
    $('input:checked').attr('checked',false);
    $(".blurb").html("Based on the past 15 minutes, which Enneagram Type do <b>you</b> think you are?");
    $("#exptbl, #skip2, #next2").remove();

    if (final.length == 2) {
        $("#q2c").hide();
        $("input[class='2']").hide();
    } else {
        $("#q2c").show();
        $("input[class='2']").show();
    }

    for (var i=0; i < final.length; i++) {
        $('.' + i).html("Type " + final[i]);
        $('input[class='+ i + ']').attr('value', final[i]);
    }
}

function submitAnswer3() {
    event.preventDefault();
    var firstPlace = localStorage.getItem("firstPlace");

    if ($("input:checked")[0] != undefined) {
        var input = $("input:checked")[0].value;
        var maxNum = Math.max.apply(null, finalArray)
        // check if unique and for second highest
        var numCount = 0;
        for (var i=0; i < final.length; i++) {
            if (maxNum == finalArray[i]) {
                numCount += 1;
            }
        }

        // final num IF conclusive
        var index = finalArray.indexOf(maxNum);
        var num = final[index];
        
        if (numCount > 1 && firstPlace == "N/A") { // inconclusive, spit out what they think they are
            console.log("heh");
            localStorage.setItem("final", "Type" + input);
            localStorage.setItem("agree", "true");
        } else { // conclusive, spit out what this test revealed (hopefully.........)   
            if (input != num) {
                localStorage.setItem("agree", "false");
            } else {
                localStorage.setItem("agree", "true");
            }

            if (firstPlace != "N/A" && maxNum == 2) { // if 3rd part was much more wishy washy compared to 1st part
                if (input != firstPlace) {
                    localStorage.setItem("agree", "false");
                } else {
                    localStorage.setItem("agree", "true");
                }
                console.log("nvm");
                localStorage.setItem("final", "Type" + firstPlace);
            } else {
                console.log("okie");
                localStorage.setItem("final", "Type" + num); // otherwise if no conclusive first place OR the count that selected this num was high enough
            } 
        }

        window.location.href = "results.html";

    } else {
        alert("Please select an answer.");
    }
}

function submitAnswer2() {
    event.preventDefault();
    if ($("input:checked")[0] != undefined) {
        var length = groupArray.length;
        var category = groupArray[count];
        var input = $("input:checked")[0].value;
        savePart3_0(input);

        // find which numbers are good
        for (var i=0; i < final.length; i++) {
            var num = final[i];
            var dict = grouptypes[num - 1];
            var descript = dict[category];
            if (descript == input) {
                finalArray[i] += 1;
                savePart3_1(num);
            }
        }

        var tbl = $("#exptbl").html();
        savePart3_2(tbl);

        groupArray.splice(count, 1);
        nextQuestion2();
    } else {
        alert("Please either skip or select an answer");
    }
}

// RANDOMLY PLACED SAVE FUNCTION
function savePart3_0(input) {
    var html = localStorage.getItem("answerKey");
    html += input + ": ";
    localStorage.setItem("answerKey", html);
}

function savePart3_1(num) {
    var html = localStorage.getItem("answerKey");
    html += "<b>Type " + num + "</b>, ";
    localStorage.setItem("answerKey", html);
}

function savePart3_2(table) {
    var html = localStorage.getItem("answerKey");
    html += "<br><table>" + table + "</table><br>";
    console.log(html);
    localStorage.setItem("answerKey", html);
}

function nextQuestion2() {
    event.preventDefault();
    var length = groupArray.length;

    if (count >= length - 1) {
        count = 0;
    } else {
        count += 1;
    }
    fillExploreCompare();
}

function identifyWings(array, dict) {
    var text = "<li>There are possible wing combinations: ";

    for (var i = 0; i < array.length; i++) {

        var num = array[i];

        var lowerNum = num - 1;
        if (lowerNum == 0) {
            lowerNum = 9;
        }

        var higherNum = num + 1;
        if (higherNum == 10) {
            higherNum = 1;
        }
        
        if (array.includes(lowerNum)) {
            text = text + "<a href='" + wing_url + "type-" + num + "-wing-" + lowerNum + "'>" + "<b>" + num + "w" + lowerNum + "</b></a>, ";
        }

        if (array.includes(higherNum)) {
            text = text + "<a href='" + wing_url + "type-" + num + "-wing-" + higherNum + "'>" + "<b>" + num + "w" + higherNum + "</b></a>, ";
        }
    }
    
    if (text != "<li>There are possible wing combinations: ") {
        text = text.substring(0, text.length - 2);
        text += "--which indicate that one of these combinations may be your dominant and wing type. Click on the wings types to know more!</li>";
        $(".wings").html(text);
    }
    
}

function identifyArrows(array, dict) {
    var text = "<li>You may also be confusing your dominant type with your stress and/or growth types: ";
    var dict = {"1": ["7", "4"],
                "2": ["4", "8"],
                "3": ["6", "9"],
                "4": ["1", "2"],
                "5": ["8", "7"],
                "6": ["9", "3"],
                "7": ["5", "1"],
                "8": ["2", "5"],
                "9": ["3", "6"],
    }

    for (var i = 0; i < array.length; i++) {

        var num = array[i];

        var growth = dict[num][0];
        if (array.includes(Number(growth))) {
            text = text + "<b>Type " + num + "</b> integrates into <b>Type " + growth + "</b>. ";
        }

        var stress = dict[num][1];
        if (array.includes(Number(stress))) {
            text = text + "<b>Type " + num + "</b> disintegrates into <b>Type " + stress + "</b>. ";
        }
        
    }

    if (text != "<li>You may also be confusing your dominant type with your stress and/or growth types: ") {
        text += "</li>";
        $(".arrows").html(text);
    }    
}

// RESULTS
function fillResults() {
    let final = localStorage.getItem("final");
    let agree = localStorage.getItem("agree");
    if (agree == "false") {
        $(".agree-results").html("You might want to reconsider--you might be a ");
    } else {
        $(".agree-results").html("It appears you do resemble a ");
    }
    let num = all_types[final][1];
    let verse = all_types[final][4];
    let video = all_types[final][5];

    var lowerNum = num - 1;
    if (lowerNum == 0) {
        lowerNum = 9;
    }

    var higherNum = num + 1;
    if (higherNum == 10) {
        higherNum = 1;
    }

    $(".rType").html(num);
    $(".rTypeL").html(lowerNum);
    $(".rTypeH").html(higherNum);
    $(".verse").html(verse);
    $(".video").html("<iframe width='420' height='315' src='" + video + "'></iframe>'");

    // fill in URLs
    $("#typelink").attr("href", ei_url + "type-" + num);
    $("#utypelink").attr("href", wing_url + "type-" + num + "-wing-" + higherNum);
    $("#ltypelink").attr("href", wing_url + "type-" + num + "-wing-" + lowerNum);

    // save answer key
    let html = localStorage.getItem("answerKey");
    $("#answerKey").html(html);
}

//accordion

function accordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
}


function retake() {
    localStorage.clear();
    window.location.href = "index.html";
}