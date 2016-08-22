(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/18.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var NavbarActions = (function () {
    function NavbarActions() {
        _classCallCheck(this, NavbarActions);

        this.generateActions('getUser');
    }

    _createClass(NavbarActions, [{
        key: 'getCurUser',
        value: function getCurUser() {
            var _this = this;

            $.get('/api/user/login').done(function (data) {
                _this.actions.getUser(data);
            });
        }
    }]);

    return NavbarActions;
})();

exports['default'] = _alt2['default'].createActions(NavbarActions);
module.exports = exports['default'];

},{"../alt":3}],2:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/22.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var SiderbarActions = (function () {
    function SiderbarActions() {
        _classCallCheck(this, SiderbarActions);

        this.generateActions('getMenu');
    }

    _createClass(SiderbarActions, [{
        key: 'getCurMenu',
        value: function getCurMenu() {
            var _this = this;

            $.get('/api/menu/load').done(function (data) {
                _this.actions.getMenu(data);
            });
        }
    }]);

    return SiderbarActions;
})();

exports['default'] = _alt2['default'].createActions(SiderbarActions);
module.exports = exports['default'];

},{"../alt":3}],3:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/18.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],4:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/18.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Siderbar = require('./Siderbar');

var _Siderbar2 = _interopRequireDefault(_Siderbar);

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'wrapper' },
                _react2['default'].createElement(_Navbar2['default'], null),
                _react2['default'].createElement(_Siderbar2['default'], null),
                _react2['default'].createElement(_reactRouter.RouteHandler, null)
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Navbar":6,"./Siderbar":7,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/22.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'content-wrapper', style: { minHeight: 1126 + 'px' } },
                _react2['default'].createElement(
                    'section',
                    { className: 'content-header' },
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Blank page',
                        _react2['default'].createElement(
                            'small',
                            null,
                            'it all starts here'
                        )
                    ),
                    _react2['default'].createElement(
                        'ol',
                        { className: 'breadcrumb' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                'a',
                                { href: '#' },
                                _react2['default'].createElement('i', { className: 'fa fa-dashboard' }),
                                ' Home'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                'a',
                                { href: '#' },
                                'Examples'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'active' },
                            'Blank page'
                        )
                    )
                ),
                _react2['default'].createElement(
                    'section',
                    { className: 'content' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'box' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'box-header with-border' },
                            _react2['default'].createElement(
                                'h3',
                                { className: 'box-title' },
                                'Title'
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'box-tools pull-right' },
                                _react2['default'].createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-box-tool', 'data-widget': 'collapse', 'data-toggle': 'tooltip', title: 'Collapse' },
                                    _react2['default'].createElement('i', { className: 'fa fa-minus' })
                                ),
                                _react2['default'].createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-box-tool', 'data-widget': 'remove', 'data-toggle': 'tooltip', title: 'Remove' },
                                    _react2['default'].createElement('i', { className: 'fa fa-times' })
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'box-body' },
                            'Start creating your amazing application!'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'box-footer' },
                            'Footer'
                        )
                    )
                )
            );
        }
    }]);

    return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"react":"react"}],6:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/18.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesNavbarStore = require('../stores/NavbarStore');

