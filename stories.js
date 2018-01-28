$(document).ready(function() {

// Array of Stories: Post-Number, Author
const stories = [
  [2, "ValeriaKoriatchenko"],
  [3, "edoh.dev"],
  [4, "susanne.dedecke"],
  [5, "melindabojte"],
  [6, "fcFn"],
  [10, "alexandrafuchs89"],
  [11, "TheLastMoikan"],
  [12, "dinkoeichin"],
  [13, "Aureel"],
  [14, "alice.berlin"],
  [15, "maevanap.contact"],
  [18, "JABedford"],
  [19, "Fred_P"],
  [20, "davidlower4"],
  [21, "f4fligsmzvtf"],
  [22, "ntjnh"],
  [24, "dalnokipapp.zsofia"],
  [25, "christin_868378"],
  [26, "intersect"],
  [27, "ahmed_15826284723221"],
  [31, "nesi"],
  [32, "diana.vile"],
  [33, "caeking93"],
  [34, "k.dalma.szabo"],
  [35, "i.hajczewska"],
  [36, "egarnous"],
  [39, "renatamartins"],
  [40, "aliciathornthwaite"],
  [42, "kara.ertan9"],
  [43, "veencsinxa"],
  [44, "Nella486"],
  [45, "GulsahG"],
  [46, "panosmagic3246vh"],
  [48, "Dan-Alexandru"],
  [50, "khorramk.kbsk"],
  [51, "kotsouniki"],
  [52, "ozkanabdullahoglu"],
  [53, "karolinaseidlova"],
  [54, "zoidev"],
  [55, "benpinder91"],
  [57, "JUBA"],
  [58, "rihanna_109441"],
  [59, "pietromazzaglia"],
  [60, "elBanauso"],
  [61, "blackstar.88"],
  [62, "XJ.Chen"],
  [63, "ahmad.mahallawy"],
  [64, "ultragasp"],
  [65, "corinai"],
  [66, "kvanwijn"],
  [67, "kiril.lukiyan"],
  [68, "rachael_f"],
  [69, "catherine.hadjiiskao"],
  [70, "nick_bellamy"],
  [71, "carla8"],
  [72, "kareemmmostafaa"],
  [74, "Miriamrose"],
  [75, "MarinaSarm"],
  [76, "kuroi.kasa1509"],
  [77, "batuhancaksin"],
  [78, "MariaIoana"],
  [79, "gabrielcmoraru"],
  [80, "jure.g"],
  [81, "dita.rahmane.silova"],
  [82, "stsopour"],
  [83, "Sergiu.B"],
  [84, "mkhy7"],
  [85, "feoktistovdmitriy"],
  [86, "Irina-1"],
  [87, "davide.iaiunese"],
  [88, "stromov.ybznb"],
  [89, "tombrown91"],
  [90, "Natalie-551720"],
  [92, "czochanski106t0"],
  [93, "lucia-ojeda"],
  [94, "consulting.jbt"],
  [95, "Diana_R"],
  [96, "bycor"],
  [97, "dominisha.petersen"],
  [100, "angie_h"],
  [102, "cemre91"],
  [103, "annamorris1zef8m"],
  [104, "arkadiuszmarekzurek"],
  [108, "Dmitri Yanov-Yanovsky"],
  [110, "yusef_salama"],
  [111, "dijack"],
  [112, "dora.online"],
  [119, "lamikk"],
  [120, "valerieyonygv4"],
  [122, "annamaria.arapibeno"],
  [123, "Dimas_X"],
  [126, "ekarmyshova"],
  [127, "Tamilselvignanasekar"],
  [128, "aleksej.jurkoit"],
  [129, "Natalia_aga"],
  [130, "magda_k"],
  [131, "Thenootza"],
  [132, "adrianne.r.george"],
  [133, "cansuinancl8sig"],
  [134, "hussam.emam2"],
  [135, "mohamedref34t"],
  [136, "jCL_17"],
  [137, "vickyarp22"],
  [138, "vicky.nikol7"],
  [139, "daniela.kuester"],
  [140, "AlexNikonov"],
  [141, "Julli"],
  [142, "sibirium"],
  [143, "matey.devedzhiev"],
  [144, "JP_KR"],
  [145, "ewaczechova"],
  [146, "YegorCreative"],
  [147, "Sandor_Hajdu"],
  [148, "kasyanovamg"],
  [149, "lkv.ukr"],
  [150, "natcodes"],
  [151, "lalula.frei"],
  [152, "diegoalvarado"],
  [153, "paulstandley72n6hyi"],
  [155, "Tubbie"],
  [157, "anastasia.seraciov-r"],
  [159, "soniiasiilva"],
  [160, "enas_eng2007kv3"],
  [161, "Nour102"],
  [162, "lech2"],
  [164, "doaa.shafik1"],
  [165, "maxpozdniakow"],
  [167, "johnyend"],
  [168, "mghazalfrhnb7v"],
  [169, "traianbrb"],
  [170, "t.jedrzejczak"],
  [171, "moamen.ux"],
  [172, "zhdanovairyna"],
  [173, "zastrupen"],
  [174, "mahmoud2030"],
  [175, "arsens.t"],
  [177, "andrew.everall1995"],
  [178, "tori.woods85"],
  [179, "alexutac"],
  [180, "brigitta.bunford"],
  [182, "skrece22"],
  [183, "alecastro23"],
  [184, "aymanmorsy.eg"],
  [185, "ibogdan.chiriac"],
  [186, "Roni_Kovacs"],
  [187, "_Reka"],
  [188, "nicole.pards"],
  [189, "Esraa123"],
  [190, "bad.communists8y0"],
  [191, "alexandrubaltag75"],
  [192, "PaulaPL"],
  [193, "jola_mb"],
  [194, "Usama2424"],
  [195, "Leucazolitmine"],
  [196, "gabriel.malmqybfy"]
];

// Function that creates a random Number in between a given range
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Show the User a random Link to Story and it's author
function showDetails() {
  let result = $('#story_box');
  result.children().remove();
  let i = randomNum(0, 154);
  console.log(i);
  result.append('<div class="story_num">Student-Story: <strong>#' + (i+1) + '</strong></div>');
  result.append('<div class="author">Author: <strong>' + stories[i][1] + '</strong></div>');
  result.append('<div class="link">' + '<a href="https://discussions.udacity.com/t/let-s-inspire-and-make-a-change-with-google-and-udacity-top-25-most-inspirational-stories-will-be-published-in-udacity-s-blog/537527/' + stories[i][0] + '" target="_blank">Read Story</a>') + '</div>';
}

let isOpen = false;

let fullList = $('#full_list');
function listAll() {
  console.log(isOpen);
  if(isOpen == true) {
    fullList.children().remove();
    isOpen = false;
    console.log(isOpen);
  } else {
    isOpen = true;
    for(let x = 0; x < stories.length; x++) {
      fullList.append('<div class="row"><div class="story_num_all"><strong>#' + (x+1) + '</strong></div>' + '<div class="author_all">Author: <strong>' + stories[x][1] + '</strong></div>' + '<div class="link_all">' + '<a href="https://discussions.udacity.com/t/let-s-inspire-and-make-a-change-with-google-and-udacity-top-25-most-inspirational-stories-will-be-published-in-udacity-s-blog/537527/' + stories[x][0] + '" target="_blank">Read Story</a>') + '</div></div>';
    }
  }
}


// Call showDetails on click
$("#getStory").on('click', function(event){
  event.preventDefault();
  showDetails();
})
  
$("#getList").on('click', function(event){
  event.preventDefault();
  listAll();
})
  
// End of the Script
});
