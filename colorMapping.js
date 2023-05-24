//color coding/mapping the courses (basic and free-choice)
const colorMapping = {
    //basic studies first
    'media channels and platforms': '#a4cfa6',
    'media work methods': '#a4cfa6',
    'introduction to visual design': '#ffb1b1',
    'introduction to programming': '#ffbfff',
    'introduction to video': '#ffbfff',
    'introduction to animation': '#ffbfff',
    'scriptwriting and storytelling': '#ffbfff',
    'introduction to web tools': '#b0b0fc', //int media above
    'perception': '#feffb4',
    'contemporary art methods': '#feffb4',
    'introduction to animation in fine art': '#feffb4',
    'introduction to applied fine art': '#feffb4',
    'introduction to fine art analysis': '#feffb4',
    'introduction to moving image': '#feffb4',
    'introduction to painting': '#feffb4',
    'introduction to fine art photography': '#feffb4', //fine art above
    'audio technology basics': '#bdffbd',
    'live event technology basics': '#bdffbd',
    'introduction to sound design': '#bdffbd',
    'introduction to music business and entrepreneurship': '#bdffbd',
    'introduction to song writing': '#bdffbd',
    'introduction to record production': '#bdffbd',
    'introduction to popular music theory': '#bdffbd',
    'music production project': '#bdffbd',
    // Add more mappings here
  };
  
  // Function to create a draggable study element with color coding
  function createStudyElement(courseName, courseType) {
    var studyElement = $('<div>').text(courseName).addClass('draggable');
    if (courseType === 'basic' && colorMapping.hasOwnProperty(courseName)) {
      studyElement.css('background-color', colorMapping[courseName]);
    }
    return studyElement;
  }
  
  /* OUTPUT FREE-CHOICE STUDIES TO PAGE */
 /*  $.each(studyPlanner.freeChoiceCourses, function(index, freeChoiceCourses) {
    var studyElement = createStudyElement(freeChoiceCourses.courseName, 'free-choice');
    $('.freeChoice').append(studyElement);
  }); */
  
  /* OUTPUT BASIC STUDIES TO PAGE */
  /* $.each(studyPlanner.basicStudies, function(index, basicStudies) {
    var studyElement = createStudyElement(basicStudies.courseName, 'basic');
    $('.basicStudies').append(studyElement);
  }); */


  