var _storesNavbarStore2 = _interopRequireDefault(_storesNavbarStore);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var Navbar = (function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);
        this.state = _storesNavbarStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Navbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesNavbarStore2['default'].listen(this.onChange);
            _actionsNavbarActions2['default'].getCurUser();
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.state.user;
            return _react2['default'].createElement(
                'header',
                { className: 'main-header' },
                _react2['default'].createElement(
                    'a',
                    { href: '#', className: 'logo' },
                    _react2['default'].createElement(
                        'span',
                        { className: 'logo-mini' },
                        _react2['default'].createElement(
                            'b',
                            null,
                            'A'
                        ),
                        'LT'
                    ),
                    _react2['default'].createElement(
                        'span',
                        { className: 'logo-lg' },
                        _react2['default'].createElement(
                            'b',
                            null,
                            'Admin'
                        ),
                        'LTE'
                    )
                ),
                _react2['default'].createElement(
                    'nav',
                    { className: 'navbar navbar-static-top', role: 'navigation' },
                    _react2['default'].createElement(
                        'a',
                        { href: '#', className: 'sidebar-toggle', 'data-toggle': 'offcanvas', role: 'button' },
                        _react2['default'].createElement(
                            'span',
                            { className: 'sr-only' },
                            'Toggle navigation'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'navbar-custom-menu' },
                        _react2['default'].createElement(
                            'ul',
                            { className: 'nav navbar-nav' },
                            _react2['default'].createElement(
                                'li',
                                { className: 'dropdown user user-menu' },
                                _react2['default'].createElement(
                                    'a',
                                    { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown', 'aria-expanded': 'false' },
                                    _react2['default'].createElement('img', { src: '/imgs/guest.jpg', className: 'user-image', alt: 'User Image' }),
                                    _react2['default'].createElement(
                                        'span',
                                        { className: 'hidden-xs' },
                                        user.name
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '#', 'data-toggle': 'control-sidebar' },
                                    _react2['default'].createElement('i', { className: 'fa fa-gears' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
})(_react2['default'].Component);

exports['default'] = Navbar;
module.exports = exports['default'];

},{"../actions/NavbarActions":1,"../stores/NavbarStore":10,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StoresSiderbarStore = require('../Stores/SiderbarStore');

var _StoresSiderbarStore2 = _interopRequireDefault(_StoresSiderbarStore);

var _actionsSiderbarActions = require('../actions/SiderbarActions');

var _actionsSiderbarActions2 = _interopRequireDefault(_actionsSiderbarActions);

var Siderbar = (function (_React$Component) {
    _inherits(Siderbar, _React$Component);

    function Siderbar(props) {
        _classCallCheck(this, Siderbar);

        _get(Object.getPrototypeOf(Siderbar.prototype), 'constructor', this).call(this, props);
        this.state = _StoresSiderbarStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Siderbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _StoresSiderbarStore2['default'].listen(this.onChange);
            _actionsSiderbarActions2['default'].getCurMenu();
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var menuJson = this.state.menu;
            var menu = menuJson.map(function (item, index) {
                return _react2['default'].createElement(
                    'li',
                    { key: index },
                    _react2['default'].createElement(
                        'a',
                        { href: "#Device?opr=" + item.opr },
                        _react2['default'].createElement('i', { className: 'fa fa-lemon-o' }),
                        _react2['default'].createElement(
                            'span',
                            null,
                            item.text
                        )
                    )
                );
            });
            return _react2['default'].createElement(
                'aside',
                { className: 'main-sidebar' },
                _react2['default'].createElement(
                    'section',
                    { className: 'sidebar' },
                    _react2['default'].createElement(
                        'ul',
                        { className: 'sidebar-menu' },
                        _react2['default'].createElement(
                            'li',
                            { className: 'header' },
                            'ControlPanel'
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'treeview' },
                            _react2['default'].createElement(
                                'a',
                                { href: '#' },
                                _react2['default'].createElement('i', { className: 'fa fa-dashboard' }),
                                ' ',
                                _react2['default'].createElement(
                                    'span',
                                    null,
                                    'Dashboard'
                                ),
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'pull-right-container' },
                                    _react2['default'].createElement('i', { className: 'fa fa-angle-left pull-right' })
                                )
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'treeview-menu', style: { display: 'block' } },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        'a',
                                        { href: '../../index.html' },
                                        _react2['default'].createElement('i', { className: 'fa fa-circle-o' }),
                                        ' Dashboard v1'
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        'a',
                                        { href: '../../index2.html' },
                                        _react2['default'].createElement('i', { className: 'fa fa-circle-o' }),
                                        ' Dashboard v2'
                                    )
                                )
                            )
                        ),
                        menu
                    )
                )
            );
        }
    }]);

    return Siderbar;
})(_react2['default'].Component);

exports['default'] = Siderbar;
module.exports = exports['default'];

},{"../Stores/SiderbarStore":11,"../actions/SiderbarActions":2,"react":"react"}],8:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/18.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":9,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/18.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { handler: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] })
);
module.exports = exports['default'];

},{"./components/App":4,"./components/Home":5,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/18.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var NavbarStore = (function () {
    function NavbarStore() {
        _classCallCheck(this, NavbarStore);

        this.bindActions(_actionsNavbarActions2['default']);
        this.user = "";
    }

    _createClass(NavbarStore, [{
        key: 'onGetUser',
        value: function onGetUser(data) {
            this.user = data;
        }
    }]);

    return NavbarStore;
})();

exports['default'] = _alt2['default'].createStore(NavbarStore);
module.exports = exports['default'];

},{"../actions/NavbarActions":1,"../alt":3}],11:[function(require,module,exports){
/**
 * Created by v-yunjia on 2016/8/22.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _altJs = require('../alt.js');

var _altJs2 = _interopRequireDefault(_altJs);

var _actionsSiderbarActions = require('../actions/SiderbarActions');

var _actionsSiderbarActions2 = _interopRequireDefault(_actionsSiderbarActions);

var SiderbarStore = (function () {
    function SiderbarStore() {
        _classCallCheck(this, SiderbarStore);

        this.bindActions(_actionsSiderbarActions2['default']);
        this.menu = [];
    }

    _createClass(SiderbarStore, [{
        key: 'onGetMenu',
        value: function onGetMenu(data) {
            this.menu.push(data);
        }
    }]);

    return SiderbarStore;
})();

exports['default'] = _altJs2['default'].createStore(SiderbarStore);
module.exports = exports['default'];

},{"../actions/SiderbarActions":2,"../alt.js":3}]},{},[8]);
