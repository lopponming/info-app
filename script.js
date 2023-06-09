/* HELP QUESTIONMARK POP_UP */
const help = document.getElementById('help');
const tooltip = document.getElementById('tooltip');

help.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
});

help.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});


/* PROFESSIONS IN DROP DOWN MENU: */
const professions = {
    "UI designer": "ui designer",
    "Social Media Manager": "social media manager",
    "Web Designer": "web designer",
    "UX Designer": "ux designer", //ABOVE ARE UX
    "Game Designer": "game designer",
    "Games Animator": "games animator",
    "Video Game Producer": "video game producer",
    "3D-Modeler": "3d-modeler",
    "Games Artist": "games artist", //ABOVE ARE GAME THINGS
    "Visual Designer": "visual designer",
    "Animator": "animator",
    "Motion Graphics Artist": "motion graphic artist",
    "Visual Concept Designer": "visual concept designer",
    "Storyboard Artist": "storyboard artist",
    "Junior VFX Artist": "junior vfx artist",
    "Graphic Designer": "graphic designer",
    "Illustrator": "illustrator", //ABOVE ARE THE VISUAL DESIGN
    "Sound Artist": "sound artist",
    "Futurologist": "futurologist",
    "Media Artist": "media artist",
    "Art Mediator": "art mediator",
    "Installation Artist": "installation artist",
    "Art Producer": "art producer",
    "Art Curator": "art curator",
    "Photographic Artist": "photographic artist",
    "Video Artist": "video artist",
    "Art Event Producer": "art event producer",
    "Concept Artist": "concept artist",
    "Artist (fine art)": "artist",
    "Contemporary Artist": "contemporary artist", //ABOVE ARE FINE ART THINGS
    "Event Promoter": "event promoter",
    "Mixing Engineer": "mixing engineer",
    "Live/Streaming Engineer": "live/streaming engineer",
    "Recording Engineer": "recording engineer",
    "Music Publisher": "music publisher",
    "Label A&R": "label a&r",
    "Music Producer": "music producer",
    "Audiobook Editor": "audiobook editor",
    "Sound Engineer": "sound engineer",
    "Song Writer": "song writer",
    "Game Sound Designer": "game sound designer",
    "Sound Designer": "sound designer" //ABOVE ARE THE SOUND THINGS
}

// Generate the DROPDOWN LIST OF PROFESSIONS
const professionList = $("#profession-list");
$.each(professions, function (key, value) {
    professionList.append($('<option></option>').attr('value', value).text(key));
});

