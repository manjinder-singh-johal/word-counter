let input;

const getResult = () => {
    input = document.getElementById('input').value;
    const wordCount = input.split(' ').length;
    document.getElementById('output').innerHTML = `Word Count: ${wordCount}`;
}