import { Map, fromJS } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  return Map(fromJS(page1)).mergeDeep(Map(fromJS(page2)));
}

export { mergeDeeplyElements };