let studyPlanner = {
    professions: [
        {
            professionName: 'graphic designer',
            relevantMinors: [
                {
                    minorName: 'visual design',
                    minorImportance: 10
                }
            ],
            relevantFreeChoiceCourses: [
                {
                    courseName: 'communication and community building in social media',
                    freeChoiceCoursesImportance: 10
                }
            ]
        },
        {
            professionName: 'visual designer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'ui designer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'social media manager',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'web designer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'ux designer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'game designer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'games animator',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'video game producer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: '3d-modeler',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'games artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'animator',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'motion graphic artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'visual concept designer',
            relevantMinors: [],
        },
        {
            professionName: 'storyboard artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'junior vfx artist',
            relevantMinors: [],
        }, 
        {
            professionName: 'illustrator',
            relevantMinors: [],
        },
        {
            professionName: 'sound artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'futurologist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'media artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'art mediator',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'installation artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'art producer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'art curator',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'photographic artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'video artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'art event producer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'concept artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'contemporary artist',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'event promoter',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'mixing engineer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'live/streaming engineer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'recording engineer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'music publisher',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'label a&r',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'music producer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'audiobook editor',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'sound engineer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'song writer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'game sound designer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        },
        {
            professionName: 'sound designer',
            relevantMinors: [],
            relevantFreeChoiceCourses: []
        }
    ],
    basicStudies: [
        {
            courseName: 'media channels and platforms',
            scheduledTime: 'fall',
            credits: 5
        },
        {
            courseName: 'media work methods',
            scheduledTime: 'fall',
            credits: 5
        },
        {
            courseName: 'introduction to visual design',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to programming',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to video',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to animation',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'scriptwriting and storytelling',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to web tools',
            scheduledTime: 'fall',
            credits: 3
        }, //THIS ENDS THE INT MEDIA BASIC STUDIES
        {
            courseName: 'perception',
            scheduledTime: 'fall',
            credits: 5
        },
        {
            courseName: 'contemporary art methods',
            scheduledTime: 'fall',
            credits: 5
        },
        {
            courseName: 'introduction to animation in fine art',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to applied fine art',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to fine art analysis',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to moving image',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to painting',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to fine art photography',
            scheduledTime: 'fall',
            credits: 3
        }, //THIS ENDS THE FINE ART BASIC STUDIES
        {
            courseName: 'audio technology basics',
            scheduledTime: 'fall',
            credits: 5
        },
        {
            courseName: 'live event technology basics',
            scheduledTime: 'fall',
            credits: 5
        },
        {
            courseName: 'introduction to sound design',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to music business and entrepreneurship',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to song writing',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to record production',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'introduction to popular music theory',
            scheduledTime: 'fall',
            credits: 3
        },
        {
            courseName: 'music production project',
            scheduledTime: 'fall',
            credits: 3
        }, //THIS END THE MUSIC PROD BASIC STUDIES
    ],
    minors: [
        {
            minorName: 'visual design',
            scheduledTime: 'spring',
            courses: [
                {
                    courseName: 'principles of visual communication',
                    credits: 5
                },
                {
                    courseName: 'visual design',
                    credits: 5
                },
                {
                    courseName: 'graphics in motion',
                    credits: 5
                },
                {
                    courseName: 'visual design project 1',
                    credits: 5
                },
                {
                    courseName: 'visual design project 2',
                    credits: 5
                }
            ]
        },
        {
            minorName: 'web and app design and development',
            scheduledTime: 'spring',
            courses: [
                {
                    courseName: 'web and app design theory',
                    credits: 5
                },
                {
                    courseName: 'web and app design',
                    credits: 5
                },
                {
                    courseName: 'web and app programming',
                    credits: 5
                },
                {
                    courseName: 'web/app design project 1',
                    credits: 5
                },
                {
                    courseName: 'web/app design project 2',
                    credits: 5
                }
            ]
        },
        {
            minorName: 'games academy',
            scheduledTime: 'fall',
            courses: [
                {
                    courseName: 'basics of 3D modeling for game artists',
                    credits: 5
                },
                {
                    courseName: '3D environment modeling',
                    credits: 5
                },
                {
                    courseName: 'creating and animating 3D characters',
                    credits: 5
                },
                {
                    courseName: 'advanced 3D workshop',
                    credits: 5
                },
                {
                    courseName: 'game project 2',
                    credits: 10
                }
            ]
        },
        {
            minorName: 'animation',
            scheduledTime: 'fall',
            courses: [
                {
                    courseName: 'visual effects for moving image',
                    credits: 5
                },
                {
                    courseName: 'animation production',
                    credits: 5
                },
                {
                    courseName: 'animation principles and practices',
                    credits: 5
                },
                {
                    courseName: 'animation project 1',
                    credits: 5
                },
                {
                    courseName: 'animation project 2',
                    credits: 5
                }
            ]
        },
        {
            minorName: 'user experience design',
            scheduledTime: 'fall',
            courses: [
                {
                    courseName: 'user-centered design',
                    credits: 5
                },
                {
                    courseName: 'user interface design and usability',
                    credits: 5
                },
                {
                    courseName: 'service design',
                    credits: 5
                },
                {
                    courseName: 'user experience design project 1',
                    credits: 5
                },
                {
                    courseName: 'user experience design project 2',
                    credits: 5
                }
            ]
        },
        {
            minorName: 'emerging media production',
            scheduledTime: 'spring',
            courses: [
                {
                    courseName: 'emerging media trends',
                    credits: 5
                },
                {
                    courseName: 'emerging media technology',
                    credits: 5
                },
                {
                    courseName: 'content creation in emergin media production',
                    credits: 5
                },
                {
                    courseName: 'emerging media project 1',
                    credits: 5
                },
                {
                    courseName: 'emerging media project 2',
                    credits: 5
                }
            ]
        }, // THIS ENDS THE INTERACTIVE MEDIA MINORS
        {
            minorName: 'drawing and painting',
            scheduledTime: 'spring',
            courses: [
                {
                    courseName: 'color theory and history of painting',
                    credits: 5
                },
                {
                    courseName: 'painting techniques',
                    credits: 5
                },
                {
                    courseName: 'drawing and paper based techniques',
                    credits: 5
                },
                {
                    courseName: 'drawing and painting project 1',
                    credits: 5
                },
                {
                    courseName: 'drawing and painting project 2',
                    credits: 5
                }
            ]
        },
        {
            minorName: 'moving image',
            scheduledTime: 'spring',
            courses: [
                {
                    courseName: 'cinematic artwork',
                    credits: 5
                },
                {
                    courseName: 'video installations',
                    credits: 5
                },
                {
                    courseName: 'narratives in moving image',
                    credits: 5
                },
                {
                    courseName: 'moving image project 1',
                    credits: 5
                },
                {
                    courseName: 'moving image project 2',
                    credits: 5
                }
            ]
        }, // THIS ENDS THE FINE ART MINORS
        {
            minorName: 'emerging media in music and event production',
            scheduledTime: 'spring',
            courses: [
                {
                    courseName: 'sound design in emerging media productions',
                    credits: 5
                },
                {
                    courseName: 'music production in emerging media productions',
                    credits: 5
                },
                {
                    courseName: 'new live event sound production solutions',
                    credits: 5
                },
                {
                    courseName: 'emerging media project 1',
                    credits: 5
                },
                {
                    courseName: 'emerging media project 2',
                    credits: 5
                }
            ]
        },
        {
            minorName: 'sound design',
            scheduledTime: 'spring',
            courses: [
                {
                    courseName: 'sound design techniques for games and interactive media',
                    credits: 5
                },
                {
                    courseName: 'sound design for film',
                    credits: 5
                },
                {
                    courseName: 'sound design for tv',
                    credits: 5
                },
                {
                    courseName: 'sound design project 1',
                    credits: 5
                },
                {
                    courseName: 'sound design project 2',
                    credits: 5
                }
            ]
        },
        {
            minorName: 'event production and business',
            scheduledTime: 'spring',
            courses: [
                {
                    courseName: 'event production',
                    credits: 5
                },
                {
                    courseName: 'live sound production',
                    credits: 5
                },
                {
                    courseName: 'light design for events',
                    credits: 5
                },
                {
                    courseName: 'event production project 1',
                    credits: 5
                },
                {
                    courseName: 'event production project 2',
                    credits: 5
                }
            ]
        } // THIS ENDS THE MUSIC PRODUCTION MINORS
    ],
    freeChoiceCourses: [
        {
            courseName: 'introduction to animation in fine art',
            scheduledTime: 'spring',
            credits: 3
        },
        {
            courseName: 'introduction to user experience design',
            scheduledTime: 'spring',
            credits: 3
        },
        {
            courseName: 'advanced web design workshop',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'introduction to visual design',
            scheduledTime: 'spring',
            credits: 3
        },
        {
            courseName: 'introduction to painting',
            scheduledTime: 'spring',
            credits: 3
        },
        {
            courseName: 'introduction to sound design',
            scheduledTime: 'spring',
            credits: 3
        },
        {
            courseName: 'self branding',
            scheduledTime: 'spring',
            credits: 1
        },
        {
            courseName: 'advanced visual design workshop',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'advanced live event workshop',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'game sound design workshop',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'content design workshop',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'experimental media techniques workshop',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'sketch book seminar',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'advanced moving image',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'networked media culture',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'media professional literature',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'event management and marketing',
            scheduledTime: 'spring',
            credits: 5
        },
        {
            courseName: 'life drawing',
            scheduledTime: 'spring',
            credits: 5
        }
    ]
}


