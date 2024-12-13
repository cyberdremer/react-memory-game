
import uniqid from 'uniqid'


export function JSONConveter(json) {
  return json.map((cat) => ({
    imageUrl: cat.url,
    text: cat.breeds[0].name,
    id: uniqid()
  }));
}
