
export default {
getCaptures: (manager, element) => {
    let request = {
      endpoint: 'http://localhost:8082/api/v1/spots/:spotId/captures',
      method: 'get',      
      pathParameters: {
        spotId: element.spotId
      },
      transform: response => (response ? response.elements : response)
    };
    return new Promise((resolve, reject) => {
      manager.call(request, resolve, reject);
    });
  }
}