let mySettings = {
    drop: function (event, ui) {
        var text = ui.draggable.find(".minorName").text();
        $(this).val(text);
        ui.draggable.remove();
        outPutMinors();
    }
}

$(document).ready(function() {
    for (var i = 0; i < 2; i++) {
        var minor = $('<div>').addClass('theMinorName').append(
            $('<label>').attr('for', 'minor-name-' + i).text('MINOR:'),
            $('<input>').attr({
                type: 'text',
                id: 'minor-name-' + i,
                name: 'minor-name-' + i,
                placeholder: 'drop minor here'
            }).addClass('selectedMinor').droppable(mySettings)
        );
        var importance = $('<div>').addClass('theMinorImportance').append(
            $('<label>').attr('for', 'minor-importance-' + i).text('IMPORTANCE:'),
            $('<select>').attr({
                id: 'minor-importance-' + i,
                name: 'minor-importance-' + i
            }).append(function () {
                var options = '<option value="" disabled selected>select importance</option>';
                for (var j = 1; j <= 10; j++) {
                options += '<option value="' + j + '">' + j + '</option>';
                }
                return options;
            })
        );
        $('.input-box').append(minor, importance);
    }
});


/* OUTPUT MINORS TO PAGE (SECOND TIME AROUND WITH SOME ADJUSTMENTS */
function outPutMinors() {
    $('.minors').html('');
    $.each(studyPlanner.minors, function (index, minor) {
        var $minorDiv = $('<div>').html(`<span class="minorName">${minor.minorName}</span>`).addClass('draggable minor');
        var $expandButton = $('<button>').text('\u25BC').addClass('expand-btn');
        $minorDiv.append($expandButton);
        var $courseList = $('<ul>').addClass('course-list');
        $.each(minor.courses, function (index, course) {
            var $course = $('<li>').text(course.courseName + ' (' + course.credits + ' credits)');
            $courseList.append($course);
        });
        $minorDiv.append($courseList.hide());
        $('.minors-list').append($minorDiv);
        $('.draggable').draggable();
    });
}
outPutMinors();
$('.expand-btn').on('click', function () {
    $(this).closest('.draggable').find('.course-list').toggle();
});


