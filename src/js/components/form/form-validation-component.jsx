import React from 'react';
import Joi from 'joi';
import ObjectPath from 'object-path';
import CloneDeep from 'lodash.clonedeep';

class FormValidationComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  // 需要重写此方法
  validationSchema() {
    return {};
  }

  validationOptions() {
    return {
      abortEarly: false,
      allowUnknown: true
    };
  }
  // 如果从特殊的对象字段中验证，可以重写此方法
  validationValue() {
    return this.state;
  }

  validate(path, callback) {
    const validationValue = CloneDeep(this.validationValue());

    if (typeof validationValue === 'object' && validationValue.hasOwnProperty('validation')) {
      delete validationValue.validation;
    }
    let validationSchema = this.validationSchema();
    let validationOptions = this.validationOptions();

    Joi.validate(validationValue, validationSchema, validationOptions, (error, value) => {
      let validation = ObjectPath.get(this.state, 'validation', {
        dirty: []
      });

      validation.errors = (error && error.details) ? error.details : [];
      validation.value = value;

      let pushDirty = (p, dirtyArr = []) => {
        if (p && dirtyArr.indexOf(p) === -1) {
          dirtyArr.push(p);
        }
        let pArr = p.split('.');

        if (pArr.length > 1) {
          pArr.splice(-1, 1);
          pushDirty(pArr.join('.'), dirtyArr);
        }
      };

      pushDirty(path, validation.dirty);
      if (callback) {
        this.setState({
          validation: validation
        }, callback);
      } else {
        this.setState({
          validation: validation
        });
      }
    });
  }

  handleValidation (path) {
    return (e) => {
      e.preventDefault();
      this.validate(path);
    };
  }

  isValid(path){
    let errors = ObjectPath.get(this.state, 'validation.errors', []);

    if (path) {
      errors = errors.filter(error => {
        return (error.path || []).filter(it => it && (it === path || it.startsWith(`${path}.`)) ).length;
      });
    }

    return errors.length === 0;
  }

  isDirty (path) {
    let dirty = ObjectPath.get(this.state, 'validation.dirty', []);

    if (path) {
      dirty = dirty.filter(d => d === path);
    }

    return dirty.length !== 0;
  }

  getValidationMessages (path) {
    let errors = ObjectPath.get(this.state, 'validation.errors', []);

    if (path) {
      errors = errors.filter(error => {
        return (error.path || []).filter(it => it && (it === path || it.startsWith(`${path}.`)) ).length;
      });
    }

    return errors;
  }

  getValidationValue() {
    return CloneDeep(ObjectPath.get(this.state, 'validation.value'));
  }

  resetValidation (callback) {
    if (callback) {
      this.setState({
        validation: {
          dirty: [],
          errors: [],
          value: null
        }
      }, callback);
    } else {
      this.setState({
        validation: {
          dirty: [],
          errors: [],
          value: null
        }
      });
    }
  }

  getValidationClassName (path, successClass = 'has-success', errorClass = 'has-error', defaultClass = 'form-group') {
    let className = [defaultClass];

    if (this.isValid(path) && this.isDirty(path)) {
      className.push(successClass);
    }
    if (!this.isValid(path) && this.isDirty(path)) {
      className.push(errorClass);
    }

    return className.join(' ');
  }

  renderValidationMessages (path, className = 'help-block', onlyFirst = true) {
    let errors = this.getValidationMessages(path);

    if (errors.length !== 0 && this.isDirty(path)) {
      errors = onlyFirst ? [errors[0]] : errors;
      let html = errors.map(function (error, index) {
        return (<div key={error.path + index}>{error.message}</div>);
      });

      return (<div className={className}>{html}</div>);
    }

    return null;
  }

  updateState (newState, callback) {
    let state = this.state;
    let stateModel = ObjectPath(state);

    for (let property in newState) {
      if (newState.hasOwnProperty(property)) {
        stateModel.set(property, newState[property]);
      }
    }
    if (callback) {
      this.setState(state, callback);
    } else {
      this.setState(state);
    }
  }
}

export default FormValidationComponent;
