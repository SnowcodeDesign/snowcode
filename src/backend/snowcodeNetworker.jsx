import preval from 'preval.macro';
import jquery from 'jquery';

class SnowcodeNetworker {
  static baseURL() {
    const url = preval`module.exports = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : 'https://snowcode-backend.herokuapp.com'`;
    return url;
  }

  log(msg) {
    if (preval`module.exports = process.env.REACT_APP_BASE_URL != null`) {
      console.log(`[SnowcodeNetworker-DEBUG] ${msg}`);
    }
  }

  post(url, body, headers={}) {
    return new Promise((resolve, reject) => {
      this.log(`sending off POST url ${url} body ${JSON.stringify(body)}`);
      jquery.ajax({
        method: 'POST',
        url: url,
        data: JSON.stringify(body),
        type: 'jsonp',
        headers: headers,
        success: (response) => {
          this.log(`success from POST url ${url} body ${JSON.stringify(body)} response ${JSON.stringify(response)}`);

          if (response && response.data && response.success) {
            resolve(response);
          } else {
            reject(response);
          }
        },
        error: (error) => {
          this.log(`failure from POST url ${url} body ${JSON.stringify(body)} error ${JSON.stringify(error)}`);
          reject(error);
        },
      });
    });
  }

  buyNow({ email, desc, budget }) {
    const baseURL = SnowcodeNetworker.baseURL();
    const reqURL = baseURL + '/buynow';
    const requestBody = {
      email: email,
      desc: desc,
      budget: budget,
    };

    return this.post(reqURL, requestBody);
  }
}

export default SnowcodeNetworker;
