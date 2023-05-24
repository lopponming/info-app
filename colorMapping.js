//color coding/mapping the courses (basic and free-choice)
const colorMapping = {
    //basic studies first
    'media channels and platforms': '#bfefff',
    'media work methods': '#bfefff',
    'introduction to visual design': '#bfefff',
    'introduction to programming': '#bfefff',
    'introduction to video': '#bfefff',
    'introduction to animation': '#bfefff',
    'scriptwriting and storytelling': '#bfefff',
    'introduction to web tools': '#bfefff', //int media above
    'perception': '#ffd3b4',
    'contemporary art methods': '#ffd3b4',
    'introduction to animation in fine art': '#ffd3b4',
    'introduction to applied fine art': '#ffd3b4',
    'introduction to fine art analysis': '#ffd3b4',
    'introduction to moving image': '#ffd3b4',
    'introduction to painting': '#ffd3b4',
    'introduction to fine art photography': '#ffd3b4', //fine art above
    'audio technology basics': '#88e288',
    'live event technology basics': '#88e288',
    'introduction to sound design': '#88e288',
    'introduction to music business and entrepreneurship': '#88e288',
    'introduction to song writing': '#88e288',
    'introduction to record production': '#88e288',
    'introduction to popular music theory': '#88e288',
    'music production project': '#88e288', //ends musProd
    //free choice studies next
    'introduction to visual design': '#bfefff',
    'introduction to user experience design': '#bfefff',
    'advanced visual design workshop': '#bfefff',
    'advanced web design workshop': '#bfefff', //ends intMed
    'introduction to animation in fine art': '#ffd3b4',
    'introduction to painting': '#ffd3b4',
    'advanced moving image': '#ffd3b4',
    'life drawing': '#ffd3b4', //ends fine art
    'introduction to sound design': '#88e288',
    'advanced live event workshop': '#88e288',
    'game sound design workshop': '#88e288', //end musProd
    //the ones i don't know:
    'content design workshop': '#f2bbdf',
    'experimental media techniques workshop': '#f2bbdf',
    'networked media culture': '#f2bbdf',
    'media professional literature': '#f2bbdf',
    'event management and marketing': '#f2bbdf',
  };
  
  // Function to create a draggable study element with color coding
  function createStudyElement(courseName, courseType) {
    var studyElement = $('<div>').text(courseName).addClass('draggable');
    if (courseType === 'basic' && colorMapping.hasOwnProperty(courseName)) {
      studyElement.css('background-color', colorMapping[courseName]);
    } else if (courseType === 'free-choice') {
        studyElement.css('background-color', colorMapping[courseName]);
      }
    return studyElement;
  }


  