var Condition = function(id) {

	var _self = this

	var _model = new ConditionModel(_self, id)

	var _view = new ConditionView(_self)

	this.display = function() {
		return _view.display(_model)
	}

	// Bind model functions
	var keys = Object.keys(_model)
	for (var n = 0; n < keys.length; n++) {
		eval('_self.' + keys[n] + ' = _model.' + keys[n])
	}

}
var ConditionModel = function(controller, id) {

	var _self = this

	var _id = id

	var _ref_params = new RefParams()

	var _virtual_device = null

	/**
	 * Set a virtual device, e.g. Timer
	 * 
	 * @param device
	 *            object
	 */
	this.setVirtualDevice = function(obj) {
		if (obj instanceof VirtualDevice) {
			_virtual_device = obj
			return true
		}
		return false
	}

	/**
	 * Removes virtual device
	 */
	this.removeVirtualDevice = function() {
		if (_virtual_device != null) {
			delete _virtual_device
			_virtual_device = null
			return true
		}
		return false
	}

	/**
	 * Get virtual device object
	 * 
	 * @return device of type "VirtualDevice"
	 */
	this.getVirtualDevice = function() {
		return _virtual_device
	}
	/**
	 * Return ID
	 * @return ID 
	 */
	this.getID = function(){
		return _id
	}
	/**
	 * Return the parameter object of device.
	 * 
	 * @return parameter object
	 */
	this.getRefParamObj = function() {
		return _ref_params
	}

	/**
	 * Build JSON tree
	 * 
	 * @return JSON object
	 */
	this.toJSON = function() {
		var tmp = {}
		var s = _ref_params.getRefParams()
		if (s) {
			tmp['SENSOR'] = _id
			tmp['REF_PARAMS'] = _ref_params.toJSON()
			if (_virtual_device != null)
				tmp['VDEV'] = _virtual_device.toJSON()
		}
		return tmp
	}

}

var ConditionView = function(controller) {

	var _self = this

	var _controller = controller

	this.display = function(model) {
		return '' // TODO:
	}

}
