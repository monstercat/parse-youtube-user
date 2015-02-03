
module.exports = function(user) {
 var m = user.match(/^\s*(?:(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com)?\/?(?:user\/|channel\/|c\/)?([^\/\?]+)/i);
 return m && m[1] || user;
}
