import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  link: DS.attr(),
});
