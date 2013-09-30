/*
* jQuery tabs
* http://carlosrberto.github.com/jquery-tabs/
*
* Copyright (c) 2013 Carlos Roberto Gomes Junior
* http://carlosroberto.name/
*
* Licensed under a Creative Commons Attribution 3.0 License
* http://creativecommons.org/licenses/by-sa/3.0/
*
* Version: 0.1
*/

(function() {
    var defaults = {
        navEl: '.tabs-nav',
        panelEl: '.tabs-panels',
        index: 0
    };

    var Tabs = function(el, options) {
        this.el = $(el);
        this.options = $.extend({}, defaults, options);
        this.nav = this.el.find(this.options.navEl);
        this.panels = this.el.find(this.options.panelEl);
        this.showTab(this.options.index);
        this._initEvents();
    };

    Tabs.prototype = {
        _initEvents: function() {
            this.nav.on('click', '> *', $.proxy(function(event) {
                event.preventDefault();
                var el = $(event.currentTarget), index = el.index();
                this.showTab(index);
            }, this));
        },

        showTab: function( index ) {
            this.nav.find('> *').removeClass('active').eq(index).addClass('active');
            this.panels.find('> *').hide().eq(index).show();
            this.el.trigger('change.tabs', [index]);
        }
    };

    $.fn.tabs = function( method ) {
        var args = arguments;

        return this.each(function() {

            if ( !$.data(this, 'tabs') ) {
                $.data(this, 'tabs', new Tabs(this, method));
                return;
            }

            var api = $.data(this, 'tabs');

            if ( typeof method === 'string' && method.charAt(0) !== '_' && api[ method ] ) {
                api[ method ].apply( api, Array.prototype.slice.call( args, 1 ) );
            } else {
                $.error( 'Method ' +  method + ' does not exist on jQuery.tabs' );
            }
        });
    };
})();
