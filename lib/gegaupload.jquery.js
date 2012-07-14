/**
 * jQuery Upload Plugin 1.0.0.0
 *
 * Copyright (c) 2012 Vitaliy Kanev (http://xitlab.com)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($){
  
  //Опции плагина
  var o;  
  
  //Методы плагина
  var methods = {
     test: function(){alert(o.padding);},
     init : function( options ) 
     { 
        //Значения по умолчанию:
        var defaults                        = 
        {
                padding: 20,
                mouseOverColor : '#000000',
                mouseOutColor : '#ffffff'
        }
				
        var option                          =                                   $.extend(defaults, options);

        return this.each(function() 
        {
            o                               =                                   option;
        });
     }     
  };
 
  //Сам плагин
  $.fn.gegaupload = function( method ) 
  {
      //Обрабатываем опции
      methods.init.apply( this, arguments );
      
      //Вызываем функцию
      methods.test.apply( this, arguments );
      return true;
  };
 
}(jQuery));