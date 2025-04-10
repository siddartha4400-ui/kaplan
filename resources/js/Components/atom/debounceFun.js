
var filterTimeout;
export default function  debounceFun (func,text = '' ,timeout=1000) {
  if(filterTimeout) clearTimeout(filterTimeout);
  filterTimeout = setTimeout(() => {
    func(text)
  }, timeout)

};
