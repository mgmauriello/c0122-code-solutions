/* exported titleCase
create whole string to lowercase
separate each word in string to own string
uppercase each word, capitalize first char by using slice
join back together
hard code in, the, of,
*/
function titleCase(title) {
  title = title.toLowerCase();
  title = title.split(' ');

  for (var i = 0; i < title.length; i++) {
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
  }
  if (title === 'javascript') {
    return 'JavaScript';
  }
  if (title === 'api') {
    return 'API';
  }
  return title.join(' ');
}
