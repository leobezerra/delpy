var BLOCKLY_COMMIT = 'f86b2dac';
var ACORN_COMMIT = 'e113e87a';

requirejs.config({
  paths: {
    'blockly': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/blockly_compressed',
    'blockly/blocks': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/blocks_compressed',
    'blockly/code/python': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/python_compressed',
    'blockly/code/javascript': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/javascript_compressed',

    'blockly/msg': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/msg/js/en',
    'blockly/code/msg': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/demos/code/msg/en',

    'acorn_interpreter': 'https://cdn.rawgit.com/NeilFraser/JS-Interpreter/' + ACORN_COMMIT + '/acorn_interpreter',

    'highlightjs': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min'
  },
  shim: {
    'blockly': {
      exports: 'Blockly'
    },
    'blockly/blocks': {
      deps: ['blockly']
    },
    'blockly/code/python': {
      deps: ['blockly']
    },
    'blockly/code/javascript': {
      deps: ['blockly']
    },
    'blockly/msg': {
      deps: ['blockly']
    },
    'blockly/code/msg': {
      exports: 'MSG',
      deps: ['blockly']
    },

    'highlightjs': {
      exports: 'hljs'
    },
  }
});

define(function(require) {
  var delpy_blockly = require('./delpy_blockly');
  var lang = require('./lang');
  require('blockly/msg');
  require('blockly/code/msg');

  function load_translation(lang_key) {
    if(lang.name[lang_key] === undefined)
      lang_key = "en";

    requirejs.undef('blockly/msg');
    requirejs.undef('blockly/code/msg');
    requirejs.config({
      paths: {
        'blockly/msg': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/msg/js/' + lang_key,
        'blockly/code/msg': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/demos/code/msg/' + lang_key,
      }
    });

    require(['blockly', 'blockly/code/msg', 'blockly/msg'], function(Blockly, CodeMsg) {
      // Add additional translations
      for(var msg_key in CodeMsg) {
        Blockly.Msg[msg_key.toUpperCase()] = CodeMsg[msg_key];
      }
	  Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "";
	  if (lang_key == "pt-br") {
		Blockly.Msg["CONTROLS_FOR_TITLE"] = "contar com %1 de %2 até %3 com passo %4";
		Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "repita até que";
		Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "repita enquanto";
		Blockly.Msg["LOGIC_OPERATION_AND"] = "e";
		Blockly.Msg["LOGIC_OPERATION_OR"] = "ou";
		Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "falso";
		Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "verdadeiro";
		Blockly.Msg["CONTROLS_IF_DO"] = "";
		Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "número aleatório entre 0.0 e 1.0";
		Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "somatório da lista";
		Blockly.Msg["CATMATH"] = "Números";
		Blockly.Msg["CATTEXT"] = "Textos";
		Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "criar texto unindo";
		Blockly.Msg["TEXT_APPEND_TITLE"] = "anexar %2 a %1";
		Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "encontre a primeira ocorrência do texto";
		Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "encontre a última ocorrência do texto";
		Blockly.Msg["TEXT_INDEXOF_TITLE"] = "%2 %3 em %1";
	  }
      delpy_blockly.inject_blockly(true);
    });
  }

  function init_menu() {
    // Add a widgets menubar item, before help.
    var langMenu = $('<li/>').addClass('dropdown')
      .insertBefore($('#help_menu').closest('li.dropdown'))
      .append($('<a href="#"/>').attr('data-toggle', 'dropdown').addClass('dropdown-toggle')
        .text('Blockly Language'));

    var langSubMenu = $('<ul id="lang-submenu">').addClass('dropdown-menu').appendTo(langMenu);

    for(var name in lang.name) {
      langSubMenu.append(
        $('<li/>').append($('<a href="#"/>').text(lang.name[name])
          .click((function(key) {
            return function() {
              load_translation(key);
            }
          })(name))));
    }
  }

  function load_ipython_extension() {
    load_translation(navigator.language);
    init_menu();
  }

  return {
    load_ipython_extension: load_ipython_extension,
    inject_blockly: delpy_blockly.inject_blockly
  };
});
