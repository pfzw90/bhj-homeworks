"use strict;"

const sendAnswer = function(pollId, answerId) {
    window.alert('Спасибо за участие в опросе!');

    let ansreq = new XMLHttpRequest();
    ansreq.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    ansreq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ansreq.responseType = 'json';
    ansreq.addEventListener('readystatechange', function() {

        if (this.readyState === ansreq.DONE && ansreq.status === 200) {
            Array.from(document.querySelectorAll('.poll__answer')).forEach(elem => elem.remove());
            let res = ansreq.response.stat;
            let totalVotes = 0;
            res.map(vote => totalVotes += vote['votes']);
            res.forEach(result => {
                option = document.createElement('div');
                answer = document.createElement('span');
                answer.innerText = result['answer'];
                votes = document.createElement('span');
                votes.innerText = ' --- ' + ((result['votes'] / totalVotes)*100).toFixed(2) + ' %';
                option.insertAdjacentElement('beforeend', answer);
                option.insertAdjacentElement('beforeend', votes);
                document.getElementById('poll__answers').insertAdjacentElement('beforeend', option);
            });
        }
    })
    ansreq.send('vote='+ pollId + '&answer=' + answerId);
}


const showPoll =  function(poll) {
        let pollId = poll['id'];
        document.getElementById('poll__title').innerText = poll['data']['title'];
        let answers = poll['data']['answers'];
        answers.forEach(answer => {
            let answerButton = document.createElement('button');
            answerButton.className = 'poll__answer';
            answerButton.innerText = answer;
            answerButton.addEventListener('click', function(ev) {
                ev.preventDefault();
                sendAnswer(pollId, answers.indexOf(answer));
            });
            document.getElementById('poll__answers').insertAdjacentElement('beforeend', answerButton);
        });
}



let pollreq = new XMLHttpRequest();
pollreq.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
pollreq.responseType = 'json'
pollreq.addEventListener('readystatechange', function() {
    if (this.readyState === pollreq.DONE && pollreq.status === 200) {
        showPoll(pollreq.response);
    }
});
pollreq.send();