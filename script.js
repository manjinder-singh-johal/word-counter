let input;

const getResult = () => {
    input = document.getElementById('input').value;
    const wordCount = input.split(' ').length;
    document.getElementById('output').innerHTML = `Word Count: ${wordCount}`;
}

const reset = () => {
    document.getElementById('output').innerHTML = '';
    document.getElementById('input').value = '';
}
