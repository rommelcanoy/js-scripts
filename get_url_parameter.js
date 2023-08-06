function getURLParameter(parameterName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parameterName);
}

const parameterValue = getURLParameter('paramName'); // Replace 'paramName' with the actual parameter name you're looking for
if (parameterValue) {
  console.log('Parameter value:', parameterValue);
} else {
  console.log('Parameter not found.');
}
