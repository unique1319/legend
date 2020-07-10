/**
 * @author wrh
 * @create 2018-01-13 10:11
 **/


;(function ($, window, document, undefined) {

    var Legend = function (parent, options, _callback) {
        this.$parent = parent;
        this.parentId = parent.attr('id');

        this.defaults = {
            'imgCell_width': 30,
            'imgCell_height': 30,
            'labelCell_width': 70,
            'labelCell_padding_left': 12,
            'legend': []
        };
        this.options = $.extend({}, this.defaults, options);
        this.legend_nums = this.options.legend.length;
        this._callback = _callback;
    }

    Legend.prototype = {

        _init: function () {
            this._initContainer();
            this._createLegendDiv();
        },

        _initContainer: function () {
            this.$parent.css({
                'width': this.options.imgCell_width + this.options.labelCell_width
            })
        },

        _createLegendDiv: function () {
            var dom_table = $('<table></table>');

            for (var i = 0; i < this.legend_nums; i++) {

                var lege = this.options.legend[i];
                var background = lege.background;
                var label = lege.label;

                var dom_tr = $('<tr></tr>');
                var dom_img_td = $('<td></td>');
                var dom_img_td_div = $('<div></div>');
                var dom_label_td = $('<td></td>');
                var dom_label_td_span = $('<span></span>');

                dom_img_td_div.css({
                    'width': this.options.imgCell_width,
                    'height': this.options.imgCell_height,
                    'background': background
                });
                dom_img_td.append(dom_img_td_div);
                dom_label_td_span.append(label);
                dom_label_td.css({
                    'width': this.options.labelCell_width,
                    'padding-left': this.options.labelCell_padding_left
                })
                dom_label_td.append(dom_label_td_span);
                dom_tr.append(dom_img_td);
                dom_tr.append(dom_label_td);
                dom_table.append(dom_tr);
            }
            this.$parent.append(dom_table);
        }

    }


    $.fn.Legend = function (options, _callback) {

        return this.each(function () {
            var legend = new Legend($(this), options, _callback);
            legend._init();
        })
    }


})(jQuery, window, document);