type RouteData = {
  route:  string;
  rule:   string;
  value:  string;
};

const getRouteData = (url: string): RouteData => {

  let URL_SPLITTED = url.split('/');

  URL_SPLITTED.shift();

  return {
    route:  URL_SPLITTED[0],
    rule:   URL_SPLITTED[1],
    value:  URL_SPLITTED[2],
  }
}

export {
  RouteData,
  getRouteData
}
