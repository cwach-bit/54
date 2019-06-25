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
        saveTopThree(inputs);
        window.location.href = "threetypes.html";
    }
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
    fillResults(); // on fillResults.html
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
    if (Math.abs(num1 - num2) == 1 || Math.abs(num2 - num3) == 1 || Math.abs(num3 - num1) == 1) {
        $("#wing_explanation").html(wing_text);
    }

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
    $("#tbl").html(html);
}

function submitAnswer() {
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

    if (length == 3) {

        if (input == "A") {
            localStorage.setItem("probType", firstType);
            localStorage.setItem("notType", secondType);
        } else {
            localStorage.setItem("probType", secondType);
            localStorage.setItem("notType", firstType);
            console.log(secondType);
        }

        compArray.splice(count, 1);
    } else if (length == 2) {
        let probType = localStorage.getItem("probType");
        let notType = localStorage.getItem("notType");
        var newPick;

        if (input == "A") {
            newPick = firstType;
        } else {
            newPick = secondType; 
            console.log(secondType);       
        }

        if (notType == newPick) {
            console.log("SWITCH");
            localStorage.setItem("final", probType);
            window.location.href = "results.html";
        } else {
            compArray.splice(count, 1);
        }
    } else {
        if (input == "A") {
            localStorage.setItem("final", "Type" + firstType);
            window.location.href = "results.html";
        } else {
            console.log(secondType);
            localStorage.setItem("final", "Type" + secondType);
            window.location.href = "results.html";
        }
    }

}

$(document).ready(function() {
    $(".identify").click(function() {
        event.preventDefault();
        var length = compArray.length;
        if (length == 3) {
            if (count == 2) {
                count = 0;
            } else {
                count += 1;
            }
        } else if (length == 2) {
            if (count >= 1) {
                count = 0;
            } else {
                count += 1;
            }
        } else {
            count = 0;
        }
        fillIdentify();
    });
});

// RESULTS
function fillResults() {
    let final = localStorage.getItem("final");
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