class ModelUtil {
  static getDefaultOptions(defaultOptions = {}) {
    const options = {};

    // Simple clone the value
    Object.entries(defaultOptions).forEach(([key, value]) => {
      if (value === null || typeof value === 'string') {
        options[key] = value;
      } else if (Array.isArray(value)) {
        options[key] = [];
      } else if (typeof value === 'object'){
        options[key] = {};
      } else {
        options[key] = value;
      }
    });

    return options;
  }
}

export default ModelUtil;
