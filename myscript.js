 function excused() {
            
            console.log("heloooo")
            
            let myDog = ['mom', 'cat', 'distraction', 'hate for you'];
            let ate = ['pissed', 'shitted', 'hated', 'loved'];
            let myHomework = ['my job', 'my own funeral', 'this wedding', 'my birthday'];
            
            let who = myDog[Math.round(Math.random()*(myDog.length-1))];
            let did = ate[Math.round(Math.random()*(ate.length-1))];
            let what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
            
            document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + '<br> my ' + what + '.</div>'
            
        }