// Make the original minor input field droppable
$('#minor-name').droppable(mySettings);


/* ADDING A NEW MINOR + MINOR IMPORTANCE */
$('#add-minor-btn').on('click', function () {
    event.preventDefault();
    let myMinor = $('<div>').addClass('theMinorName').append(
        $('<label>').attr('for', 'minor-name').text('MINOR:'),
        $('<input>').attr({
            type: 'text',
            id: 'minor-name',
            name: 'minor-name'
        }).addClass('selectedMinor').attr('placeholder', 'drop minor here').droppable(mySettings)
    )
    $('.input-box').append(myMinor);

    let minorImportance = $('<div>').addClass('theMinorImportance').append(
        $('<label>').attr('for', 'minor-importance').text('IMPORTANCE:'),
        $('<select>').attr({
            id: 'minor-importance',
            name: 'minor-importance'
        }).append(function () {
            var options = '<option value="" disabled selected>select importance</option>';
            for (var i = 1; i <= 10; i++) {
                options += '<option value="' + i + '">' + i + '</option>';
            }
            return options;
        })
    )
    $('.input-box').append(minorImportance);
});

/* OUTPUT FREE-CHOICE STUDIES TO PAGE */
$.each(studyPlanner.freeChoiceCourses, function(index, freeChoiceCourses) {
    $('.freeChoice').append($('<div>').text(freeChoiceCourses.courseName).addClass('draggable freechoice'));
});

/* OUTPUT BASIC STUDIES TO PAGE */
$.each(studyPlanner.basicStudies, function(index, basicStudies) {
    $('.basicStudies').append($('<div>').text(basicStudies.courseName).addClass('draggable basicstudies'));
});

$('.draggable').draggable();

// Show basic studies by default
$('.freeChoice').hide();

// Toggle studies on h4 click
$('.toggleable').click(function() {
    $('.toggleable').removeClass('active');
    $(this).addClass('active');
    var courseType = $(this).data('course-type');
    $('.basicStudies').toggle(courseType == 'basic');
    $('.freeChoice').toggle(courseType == 'free-choice');
});


//DROPPABLE minors BUT hide the minor courses once dropped THAT DOESN*T WORK
$('.input-box').droppable({
    drop: function (event, ui) {
        // Get the text from the dropped element
        var text = ui.draggable.text().trim();

        // Check if the dropped element is a minor
        var minor = studyPlanner.minors.find(function (minor) {
            return minor.minorName === text;
        });

        // If the dropped element is a minor, show only the minor name
        if (minor) {
            $(this).val(minor.minorName);
        }
    }
});

//DROPPABLE thing for the basic/free choice studies
$('.course-name').droppable({
    drop: function (event, ui) {
        // Get the text from the dropped element
        var text = ui.draggable.text();

        // Add the text to the input box
        $(this).val(text);

        // Remove the dropped element
        ui.draggable.remove();
    }
});

//NEW INPUT for basic/free choice studies is made by this:
$('#add-course-btn').on('click', function () {
    event.preventDefault();
    $('<input>').attr({
        type: 'text',
        class: 'course-name',
        placeholder: 'drop course here'
    }).addClass('droppable-course-name').droppable({
        drop: function (event, ui) {
            var text = ui.draggable.text();
            $(this).val(text);
            ui.draggable.remove();
            $('.highlight').removeClass('highlight');
        }
    }).appendTo('#courseWrapper');
});

// WHEN DRAGGING course DIV input IS HIGHLIGHTED
$(function () {
    // Add CSS class to .course-name input when draggable is being dragged
    $('.draggable.freechoice').on('dragstart', function () {
        $('.course-name').addClass('highlight');
    });

    // Remove CSS class from .course-name input when draggable is dropped
    $('.ui-droppable').on('drop', function () {
        $(this).removeClass('highlight');
    });

    // Remove CSS class from .course-name input when draggable is dragged out of it
    $('.course-name').on('dragleave', function () {
        $('.course-name').removeClass('highlight');
    });
});


//SUBMIT BUTTON
$('#submit-btn').on('click', function () {
    let selectedProfession = $('#profession-list').val();
    let profession = findProfessionByName(selectedProfession);
    $('.selectedMinor').each(function (index, element) {
        profession.relevantMinors.push(element.value);
    })
    
    console.log(profession);
})
function findProfessionByName(professionName) {
    const profession = studyPlanner.professions.find(prof => prof.professionName == professionName);
        if (profession) {
            return profession;
        } else {
            return null;
        }
}