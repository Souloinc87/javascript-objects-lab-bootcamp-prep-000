var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1, prop2: 2}
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object.assign({}, {prop2: 2})
return object
}
