/**
 * Created by Dass on 19.11.2017.
 */
function get_random_number(quotes_length) {
  return Math.floor(Math.random() * quotes_length);
}

let json_quotes = JSON.parse(document.getElementById('quotes_json').textContent);
let phrase_div = document.querySelector('.phrase');
let signature_div = document.querySelector('.signature')


const number = get_random_number(json_quotes.length);
phrase_div.textContent = json_quotes[number]['phrase'];
signature_div.textContent = json_quotes[number]['signature'];

