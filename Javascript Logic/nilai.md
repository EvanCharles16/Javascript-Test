2)  Buatlah flowchart dan pseudeocode dengan actual code process seperti dibawah ini:

    jika nilai < 60 = kurang
    jika nilai < 75 = cukup
    jika nilai < 85 = baik
    jika nilai > 90 = sangat baik


<!-- Pseudocode Notation -->
    Pseudocode Notation

    REPEAT
            OUTPUT 'What is the value i am this subject?'
            INPUT user inputs my value did i get
            STORE the user's input in the answer variable
            IF answer = '<= 100 &&  >= 90' THEN
		            OUTPUT 'Sangat Baik'
            ELSE IF answer = '<= 89 && >= 75' THEN
                    OUTPUT 'Baik'
            ELSE IF answer = '<= 74 && > 60' THEN
                    OUTPUT 'Cukup'
            ELSE IF answer = '<= 60 && >= 55' THEN
                    OUTPUT 'Kurang'        
	        ELSE IF answer = '< 55' THEN
		            OUTPUT 'Remedial'
            ELSE
                    OUTPUT  'Max Nilai hanya 100'

  

<!-- Actual Code  -->
    Actual Code

    console.log('Start Program Checking Value')

    const valueInput = window.prompt('What is the value i am this subject?');
    const value = Number(valueInput);

    if(value <= 100 && value >= 90) {
        window.alert('sangat baik');
    }

    else if(value <= 89 && value >= 75) {
        window.alert('baik');
    }

    else if(value <= 74 && value > 60) {
        window.alert('cukup');
    }

    else if(value <= 60 && value >= 55) {
        window.alert('kurang');
    }

    else {
        window.alert('Remedial');
    }

    console.log('Stop Program Checking Value');