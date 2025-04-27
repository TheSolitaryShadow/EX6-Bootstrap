function showDescription() {
    document.getElementById('description').classList.remove('d-none');
    document.getElementById('description').classList.add('d-block');
    document.getElementById('cast').classList.remove('d-block');
    document.getElementById('cast').classList.add('d-none');
    document.getElementById('trivia').classList.remove('d-block');
    document.getElementById('trivia').classList.add('d-none');
}

function showCast() {
    document.getElementById('cast').classList.add('d-block');
    document.getElementById('description').classList.remove('d-block');
    document.getElementById('trivia').classList.remove('d-block');
    document.getElementById('cast').classList.remove('d-none');
    document.getElementById('description').classList.add('d-none');
    document.getElementById('trivia').classList.add('d-none');
}

function showTrivia() {
    document.getElementById('trivia').classList.add('d-block');
    document.getElementById('description').classList.remove('d-block');
    document.getElementById('cast').classList.remove('d-block');
    document.getElementById('trivia').classList.remove('d-none');
    document.getElementById('description').classList.add('d-none');
    document.getElementById('cast').classList.add('d-none');
}