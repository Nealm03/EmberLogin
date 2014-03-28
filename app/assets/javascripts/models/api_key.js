// for more details see: http://emberjs.com/guides/models/defining-models/

Auth.ApiKey = DS.Model.extend({
  user: DS.belongsTo('Auth.User'),
  accessToken: DS.attr('string'),
  scope: DS.attr('string'),
  expiredAt: DS.attr('date'),
  createdAt: DS.attr('date')
});
